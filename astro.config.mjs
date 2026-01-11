// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',  // 监听所有网络接口，允许外网访问
    port: 4321,       // 端口号
  },

  // 构建配置
  build: {
    // 始终内联样式表，避免阻塞渲染
    inlineStylesheets: 'always',
    // 资源文件的输出目录
    assets: '_astro',
  },

  // Vite 配置
  vite: {
    build: {
      // 资源内联限制（字节），小于此值的资源会被内联
      assetsInlineLimit: 4096,
      // CSS 代码分割
      cssCodeSplit: true,
      // 静态资源的文件名格式（包含哈希以支持长期缓存）
      rollupOptions: {
        output: {
          // 为不同类型的资源设置不同的文件名格式
          assetFileNames: (assetInfo) => {
            // 字体文件
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name || '')) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            // 图片文件
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name || '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            // 其他静态资源
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
  },
});
