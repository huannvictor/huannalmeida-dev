import Link from 'next/link'

import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog'
import { Button } from '../ui/button'

import { Send, Download, FileDownIcon } from 'lucide-react'

import { content } from './content'

export default function HeroButtons() {
  return (
    <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row lg:mx-0">
      <Link href="/contact">
        <Button className="gap-x-2">
          {content.en.heroBtn.contact}
          <Send size={18} />
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
            <DialogTitle>{content.en.heroBtn.dialogTitle}</DialogTitle>
            <DialogDescription>
              {content.en.heroBtn.dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center gap-x-2 md:flex-row">
            <Link target="_blank" href="/files/CV_HuannAlmeida_EN.pdf">
              <Button variant="link" className="flex items-center gap-x-2">
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
  )
}
