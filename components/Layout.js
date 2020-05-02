import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Container,
} from 'react-bootstrap'

import CustomLink from './CustomLink'

const LINKS = [
	{ url: '/', label: 'Home', prefetch: true },
	{ url: '/about', label: 'About', prefetch: true },
	{ url: '/contact', label: 'Contact', prefetch: false },
]

export default ({ children }) => {
	return (
		<>
			{' '}
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>Next-sandbox</Navbar.Brand>
					<Nav className='mr-auto'>
						{LINKS.map(({ url, label, prefetch }) => {
							return (
								<li key={url}>
									<CustomLink href={url} prefetch={prefetch}>
										{label}
									</CustomLink>
								</li>
							)
						})}
					</Nav>
					<Form inline>
						<FormControl disabled type='text' placeholder='Search' className='mr-sm-2' />
						<Button disabled variant='outline-info'>Search</Button>
					</Form>
				</Container>
			</Navbar>
			{children}
		</>
	)
}
