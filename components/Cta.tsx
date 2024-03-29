import Link from 'next/link'
import { Button } from './ui/button'

const Cta = () => {
  return (
    <section className="bg-tertiary py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 max-w-xl text-center">
            Prepared to turn your ideas into reality? I`&apos;`m here to help
          </h2>

          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
