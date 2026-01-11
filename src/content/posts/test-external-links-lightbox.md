---
title: '测试外部链接和图片灯箱'
description: '这篇文章用于测试外部链接提示和图片灯箱效果。'
date: 2026-01-11
author: 'Adams'
tags: ['测试', '功能']
---

## 外部链接测试

下面是一些链接测试：

### 内部链接
这是一个[内部链接](/about)，点击不会弹出提示。

### 外部链接
这是一个[外部链接](https://astro.build)，点击会弹出出站提示。

这是另一个[外部链接](https://github.com)，也会提示。

访问 [Google](https://www.google.com) 会看到出站提示。

## 图片灯箱测试

点击下面的图片可以看到灯箱效果：

### 第一张图片

![美丽的风景](https://picsum.photos/800/600?random=201)

这是一张风景图，点击可以放大查看。

### 第二张图片

![城市夜景](https://picsum.photos/800/600?random=202)

夜景图片也支持灯箱效果。

### 第三张图片

![自然风光](https://picsum.photos/800/600?random=203)

## 功能说明

### 外部链接跳转页面
- 自动检测文章中的外部链接
- 点击外部链接会在**新窗口**打开跳转提示页 `/go?url=xxx`
- 跳转页面显示目标网站信息和安全提示
- 用户可以选择"立即跳转"或"关闭窗口"
- 外部链接会显示 ↗ 图标标识

### 图片灯箱效果
- 点击图片放大查看
- 支持键盘 ESC 键关闭
- 点击遮罩层关闭
- 显示图片的 alt 文字作为说明
- 支持所有主题模式（普通、护眼、夜间）
- 移动端适配

## 更多测试

这里还有一些外部链接：
- [MDN Web Docs](https://developer.mozilla.org)
- [npm](https://www.npmjs.com)
- [TypeScript](https://www.typescriptlang.org)

还有更多图片：

![测试图片 1](https://picsum.photos/600/400?random=204)

![测试图片 2](https://picsum.photos/600/400?random=205)

![测试图片 3](https://picsum.photos/600/400?random=206)

尽情测试吧！
