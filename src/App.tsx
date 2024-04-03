import { useState } from 'react'
import Game from './components/game'
import './styles/App.css'

function App() {
	const [score, setScore] = useState(0)
	const [message, setMessage] = useState('start game')
	const [startGame, setStartGame] = useState(false)

	return (
		<>
			<header className="header">
				<h2 className="title">Memory Card Game</h2>
				{message && <p className="message">{message}</p>}
				<p className="scoreboard">ScoreBoard: {score}</p>
			</header>
			{!startGame && (
				<button onClick={() => setStartGame(true)}>Start Game</button>
			)}
			{startGame && (
				<Game score={score} setScore={setScore} setMessage={setMessage} />
			)}
		</>
	)
}

export default App
