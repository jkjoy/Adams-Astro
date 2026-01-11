/**
 * 文章增强功能
 * 1. 外部链接出站提示
 * 2. 图片灯箱效果
 */

// 外部链接出站提示
function setupExternalLinks() {
  const article = document.querySelector('.post_article');
  if (!article) return;

  const currentHost = window.location.hostname;
  const links = article.querySelectorAll('a[href^="http"]');

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    try {
      const url = new URL(href);
      // 检查是否为外部链接
      if (url.hostname !== currentHost) {
        // 修改链接指向跳转页面
        const goUrl = `/go?url=${encodeURIComponent(href)}`;
        link.setAttribute('href', goUrl);

        // 在新窗口打开跳转页面
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        // 添加外部链接标识
        link.classList.add('external-link');
      }
    } catch (e) {
      // 忽略无效的 URL
      console.warn('Invalid URL:', href);
    }
  });
}

// 图片灯箱效果
function setupImageLightbox() {
  const article = document.querySelector('.post_article');
  if (!article) return;

  // 创建灯箱容器
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-overlay"></div>
    <div class="lightbox-content">
      <img class="lightbox-image" src="" alt="" />
      <button class="lightbox-close" aria-label="关闭">&times;</button>
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const overlay = lightbox.querySelector('.lightbox-overlay') as HTMLElement;
  const content = lightbox.querySelector('.lightbox-content') as HTMLElement;
  const image = lightbox.querySelector('.lightbox-image') as HTMLImageElement;
  const closeBtn = lightbox.querySelector('.lightbox-close') as HTMLElement;
  const caption = lightbox.querySelector('.lightbox-caption') as HTMLElement;

  // 为文章中的图片添加点击事件
  const images = article.querySelectorAll('img');
  images.forEach((img) => {
    img.style.cursor = 'pointer';
    img.classList.add('lightbox-trigger');

    img.addEventListener('click', () => {
      const src = img.src;
      const alt = img.alt || '';

      image.src = src;
      image.alt = alt;
      caption.textContent = alt;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // 关闭灯箱的函数
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // 延迟清空，等待动画结束
    setTimeout(() => {
      image.src = '';
    }, 300);
  };

  // 点击关闭按钮
  closeBtn.addEventListener('click', closeLightbox);

  // 点击遮罩层关闭
  overlay.addEventListener('click', closeLightbox);

  // 按 ESC 键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 阻止内容区域的点击事件冒泡
  content.addEventListener('click', (e) => {
    if (e.target === image || e.target === caption) {
      e.stopPropagation();
    }
  });
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setupExternalLinks();
    setupImageLightbox();
  });
} else {
  setupExternalLinks();
  setupImageLightbox();
}
