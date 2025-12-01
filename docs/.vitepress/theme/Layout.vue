<script setup lang="ts">
import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';
import { DateTime } from 'luxon';
import { mdiChevronRight, mdiFileDocumentPlusOutline, mdiFileDocumentRefreshOutline } from '@mdi/js';

const { Layout } = DefaultTheme
const { frontmatter, page } = useData();

const breadcrumbs = computed(() => {
const parts = page.value.relativePath
    .replace(/\.md$/, '')
    .split('/');

  // 最後の要素が "index" のときは削る
  if (parts[parts.length - 1] === 'index') {
    parts.pop();
  }

  return [
    { title: 'Home' },
    ...parts.map(p => ({ title: p }))
  ];
});

function formatDate(isoDate: string) {
  return DateTime.fromISO(isoDate).toFormat('yyyy-MM-dd');
}
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
        <v-breadcrumbs
          :items="breadcrumbs"
          density="compact"
        >
          <template #divider>
            <v-icon
              :icon="mdiChevronRight"
            ></v-icon>
          </template>
        </v-breadcrumbs>
        <h1>{{ frontmatter.title }}</h1>
        <div
          v-if="frontmatter.createdDate"
          class="flex
                 flex-wrap
                 justify-end"
        >
          <v-icon :icon="mdiFileDocumentPlusOutline"></v-icon>
          <span>{{ formatDate(frontmatter.createdDate) }}</span>
        </div>
        <div
          v-if="frontmatter.updatedDate"
          class="flex
                 flex-wrap
                 justify-end"
        >
          <v-icon :icon="mdiFileDocumentRefreshOutline"></v-icon>
          <span>{{ formatDate(frontmatter.updatedDate) }}</span>
        </div>
        <div
          class="flex
                 flex-wrap
                 gap-1"
        >
          <v-chip v-for="category in frontmatter.categories">{{ category }}</v-chip>
        </div>
      </div>
    </template>
  </Layout>
</template>