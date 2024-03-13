'use client';

import Link from "next/link";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiWhatsappFill
} from 'react-icons/ri';

interface SocialsProps {
  containerStyles: string
  iconStyles: string
}

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  },
  {
    path: '/',
    name: <RiWhatsappFill />
  },
  {
    path: '/',
    name: <RiMailFill />
  }
]

const Socials = ({
  containerStyles, iconStyles
}: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`$${iconStyles}`}>
              {icon.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials