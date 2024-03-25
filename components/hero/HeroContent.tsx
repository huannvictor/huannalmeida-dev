import Socials from "../Socials";
import HeroButtons from "./HeroButtons";

import { content } from "./content";

export default function HeroContent() {
  return (
    <div className="flex max-w-[480px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
      <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
        {content.en.heroTitle}
      </div>
      <h1 className="h1 mb-4">Hello, my name is Huann Almeida</h1>
      <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
        {content.en.heroPersonalPresentation.text}
        <br />
        <span className="text-primary">{content.en.heroPersonalPresentation.invitation}</span>
      </p>

      <HeroButtons />

      <Socials
        containerStyles="flex gap-x-6 mx-auto lg:mx-0"
        iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
      />
    </div>
  )
}
