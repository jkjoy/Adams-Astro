---
title: '主题配置指南'
description: '本文介绍如何配置 Adams 主题。所有配置项都集中在 src/site.config.ts 文件中。'
date: 2026-01-08
author: 'Adams'
tags: ['配置', '教程']
---

## 配置文件

Adams Astro 主题的所有配置都集中在 `src/site.config.ts` 文件中。这是本主题的核心特性之一。

## 基本配置

### 网站信息

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

### 导航菜单

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

## 颜色配置

### 主色调

```typescript
colors: {
  primary: '#3274ff',        // 主色调
  primaryHover: '#5c91ff',   // 主色调悬停
}
```

可以改成你喜欢的颜色：

- **蓝绿主题**：`#00b4d8`
- **粉色主题**：`#d62828`
- **绿色主题**：`#2d6a4f`

### 文本颜色

```typescript
text: {
  primary: '#434a54',    // 标题颜色
  secondary: '#656D78',  // 正文颜色
  tertiary: '#AAB2BD',   // 辅助文本
}
```

## 排版配置

### 字体

```typescript
typography: {
  fontFamily: {
    base: '"PingFang SC", sans-serif',
    serif: 'serif',
    code: 'Menlo, Monaco, Consolas, monospace',
  },
}
```

### 字号

```typescript
fontSize: {
  base: '1rem',
  h1: '1.8rem',
  h2: '1.6rem',
  h3: '1.4rem',
  h4: '1.2rem',
}
```

## 功能配置

### 功能开关

```typescript
features: {
  themeSwitch: true,      // 启用主题切换
  comments: false,        // 启用评论系统
  search: true,           // 启用搜索功能
  like: false,            // 启用点赞功能
}
```

### 文章配置

```typescript
posts: {
  perPage: 10,            // 每页文章数
  showExcerpt: true,      // 显示摘要
  showThumbnail: true,    // 显示缩略图
  showTags: true,         // 显示标签
}
```

## 高级配置

### SEO 设置

```typescript
seo: {
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@yourname',
}
```

### 分析统计

```typescript
analytics: {
  googleAnalytics: 'G-XXXXXXXXXX',
  baiduAnalytics: '',
}
```

## 使用配置

在组件中引用配置：

```astro
---
import { siteConfig } from '../site.config';

const { site, navigation } = siteConfig;
---

<h1>{site.name}</h1>
```

## 注意事项

1. 修改配置后需要重启开发服务器
2. 颜色值使用十六进制格式
3. 所有 URL 路径以 `/` 开头
4. 数组项之间用逗号分隔

## 下一步

- 修改配置适合你的需求
- 添加自己的导航菜单
- 选择喜欢的配色方案
- 开启需要的功能

配置很简单，开始自定义你的博客吧！ 🎨
