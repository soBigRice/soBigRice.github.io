<template>
  <section class="section reveal" style="--delay: 0.05s">
    <div class="section-head">
      <div>
        <p class="eyebrow">最新文章</p>
        <h2>最近写下的想法</h2>
      </div>
      <el-button round>查看归档</el-button>
    </div>

    <el-row :gutter="18">
      <el-col :xs="24" :md="16">
        <div class="post-list">
          <el-card class="glass-card post-card" shadow="never">
            <div class="post-row">
              <div>
                <p class="post-title">设计一个可持续更新的个人主页</p>
                <p class="muted">从结构到内容，把主页当作长期作品来运营。</p>
              </div>
              <div class="post-meta">
                <el-tag effect="plain">2026.02.01</el-tag>
                <el-tag effect="plain">7 min</el-tag>
              </div>
            </div>
          </el-card>
          <el-card class="glass-card post-card" shadow="never">
            <div class="post-row">
              <div>
                <p class="post-title">如何组织个人知识库</p>
                <p class="muted">把零散想法变成可检索的写作素材。</p>
              </div>
              <div class="post-meta">
                <el-tag effect="plain">2026.01.18</el-tag>
                <el-tag effect="plain">6 min</el-tag>
              </div>
            </div>
          </el-card>
          <el-card class="glass-card post-card" shadow="never">
            <div class="post-row">
              <div>
                <p class="post-title">从博客到产品：我的写作工作流</p>
                <p class="muted">把写作流程融入日常设计与开发任务。</p>
              </div>
              <div class="post-meta">
                <el-tag effect="plain">2026.01.05</el-tag>
                <el-tag effect="plain">9 min</el-tag>
              </div>
            </div>
          </el-card>
          <el-card class="glass-card post-card" shadow="never">
            <div class="post-row">
              <div>
                <p class="post-title">写作节奏：每周一篇的执行方法</p>
                <p class="muted">通过模板化流程保证内容持续产出。</p>
              </div>
              <div class="post-meta">
                <el-tag effect="plain">2025.12.28</el-tag>
                <el-tag effect="plain">5 min</el-tag>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :md="8">
        <div class="panel-stack">
          <el-card class="glass-card" shadow="never">
            <p class="eyebrow">专栏</p>
            <h3>每周一篇可复用的框架</h3>
            <p class="muted">专注于前端、视觉设计、个人品牌的可执行方法。</p>
            <el-button type="primary" round>加入专栏</el-button>
          </el-card>
          <el-card class="glass-card highlight-card" shadow="never">
            <p class="eyebrow">推荐阅读</p>
            <h3>做一个有作品感的主页</h3>
            <p class="muted">把主页当作长期作品，用结构化内容打动访客。</p>
            <div class="meta">
              <el-tag effect="plain">专题</el-tag>
              <el-tag effect="plain">12 篇</el-tag>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
