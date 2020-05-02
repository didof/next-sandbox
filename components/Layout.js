import CustomLink from './CustomLink'

const LINKS = [
	{ url: '/', label: 'Home', prefetch: true },
	{ url: '/about', label: 'About', prefetch: true },
	{ url: '/contact', label: 'Contact', prefetch: false },
]

export default ({ children }) => {
	return (
		<>
			<nav>
				<ul>
					{LINKS.map(({ url, label, prefetch }) => {
						return (
							<li key={url}>
								<CustomLink href={url} prefetch={prefetch}>
									{label}
								</CustomLink>
							</li>
						)
					})}
				</ul>
			</nav>
			{children}
		</>
	)
}
