"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, FileText, Home, LayoutDashboard, LogOut, Mail, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function AdminDashboard() {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    toast({
      title: "Đăng xuất thành công!",
      description: "Chuyển hướng đến trang đăng nhập...",
    })
    setTimeout(() => {
      router.push("/admin/login")
    }, 1000)
  }

  if (!isClient) {
    return null // Avoid rendering on server
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-[#024AAE] text-white md:flex">
        <div className="flex h-16 items-center justify-center border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#024AAE] font-bold text-sm">
              SG
            </div>
            <span className="font-bold">Admin Dashboard</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col py-4">
          <nav className="space-y-1 px-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/dashboard/posts"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
            >
              <FileText className="h-5 w-5" />
              <span>Quản lý bài viết</span>
            </Link>
            <Link
              href="/admin/dashboard/programs"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Quản lý chương trình</span>
            </Link>
            <Link
              href="/admin/dashboard/contacts"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              <span>Quản lý liên hệ</span>
            </Link>
            <Link
              href="/admin/dashboard/recruitment"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
            >
              <Users className="h-5 w-5" />
              <span>Quản lý tuyển dụng</span>
            </Link>
            <Link
              href="/admin/dashboard/settings"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
            >
              <Settings className="h-5 w-5" />
              <span>Cài đặt</span>
            </Link>
          </nav>
        </div>
        <div className="border-t border-white/10 p-4">
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start space-x-2 text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span>Đăng xuất</span>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top navigation */}
        <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
          <div className="flex items-center md:hidden">
            <Button variant="outline" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-[#024AAE] flex items-center justify-center text-white font-bold text-sm">
              SG
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" className="md:hidden" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
            <div className="hidden items-center space-x-2 md:flex">
              <div className="font-medium">Admin</div>
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Home className="mr-2 h-4 w-4" />
                  Xem trang chủ
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tổng số học viên</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12% so với tháng trước</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Lớp học đang hoạt động</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+3 lớp so với tháng trước</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Yêu cầu tư vấn mới</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">5 yêu cầu chưa xử lý</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Hồ sơ ứng tuyển</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 hồ sơ mới trong tuần này</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent activities */}
          <div className="mt-6">
            <Tabs defaultValue="contacts">
              <TabsList>
                <TabsTrigger value="contacts">Liên hệ gần đây</TabsTrigger>
                <TabsTrigger value="posts">Bài viết gần đây</TabsTrigger>
              </TabsList>
              <TabsContent value="contacts" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Liên hệ gần đây</CardTitle>
                    <CardDescription>Danh sách các yêu cầu tư vấn gần đây từ khách hàng</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentContacts.map((contact, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div>
                            <div className="font-medium">{contact.name}</div>
                            <div className="text-sm text-muted-foreground">{contact.email}</div>
                            <div className="mt-1 text-sm">{contact.message}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">{contact.date}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="posts" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Bài viết gần đây</CardTitle>
                    <CardDescription>Danh sách các bài viết gần đây đã được đăng</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPosts.map((post, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div>
                            <div className="font-medium">{post.title}</div>
                            <div className="text-sm text-muted-foreground">Tác giả: {post.author}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">{post.date}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}

// Missing import for Menu
import { Menu } from "lucide-react"

// Sample data for recent contacts
const recentContacts = [
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    message: "Tôi muốn đăng ký khóa học STEM cho con trai 10 tuổi",
    date: "Hôm nay, 10:30",
  },
  {
    name: "Trần Thị B",
    email: "tranthib@example.com",
    message: "Tôi cần tư vấn về khóa học Robotics nâng cao",
    date: "Hôm nay, 09:15",
  },
  {
    name: "Lê Văn C",
    email: "levanc@example.com",
    message: "Xin thông tin về học phí các khóa học kỹ năng sống",
    date: "Hôm qua, 15:45",
  },
  {
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    message: "Tôi muốn đăng ký cho con gái tham gia lớp kỹ năng công dân số",
    date: "Hôm qua, 14:20",
  },
]

// Sample data for recent posts
const recentPosts = [
  {
    title: "Khai giảng khóa học STEM mới dành cho học sinh tiểu học",
    author: "Admin",
    date: "15/04/2023",
  },
  {
    title: "Học sinh của chúng tôi đạt giải cao tại cuộc thi Robotics quốc tế",
    author: "Admin",
    date: "02/04/2023",
  },
  {
    title: "Workshop 'Kỹ năng sống cho học sinh thế kỷ 21'",
    author: "Admin",
    date: "25/03/2023",
  },
  {
    title: "Tuyển sinh các lớp Robotics hè 2023",
    author: "Admin",
    date: "18/03/2023",
  },
]
