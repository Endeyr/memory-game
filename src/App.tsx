import { useState } from 'react'
import Game from './components/game'
import './styles/App.css'

function App() {
	const [score, setScore] = useState(0)

	const handleScore = () => {
		const newScore = score + 1
		setScore(newScore)
	}
	return (
		<>
			<header className="header">
				<h2 className="title">Memory Card Game</h2>
				<p className="scoreboard">ScoreBoard: {score}</p>
			</header>
			<Game handleScore={handleScore} />
		</>
	)
}

export default App
