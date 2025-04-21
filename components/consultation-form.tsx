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

  const form = useForm({
    // resolver: zodResolver(formSchema),
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

  function onSubmit(values: any) {
    setIsSubmitting(true);
    console.log("Submitting form with values:", values);

    setTimeout(() => {
      try {
        console.log("Triggering toast...");
        toast({
          title: "Gửi thông tin thành công!",
          description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
          variant: "default",
          duration: 5000,
        });
        form.reset();
        console.log("Form reset and toast triggered");
      } catch (error) {
        console.error("Toast error:", error);
        toast({
          title: "Lỗi!",
          description: "Không thể gửi thông tin. Vui lòng thử lại.",
          variant: "destructive",
          duration: 5000,
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  }

  function testToast() {
    console.log("Testing toast...");
    try {
      toast({
        title: "Kiểm tra Toast",
        description: "Đây là toast kiểm tra để xác nhận hiển thị.",
        variant: "default",
        duration: 5000,
      });
      console.log("Test toast triggered");
    } catch (error) {
      console.error("Test toast error:", error);
    }
  }

  return (
    <div className="relative">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(testToast)} className="space-y-6" >
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
                <FormLabel>Nội dung cần tư vấn (không bắt buộc)</FormLabel>
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