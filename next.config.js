/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Netlify用に設定
  images: {
    unoptimized: true,  // Netlify用に画像最適化を無効化
  },
}

module.exports = nextConfig 