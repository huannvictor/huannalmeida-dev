import Link from "next/link";

import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";

import { Send, Download, FileDownIcon } from "lucide-react";

import { content } from "./content";

export default function HeroButtons() {
  return (

    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12">
      <Link href='/contact'>
        <Button className="gap-x-2">
          {content.en.heroBtn.contact}
          <Send size={18} />
        </Button>
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='secondary' className="gap-x-2">
            Download CV
            <Download size={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full flex flex-col">
          <DialogHeader>
            <DialogTitle>{content.en.heroBtn.dialogTitle}</DialogTitle>
            <DialogDescription>{content.en.heroBtn.dialogDescription}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center md:flex-row items-center gap-x-2">
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
  )
}
