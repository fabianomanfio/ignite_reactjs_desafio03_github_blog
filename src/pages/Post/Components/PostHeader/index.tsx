/* eslint-disable camelcase */
import { NavLink } from 'react-router-dom'
import {
  LinkContainer,
  PostComment,
  PostData,
  PostHeaderContainer,
  PostTime,
  ProfileUserName,
} from './styled'
import linkGitHub from '../../../../assets/link.svg'
import logoGitHub from '../../../../assets/github.svg'
import linkVoltar from '../../../../assets/chevron-left.svg'
import calendar from '../../../../assets/calendar-day.svg'
import comment from '../../../../assets/comment.svg'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Posts } from '../../../../contexts/PostsContext'

interface PostHeaderProps {
  post: Posts
}

export function PostHeader({ post }: PostHeaderProps) {
  let timeDistanceToNow

  if (post?.created_at) {
    timeDistanceToNow = formatDistanceToNow(new Date(post.created_at), {
      addSuffix: true,
      locale: ptBR,
    })
  }

  const commentsFormated = `${post?.comments} ${
    post?.comments === 1 ? 'comentário' : 'comentários'
  }`

  return (
    <PostHeaderContainer>
      <LinkContainer>
        <NavLink to="/">
          <img src={linkVoltar} alt="" />
          <span>VOLTAR</span>
        </NavLink>
        <a href={post?.html_url} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <img src={linkGitHub} alt="" />
        </a>
      </LinkContainer>
      <strong>{post?.title}</strong>
      <PostData>
        <ProfileUserName>
          <img src={logoGitHub} alt="" />
          <span>{post?.user.login}</span>
        </ProfileUserName>
        <PostTime>
          <img src={calendar} alt="" />
          {timeDistanceToNow}
        </PostTime>
        <PostComment>
          <img src={comment} alt="" />
          {commentsFormated}
        </PostComment>
      </PostData>
    </PostHeaderContainer>
  )
}
