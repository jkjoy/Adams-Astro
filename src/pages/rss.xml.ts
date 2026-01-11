import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const { site } = siteConfig;

  // 获取所有文章
  const posts = await getCollection('posts');

  // 按日期排序（最新的在前）
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  return rss({
    // RSS feed 的标题
    title: site.title,
    // RSS feed 的描述
    description: site.description,
    // RSS feed 的站点 URL
    site: context.site?.toString() || site.url,
    // RSS feed 的条目
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/posts/${post.slug}/`,
      // 可选：添加作者信息
      author: post.data.author || site.author,
      // 可选：添加分类
      categories: post.data.tags || [],
    })),
    // 自定义数据（可选）
    customData: `<language>${site.language}</language>`,
    // 样式表（可选）
    stylesheet: false,
  });
}
