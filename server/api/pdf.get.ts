import { createError, defineEventHandler, getQuery, useRuntimeConfig } from 'nuxt/server'
import type { RouteNamedMap } from 'vue-router/auto-routes'

interface PdfResponse {
  pdf?: string
  mbIn?: number
  mbOut?: number
  cost?: number
  success: boolean
  error: string | null
  responseId?: string
}

// Resume page paths per locale, see defineI18nRoute in app/pages/resume.vue
const RESUME_PATHS: string[] = ['/cv', '/en/resume'] satisfies RouteNamedMap['resume___fr' | 'resume___en']['path'][]

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  // Static hosting serves /cv/ without redirect, so route.path may carry a trailing slash
  const path = typeof query.path === 'string' ? query.path.replace(/\/$/, '') : undefined
  const fileName = query.fileName

  if (!path || !RESUME_PATHS.includes(path)) {
    throw createError({ status: 400, statusText: 'Invalid path' })
  }

  const response = $fetch<PdfResponse>(`https://${config.rapidApiHost}/chrome/url`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': config.rapidApiKey,
      'X-RapidAPI-Host': config.rapidApiHost,
    },
    body: {
      url: config.public.siteUrl + path,
      fileName,
      options: {
        landscape: false,
      },
    },
  })

  return response
})
