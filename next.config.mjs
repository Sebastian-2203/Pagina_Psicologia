import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^react$/,
        (resource) => {
          if (resource.context.includes('node_modules/sanity') || resource.context.includes('node_modules/@sanity')) {
            resource.request = path.resolve(process.cwd(), 'polyfills/react.js');
          }
        }
      )
    );
    return config;
  },
};

export default nextConfig;
