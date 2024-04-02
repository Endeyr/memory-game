import { useEffect, useState } from 'react'

type CardType = {
	cardId: string
	img: string
	cardSet: string
	rarity: string
}

const Game = ({ handleScore }: { handleScore: () => void }) => {
	// initial cards array
	const [cards, setCards] = useState<CardType[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)
	// use effect for the fetch + callback function if fetch cancelled
	useEffect(() => {
		let isMounted = true

		const fetchData = async () => {
			const env = await import.meta.env.VITE_API_KEY

			const url =
				'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/murloc?collectible=1'
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': env,
					'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
				},
			}

			try {
				const response = await fetch(url, options)
				if (!isMounted) return // Exit if component is unmounted
				if (!response.ok) {
					switch (response.status) {
						case 400:
							throw new Error('Network response 400')
						case 401:
							throw new Error('Network response 401')
						case 404:
							throw new Error('Network response 404')
						case 500:
							throw new Error('Network response 500')
					}
				}
				const data = await response.json()
				const filteredData = data.filter(
					(card: CardType) =>
						card.img && card.cardSet !== 'Legacy' && card.rarity === 'Legendary'
				)
				setCards(filteredData.slice(0, 12))
				setIsLoading(false)
			} catch (error: unknown) {
				setError(error as Error)
				setIsLoading(false)
			}
		}

		fetchData()

		return () => {
			isMounted = false // mark component as unmounted
		}
	}, [])
	// handle onClick, shuffles cards and adds to score or wrong answer

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error.stack}</p>
	}

	return (
		<section className="container">
			<div className="row">
				{/* each card is in a grid */}
				{cards &&
					cards.map((card) => (
						<div className="card" key={card.cardId}>
							<button onClick={handleScore}>
								<img
									loading="lazy"
									width="100%"
									height="100%"
									src={card.img}
									alt={card.cardId}
								/>
							</button>
						</div>
					))}
			</div>
		</section>
	)
}
export default Game
