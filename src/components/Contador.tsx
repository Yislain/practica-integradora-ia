"use client"

import { useState } from 'react'

export default function Contador() {
	const [cuenta, setCuenta] = useState(0)

	return (
		<div>
			<p>Cuenta: {cuenta}</p>
			<button type="button" onClick={() => setCuenta(cuenta + 1)}>
				Sumar
			</button>
		</div>
	)
}
