import Socials from '../Socials'
import HeroButtons from './HeroButtons'
import {content} from './content'

export default function HeroContent() {
  return (
    <div className="mx-auto flex max-w-[480px] flex-col justify-center text-center lg:mx-0 lg:text-left">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
        {content.en.heroTitle}
      </div>
      <h1 className="h1 mb-4">Hello, my name is Huann Almeida</h1>
      <p className="subtitle mx-auto max-w-[490px] lg:mx-0">
        {content.en.heroPersonalPresentation.text}
        <br />
        <span className="text-primary">
          {content.en.heroPersonalPresentation.invitation}
        </span>
      </p>

      <HeroButtons />

      <Socials
        containerStyles="flex gap-x-6 mx-auto lg:mx-0"
        iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
      />
    </div>
  )
}
