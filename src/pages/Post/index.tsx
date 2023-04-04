import { useParams } from 'react-router-dom'
import { PostHeader } from './Components/PostHeader'
import { PostBody, PostContainer } from './styled'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../contexts/PostsContext'
import { useEffect } from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export function Post() {
  const { post, fetchPost } = useContextSelector(PostsContext, (context) => {
    return context
  })

  const { id } = useParams()

  useEffect(() => {
    fetchPost(id as string)
  }, [fetchPost, id])

  return (
    <PostContainer>
      <PostHeader post={post!} />

      <PostBody>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={post?.body!}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          className="line-break"
        ></ReactMarkdown>
      </PostBody>
    </PostContainer>
  )
}
