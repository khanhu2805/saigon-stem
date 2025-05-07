// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://giaoducsaigon.edu.vn', 
    generateRobotsTxt: true, // Tự động tạo robots.txt dựa trên sitemap (tùy chọn)
    // Nếu website có nhiều trang (>50k), cần cấu hình thêm split sitemap
    // exclude: ['/server-sitemap.xml'], // Loại trừ sitemap động nếu có
    // robotsTxtOptions: {
    //   additionalSitemaps: [
    //     'https://yourdomain.com/server-sitemap.xml', // Thêm sitemap động nếu có
    //   ],
    // },
  };