<script setup lang="ts">
import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import { DateTime } from 'luxon';
import { mdiChevronRight, mdiFileDocumentPlusOutline, mdiFileDocumentRefreshOutline } from '@mdi/js';

const { Layout } = DefaultTheme;
const { frontmatter, site } = useData();
const route = useRoute();

const base = site.value.base || '/';

const pageFiles = import.meta.glob('/**/*.md');
const allPathsNoExt = new Set(
  Object.keys(pageFiles).map(p => p.replace(/\.md$/, ''))
);

const segments = computed(() => {
  const path = route.data.filePath;
  return path.replace(/\.md$/, '').split('/');
});

const breadcrumbs = computed(() => {
  let acc = '';
  const items: { title: string; href?: string }[] = [];

  segments.value.forEach((seg, i) => {
    acc = acc ? `${acc}/${seg}` : seg;
    const indexPath = `/${acc}/index`;
    const hasIndex = allPathsNoExt.has(indexPath);

    const isLast = i === segments.value.length - 1;
    const isIndexPage = route.data.filePath.endsWith('index.md');
    if (isLast && isIndexPage) return;

    items.push({
      title: seg,
      href: hasIndex ? `${base}${acc}/` : undefined
    });
  });

  items.unshift({
    title: 'Home',
    href: base
  });

  return items;
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
          style="flex-wrap: wrap;"
        >
          <template #divider>
            <v-icon :icon="mdiChevronRight"></v-icon>
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