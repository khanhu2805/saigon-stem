"use client";

import { useState, useEffect } from "react"; // Thêm useEffect
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger, // Sẽ không dùng DialogTrigger trực tiếp nữa
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_CV_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Vui lòng nhập họ tên của bạn (ít nhất 2 ký tự).",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  phone: z.string().min(10, { // Giả sử SĐT Việt Nam có ít nhất 10 số
    message: "Vui lòng nhập số điện thoại hợp lệ (ít nhất 10 số).",
  }).regex(/^[0-9]+$/, "Số điện thoại chỉ được chứa chữ số."),
  position: z.string().min(1, {
    message: "Lỗi: Vị trí ứng tuyển không được để trống.", // Lỗi này không nên xảy ra nếu logic đúng
  }),
  message: z.string().min(10, {
    message: "Vui lòng nhập thư ngỏ (tối thiểu 10 ký tự).",
  }),
  cv: z
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, "Vui lòng tải lên CV của bạn.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Kích thước file CV tối đa là 5MB.`)
    .refine(
      (files) => ACCEPTED_CV_TYPES.includes(files?.[0]?.type),
      "File CV không hợp lệ. Chỉ chấp nhận định dạng .pdf, .doc, .docx."
    ),
});

type RecruitmentFormValues = z.infer<typeof formSchema>;

export default function RecruitmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<RecruitmentFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Validate khi có thay đổi
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      cv: undefined,
    },
  });

  // Đồng bộ selectedPosition vào form field 'position' khi dialog mở
  useEffect(() => {
    if (isDialogOpen && selectedPosition) {
      form.setValue("position", selectedPosition, { shouldValidate: true });
    }
    // Reset form khi dialog đóng, trừ trường position có thể giữ lại nếu cần
    if (!isDialogOpen) {
        // form.reset(); // Có thể cân nhắc reset hoàn toàn hoặc chỉ một số trường
    }
  }, [isDialogOpen, selectedPosition, form]);


  async function onSubmit(values: RecruitmentFormValues) {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('position', values.position);
    formData.append('message', values.message);
    if (values.cv && values.cv.length > 0) {
      formData.append('cv', values.cv[0]);
    } else {
      // Trường hợp này không nên xảy ra nếu validation hoạt động đúng
      toast({
        title: "Lỗi",
        description: "Vui lòng tải lên CV của bạn.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-recruitment', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Lỗi API:", result);
        toast({
          title: "Gửi hồ sơ thất bại!",
          description: result.error || result.details || "Đã có lỗi xảy ra. Vui lòng thử lại.",
          variant: "destructive",
          duration: 7000,
        });
      } else {
        toast({
          title: "Gửi hồ sơ thành công!",
          description: "Cảm ơn bạn đã ứng tuyển. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
          duration: 7000,
        });
        form.reset();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Lỗi mạng hoặc fetch:", error);
      toast({
        title: "Lỗi Kết Nối!",
        description: "Không thể kết nối đến máy chủ. Vui lòng kiểm tra đường truyền và thử lại.",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const openDialogWithPosition = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    // Reset các trường form khi mở dialog mới, ngoại trừ position sẽ được set trong useEffect
    form.reset({
        name: "",
        email: "",
        phone: "",
        position: positionTitle, // Set ngay giá trị cho position
        message: "",
        cv: undefined,
    });
    setIsDialogOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600" // Nên thay thế ảnh này
          alt="Tuyển dụng tại Giáo Dục Sài Gòn"
          fill
          hidden // Bỏ hidden nếu muốn hiển thị ảnh thực tế
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tuyển dụng
          </h1>
          <p className="max-w-2xl text-xl italic">
            Tham gia đội ngũ của chúng tôi và cùng nhau tạo nên những giá trị
            giáo dục tích cực
          </p>
        </div>
      </section>

      {/* Why Join Us Section (Giữ nguyên) */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">
              Tại sao nên gia nhập đội ngũ của chúng tôi?
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn là nơi làm việc lý
              tưởng cho những người đam mê giáo dục và mong muốn tạo ra những
              thay đổi tích cực cho thế hệ trẻ
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#40C262]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#40C262]" ><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </div>
                <CardTitle>Phát triển chuyên môn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Cơ hội học hỏi và phát triển chuyên môn thông qua các khóa đào tạo, hội thảo và làm việc với các chuyên gia hàng đầu.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#024AAE]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#024AAE]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <CardTitle>Môi trường làm việc thân thiện</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Môi trường làm việc năng động, sáng tạo và thân thiện, nơi mọi ý kiến đều được tôn trọng và lắng nghe.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#40C262]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#40C262]"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path><path d="M15 7h6v6"></path></svg>
                </div>
                <CardTitle>Cơ hội thăng tiến</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Chính sách đánh giá công bằng và cơ hội thăng tiến rõ ràng dựa trên năng lực và đóng góp của mỗi cá nhân.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions Section (Giữ nguyên) */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">
              Vị trí đang tuyển dụng
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Khám phá các vị trí đang tuyển dụng và tìm kiếm cơ hội phù hợp với bạn
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {openPositions.map((position, index) => (
              <Card key={index} className="overflow-hidden flex flex-col"> {/* Thêm flex-col */}
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/70 to-[#40C262]/50 z-10"></div>
                  <Image
                    src={position.image || "/placeholder.svg?height=300&width=500"}
                    alt={position.title}
                    fill
                    hidden // Bỏ hidden nếu có ảnh
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{position.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {position.deadline}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <p className="line-clamp-3 text-sm text-gray-700">{position.description}</p>
                </CardContent>
                <CardFooter className="pt-3 mt-auto"> {/* Thêm mt-auto */}
                  <Button
                    className="w-full bg-[#024AAE] hover:bg-[#024AAE]/90"
                    onClick={() => openDialogWithPosition(position.title)}
                  >
                    Ứng tuyển ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog Content */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-[#024AAE]">
              Ứng tuyển vị trí: {selectedPosition}
            </DialogTitle>
            <DialogDescription>
              Vui lòng điền đầy đủ thông tin và đính kèm CV của bạn.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pt-2" // Giảm space-y, thêm pt
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ và tên <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập họ và tên của bạn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Nhập địa chỉ email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Nhập số điện thoại" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Vị trí ứng tuyển (ẩn đi vì đã được set) */}
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl><Input readOnly {...field} /></FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thư ngỏ / Giới thiệu bản thân <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Chia sẻ về kinh nghiệm và lý do bạn phù hợp với vị trí này..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cv"
                render={({ field: { onChange, value, ...rest } }) => ( // Destructure field
                  <FormItem>
                    <FormLabel>Tải lên CV (PDF, DOC, DOCX - Tối đa 5MB) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                       <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                           onChange(e.target.files); // Cập nhật FileList cho react-hook-form
                        }}
                        {...rest} // Truyền các props còn lại
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#024AAE]/10 file:text-[#024AAE] hover:file:bg-[#024AAE]/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#40C262] hover:bg-[#40C262]/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi hồ sơ..." : "Nộp Hồ Sơ"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Toaster />
    </main>
  );
}

// Sample data for open positions
const openPositions = [
  {
    title: "Giáo viên STEM",
    location: "TP. Hồ Chí Minh",
    deadline: "30/06/2025", // Cập nhật ngày
    description:
      "Chúng tôi đang tìm kiếm giáo viên STEM có kinh nghiệm, nhiệt huyết và đam mê giảng dạy để truyền cảm hứng cho học sinh.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Giáo viên Robotics",
    location: "TP. Hồ Chí Minh",
    deadline: "30/06/2025", // Cập nhật ngày
    description:
      "Ứng tuyển vị trí giáo viên Robotics nếu bạn có kinh nghiệm lập trình, lắp ráp robot và mong muốn chia sẻ kiến thức này.",
    image: "/placeholder.svg?height=300&width=500",
  },
  // Các vị trí khác
];