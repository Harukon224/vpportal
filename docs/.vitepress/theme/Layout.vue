<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';
import { DateTime } from 'luxon';
import { mdiFileDocumentPlusOutline, mdiFileDocumentRefreshOutline } from '@mdi/js';

const { Layout } = DefaultTheme
const { frontmatter } = useData();

function formatDate(isoDate: string) {
  return DateTime.fromISO(isoDate).toFormat('yyyy-MM-dd');
}

</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
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