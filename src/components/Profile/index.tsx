import {
  ProfileCompany,
  ProfileContainer,
  ProfileData,
  ProfileFollowers,
  ProfileHeader,
  ProfileImg,
  ProfileInfo,
  ProfileUserName,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import logoGitHub from '../../assets/github.svg'
import logoCompany from '../../assets/company.svg'
import logoFollowers from '../../assets/followers.svg'
import linkGitHub from '../../assets/link.svg'

interface profileDataProps {
  name?: string
  html_url?: string
  bio?: string
  login?: string
  company?: string
  followers?: number
  // avatar_url: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<profileDataProps>({})

  async function fetchProfile() {
    const response = await api.get('/users/fabianomanfio')

    setProfileData(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <ProfileImg src="https://github.com/fabianomanfio.png" alt="" />
      <ProfileData>
        <ProfileHeader>
          <strong>{profileData.name}</strong>
          <a href={profileData.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <img src={linkGitHub} alt="" />
          </a>
        </ProfileHeader>
        <span>{profileData.bio}</span>
        <ProfileInfo>
          <ProfileUserName>
            <img src={logoGitHub} alt="" />
            <span>{profileData.login}</span>
          </ProfileUserName>
          <ProfileCompany>
            <img src={logoCompany} alt="" />
            <span>{profileData.company}</span>
          </ProfileCompany>
          <ProfileFollowers>
            <img src={logoFollowers} alt="" />
            <span>{profileData.followers} seguidores</span>
          </ProfileFollowers>
        </ProfileInfo>
      </ProfileData>
    </ProfileContainer>
  )
}
