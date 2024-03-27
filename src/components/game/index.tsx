const Game = ({ handleScore }: { handleScore: () => void }) => {
	return (
		<section className="container">
			<div className="row">
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
