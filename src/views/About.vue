<script setup lang="ts">
import { onMounted } from 'vue'
import { useGithub } from '../composables/useGithub'

const { profile, loadingProfile, fetchProfile } = useGithub()
onMounted(fetchProfile)
</script>

<template>
  <section class="section reveal" style="--delay: 0.05s">
    <div class="section-head">
      <div>
        <p class="eyebrow">关于我</p>
        <h2>持续更新的动态</h2>
      </div>
    </div>

    <el-row :gutter="18">
      <el-col :xs="24" :md="14">
        <el-card class="glass-card" shadow="never">
          <el-timeline>
            <el-timeline-item timestamp="02.06" placement="top">
              <p class="timeline-title">整理个人主页的内容结构</p>
              <p class="muted">重新梳理了 4 个主要栏目，确保更新路径清晰。</p>
            </el-timeline-item>
            <el-timeline-item timestamp="01.28" placement="top">
              <p class="timeline-title">完成博客视觉系统</p>
              <p class="muted">设定了字体、色板和卡片系统。</p>
            </el-timeline-item>
            <el-timeline-item timestamp="01.12" placement="top">
              <p class="timeline-title">发布第一篇框架型文章</p>
              <p class="muted">分享如何持续维护个人主页。</p>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="10">
        <el-space direction="vertical" :size="16" style="width: 100%">
          <el-card class="glass-card" shadow="never">
            <div class="github-card" v-loading="loadingProfile">
              <div class="github-header">
                <el-avatar :size="64" :src="profile?.avatar_url" />
                <div>
                  <p class="github-name">{{ profile?.name || 'sobigrice' }}</p>
                  <p class="muted">@{{ profile?.login || 'sobigrice' }}</p>
                  <p class="muted" v-if="profile?.location">{{ profile.location }}</p>
                </div>
                <el-button
                  type="primary"
                  plain
                  round
                  size="small"
                  tag="a"
                  :href="profile?.html_url || 'https://github.com/sobigrice'"
                  target="_blank"
                  rel="noopener"
                >
                  查看主页
                </el-button>
              </div>
              <p class="github-bio" v-if="profile?.bio">{{ profile.bio }}</p>
              <div class="github-stats">
                <span>仓库 {{ profile?.public_repos ?? '—' }}</span>
                <span>粉丝 {{ profile?.followers ?? '—' }}</span>
                <span>关注 {{ profile?.following ?? '—' }}</span>
              </div>
            </div>
          </el-card>

          <el-card class="glass-card" shadow="never">
            <p class="eyebrow">订阅更新</p>
            <h3>每两周一次，分享可操作的灵感</h3>
            <p class="muted">涵盖写作、设计、产品与独立创作。</p>
            <div class="subscribe-row">
              <el-input placeholder="你的邮箱" />
              <el-button type="primary" round>订阅</el-button>
            </div>
            <p class="fine">不会发送垃圾邮件，随时可取消。</p>
          </el-card>
        </el-space>
      </el-col>
    </el-row>
  </section>
</template>
