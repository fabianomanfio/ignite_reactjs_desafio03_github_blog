import styled from 'styled-components'
import Cover from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  background-image: url(${Cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 18.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(18.5rem - 6.625rem);

  img {
    height: 6.125rem;
    width: 9.25rem;
  }
`
