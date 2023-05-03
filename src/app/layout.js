import '../styles/globals.css'

export const metadata = {
  title: 'Billar',
  description: 'By robertvdev',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
