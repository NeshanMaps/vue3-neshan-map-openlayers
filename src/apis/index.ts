declare const ol: any // eslint-disable-line
import { Api } from '../components/Map.model'
import { urls } from '../parameters'

export const createHeaders = (token: string) => {
  return {
    'Api-Key': token,
  }
}
export const createApi = (token: string): Api => {
  return {
    REVERSE: async (lng, lat) => {
      const params = `?lat=${lat}&lng=${lng}`
      const res = await fetch(urls.reverse + params, {
        headers: createHeaders(token),
      })
      return await res.json()
    },
    SEARCH: async (term, [lng, lat]) => {
      const params = `?term=${term}&lat=${lat}&lng=${lng}`
      const res = await fetch(urls.search + params, {
        headers: createHeaders(token),
      })
      return await res.json()
    },
  }
}
