import { Hero } from '@/components/sections/Hero'
import { Context } from '@/components/sections/Context'
import { Deliverables } from '@/components/sections/Deliverables'
import { Differentials } from '@/components/sections/Differentials'
import { Stages } from '@/components/sections/Stages'
import { Results } from '@/components/sections/Results'
import { Partners } from '@/components/sections/Partners'
import { CtaForm } from '@/components/sections/CtaForm'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Faq } from '@/components/sections/Faq'
import { SecondaryCta } from '@/components/SecondaryCta'

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Partners />
      <Context />
      <SecondaryCta />
      <ComoFunciona />
      <Deliverables />
      <SecondaryCta />
      <Differentials />
      <Results />
      <SecondaryCta />
      <Depoimentos />
      <Stages />
      <Faq />
      <CtaForm />
    </div>
  )
}

export default Index
