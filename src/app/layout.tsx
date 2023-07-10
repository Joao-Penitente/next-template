import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
	title: 'Title',
	description: 'Description'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-br">
			<body>{children}</body>
		</html>
	)
}
