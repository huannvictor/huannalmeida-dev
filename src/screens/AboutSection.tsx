import About from "../components/about/index"

import { content } from "../components/about/content"
import {infoData, qualificationData, skillData} from '@/src/common/data/data'

export default function AboutSection (){
  return (
    <About.Root>
      <About.Container>
        <About.Image />
        <About.Tabs 
          content={content.pt}
          infoData={infoData}
          qualificationData={qualificationData}
          skillData={skillData}
          triggers={content.pt.tabsTriggers}
        />
      </About.Container>
    </About.Root>
  )
}