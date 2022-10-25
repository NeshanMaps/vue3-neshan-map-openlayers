import { urls } from "../parameters"
import { Api, CreateApiOptions } from "./apis.model"

export const createHeaders = (token?: string) => {
  return {
    "Api-Key": token,
  }
}
export const createApi = (token?: string, options?: CreateApiOptions): Api => {
  const requestOptions = {
    headers: createHeaders(token),
  }
  const reverseReqOptions = !options?.reverseUrl ? requestOptions : {}
  const searchReqOptions = !options?.searchUrl ? requestOptions : {}
  return {
    REVERSE: async (lng, lat) => {
      const params = `?lat=${lat}&lng=${lng}`
      const url = (options?.reverseUrl || urls.reverse) + params
      const res = await fetch(url, reverseReqOptions)
      return await res.json()
    },
    SEARCH: async (term, [lng, lat]) => {
      const params = `?term=${term}&lat=${lat}&lng=${lng}`
      const url = (options?.searchUrl || urls.search) + params
      const res = await fetch(url, searchReqOptions)
      return await res.json()
    },
  }
}
