import { Download, FileDownIcon, Send } from "lucide-react"
import Link from "next/link"
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiPaletteFill,
  RiLightbulbFlashFill
} from 'react-icons/ri'
import Badge from "./Badge"
import DevImg from "./DevImg"
import Socials from "./Socials"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Huann Almeida</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Enthusiast of React and frontend, I'm on the lookout for exciting challenges to craft amazing experiences.
              <br />
              <span className="text-primary">Let's build something awesome together?</span>
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href='/contact'>
                <Button className="gap-x-2">
                  Contact-me <Send size={18} />
                </Button>
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='secondary' className="gap-x-2">
                    Download CV
                    <Download size={18} />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Download my CV</DialogTitle>
                    <DialogDescription>
                      Chose the language you prefer.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center gap-x-2">
                    <Link target="_blank" href="/files/CV_HuannAlmeida_EN.pdf">
                      <Button variant='link' className="flex items-center gap-x-2">
                        English Version
                        <FileDownIcon />
                      </Button>
                    </Link>
                    <Link target="_blank" href="/files/CV_HuannAlmeida_PT.pdf">
                      <Button variant="link" className="flex items-center gap-x-2">
                        Versão em Português
                        <FileDownIcon />
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>

            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark size-[500px] bg-no-repeat absolute -top-1 -right-2" />

            <Badge
              containerStyles="absolute top-[24%] -left-[7rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            />

            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiPaletteFill />}
              endCountNum={3}
              endCountText="K"
              badgeText="Interactive Designs"
            />

            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiLightbulbFlashFill />}
              endCountNum={2}
              endCountText="K"
              badgeText="Creative Solutions"
            />

            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>

        <div className="hidden lg:flex absolute left-2/4 animate-bounce">
          <RiArrowDownSLine
            className="text-3xl text-primary"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero