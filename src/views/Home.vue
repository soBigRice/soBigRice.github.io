<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="hero reveal" style="--delay: 0.05s">
    <div class="hero-copy">
      <p class="eyebrow">个人主页 · Home</p>
      <h1 class="hero-title">用清晰的思考，记录有温度的作品。</h1>
      <p class="hero-lead">
        这是一个简洁的入口页，快速展示你最重要的内容。点击下方模块即可进入详细页面。
      </p>
      <div class="hero-actions">
        <el-button type="primary" round @click="router.push('/blog')">浏览博客</el-button>
        <el-button round @click="router.push('/projects')">查看项目</el-button>
      </div>
      <el-space wrap size="small">
        <el-tag effect="plain">写作</el-tag>
        <el-tag effect="plain">前端</el-tag>
        <el-tag effect="plain">生活记录</el-tag>
        <el-tag effect="plain">产品思考</el-tag>
        <el-tag effect="plain">摄影</el-tag>
      </el-space>
    </div>

    <el-card class="glass-card" shadow="never">
      <div class="status">
        <span class="dot"></span>
        正在更新中 · 2026
      </div>
      <h2>本周精选</h2>
      <p class="muted">如何构建一个让人愿意停留的个人主页？</p>
      <div class="meta">
        <el-tag effect="plain">8 min read</el-tag>
        <el-tag effect="plain">UI/UX</el-tag>
      </div>
      <div class="card-footer">
        <el-button type="primary" round @click="router.push('/blog')">继续阅读</el-button>
        <div class="mini-avatars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </el-card>
  </section>

  <section class="stat-grid reveal" style="--delay: 0.1s">
    <el-card class="glass-card stat-card" shadow="never">
      <el-statistic title="发布文章" value="42" />
    </el-card>
    <el-card class="glass-card stat-card" shadow="never">
      <el-statistic title="开源项目" value="12" />
    </el-card>
    <el-card class="glass-card stat-card" shadow="never">
      <el-statistic title="持续更新年" value="5" />
    </el-card>
  </section>

  <section class="section reveal" style="--delay: 0.12s">
    <div class="section-head">
      <div>
        <p class="eyebrow">每日一言</p>
        <h2>把一句话留在今天</h2>
      </div>
    </div>
    <el-card class="glass-card quote-card" shadow="never">
      <p class="quote-text">“把平凡的日子过成连续的作品。”</p>
      <div class="quote-meta">
        <span class="muted">— 你的名字</span>
        <el-tag effect="plain">Daily Quote</el-tag>
      </div>
    </el-card>
  </section>

  <section class="section reveal" style="--delay: 0.15s">
    <div class="section-head">
      <div>
        <p class="eyebrow">快速入口</p>
        <h2>想看的内容在这里</h2>
      </div>
    </div>
    <div class="summary-grid">
      <el-card class="glass-card summary-card" shadow="never">
        <p class="summary-title">博客</p>
        <p class="muted">整理写作与知识结构，持续发布可复用内容。</p>
        <el-button round @click="router.push('/blog')">进入博客</el-button>
      </el-card>
      <el-card class="glass-card summary-card" shadow="never">
        <p class="summary-title">项目</p>
        <p class="muted">记录正在进行的产品、开源与设计实验。</p>
        <el-button round @click="router.push('/projects')">查看项目</el-button>
      </el-card>
      <el-card class="glass-card summary-card" shadow="never">
        <p class="summary-title">相册</p>
        <p class="muted">分享摄影作品与旅途中的光影记录。</p>
        <el-button round @click="router.push('/gallery')">进入相册</el-button>
      </el-card>
      <el-card class="glass-card summary-card" shadow="never">
        <p class="summary-title">关于</p>
        <p class="muted">了解我的背景、动态与订阅方式。</p>
        <el-button round @click="router.push('/about')">了解更多</el-button>
      </el-card>
    </div>
  </section>
</template>
