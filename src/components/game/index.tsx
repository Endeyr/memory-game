type CardType = {
	id: number
	image: string
}

const Game = ({ handleScore }: { handleScore: () => void }) => {
	// init cards array
	const cards: CardType[] = []
	// fetch cards from api

	// use effect for the fetch + callback function if fetch cancelled

	// handle onClick, shuffles cards and adds to score or wrong answer

	return (
		<section className="container">
			<div className="row">
				{/* each card is in a grid */}
				{cards && cards.map((card) => <div key={card.id}>{card.image}</div>)}
				<div className="card">
					<button onClick={handleScore}>click me</button>
				</div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
			</div>
			<div className="row">
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
			</div>
			<div className="row">
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
				<div className="card"></div>
			</div>
		</section>
	)
}
export default Game
