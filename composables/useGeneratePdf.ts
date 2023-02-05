import { MaybeRef } from '@vueuse/core'

interface pdfResponse {
  pdf?: string
  mbIn?: number
  mbOut?: number
  cost?: number
  success: boolean
  error: string | null
  responseId?: string
}

export default (body: MaybeRef<object>) => {
  const isLoading = ref(false)
  const pdfUrl = ref<string | undefined>(undefined)

  const config = useRuntimeConfig()
  const options: object = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
      'X-RapidAPI-Key': config.public.rapidApiKey,
      'X-RapidAPI-Host': config.public.rapidApiHost
    },
    body: unref(body)
  }

  const generate = async () => {
    isLoading.value = true
    const request = await useFetch<pdfResponse>(`https://${config.public.rapidApiHost}/chrome/url`, options)
      .then(response => response)
      .catch(() => undefined)

    pdfUrl.value = request?.data.value?.pdf
    isLoading.value = false
  }

  return {
    pdfUrl,
    generate,
    isLoading
  }
}
