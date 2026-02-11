<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { FolderOpened, PictureFilled } from '@element-plus/icons-vue'

const router = useRouter()

const quote = ref('把平凡的日子过成连续的作品。')
const author = ref('你的名字')
const loadingQuote = ref(false)

const fetchQuote = async () => {
  loadingQuote.value = true
  try {
    const api = 'http://124.223.97.147:8266/'
    const url =
      window.location.protocol === 'https:'
        ? `https://api.allorigins.win/raw?url=${encodeURIComponent(api)}`
        : api

    const res = await fetch(url, { cache: 'no-store' })
    const raw = await res.text()
    let content = raw
    let from = ''
    try {
      const data = JSON.parse(raw)
      content = data.hitokoto || data.text || data.content || raw
      from = data.from_who || data.from || data.author || ''
    } catch {
      // plain text fallback
    }
    quote.value = content || '今日无言，保持专注。'
    author.value = from || '一言'
  } catch {
    quote.value = '网络有点忙，稍后再试。'
    author.value = '系统'
  } finally {
    loadingQuote.value = false
  }
}

onMounted(() => {
  fetchQuote()
})
</script>

<template>
  <section class="hero reveal" style="--delay: 0.05s">
    <div class="hero-copy">
      <p class="eyebrow">个人主页 · Home</p>
      <h1 class="hero-title">让作品说话。</h1>
      <p class="hero-lead">精选项目与影像集，保持节奏、保持质感。</p>
      <div class="hero-actions">
        <el-button type="primary" round :icon="FolderOpened" @click="router.push('/projects')">
          查看项目
        </el-button>
        <el-button round :icon="PictureFilled" @click="router.push('/gallery')">
          浏览相册
        </el-button>
      </div>
    </div>

    <div class="hero-side"></div>
  </section>

  <section class="section reveal" style="--delay: 0.12s">
    <div class="section-head">
      <div>
        <p class="eyebrow">每日一言</p>
        <h2>把一句话留在今天</h2>
      </div>
      <el-button :loading="loadingQuote" round size="small" @click="fetchQuote">换一句</el-button>
    </div>
    <el-card class="glass-card quote-card" shadow="never">
      <p class="quote-text">“{{ quote }}”</p>
      <div class="quote-meta">
        <span class="muted">— {{ author }}</span>
      </div>
    </el-card>
  </section>
</template>
