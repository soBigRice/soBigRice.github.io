<script setup lang="ts">
const photos = [
  {
    title: '清晨海面',
    location: '厦门',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '森林光束',
    location: '阿尔卑斯',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '雾中山谷',
    location: '云南',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '黄昏公路',
    location: '加州',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '星空夜',
    location: '青海',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '湖畔清晨',
    location: '瑞士',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80'
  }
]

const previewList = photos.map((photo) => photo.src)
</script>

<template>
  <section class="section reveal" style="--delay: 0.05s">
    <div class="section-head">
      <div>
        <p class="eyebrow">摄影相册</p>
        <h2>把光影故事单独收藏</h2>
        <p class="muted">这里集中展示我的摄影作品，记录城市、自然与旅途中的片刻。</p>
      </div>
      <el-button round>查看全集</el-button>
    </div>

    <el-row :gutter="18">
      <el-col
        v-for="(photo, index) in photos"
        :key="photo.src"
        :xs="24"
        :sm="12"
        :md="8"
      >
        <el-card class="glass-card gallery-card" shadow="never">
          <el-image
            class="gallery-image"
            :src="photo.src"
            :preview-src-list="previewList"
            :initial-index="index"
            fit="cover"
          />
          <div class="gallery-meta">
            <div>
              <p class="gallery-title">{{ photo.title }}</p>
              <p class="muted">{{ photo.location }} · {{ photo.year }}</p>
            </div>
            <el-tag effect="plain">摄影</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>
