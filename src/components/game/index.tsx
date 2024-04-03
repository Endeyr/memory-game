import { useEffect, useState } from 'react'

type CardType = {
	cardId: string
	img: string
	cardSet: string
	rarity: string
}

const Game = ({
	score,
	setScore,
	setMessage,
	bestScore,
	setBestScore,
}: {
	score: number
	setScore: React.Dispatch<React.SetStateAction<number>>
	setMessage: React.Dispatch<React.SetStateAction<string>>
	bestScore: number
	setBestScore: React.Dispatch<React.SetStateAction<number>>
}) => {
	// initial cards array
	const [cards, setCards] = useState<CardType[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)
	const [clickedCards, setClickedCards] = useState<string[]>([])

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

	const handleScore = () => {
		const newScore = score + 1
		setScore(newScore)
	}

	// shuffles cards and adds to score or wrong answer
	const handleClick = (cardId: string) => {
		// check if card exist in clickedCard array
		if (clickedCards.includes(cardId)) {
			if (score === 1) {
				setMessage('')
			}
			if (score > bestScore) {
				setBestScore(score)
			}
			if (score === 12) {
				setMessage('You Win!!!!!')
			} else {
				setMessage('You Lose :(')
			}
			setScore(0)
			setClickedCards([])
		} else {
			setClickedCards((prevState) => [...prevState, cardId])
			handleScore()
			const shuffledArray = cards.sort(() => 0.5 - Math.random())
			setCards(shuffledArray)
		}
	}

	if (isLoading) {
		return <p className="loading">Loading...</p>
	}

	if (error) {
		return <p className="error">{error.stack}</p>
	}

	return (
		<section className="container">
			<div className="row">
				{/* each card is in a grid */}
				{cards &&
					cards.map((card) => (
						<div className="card" key={card.cardId}>
							<button onClick={() => handleClick(card.cardId)}>
								<img
									draggable="false"
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
