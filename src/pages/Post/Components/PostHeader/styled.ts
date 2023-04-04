import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  width: 100%;
  width: 54rem;
  height: 10.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 6px;

  margin-top: -9.5rem;

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 2rem;
  }
`

export const LinkContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 11.25px;
    height: 11.25px;
    margin-left: 0.25rem;
  }
`

export const PostData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;
  margin: 0;

  img {
    width: 18px;
    height: 18px;
  }
`

export const ProfileUserName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const PostTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const PostComment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

// export const ProfileImg = styled.img`
//   size: 9.25rem 9.25rem;
//   border-radius: 8px;
//   margin-right: 2rem;
// `

// export const ProfileData = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   justify-content: space-between;
//   gap: 0.5rem;
//   height: 9.25rem;

//   span {
//     color: ${(props) => props.theme['base-text']};
//   }
// `

// export const ProfileHeader = styled.div`
//   display: flex;
//   align-items: top;
//   justify-content: space-between;

//   strong {
//     font-size: 2rem;
//   }

//   a {
//     color: ${(props) => props.theme.blue};
//     text-decoration: none;
//     font-size: 0.75rem;
//     height: 1rem;

//     img {
//       width: 11.25px;
//       height: 11.25px;
//       margin-left: 0.25rem;
//     }

//     &:hover {
//       text-decoration: underline;
//   }
// `

// export const ProfileInfo = styled.div`

// `

// export const ProfileCompany = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `

// export const ProfileFollowers = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `
