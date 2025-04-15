"use client";

import { useState } from "react";
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
  DialogTrigger,
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
  position: z.string().min(1, {
    message: "Vui lòng chọn vị trí ứng tuyển.",
  }),
  message: z.string().min(10, {
    message: "Vui lòng nhập thư ngỏ (tối thiểu 10 ký tự).",
  }),
  cv: z.any().refine((file) => file?.length === 1, {
    message: "Vui lòng tải lên CV của bạn.",
  }),
});

export default function RecruitmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
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
        title: "Gửi hồ sơ thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
    }, 1000);
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Tuyển dụng"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tuyển dụng
          </h1>
          <p className="max-w-2xl text-lg">
            Tham gia đội ngũ của chúng tôi và cùng nhau tạo nên những giá trị
            giáo dục tích cực
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#40C262]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <CardTitle>Phát triển chuyên môn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Cơ hội học hỏi và phát triển chuyên môn thông qua các khóa đào
                  tạo, hội thảo và làm việc với các chuyên gia hàng đầu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#024AAE]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#024AAE]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <CardTitle>Môi trường làm việc thân thiện</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Môi trường làm việc năng động, sáng tạo và thân thiện, nơi mọi
                  ý kiến đều được tôn trọng và lắng nghe.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#40C262]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#40C262]"
                  >
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                    <path d="M15 7h6v6"></path>
                  </svg>
                </div>
                <CardTitle>Cơ hội thăng tiến</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Chính sách đánh giá công bằng và cơ hội thăng tiến rõ ràng dựa
                  trên năng lực và đóng góp của mỗi cá nhân.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">
              Vị trí đang tuyển dụng
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Khám phá các vị trí đang tuyển dụng và tìm kiếm cơ hội phù hợp với
              bạn
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {openPositions.map((position, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={position.image || "/placeholder.svg"}
                    alt={position.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-4 text-sm">
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
                <CardContent>
                  <p className="line-clamp-3">{position.description}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-[#024AAE] hover:bg-[#024AAE]/90"
                        onClick={() => setSelectedPosition(position.title)}
                      >
                        Ứng tuyển ngay
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>
                          Ứng tuyển vị trí {selectedPosition}
                        </DialogTitle>
                        <DialogDescription>
                          Vui lòng điền đầy đủ thông tin bên dưới để ứng tuyển.
                        </DialogDescription>
                      </DialogHeader>
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
                            name="position"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Vị trí ứng tuyển</FormLabel>
                                <FormControl>
                                  <Input
                                    value={selectedPosition}
                                    readOnly
                                    {...field}
                                  />
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
                                <FormLabel>Thư ngỏ</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Giới thiệu ngắn về bản thân và lý do bạn muốn ứng tuyển vị trí này"
                                    className="min-h-[120px]"
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
                            render={({
                              field: { value, onChange, ...fieldProps },
                            }) => (
                              <FormItem>
                                <FormLabel>Tải lên CV của bạn</FormLabel>
                                <FormControl>
                                  <Input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => onChange(e.target.files)}
                                    {...fieldProps}
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
                            {isSubmitting ? "Đang gửi..." : "Gửi hồ sơ"}
                          </Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}

// Sample data for open positions
const openPositions = [
  {
    title: "Giáo viên STEM",
    location: "TP. Hồ Chí Minh",
    deadline: "30/05/2023",
    description:
      "Chúng tôi đang tìm kiếm giáo viên STEM có kinh nghiệm và đam mê giảng dạy để tham gia đội ngũ giáo viên của chúng tôi.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Giáo viên Robotics",
    location: "TP. Hồ Chí Minh",
    deadline: "30/05/2023",
    description:
      "Chúng tôi đang tìm kiếm giáo viên Robotics có kinh nghiệm lập trình và điều khiển robot để tham gia đội ngũ giáo viên của chúng tôi.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Chuyên viên phát triển chương trình",
    location: "TP. Hồ Chí Minh",
    deadline: "15/05/2023",
    description:
      "Chúng tôi đang tìm kiếm chuyên viên phát triển chương trình có kinh nghiệm trong lĩnh vực giáo dục để tham gia đội ngũ của chúng tôi.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Nhân viên tư vấn tuyển sinh",
    location: "TP. Hồ Chí Minh",
    deadline: "15/05/2023",
    description:
      "Chúng tôi đang tìm kiếm nhân viên tư vấn tuyển sinh có kỹ năng giao tiếp tốt và hiểu biết về giáo dục để tham gia đội ngũ của chúng tôi.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Nhân viên marketing",
    location: "TP. Hồ Chí Minh",
    deadline: "10/05/2023",
    description:
      "Chúng tôi đang tìm kiếm nhân viên marketing có kinh nghiệm trong lĩnh vực giáo dục để tham gia đội ngũ của chúng tôi.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Trợ giảng",
    location: "TP. Hồ Chí Minh",
    deadline: "10/05/2023",
    description:
      "Chúng tôi đang tìm kiếm trợ giảng có đam mê với giáo dục STEM và Robotics để tham gia đội ngũ của chúng tôi.",
    image: "/placeholder.svg?height=300&width=500",
  },
];
