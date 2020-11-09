import { config } from './base'

export default async function fetchByCode (name) {
  const { data } = await config.get(`alpha/${name}`)
  return data
}
