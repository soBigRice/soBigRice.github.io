<template>
  <section class="section reveal" style="--delay: 0.05s">
    <div class="section-head">
      <div>
        <p class="eyebrow">项目展示</p>
        <h2>最近在做的事情</h2>
      </div>
      <el-button round>查看项目</el-button>
    </div>

    <el-row :gutter="18">
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="glass-card project-card" shadow="never">
          <p class="project-title">Studio Notes</p>
          <p class="muted">为独立创作者打造的写作 + 发布工具集。</p>
          <el-space wrap size="small">
            <el-tag effect="plain">Vue</el-tag>
            <el-tag effect="plain">Vite</el-tag>
            <el-tag effect="plain">Design System</el-tag>
          </el-space>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="glass-card project-card" shadow="never">
          <p class="project-title">Signal Board</p>
          <p class="muted">一个用于整理灵感和阅读笔记的可视化面板。</p>
          <el-space wrap size="small">
            <el-tag effect="plain">TypeScript</el-tag>
            <el-tag effect="plain">Motion</el-tag>
            <el-tag effect="plain">Docs</el-tag>
          </el-space>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="glass-card project-card" shadow="never">
          <p class="project-title">Atlas Blog</p>
          <p class="muted">个人博客模板，支持模块化内容和专栏。</p>
          <el-space wrap size="small">
            <el-tag effect="plain">SEO</el-tag>
            <el-tag effect="plain">CMS</el-tag>
            <el-tag effect="plain">Performance</el-tag>
          </el-space>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="glass-card project-card" shadow="never">
          <p class="project-title">Field Journal</p>
          <p class="muted">一套用于记录旅行故事的轻量化网页模板。</p>
          <el-space wrap size="small">
            <el-tag effect="plain">Storytelling</el-tag>
            <el-tag effect="plain">Illustration</el-tag>
            <el-tag effect="plain">Design</el-tag>
          </el-space>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>
