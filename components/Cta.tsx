import Link from 'next/link'
import {Button} from './ui/button'
import {content} from './cta/content'

const Cta = () => {
  const {cta, btnTxt} = content.pt
  return (
    <section className="bg-tertiary py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 max-w-xl text-center">
            {cta}
          </h2>

          <Link href="/contact">
            <Button>{btnTxt}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
