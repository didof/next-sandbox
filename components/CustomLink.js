import { Nav } from 'react-bootstrap'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default ({ href, children, prefetch }) => {
	const router = useRouter()

	useEffect(() => {
		if (prefetch) {
			router.prefetch(href)
		} else {
			const a = document.getElementById(href)
			a.addEventListener('mouseover', handle_hover)
		}
	})

	const handle_hover = (e) => {
		e.preventDefault()
		router.prefetch(href)
		console.log(`[CustomLink] > prefetching ${href}`)
	}

	const handle_click = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<Nav.Link href={href} onClick={handle_click} id={href}>
			{children}
		</Nav.Link>
	)
}
