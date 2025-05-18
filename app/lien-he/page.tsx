"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Vui lòng nhập họ tên của bạn.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  phone: z.string().min(10, {
    message: "Vui lòng nhập số điện thoại hợp lệ.",
  }),
  subject: z.string().min(5, {
    message: "Vui lòng nhập tiêu đề (tối thiểu 5 ký tự).",
  }),
  message: z.string().optional(),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  type ConsultationFormValues = z.infer<typeof formSchema>;
  async function onSubmit(values: ConsultationFormValues) { // Sử dụng kiểu đã định nghĩa
    setIsSubmitting(true);
    console.log("Submitting form with values:", values);

    try {
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        // Nếu server trả về lỗi (status code không phải 2xx)
        console.error("API Error:", result);
        toast({
          title: "Lỗi!",
          description: result.error || "Không thể gửi thông tin. Vui lòng thử lại.",
          variant: "destructive",
          duration: 5000,
        });
      } else {
        // Thành công
        console.log("Triggering success toast...");
        toast({
          title: "Gửi thông tin thành công!",
          description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
          variant: "default", // Hoặc "success" nếu bạn có variant đó
          duration: 5000,
        });
        form.reset(); // Reset form sau khi gửi thành công
        console.log("Form reset and toast triggered");
      }
    } catch (error) {
      // Lỗi mạng hoặc lỗi không parse được JSON
      console.error("Network/Fetch error:", error);
      toast({
        title: "Lỗi Mạng!",
        description: "Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại đường truyền.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Liên hệ
          </h1>
          <p className="max-w-2xl text-xl italic">
            Liên hệ với chúng tôi để được tư vấn và hỗ trợ
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#024AAE]">
                Thông tin liên hệ
              </h2>

              <div className="mb-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#024AAE]/10">
                    <MapPin className="h-6 w-6 text-[#024AAE]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Địa chỉ</h3>
                    <p className="text-muted-foreground">
                    36 Lê Quý Đôn, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#024AAE]/10">
                    <Phone className="h-6 w-6 text-[#024AAE]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Điện thoại</h3>
                    <p className="text-muted-foreground">0906 697 918</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#024AAE]/10">
                    <Mail className="h-6 w-6 text-[#024AAE]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                    saigonstemhr@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#024AAE]/10">
                    <Clock className="h-6 w-6 text-[#024AAE]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Giờ làm việc</h3>
                    <p className="text-muted-foreground">
                      Thứ Hai - Thứ Sáu: 8:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
                
                <iframe
                  // src="https://maps.google.com/maps?q=36+L%C3%AA+Qu%C3%BD+%C4%90%C3%B4n&output=embed"
                  src="https://www.google.com/maps/embed/v1/place?q=36%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20ph%C6%B0%E1%BB%9Dng%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#024AAE]">
                Gửi tin nhắn cho chúng tôi
              </h2>

              <div className="rounded-lg border p-6 shadow-sm">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Họ và tên</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nhập họ và tên của bạn"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Nhập địa chỉ email"
                                {...field}
                              />
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
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Nhập số điện thoại"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tiêu đề</FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập tiêu đề" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nội dung</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Nhập nội dung tin nhắn"
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#024AAE] hover:bg-[#024AAE]/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}
