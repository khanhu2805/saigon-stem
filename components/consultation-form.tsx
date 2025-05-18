"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { toast } from "@/hooks/use-toast";
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
  message: z.string().optional(),
});

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  type ConsultationFormValues = z.infer<typeof formSchema>;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    console.log("ConsultationForm mounted");
  }, []);

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
    <div className="relative">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập họ và tên của bạn" {...field} />
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
                    <Input placeholder="Nhập địa chỉ email" {...field} />
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
                    <Input placeholder="Nhập số điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nội dung cần tư vấn</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nhập nội dung cần tư vấn"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#40C262] hover:bg-[#40C262]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
            </Button>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}