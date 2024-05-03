'use client'

import {ArrowUpRight, MailIcon, MessageSquareHeart, User} from 'lucide-react'

import {Input} from './ui/input'
import {Textarea} from './ui/textarea'
import {Button} from './ui/button'

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          className="h-14 rounded-full px-8 text-base"
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="h-14 rounded-full px-8 text-base"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Your message"
          className="h-44 rounded-3xl px-8 text-base"
        />
        <MessageSquareHeart className="absolute right-6 top-4" size={20} />
      </div>

      <Button className="flex max-w-[166px] items-center gap-x-1">
        Let&apos;s Talk
        <ArrowUpRight size={20} />
      </Button>
    </form>
  )
}

export default Form
