// const isProd = process.env.NODE_ENV === 'production';
// // const withCSS = require('@zeit/next-css')
// // module.exports = withCSS();
// module.exports = {
//   images: {
//     loader: 'imgix',
//     domains: ['react.semantic-ui.com', 'images.unsplash.com'],
//   },
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/intro': { page: '/intro' },
//       '/projects': { page: '/projects' },
//       '/work': { page: '/work' },
//       '/contact': { page: '/contact' },
//     }
//   },
// };
// assetPrefix: isProd ? 'https://cdn.statically.io/gh/ajaykrajput/ajaykrajput.github.io/gh-pages/' : '',

const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProd ? 'https://rahulworld.github.io/nextjs/' : '';

module.exports = {
    distDir: 'build',
  images: {
    loader: 'imgix',
    domains: ['react.semantic-ui.com', 'images.unsplash.com'],
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    // '/about': { page: '/about' },
    // '/intro': { page: '/intro' },
    // '/projects': { page: '/projects' },
    // '/work': { page: '/work' },
    // '/contact': { page: '/contact' },
  }),
  assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
};
