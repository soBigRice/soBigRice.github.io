<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'
import { useGithub } from './composables/useGithub'
import { Link, Message, PhoneFilled } from '@element-plus/icons-vue'

const route = useRoute()
const { profile, fetchProfile } = useGithub()

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

onMounted(fetchProfile)
</script>

<template>
  <el-container class="page">
    <el-header height="auto">
      <el-card class="glass-card header-card" shadow="never">
        <div class="header-content">
          <div class="brand">
            <el-avatar :size="44" :src="profile?.avatar_url" class="brand-avatar">S</el-avatar>
            <div>
              <p class="brand-title">{{ profile?.name || 'sobigrice' }}</p>
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
            <el-button type="primary" round :icon="PhoneFilled">联系我</el-button>
          </div>
        </div>
      </el-card>
    </el-header>

    <el-main class="page-main">
      <RouterView />
    </el-main>

    <el-footer height="auto" class="floating-footer">
      <el-card class="glass-card footer-card" shadow="never">
        <div class="footer-content">
          <div>
            <p class="brand-title">{{ profile?.name || 'sobigrice' }}</p>
            <p class="muted">保持更新 · 前端 · 设计 · 摄影</p>
          </div>
          <div class="footer-links">
            <a href="https://github.com/sobigrice" target="_blank" rel="noopener">
              <el-icon class="icon-github"><Link /></el-icon>
              GitHub
            </a>
            <a href="mailto:1246333567@qq.com">
              <el-icon class="icon-mail"><Message /></el-icon>
              Email
            </a>
          </div>
        </div>
      </el-card>
    </el-footer>
  </el-container>
</template>
