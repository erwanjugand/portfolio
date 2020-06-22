import { UAParser } from 'ua-parser-js'
const currentBrowser = new UAParser().getBrowser()
const browserNotSupported = {
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

export default function ({ error }) {
  if (browserNotSupported[currentBrowser.name] !== undefined && parseFloat(currentBrowser.major) <= browserNotSupported[currentBrowser.name]) {
    error({ statusCode: 418, message: this.$t('errors.browserNotSupported') })
  }
}
