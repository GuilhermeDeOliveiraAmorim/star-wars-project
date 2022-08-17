import type { NextPage } from 'next'
import Head from 'next/head'
import useStarWars from '../hooks/useStarWars'

const Home: NextPage = () => {

	const starWarsWorld = useStarWars();

	console.log(starWarsWorld);

	return (
		<div>
			<Head>
				<title>Star Wars Project</title>
				<meta name="description" content="Consuming a cool API that brings stuff from the world of Star Wars" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	)
}

export default Home
