---
title: 'CSS 变量的妙用'
description: 'CSS 变量（自定义属性）让主题切换变得简单。本文展示如何使用 CSS 变量实现多主题支持。'
date: 2026-01-07
author: 'Adams'
tags: ['CSS', '主题', '教程']
---

## 什么是 CSS 变量？

CSS 变量，也叫自定义属性（Custom Properties），是 CSS 中的一个强大特性，允许你定义可重用的值。

## 基本语法

### 定义变量

在 `:root` 选择器中定义全局变量：

```css
:root {
  --color-primary: #3274ff;
  --color-text: #656D78;
  --font-size-base: 1rem;
}
```

### 使用变量

使用 `var()` 函数引用变量：

```css
.button {
  background: var(--color-primary);
  color: white;
  font-size: var(--font-size-base);
}
```

## 主题切换实现

### 定义主题变量

```css
:root {
  --color-bg: #fff;
  --color-text: #333;
}

body.dark {
  --color-bg: #1a1a1a;
  --color-text: #f0f0f0;
}

body.sepia {
  --color-bg: #f3eacb;
  --color-text: #704214;
}
```

### 应用变量

```css
body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

### JavaScript 切换

```javascript
// 切换到深色主题
document.body.classList.add('dark');

// 切换回浅色主题
document.body.classList.remove('dark');
```

## Adams 主题中的应用

在 Adams Astro 主题中，我们定义了完整的颜色变量：

```css
:root {
  /* 主色调 */
  --color-primary: #3274ff;

  /* 文本颜色 */
  --color-text-primary: #434a54;
  --color-text-secondary: #656D78;

  /* 背景颜色 */
  --color-bg-primary: #FFF;
  --color-bg-secondary: #F5F7FA;
}
```

## 优势

### 1. 易于维护

只需修改变量定义，所有使用该变量的地方都会更新。

### 2. 主题切换

通过改变根元素的 class，可以轻松切换整个网站的主题。

### 3. 动态修改

可以通过 JavaScript 动态修改变量值：

```javascript
document.documentElement.style.setProperty(
  '--color-primary',
  '#ff0000'
);
```

### 4. 响应式设计

可以在不同的媒体查询中重定义变量：

```css
:root {
  --spacing: 1rem;
}

@media (min-width: 768px) {
  :root {
    --spacing: 2rem;
  }
}
```

## 浏览器支持

CSS 变量在现代浏览器中得到了广泛支持：

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

## 实践建议

### 命名规范

使用有意义的命名：

```css
/* 好的命名 */
--color-primary
--font-size-heading
--spacing-large

/* 不好的命名 */
--blue
--big
--space
```

### 组织结构

按类别组织变量：

```css
:root {
  /* Colors */
  --color-primary: #3274ff;
  --color-secondary: #656D78;

  /* Typography */
  --font-family-base: sans-serif;
  --font-size-base: 1rem;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
}
```

### 回退值

为变量提供回退值：

```css
.element {
  color: var(--color-primary, #3274ff);
}
```

## 总结

CSS 变量是一个强大的工具，特别适合：

- 主题系统
- 设计系统
- 响应式设计
- 动态样式

在 Adams 主题中，我们充分利用了 CSS 变量的优势，实现了灵活的主题切换功能。

---

开始使用 CSS 变量，让你的样式更灵活！ 🎨
