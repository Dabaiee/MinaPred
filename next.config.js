/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 添加以下配置来处理样式注入
  optimizeFonts: false,
  compiler: {
    styledComponents: true,
  },
  // 禁用一些不必要的优化以避免水合问题
  experimental: {
    optimizeCss: false,
    optimizeImages: false,
  }
}

module.exports = nextConfig 