// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


import next from 'next';
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // Handling .pdf file imports
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            publicPath: '/_next/static/pdf/',
            outputPath: 'static/pdf/'
          }
        }
      ]
    });
    return config;
  },
};

export default nextConfig;
