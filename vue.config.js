module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 1000,
        // minRemainingSize: 0,
        maxSize: 2000000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          },
          // vendor: {
          //   test: /[\\/]node_modules[\\/]/,
          //   name(module) {
          //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          //     return `npm.${packageName.replace('@', '')}`;
          //   },
          // },
        }
      }
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  },
  pwa: {
    manifestOptions: {
      icons: [
        {
          "src": "img/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "img/icons/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    },
    name: 'Fanse',
    themeColor: '#2081E2',
    msTileColor: '#2081E2',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png',
    }
  }
}
