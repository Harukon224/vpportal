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
      { text: 'Snippets', link: 'https://harukon224.github.io/SnippetsPortal/' }
    ]
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
  collapsed: false
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
