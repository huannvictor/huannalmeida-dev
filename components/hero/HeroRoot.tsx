import { RiArrowDownSLine } from 'react-icons/ri'

export default function HeroRoot({ children }: HeroRootProps) {
  return (
    <section
      className={
        'mb-12 lg:mb-36 lg:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'
      }
    >
      <div className="w-full mx-auto px-8 lg:max-w-[90vw]">
        <div className="flex justify-between gap-x-8">{children}</div>

        <div className="hidden lg:flex absolute left-2/4 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}
