import {
  CodeCss,
  Config,
  ConfigOption,
  Footers,
  StaticTextDefault,
  ToolbarNames
} from './type';

export const prefix = 'md-editor';

// 编辑器ID
export const defaultEditorId = 'md-editor-rt';

// 字体链接
export const iconfontSvgUrl = 'https://at.alicdn.com/t/c/font_2605852_rfu1p40qggh.js';
export const iconfontClassUrl = 'https://at.alicdn.com/t/c/font_2605852_rfu1p40qggh.css';

export const cdnBase = 'https://cdnjs.cloudflare.com/ajax/libs';

// 代码高亮cdn链接
export const highlightUrl = `${cdnBase}/highlight.js/11.8.0/highlight.min.js`;

// 美化代码cdn连接
export const prettierUrl = {
  main: `${cdnBase}/prettier/2.8.0/standalone.js`,
  markdown: `${cdnBase}/prettier/2.8.0/parser-markdown.js`
};

export const cropperUrl = {
  css: `${cdnBase}/cropperjs/1.5.13/cropper.min.css`,
  js: `${cdnBase}/cropperjs/1.5.13/cropper.min.js`
};

export const screenfullUrl = `${cdnBase}/screenfull.js/5.2.0/screenfull.min.js`;

// 所有的编辑器功能点
export const allToolbar: Array<ToolbarNames> = [
  'bold',
  'underline',
  'italic',
  'strikeThrough',
  '-',
  'title',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  'katex',
  '-',
  'revoke',
  'next',
  'save',
  '=',
  'prettier',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'previewOnly',
  'htmlPreview',
  'catalog',
  'github'
];

export const allFooter: Array<Footers> = ['markdownTotal', '=', 'scrollSwitch'];

export const staticTextDefault: StaticTextDefault = {
  'zh-CN': {
    toolbarTips: {
      bold: '加粗',
      underline: '下划线',
      italic: '斜体',
      strikeThrough: '删除线',
      title: '标题',
      sub: '下标',
      sup: '上标',
      quote: '引用',
      unorderedList: '无序列表',
      orderedList: '有序列表',
      task: '任务列表',
      codeRow: '行内代码',
      code: '块级代码',
      link: '链接',
      image: '图片',
      table: '表格',
      mermaid: 'mermaid图',
      katex: 'katex公式',
      revoke: '后退',
      next: '前进',
      save: '保存',
      prettier: '美化',
      pageFullscreen: '浏览器全屏',
      fullscreen: '屏幕全屏',
      preview: '预览',
      previewOnly: '仅预览',
      htmlPreview: 'html代码预览',
      catalog: '目录',
      github: '源码地址'
    },
    titleItem: {
      h1: '一级标题',
      h2: '二级标题',
      h3: '三级标题',
      h4: '四级标题',
      h5: '五级标题',
      h6: '六级标题'
    },
    imgTitleItem: {
      link: '添加链接',
      upload: '上传图片',
      clip2upload: '裁剪上传'
    },
    linkModalTips: {
      linkTitle: '添加链接',
      imageTitle: '添加图片',
      descLabel: '链接描述：',
      descLabelPlaceHolder: '请输入描述...',
      urlLabel: '链接地址：',
      urlLabelPlaceHolder: '请输入链接...',
      buttonOK: '确定'
    },
    clipModalTips: {
      title: '裁剪图片上传',
      buttonUpload: '上传'
    },
    copyCode: {
      text: '复制代码',
      successTips: '已复制！',
      failTips: '复制失败！'
    },
    mermaid: {
      flow: '流程图',
      sequence: '时序图',
      gantt: '甘特图',
      class: '类图',
      state: '状态图',
      pie: '饼图',
      relationship: '关系图',
      journey: '旅程图'
    },
    katex: {
      inline: '行内公式',
      block: '块级公式'
    },
    footer: {
      markdownTotal: '字数',
      scrollAuto: '同步滚动'
    }
  },
  'en-US': {
    toolbarTips: {
      bold: 'bold',
      underline: 'underline',
      italic: 'italic',
      strikeThrough: 'strikeThrough',
      title: 'title',
      sub: 'subscript',
      sup: 'superscript',
      quote: 'quote',
      unorderedList: 'unordered list',
      orderedList: 'ordered list',
      task: 'task list',
      codeRow: 'inline code',
      code: 'block-level code',
      link: 'link',
      image: 'image',
      table: 'table',
      mermaid: 'mermaid',
      katex: 'formula',
      revoke: 'revoke',
      next: 'undo revoke',
      save: 'save',
      prettier: 'prettier',
      pageFullscreen: 'fullscreen in page',
      fullscreen: 'fullscreen',
      preview: 'preview',
      previewOnly: 'preview only',
      htmlPreview: 'html preview',
      catalog: 'catalog',
      github: 'source code'
    },
    titleItem: {
      h1: 'Lv1 Heading',
      h2: 'Lv2 Heading',
      h3: 'Lv3 Heading',
      h4: 'Lv4 Heading',
      h5: 'Lv5 Heading',
      h6: 'Lv6 Heading'
    },
    imgTitleItem: {
      link: 'Add Img Link',
      upload: 'Upload Img',
      clip2upload: 'Clip Upload'
    },
    linkModalTips: {
      linkTitle: 'Add Link',
      imageTitle: 'Add Image',
      descLabel: 'Desc:',
      descLabelPlaceHolder: 'Enter a description...',
      urlLabel: 'Link:',
      urlLabelPlaceHolder: 'Enter a link...',
      buttonOK: 'OK'
    },
    clipModalTips: {
      title: 'Crop Image',
      buttonUpload: 'Upload'
    },
    copyCode: {
      text: 'Copy',
      successTips: 'Copied!',
      failTips: 'Copy failed!'
    },
    mermaid: {
      flow: 'flow',
      sequence: 'sequence',
      gantt: 'gantt',
      class: 'class',
      state: 'state',
      pie: 'pie',
      relationship: 'relationship',
      journey: 'journey'
    },
    katex: {
      inline: 'inline',
      block: 'block'
    },
    footer: {
      markdownTotal: 'Character Count',
      scrollAuto: 'Scroll Auto'
    }
  }
};

export const mermaidUrl = `${cdnBase}/mermaid/10.6.1/mermaid.esm.min.mjs`;
// export const mermaidUrl = `${cdnBase}/mermaid/9.4.0/mermaid.min.js`;

export const katexUrl = {
  js: `${cdnBase}/KaTeX/0.16.9/katex.min.js`,
  css: `${cdnBase}/KaTeX/0.16.9/katex.min.css`
};

export const codeCss: CodeCss = {
  a11y: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/a11y-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/a11y-dark.min.css`
  },
  atom: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/atom-one-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/atom-one-dark.min.css`
  },
  github: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/github.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/github-dark.min.css`
  },
  gradient: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/gradient-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/gradient-dark.min.css`
  },
  kimbie: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/kimbie-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/kimbie-dark.min.css`
  },
  paraiso: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/paraiso-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/paraiso-dark.min.css`
  },
  qtcreator: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/qtcreator-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/qtcreator-dark.min.css`
  },
  stackoverflow: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/stackoverflow-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/stackoverflow-dark.min.css`
  }
};

export const defaultProps = {
  modelValue: '',
  theme: 'light',
  className: '',
  onChange: () => {},
  onSave: () => {},
  pageFullscreen: false,
  preview: true,
  htmlPreview: false,
  language: 'zh-CN',
  toolbars: allToolbar,
  toolbarsExclude: [],
  noPrettier: false,
  onHtmlChanged: () => {},
  onGetCatalog: () => {},
  tabWidth: 2,
  showCodeRowNumber: false,
  previewTheme: 'default',
  mdHeadingId: (text: string) => text,
  style: {},
  tableShape: [6, 4],
  noMermaid: false,
  sanitize: (text: string) => text,
  placeholder: '',
  noKatex: false,
  defToolbars: [],
  onError: () => {},
  codeTheme: 'atom',
  footers: allFooter,
  scrollAuto: true,
  defFooters: [],
  noIconfont: false,
  formatCopiedText: (t: string) => t,
  noUploadImg: false,
  codeStyleReverse: true,
  codeStyleReverseList: ['default', 'mk-cute'],
  autoFocus: false,
  disabled: false,
  readOnly: false,
  autoDetectCode: false,
  noHighlight: false,
  noImgZoomIn: false,
  inputBoxWitdh: '50%',
  sanitizeMermaid: (h: string) => Promise.resolve(h),
  transformImgUrl: (t: string) => t,
  transformPreviewHtml: (t: string) => t
};

export const configOption: ConfigOption = {
  editorExtensions: {},
  editorConfig: {},
  codeMirrorExtensions: (_theme, innerExtensions) => innerExtensions,
  markdownItConfig: () => {},
  markdownItPlugins: (s) => s,
  iconfontType: 'svg',
  mermaidConfig: (c) => c
};

export const config: Config = (option) => {
  type OptionKey = keyof typeof option;

  if (option) {
    for (const key in option) {
      const optionItem = option[key as OptionKey] as any;

      if (optionItem) {
        configOption[key as OptionKey] = optionItem;
      }
    }
  }
};

/**
 * 拖拽时最小的宽度
 */
export const MinInputBoxWidth = 170;
