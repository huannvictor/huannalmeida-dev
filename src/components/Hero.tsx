'use client'

import {Download, FileDownIcon, Send} from 'lucide-react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiGitBranchFill,
  RiPaletteFill,
} from 'react-icons/ri'

import {Button} from '../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import DevImg from './DevImg'
import Badge from './DynamicBadge'
import Socials from './Socials'

const Hero = () => {
  const [repos, setRepos] = useState(0)

  useEffect(() => {
    fetch('https://api.github.com/users/huannvictor')
      .then((response) => response.json())
      .then((data) => setRepos(Number(data.public_repos)))
  })

  return (
    <section className="mb-12 bg-hero bg-cover bg-bottom bg-no-repeat dark:bg-none lg:mb-36 lg:pt-28">
      <div className="mx-auto w-full px-8 lg:max-w-[90vw]">
        <div className="flex justify-between gap-x-8">
          <div className="mx-auto flex max-w-[480px] flex-col justify-center text-center lg:mx-0 lg:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Huann Almeida</h1>
            <p className="subtitle mx-auto max-w-[490px] lg:mx-0">
              Enthusiast of React and frontend, I&apos;m on the lookout for
              exciting challenges to craft amazing experiences.
              <br />
              <span className="text-primary">
                Let&apos;s build something awesome together?
              </span>
            </p>
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row lg:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="gap-x-2">
                    Download CV
                    <Download size={18} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex w-full flex-col">
                  <DialogHeader>
                    <DialogTitle>Download my CV</DialogTitle>
                    <DialogDescription>
                      Chose the language you prefer.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center gap-x-2 md:flex-row">
                    <Link target="_blank" href="/files/CV_HuannAlmeida_EN.pdf">
                      <Button
                        variant="link"
                        className="flex items-center gap-x-2"
                      >
                        English Version
                        <FileDownIcon />
                      </Button>
                    </Link>
                    <Link target="_blank" href="/files/CV_HuannAlmeida_PT.pdf">
                      <Button
                        variant="link"
                        className="flex items-center gap-x-2"
                      >
                        Versão em Português
                        <FileDownIcon />
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto lg:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="relative hidden lg:ml-32 lg:flex">
            <div className="absolute -right-2 -top-1 size-[400px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark" />

            <Badge
              containerStyles="absolute top-[24%] -left-[7rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            />

            <Badge
              containerStyles="absolute top-[18rem] -left-[1rem]"
              icon={<RiPaletteFill />}
              endCountNum={3}
              endCountText="K"
              badgeText="Interactive Designs"
            />

            <Badge
              containerStyles="absolute top-[9rem] -right-[3rem]"
              icon={<RiGitBranchFill />}
              endCountNum={repos}
              badgeText="Repos With Projects"
            />

            <DevImg
              containerStyles="bg-hero_shape w-[408px] h-[370px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>

        <div className="absolute left-2/4 hidden animate-bounce lg:flex">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
