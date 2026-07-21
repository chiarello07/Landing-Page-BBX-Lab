import pb from '@/lib/pocketbase/client'

export interface Partner {
  id: string
  name: string
  logo: string
  order: number
  active: boolean
  created: string
  updated: string
}

export const getActivePartners = async (): Promise<Partner[]> => {
  const records = await pb.collection('partners').getFullList({
    sort: 'order',
    filter: 'active = true',
  })
  return records as unknown as Partner[]
}

export const getLogoUrl = (partner: Partner): string => {
  if (!partner.logo) return ''
  return pb.files.getURL(partner as unknown as Record<string, unknown>, partner.logo)
}
