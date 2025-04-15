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
  message: z.string().min(10, {
    message: "Vui lòng nhập nội dung (tối thiểu 10 ký tự).",
  }),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Gửi thông tin thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
    }, 1000);
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
          <p className="max-w-2xl text-lg">
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
                      123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#024AAE]/10">
                    <Phone className="h-6 w-6 text-[#024AAE]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Điện thoại</h3>
                    <p className="text-muted-foreground">028 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#024AAE]/10">
                    <Mail className="h-6 w-6 text-[#024AAE]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      info@giaoduc-saigon.vn
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
                      Thứ Hai - Thứ Sáu: 8:00 - 17:30
                    </p>
                    <p className="text-muted-foreground">
                      Thứ Bảy: 8:00 - 12:00
                    </p>
                    <p className="text-muted-foreground">Chủ Nhật: Nghỉ</p>
                  </div>
                </div>
              </div>

              <div className="h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0397261706638!2d106.70232687589848!3d10.728592989415192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9023a3a85d%3A0x9d76b0035f6d53d0!2zMTIzIE5ndXnhu4VuIFbEg24gTGluaCwgVMOibiBQaMO6LCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1681234567890!5m2!1svi!2s"
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
