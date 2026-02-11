<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

const isDark = ref(
  localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
)

watch(
  isDark,
  (val) => {
    const mode = val ? 'dark' : 'light'
    document.documentElement.dataset.theme = mode
    localStorage.setItem('theme', mode)
  },
  { immediate: true }
)
</script>

<template>
  <el-container class="page">
    <el-header height="auto">
      <el-card class="glass-card header-card" shadow="never">
        <div class="header-content">
          <div class="brand">
            <span class="brand-mark">S</span>
            <div>
              <p class="brand-title">你的名字</p>
              <p class="brand-subtitle">写作 · 产品 · 设计</p>
            </div>
          </div>
          <el-menu
            :default-active="route.path"
            mode="horizontal"
            router
            class="nav-menu"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/blog">博客</el-menu-item>
            <el-menu-item index="/projects">项目</el-menu-item>
            <el-menu-item index="/gallery">相册</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
          </el-menu>
          <div class="header-actions">
            <el-switch
              v-model="isDark"
              inline-prompt
              active-text="🌙"
              inactive-text="☀️"
              size="large"
            />
            <el-button type="primary" round>联系我</el-button>
          </div>
        </div>
      </el-card>
    </el-header>

    <el-main class="page-main">
      <RouterView />
    </el-main>

    <el-footer height="auto">
      <el-card class="glass-card footer-card" shadow="never">
        <div class="footer-content">
          <div>
            <p class="brand-title">你的名字</p>
            <p class="muted">让主页成为你持续产出的记录。</p>
          </div>
          <div class="footer-links">
            <a href="#">微博</a>
            <a href="#">GitHub</a>
            <a href="#">Email</a>
          </div>
        </div>
      </el-card>
    </el-footer>
  </el-container>
</template>
