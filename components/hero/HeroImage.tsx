'use client'

import {
  RiBriefcase4Fill,
  RiPaletteFill,
  RiGitBranchFill,
} from 'react-icons/ri'

import Badge from '../Badge'
import DevImg from '../DevImg'

import { useEffect, useState } from 'react'
import { content } from './content'

export default function HeroImage() {
  const [repos, setRepos] = useState(0)

  useEffect(() => {
    fetch('https://api.github.com/users/huannvictor')
      .then((response) => response.json())
      .then((data) => setRepos(Number(data.public_repos)))
  })

  return (
    <div className="hidden lg:flex lg:ml-32 relative">
      <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark size-[400px] bg-no-repeat absolute -top-1 -right-2" />

      <Badge
        containerStyles="absolute top-[24%] -left-[7rem]"
        icon={<RiBriefcase4Fill />}
        endCountNum={3}
        badgeText={content.en.heroBadges.experience}
      />

      <Badge
        containerStyles="absolute top-[18rem] -left-[1rem]"
        icon={<RiPaletteFill />}
        endCountNum={3}
        endCountText="K"
        badgeText={content.en.heroBadges.interactiveDesigns}
      />

      <Badge
        containerStyles="absolute top-[9rem] -right-[3rem]"
        icon={<RiGitBranchFill />}
        endCountNum={repos}
        badgeText={content.en.heroBadges.repos}
      />

      <DevImg
        containerStyles="bg-hero_shape w-[408px] h-[370px] bg-no-repeat relative bg-bottom"
        imgSrc="/hero/developer.png"
      />
    </div>
  )
}
