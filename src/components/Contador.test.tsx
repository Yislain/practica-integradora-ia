import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Contador from './Contador'

describe('Contador', () => {
	it('muestra la cuenta inicial y la incrementa al hacer clic en Sumar', () => {
		render(<Contador />)

		expect(screen.getByText('Cuenta: 0')).toBeInTheDocument()
		const botonSumar = screen.getByRole('button', { name: 'Sumar' })

		fireEvent.click(botonSumar)

		expect(screen.getByText('Cuenta: 1')).toBeInTheDocument()
	})
})
