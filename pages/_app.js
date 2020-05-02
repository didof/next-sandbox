import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'

import Layout from '../components/Layout'

export default ({ Component, pageProps }) => (
	<Layout>
		<Container>
			<main>
				<Component {...pageProps} />
			</main>
		</Container>
	</Layout>
)
