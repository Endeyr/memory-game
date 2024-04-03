import { useState } from 'react'
import murloc from './assets/Anyfin_Can_Happen.webp'
import Game from './components/game'
import './styles/App.css'

function App() {
	const [score, setScore] = useState(0)
	const [message, setMessage] = useState('')
	const [startGame, setStartGame] = useState(false)
	const [bestScore, setBestScore] = useState<number>(0)

	return (
		<>
			<header className="header">
				<h2 className="title">Memory Card Game</h2>
				<p className="message">{message}</p>
				<p className="scoreboard">ScoreBoard: {score}</p>
				<p className="scoreboard">Best Score: {bestScore}</p>
			</header>
			{!startGame && (
				<div className="start">
					<button className="start-button" onClick={() => setStartGame(true)}>
						Start Game
					</button>
					<img
						className="murloc"
						draggable="false"
						loading="lazy"
						width="250px"
						height="250px"
						src={murloc}
						alt="murlocs"
					/>
					<h2 className="rules">Rules</h2>
					<p className="rules-paragraph">
						Click each murloc only once. Try to click them all without
						repeating!
					</p>
				</div>
			)}
			{startGame && (
				<Game
					score={score}
					setScore={setScore}
					setMessage={setMessage}
					bestScore={bestScore}
					setBestScore={setBestScore}
				/>
			)}
		</>
	)
}

export default App
