// app/api/send-consultation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Lấy API key từ environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL_ADDRESS;
const fromEmail = process.env.FROM_EMAIL_ADDRESS;

// Định nghĩa schema để validate dữ liệu nhận được (tương tự client-side)
const formSchema = z.object({
  name: z.string().min(1, "Họ tên là bắt buộc"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(1, "Số điện thoại là bắt buộc"),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  if (!toEmail || !fromEmail) {
    console.error('Missing TO_EMAIL_ADDRESS or FROM_EMAIL_ADDRESS in .env.local');
    return NextResponse.json({ error: 'Lỗi cấu hình máy chủ.' }, { status: 500 });
  }

  try {
    const body = await req.json();
    
    // Validate dữ liệu nhận được
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Dữ liệu không hợp lệ.', details: validationResult.error.flatten() }, { status: 400 });
    }

    const { name, email, phone, message } = validationResult.data;

    const { data, error } = await resend.emails.send({
      from: `Tư vấn từ ${name} <${fromEmail}>`, // Ví dụ: "Tư vấn từ [Tên Khách] <noreply@yourdomain.com>"
      to: [toEmail],
      subject: `Yêu cầu tư vấn mới từ: ${name}`,
      html: `
        <h1>Yêu cầu tư vấn mới</h1>
        <p><strong>Họ và tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Nội dung:</strong></p>
        <p>${message || 'Không có nội dung.'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Không thể gửi email.', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email đã được gửi thành công!', emailId: data?.id }, { status: 200 });
  } catch (e: any) {
    console.error('API error:', e);
    return NextResponse.json({ error: 'Lỗi không xác định từ server.', details: e.message }, { status: 500 });
  }
}