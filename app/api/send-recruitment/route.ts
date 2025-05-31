// app/api/send-recruitment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.TO_EMAIL_ADDRESS;
const fromEmail = process.env.FROM_EMAIL_ADDRESS;

if (!resendApiKey) {
  console.error('Thiếu RESEND_API_KEY trong .env.local');
  // Không trả về lỗi chi tiết cho client ở đây vì lý do bảo mật, chỉ log server-side
}
const resend = new Resend(resendApiKey);


// Schema để validate dữ liệu nhận được từ form tuyển dụng
// CV sẽ được xử lý riêng vì nó là file
const recruitmentFormSchema = z.object({
  name: z.string().min(1, "Họ tên là bắt buộc"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(1, "Số điện thoại là bắt buộc"),
  position: z.string().min(1, "Vị trí ứng tuyển là bắt buộc"),
  message: z.string().min(10, "Thư ngỏ phải có ít nhất 10 ký tự"),
});

export async function POST(req: NextRequest) {
  if (!toEmail || !fromEmail) {
    console.error('Thiếu TO_EMAIL_ADDRESS hoặc FROM_EMAIL_ADDRESS trong .env.local');
    return NextResponse.json({ error: 'Lỗi cấu hình máy chủ không thể gửi email.' }, { status: 500 });
  }
  if (!resendApiKey) {
     return NextResponse.json({ error: 'Lỗi cấu hình dịch vụ email máy chủ.' }, { status: 500 });
  }

  try {
    const formData = await req.formData();

    const values = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      message: formData.get('message') as string,
    };

    const cvFile = formData.get('cv') as File | null;

    // Validate các trường text
    const validationResult = recruitmentFormSchema.safeParse(values);
    if (!validationResult.success) {
      // Lấy lỗi đầu tiên của mỗi trường để hiển thị
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const errorMessages = Object.values(fieldErrors).map(errors => errors?.[0]).filter(Boolean).join(' ');
      return NextResponse.json({ error: 'Dữ liệu không hợp lệ.', details: errorMessages || 'Vui lòng kiểm tra lại thông tin.' }, { status: 400 });
    }

    if (!cvFile || cvFile.size === 0) {
      return NextResponse.json({ error: 'CV là bắt buộc và không được để trống.' }, { status: 400 });
    }
    // Kiểm tra kích thước file (ví dụ: tối đa 5MB)
    if (cvFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: 'Kích thước file CV không được vượt quá 5MB.' }, { status: 400 });
    }
    // Kiểm tra loại file
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(cvFile.type)) {
        return NextResponse.json({ error: 'Định dạng file CV không hợp lệ. Chỉ chấp nhận .pdf, .doc, .docx.' }, { status: 400 });
    }


    // Chuyển file CV thành Buffer để đính kèm
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    const { name, email, phone, position, message } = validationResult.data;

    const emailHtml = `
      <h1>Hồ sơ ứng tuyển mới</h1>
      <p><strong>Vị trí ứng tuyển:</strong> ${position}</p>
      <hr>
      <h2>Thông tin ứng viên:</h2>
      <p><strong>Họ và tên:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Số điện thoại:</strong> <span class="math-inline">\{phone\}</p\>
      <hr>
      <h2>Thư ngỏ:</h2>
        <p>{message.replace(/\n/g, '<br>')}</p> // Thay thế ký tự xuống dòng bằng <br>
        `;
        const { data, error } = await resend.emails.send({
      from: `Ứng viên <span class="math-inline">\{name\} <</span>{fromEmail}>`,
      to: [toEmail], // Email của bộ phận tuyển dụng
      subject: `Ứng tuyển vị trí: ${position} - ${name}`,
      html: emailHtml,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
        },
      ],
      replyTo: email, // Giúp bạn trả lời trực tiếp cho ứng viên từ email client
    });

    if (error) {
      console.error('Lỗi khi gửi email qua Resend:', error);
      return NextResponse.json({ error: 'Không thể gửi email ứng tuyển. Vui lòng thử lại sau.', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Hồ sơ của bạn đã được gửi thành công!', emailId: data?.id }, { status: 200 });
  } catch (e: any) {
    console.error('Lỗi không xác định trong API:', e);
    return NextResponse.json({ error: 'Đã xảy ra lỗi không mong muốn từ máy chủ.', details: e.message }, { status: 500 });
  }
}