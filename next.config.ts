import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // ⭐️ Khai báo tất cả các tên miền bên ngoài bạn sử dụng
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
         // Tên miền cho ảnh hero
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // ⭐️ Tên miền mới cần thêm (Pinterest)
      },
      // Nếu bạn dùng ảnh từ các nguồn khác (ví dụ: Googleusercontent.com)
      // bạn cũng cần thêm vào đây.
      // {
      //   protocol: 'https',
      //   hostname: 'lh3.googleusercontent.com',
      // },
    ],
  },
};

export default nextConfig;
