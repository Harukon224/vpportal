import tailwindcss from '@tailwindcss/vite'
import { defineConfig, UserConfig, DefaultTheme } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const vitePressOptions: UserConfig<NoInfer<DefaultTheme.Config>> = {
  title: "はるこんポータル",
  base: '/vpportal/',
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'Snippets', link: 'snippets' }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    ssr: {
      noExternal: ['vuetify']
    }
  }
};

const vitePressSidebarOptions: VitePressSidebarOptions = {
  documentRootPath: '/docs',
  useFolderTitleFromIndexFile: true,
  useTitleFromFrontmatter: true,
  useFolderLinkFromIndexFile: true,
  collapsed: false
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
