import { ref } from 'vue'

export interface GithubProfile {
  avatar_url: string
  name: string | null
  login: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
  location: string | null
  blog: string | null
}

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  updated_at: string
}

const profile = ref<GithubProfile | null>(null)
const repos = ref<GithubRepo[]>([])
const loadingProfile = ref(false)
const loadingRepos = ref(false)

const fetchProfile = async () => {
  if (profile.value || loadingProfile.value) return
  loadingProfile.value = true
  try {
    const res = await fetch('https://api.github.com/users/sobigrice', {
      headers: { Accept: 'application/vnd.github+json' },
      cache: 'no-store'
    })
    if (!res.ok) throw new Error(`GitHub: ${res.status}`)
    profile.value = (await res.json()) as GithubProfile
  } catch (e) {
    console.error(e)
  } finally {
    loadingProfile.value = false
  }
}

const fetchRepos = async (limit = 4) => {
  if (repos.value.length || loadingRepos.value) return
  loadingRepos.value = true
  try {
    const res = await fetch(
      `https://api.github.com/users/sobigrice/repos?sort=updated&per_page=${limit}`,
      { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' }
    )
    if (!res.ok) throw new Error(`GitHub: ${res.status}`)
    repos.value = (await res.json()) as GithubRepo[]
  } catch (e) {
    console.error(e)
  } finally {
    loadingRepos.value = false
  }
}

export const useGithub = () => ({
  profile,
  repos,
  loadingProfile,
  loadingRepos,
  fetchProfile,
  fetchRepos
})
