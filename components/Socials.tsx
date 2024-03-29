'use client'

import Link from 'next/link'
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiWhatsappFill,
} from 'react-icons/ri'

interface SocialsProps {
  containerStyles: string
  iconStyles: string
}

const icons = [
  {
    path: 'https://www.linkedin.com/in/huannalmeida/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/huannvictor',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/huannvictor/',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://wa.me/5583999802317',
    name: <RiWhatsappFill />,
  },
  {
    path: 'mailto:huannvictor@gmail.com',
    name: <RiMailFill />,
  },
]

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank" key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
