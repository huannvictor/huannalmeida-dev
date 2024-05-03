import {HomeIcon, MailIcon, PhoneCallIcon} from 'lucide-react'

import Form from '@/components/Form'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 grid pt-12 lg:gap-10 xl:mb-24 xl:h-[600px] xl:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary" />
              Say Hello 👋
            </div>
            <h1 className="h1 mb-8 max-w-md">Let&apos;s Work Together.</h1>
            <p className="subtitle xl:max-w-2/3">
              Looking for an experienced front-end developer? Your search ends
              here!
              <br />
              As a freelancer front-end developer and current Tech Lead at
              SkillLab, a dynamic startup, I bring a wealth of experience in
              building and leading high-performing development teams.
              <br />
              Proficient in React.js, Next.js, and Tailwind CSS, I&apos;m ready
              to bring my leadership and technical skills to your organization.
              Moreover, while I excel in these technologies, I&apos;m also open
              to learning and working with others like Angular and various
              JavaScript libraries/frameworks.
              <br />
              Let&apos;s collaborate and drive innovation together.
            </p>
          </div>

          <div className="hidden bg-contact_illustrator_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustrator_dark xl:flex xl:w-full"></div>
        </div>

        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <span>huannvictor@gmail.com</span>
            </div>

            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <span>João Pessoa - Paraíba/Brasil</span>
            </div>

            <div className="flex items-center gap-x-8">
              <PhoneCallIcon size={18} className="text-primary" />
              <span>+55 83 99980-2317</span>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
