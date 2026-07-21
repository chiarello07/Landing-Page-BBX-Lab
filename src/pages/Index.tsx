import { Hero } from '@/components/sections/Hero'
import { Context } from '@/components/sections/Context'
import { Deliverables } from '@/components/sections/Deliverables'
import { Differentials } from '@/components/sections/Differentials'
import { Stages } from '@/components/sections/Stages'
import { Results } from '@/components/sections/Results'
import { Partners } from '@/components/sections/Partners'
import { CtaForm } from '@/components/sections/CtaForm'

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Context />
      <Deliverables />
      <Differentials />
      <Stages />
      <Results />
      <Partners />
      <CtaForm />
    </div>
  )
}

export default Index
