---
title: Vuetifyプロジェクト セットアップ
categories:
  - Vue.js
  - Vuetify
createdDate: 2025-12-08
---

- ViteでVueプロジェクト作成
- Vuetifyの使用
- vite-plugin-vuetifyで必要なコンポーネントだけバンドル
- アイコンはmdiを使用

---
[[toc]]

## プロジェクト作成
```bash
npm create vite@latest
```

## パッケージのインストール
```bash
npm i vuetify vite-plugin-vuetify
```

```bash
npm i -D @mdi/js
```

## 各パッケージ有効化
::: code-group
```typescript [src/plugins/vuetify.ts]
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
```
:::

::: code-group
```typescript [src/vite.config.ts]
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
	    autoImport: true,
    }),
  ],
});
```
:::

::: code-group
```typescript [src/main.ts]
import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles';
import { vuetify } from './plugins/vuetify';

// Components
import App from './App.vue';

createApp(App).use(vuetify).mount('#app');
```
:::