import styled from 'styled-components'

export const BlogContainer = styled.div``

export const PostContent = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto 0;
  /* padding: 0 1.5rem; */
`

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const PostContainer = styled.article`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-title']};
  }
  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    white-space: nowrap;
  }
  p {
    margin-top: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const PostList = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
