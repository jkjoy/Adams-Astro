/**
 * Adams Theme Configuration
 * 所有网站配置集中在此文件
 */

export const siteConfig = {
  // 网站基本信息
  site: {
    name: '老孙的博客',//网站名称
    title: '老孙的博客',//网站标题
    description: '老孙不老',//网站描述
    author: '老孙',//网站管理员
    url: 'https://laosun.de',//网站地址
    language: 'zh-CN',//网站语言
  },

  // 设计 Tokens - 颜色
  colors: {
    // 主色调
    primary: '#3274ff',
    primaryHover: '#5c91ff',

    // 文本颜色
    text: {
      primary: '#434a54',
      secondary: '#656D78',
      tertiary: '#AAB2BD',
      light: '#CCD1D9',
    },

    // 背景颜色
    background: {
      primary: '#FFF',
      secondary: '#F5F7FA',
      tertiary: '#fafafa',
    },

    // 边框和分隔线
    border: {
      light: '#E6E9ED',
      medium: 'rgba(189, 202, 219, 0.3)',
      dark: 'rgba(152, 152, 152, 0.2)',
    },

    // 功能性颜色
    functional: {
      like: '#FC6E51',
      share: '#2ABA66',
      error: '#f55',
    },

    // 代码高亮
    code: {
      background: 'rgba(152, 152, 152, 0.06)',
      border: 'rgba(152, 152, 152, 0.1)',
      text: '#AAB2BD',
      lineNumber: '#F5F7FA',
      string: '#f35561',
      keyword: '#03A9F4',
      comment: '#AAB2BD',
      literal: '#ac92ec',
      tag: '#ed5565',
    },

    // 护眼模式
    sepia: {
      background: '#f3eacb',
      backgroundDark: '#eae0be',
      text: '#704214',
      textLight: '#b38a60',
      border: '#a98c51',
    },

    // 夜间模式
    night: {
      background: '#1c1f2b',
      backgroundLight: '#393f56',
      text: '#bdcadb',
      textDark: '#666e8e',
    },
  },

  // 设计 Tokens - 排版
  typography: {
    // 字体家族
    fontFamily: {
      base: '"lucida grande", "lucida sans unicode", lucida, helvetica, "PingFang SC", "Hiragino Sans GB", "STHeiti Light", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
      serif: 'serif',
      code: 'Menlo, Bitstream Vera Sans Mono, DejaVu Sans Mono, Monaco, Consolas, monospace',
    },

    // 字体大小
    fontSize: {
      base: '1rem',
      small: '0.8rem',
      smaller: '0.88rem',
      medium: '0.96rem',
      large: '1.2rem',
      h1: '1.8rem',
      h2: '1.6rem',
      h3: '1.4rem',
      h4: '1.2rem',
      headerTitle: '1.5rem',
    },

    // 行高
    lineHeight: {
      base: 1.5,
      text: '2rem',
      tight: '1.08rem',
      code: '1.6rem',
    },
  },

  // 设计 Tokens - 间距
  spacing: {
    container: {
      maxWidth: '780px',
      padding: '2%',
    },

    section: {
      headerMargin: '6rem',
      headerPadding: '4rem 0 2rem 0',
    },
  },

  // 设计 Tokens - 阴影和边框
  effects: {
    boxShadow: {
      light: '0 0 0 1px rgba(0,0,0,.1) inset',
      medium: '0 2px 3px rgba(170, 178, 189, 0.2)',
      heavy: '0 2px 3px rgba(170, 178, 189, 0.4)',
    },

    borderRadius: {
      small: '2px',
      medium: '3px',
      large: '15px',
      round: '20px',
      circle: '100%',
    },

    transition: {
      fast: '0.3s',
      medium: '0.6s',
    },
  },

  // 导航菜单配置
  navigation: {
    header: [
      { name: '首页', url: '/' },
      { name: '归档', url: '/archives' },
      { name: '关于', url: '/about' },
    ],
    footer: [
      { name: '标签', url: '/tags' },
      { name: 'RSS', url: '/rss.xml' },
    ],
  },

  // 社交链接配置
  social: {
    // 社交链接显示在 Header 右上角
    // icon 使用 StrawberryIcon 图标类名，如 'czs-github-logo'
    // qrcode 为二维码图片地址（可选），悬停时显示
    links: [
      { name: 'RSS', icon: 'czs-rss', url: '/rss.xml', qrcode: '' },
      { name: 'GitHub', icon: 'czs-github-logo', url: 'https://github.com', qrcode: '' },
      { name: 'Moments', icon: 'czs-moments', url: 'https://m.zxd.im', qrcode: '' },
      { name: 'Email', icon: 'czs-message', url: 'mailto:imsunpw@gmail.com', qrcode: '' },
      { name: 'wechat', icon: 'czs-weixin', url: '#', qrcode: '' },      
    ],
  },

  // 网站公告配置
  placard: {
    // 是否启用公告
    enable: true,
    // 公告内容（支持 HTML）
    content: '',
    // 是否启用一言 API（当 content 为空时，自动启用一言）
    hitokoto: false,
  },

  // 功能开关
  features: {
    // 主题切换
    themeSwitch: true,
    // 评论系统
    comments: true,
    // 搜索功能
    search: false,
    // 阅读进度条
    readingProgress: true,
    // 分享功能（二维码）
    share: true,
    // 打赏功能
    donate: true,
  },

  // 评论系统配置
  comments: {
    // 评论系统类型：'artalk' | 'twikoo' | 'none'
    type: 'twikoo',

    // Artalk 配置
    artalk: {
      server: 'https://your-artalk-server.com',
      site: 'Adams',
      placeholder: '来都来了，不想说点什么吗...',
      noComment: '快来成为第一个评论的人吧~',
      sendBtn: '发送',
      darkMode: 'auto',
      // 表情包配置
      emoticons: 'https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json',
      // 其他配置参考 https://artalk.js.org/guide/frontend/config.html
    },

    // Twikoo 配置
    twikoo: {
      envId: 'https://t.imsun.org',
      region: 'ap-shanghai',
      lang: 'zh-CN',
      // 其他配置参考 https://twikoo.js.org/
    },
  },

  // 打赏配置
  donate: {
    // 支付宝收款码
    alipay: '/images/ali.png',
    // 微信收款码
    wechat: '/images/wx.png',
  },

  // 文章列表配置
  posts: {
    // 每页文章数
    perPage: 3,
    // 显示摘要
    showExcerpt: true,
    // 显示缩略图
    showThumbnail: true,
    // 显示阅读时间
    showReadingTime: true,
    // 显示标签
    showTags: true,
  },

  // SEO 配置
  seo: {
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
    twitterSite: '',
  },

  // 分析和统计
  analytics: {
    // Google Analytics
    googleAnalytics: '',
    // 百度统计
    baiduAnalytics: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;

// 导出类型以便在其他地方使用
export type ThemeMode = 'light' | 'sepia' | 'night';
export type FontType = 'sans-serif' | 'serif';
