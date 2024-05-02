import Socials from '../Socials'
import HeroButtons from './HeroButtons'

import {useTranslations} from 'next-intl'

export default function HeroContent() {
  const t = useTranslations('Hero')
  return (
    <div className="mx-auto flex max-w-[480px] flex-col justify-center text-center lg:mx-0 lg:text-left">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
        {t('heroTitle')}
      </div>
      <h1 className="h1 mb-4">Hello, my name is Huann Almeida</h1>
      <p className="subtitle mx-auto max-w-[490px] lg:mx-0">
        {t('heroPersonalPresentation.text')}
        <br />
        <span className="text-primary">
          {t('heroPersonalPresentation.invitation')}
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
