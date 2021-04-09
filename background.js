chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
		const isBadDomain = [
			'https://ksl.com',
			'https://www.ksl.com'
		].some(allowedDomain => details.url.startsWith(allowedDomain))
		const isLoginPage = [
			'https://ksl.com/public/member',
			'https://www.ksl.com/public/member',
			'https://ksl.com/myaccount',
			'https://www.ksl.com/myaccount'
		].some(allowedDomain => details.url.startsWith(allowedDomain))
		if(isBadDomain && !isLoginPage) {
			return {
				redirectUrl: 'https://classifieds.ksl.com'
			}
		}
		return {}
  },
  {
    urls: ['*://ksl.com/*', '*://www.ksl.com/*'],
    types: ['main_frame'],
  },
  ['blocking']
)
