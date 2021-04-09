document.addEventListener('DOMContentLoaded', () => {
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = '/hide-elements.css'
	const head = document.head || document.getElementsByTagName('head')[0]
	head.appendChild(link)
})
