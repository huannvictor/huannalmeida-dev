import {servicesData} from '@/src/common/data/data'

import Services from "../components/servives"


interface ServicesSectionProps {}

export default function ServicesSection ({}: ServicesSectionProps){
  return (
    <Services.Root>
      <Services.Container
        title="Meus Serviços"
      >
        <Services.Cards 
          servicesData={servicesData}
        />
      </Services.Container>
    </Services.Root>
  );
};