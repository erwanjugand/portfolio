interface PdfResponse {
  pdf?: string
  mbIn?: number
  mbOut?: number
  cost?: number
  success: boolean
  error: string | null
  responseId?: string
}

export default defineEventHandler(event => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const url = query.url
  const fileName = query.fileName

  const response = $fetch<PdfResponse>(`https://${config.rapidApiHost}/chrome/url`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
      'X-RapidAPI-Key': config.rapidApiKey,
      'X-RapidAPI-Host': config.rapidApiHost,
    },
    body: {
      url,
      fileName,
      options: {
        landscape: false,
      },
    },
  })

  return response
})
