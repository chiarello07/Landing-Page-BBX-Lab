import pb from '@/lib/pocketbase/client'

export const createLead = (data: { name: string; email: string; company: string }) => {
  return pb.collection('leads').create(data)
}
