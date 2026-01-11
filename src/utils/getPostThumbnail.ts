/**
 * 获取文章缩略图
 * 优先使用 frontmatter 中的 image 字段
 * 如果没有，则从文章内容中提取第一张图片
 */
export function getPostThumbnail(frontmatterImage: string | undefined, content: string): string | undefined {
  // 优先使用 frontmatter 中的 image
  if (frontmatterImage) {
    return frontmatterImage;
  }

  // 从文章内容中提取第一张图片
  // 匹配 Markdown 图片语法: ![alt](url) 或 ![alt](url "title")
  const imageRegex = /!\[.*?\]\((.*?)(?:\s+".*?")?\)/;
  const match = content.match(imageRegex);

  return match ? match[1].trim() : undefined;
}
