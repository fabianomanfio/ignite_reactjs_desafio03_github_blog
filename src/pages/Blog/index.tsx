import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Profile } from '../../components/Profile'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchForm } from './Components/SearchForm'
import {
  BlogContainer,
  PostContainer,
  PostContent,
  PostHeader,
  PostList,
} from './styles'

export function Blog() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  function timeDistanceToNow(date: string) {
    const dateFormat = formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })

    return dateFormat
  }

  return (
    <BlogContainer>
      <Profile />

      <PostContent>
        <PostHeader>
          <h1>Publicações</h1>
          <span>{posts.length} publicações</span>
        </PostHeader>

        <SearchForm />

        <PostList>
          {posts.map((post) => {
            return (
              <NavLink to={`/post/${post.number}`} key={post.number}>
                <PostContainer>
                  <header>
                    <h2>{post?.title}</h2>
                    <span>{timeDistanceToNow(post?.created_at)}</span>
                  </header>
                  <p>{post?.body}</p>
                </PostContainer>
              </NavLink>
            )
          })}
        </PostList>
      </PostContent>
    </BlogContainer>
  )
}
