import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Posts {
  number: number
  html_url: string
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
}

interface PostContextType {
  posts: Posts[]
  post: Posts | undefined
  fetchPosts: (query?: string) => Promise<void>
  fetchPost: (query: string) => Promise<void>
}

export const PostsContext = createContext({} as PostContextType)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Posts[]>([])
  const [post, setPost] = useState<Posts | undefined>()

  const fetchPosts = useCallback(async (query?: string) => {
    if (!query) {
      query = ''
    }
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:fabianomanfio/ignite_reactjs_desafio03_github_blog ${query}`,
      },
    })

    setPosts(response.data.items)
  }, [])

  const fetchPost = useCallback(async (query: string) => {
    const response = await api.get(
      `repos/fabianomanfio/ignite_reactjs_desafio03_github_blog/issues/${query}`,
      {},
    )

    setPost(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts,
        post,
        fetchPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
