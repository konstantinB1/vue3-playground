import { config } from './base'

export default async function fetchAll () {
  const { data } = await config.get('all')
  return data
}
