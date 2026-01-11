---
title: '测试自动提取缩略图'
description: '这篇文章没有设置 image 字段，将自动使用文章中的第一张图片作为缩略图。'
date: 2026-01-11
author: 'Adams'
tags: ['测试', 'Astro']
---

## 测试自动缩略图功能

这篇文章的 frontmatter 中没有设置 `image` 字段，系统会自动使用文章内容中的第一张图片作为缩略图。

下面是第一张图片：

![测试图片](https://picsum.photos/800/450?random=100)

这是一些其他内容...

## 第二张图片

下面是第二张图片（不会被用作缩略图）：

![第二张图片](https://picsum.photos/800/450?random=101)

系统只会提取第一张图片作为缩略图。
