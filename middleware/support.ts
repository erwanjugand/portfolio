import { Middleware } from '@nuxt/types'
import { UAParser } from 'ua-parser-js'

const currentBrowser = new UAParser().getBrowser()
const browserNotSupported: {[key: string]: number | null | undefined} = {
  'Android Browser': 48,
  baidu: null,
  Baidu: null,
  Chrome: 48,
  'Chrome WebView': 48,
  Chromium: 48,
  Edge: 15,
  Firefox: 30,
  IE: null,
  IEMobile: null,
  'Mobile Safari': 9.2,
  Opera: 35,
  'Opera Mini': null,
  'Opera Mobile': 45,
  QQ: null,
  QQBrowser: null,
  QQQBrowserLiteQ: null,
  Safari: 9,
  'Samsung Browser': null
}

const support: Middleware = ({ error, app }) => {
  const currentBrowserNotSupported = currentBrowser.name ? browserNotSupported[currentBrowser.name] : undefined
  if (currentBrowserNotSupported !== undefined && (!currentBrowserNotSupported || parseFloat(currentBrowser.major || '0') <= (browserNotSupported[currentBrowser.name || ''] || 0) )) {
    error({ statusCode: 418, message: app.$t('errors.browserNotSupported') })
  }
}

export default support
