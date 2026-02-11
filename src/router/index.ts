import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import BlogView from '../views/Blog.vue'
import ProjectsView from '../views/Projects.vue'
import GalleryView from '../views/Gallery.vue'
import AboutView from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/gallery', name: 'gallery', component: GalleryView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
