'use client';

import { LanguagesIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export default function LangToggler() {
  const [lang, setLang] = useState('en')

  console.log(lang)

  return (
    <div>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
      >
        <LanguagesIcon
          className="size-5"
        />
      </Button>
    </div>
  )
}
