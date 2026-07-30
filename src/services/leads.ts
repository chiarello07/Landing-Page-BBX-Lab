import pb from '@/lib/pocketbase/client'

export const createLead = (data: {
  name: string
  cargo: string
  company: string
  setor: string
  desafio: string
}) => {
  return pb.collection('leads').create(data)
}
