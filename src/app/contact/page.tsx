import {HomeIcon, MailIcon, PhoneCallIcon} from 'lucide-react'

import Form from '@/components/Form'
import {RiWhatsappLine} from 'react-icons/ri'
import Link from 'next/link'
import {Button} from '@/components/ui/button'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 grid pt-12 lg:gap-10 xl:mb-24 xl:h-fit xl:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary" />
              Olá 👋
            </div>
            <h1 className="h1 mb-8 max-w-md">Vamos desenvolver juntos.</h1>
            <div>
              <p className="subtitle xl:max-w-2/3">
                Procurando um desenvolvedor front-end experiente? Sua busca termina aqui!
              </p>
              <p className="subtitle xl:max-w-2/3">
                Como desenvolvedor front-end freelancer e atual líder técnico da SkillLab, uma startup dinâmica, trago uma vasta experiência na construção e liderança de equipes de desenvolvimento de alto desempenho.
              </p>
              <p className="subtitle xl:max-w-2/3">
                Proficiente em React.js, Next.js e Tailwind CSS, estou pronto para trazer minha liderança e habilidades técnicas para sua organização. Além disso, embora eu me destaque nessas tecnologias, também estou aberto a aprender e trabalhar com outras, como Angular e várias bibliotecas/frameworks JavaScript.
              </p>
              <p className="subtitle xl:max-w-2/3">
                Vamos impulsionar a inovação juntos.
              </p>
            </div>
          </div>

          <div className="hidden bg-contact_illustrator_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustrator_dark xl:flex xl:w-full"></div>
        </div>

        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-4 xl:text-lg">
            <Link
              target='_blank'
              href='https://wa.me/send/?phone=5583999802317&text=Olá+Huann!'
            >
              <Button variant='link' className="p-0 h-fit flex items-center gap-x-8">
                <RiWhatsappLine size={18} className="text-primary" />
                  me manda uma mensagem ;)
              </Button>
            </Link>

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

          {/* <Form /> */}
        </div>
      </div>
    </section>
  )
}

export default Contact
