---
title: '欢迎使用 Adams Astro 主题'
description: '这是一个基于 Astro 构建的简洁博客主题，1:1 复制了 Adams WordPress 主题的设计风格。'
date: 2026-01-10
author: 'Adams'
tags: ['Astro', 'Adams', '主题']
---

## 欢迎

欢迎使用 Adams Astro 主题！这是一个完全基于 Astro 构建的简洁博客主题，忠实地复刻了原版 Adams WordPress 主题的设计风格。

## 主要特性

### 简洁设计

Adams 主题的设计理念是 **Simple is beautiful**（简洁即美）。我们专注于：

- 清晰的排版
- 舒适的阅读体验
- 优雅的视觉效果
- 流畅的交互动画

### 集中配置

所有配置都集中在 `src/site.config.ts` 文件中：

```typescript
export const siteConfig = {
  site: {
    name: 'Adams',
    title: 'Adams',
    description: 'Simple is beautiful',
  },
  // ... 更多配置
}
```

### 三种主题模式

支持三种阅读模式：

1. **普通模式** - 白色背景，日常阅读
2. **护眼模式** - 淡黄色背景，减少眼睛疲劳
3. **夜间模式** - 深色背景，适合夜间阅读

点击右侧工具栏的主题切换按钮即可切换。

## Markdown 支持

主题完全支持 Markdown 语法，包括：

### 标题

支持 h1 到 h6 六级标题。

### 列表

无序列表：
- 列表项 1
- 列表项 2
- 列表项 3

有序列表：
1. 第一项
2. 第二项
3. 第三项

### 代码块

支持代码高亮：

```javascript
function hello() {
  console.log('Hello, Adams!');
}
```

### 引用

> Simple is beautiful.
>
> —— Adams

### 表格

| 功能 | 支持 |
|------|------|
| Markdown | ✅ |
| 代码高亮 | ✅ |
| 图片 | ✅ |
| 主题切换 | ✅ |

## 图片

支持插入图片：

![Adams Theme](https://picsum.photos/600/400?random=2)

## 链接

支持 [外部链接](https://astro.build) 和内部链接。

## 开始使用

1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`
3. 在 `src/content/posts/` 目录创建 `.md` 文件
4. 编辑 `src/site.config.ts` 自定义配置

## 更多信息

查看 [README.md](../../README.md) 了解更多使用说明。

---

祝你使用愉快！ 🚀
