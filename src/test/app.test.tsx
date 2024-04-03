import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('App', () => {
	it('renders headline', () => {
		render(<App />)

		expect(screen.getAllByRole('heading'))
	})

	it('loading screen after button click', async () => {
		const user = userEvent.setup()
		render(<App />)
		const button = screen.getByRole('button', { name: 'Start Game' })

		await user.click(button)
		expect(screen.getByText('Loading...'))
	})
})
