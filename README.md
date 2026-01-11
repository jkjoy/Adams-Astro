# Adams Astro 主题

基于 [Adams WordPress 主题](https://github.com/Tokinx/Adams) 使用 Astro 构建的简洁博客主题。1:1 复制了原版的设计风格，所有配置集中在一个文件中，方便自定义。

> Simple is beautiful

![Adams Theme](https://wx1.sinaimg.cn/large/76679337ly1gcj1k23yf7j219r0u00wf.jpg)

## ✨ 特性

- 🎨 **1:1 复制** Adams WordPress 主题的设计风格
- ⚙️ **集中配置** 所有设置都在 `src/site.config.ts` 中
- 🌓 **三种主题模式** 普通、护眼（Sepia）、夜间（Night）
- 📱 **响应式设计** 适配各种屏幕尺寸
- ⚡ **高性能** 基于 Astro 构建，输出静态 HTML
- 🎭 **CSS 变量** 便于主题定制
- 📝 **简洁优雅** 专注于内容的阅读体验

## 📦 项目结构

```
/
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostList.astro
│   │   └── ThemeSwitcher.astro
│   ├── layouts/         # 布局
│   │   └── BaseLayout.astro
│   ├── pages/           # 页面
│   │   └── index.astro
│   ├── styles/          # 样式
│   │   └── global.css
│   └── site.config.ts   # 🔧 网站配置（重要）
├── astro.config.mjs
└── package.json
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd adams-astro
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 3. 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist/` 目录。

### 4. 预览生产版本

```bash
npm run preview
```

## ⚙️ 配置指南

所有配置都在 `src/site.config.ts` 文件中，这是本主题的核心特性！

### 基本信息配置

```typescript
site: {
  name: 'Adams',              // 网站名称
  title: 'Adams',             // 网站标题
  description: 'Simple is beautiful',  // 网站描述
  author: 'Your Name',        // 作者名称
  url: 'https://example.com', // 网站 URL
  language: 'zh-CN',          // 语言
}
```

### 导航菜单配置

```typescript
navigation: {
  header: [
    { name: '首页', url: '/' },
    { name: '归档', url: '/archives' },
    { name: '关于', url: '/about' },
  ],
  footer: [
    { name: '首页', url: '/' },
    { name: '归档', url: '/archives' },
    { name: 'RSS', url: '/rss.xml' },
  ],
}
```

### 颜色主题配置

所有颜色都可以在 `colors` 对象中自定义：

```typescript
colors: {
  primary: '#3274ff',           // 主色调
  primaryHover: '#5c91ff',      // 主色调悬停
  text: {
    primary: '#434a54',         // 主要文本
    secondary: '#656D78',       // 次要文本
    tertiary: '#AAB2BD',        // 辅助文本
  },
  // ... 更多配置
}
```

### 功能开关配置

```typescript
features: {
  themeSwitch: true,      // 主题切换
  comments: false,        // 评论系统
  search: true,           // 搜索功能
  readingProgress: false, // 阅读进度条
  like: false,            // 点赞功能
  share: false,           // 分享功能
  donate: false,          // 打赏功能
}
```

### 文章配置

```typescript
posts: {
  perPage: 10,            // 每页文章数
  showExcerpt: true,      // 显示摘要
  showThumbnail: true,    // 显示缩略图
  showReadingTime: true,  // 显示阅读时间
  showTags: true,         // 显示标签
}
```

## 🎨 主题模式

支持三种主题模式：

- **普通模式** - 白色背景，适合日常阅读
- **护眼模式** - 淡黄色背景，减少眼睛疲劳
- **夜间模式** - 深色背景，适合夜间阅读

点击右侧的主题切换按钮即可切换，选择会自动保存到 localStorage。

## 🎯 设计特点

### 简洁排版
- 最大宽度 780px 的容器
- 舒适的行高和字间距
- 清晰的视觉层次

### 优雅动画
- 平滑的页面过渡
- 列表项逐个出现
- 悬停效果

### 响应式
- 移动端优化
- 灵活的布局
- 触摸友好

## 📝 自定义样式

如果需要修改样式，可以编辑：

1. **CSS 变量** - 在 `src/styles/global.css` 的 `:root` 部分修改全局变量
2. **配置文件** - 在 `src/site.config.ts` 中修改设计 tokens
3. **组件样式** - 在各个 `.astro` 组件文件中的 `<style>` 标签修改

## 🔧 技术栈

- [Astro](https://astro.build) - 静态网站生成器
- TypeScript - 类型安全
- CSS Variables - 主题切换
- 无前端框架 - 原生 HTML/CSS/JS

## 📄 许可证

本项目基于原版 Adams 主题改编。

原版主题：https://github.com/Tokinx/Adams

## 🙏 致谢

感谢 [Tokin](https://biji.io) 创建了优雅的 Adams 主题。

## 📮 反馈

如有问题或建议，欢迎提交 Issue。

---

Made with ❤️ and Astro
