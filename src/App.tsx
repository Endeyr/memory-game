import './styles/App.css'

function App() {
	return (
		<>
			<header className="header">
				<h2 className="title">Memory Card Game</h2>
				<p className="scoreboard">ScoreBoard: </p>
			</header>
			<section className="container">
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
				<div className="row">
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
				</div>
			</section>
		</>
	)
}

export default App
