import './globals.css'
export const metadata = {
  title: 'Anshul - Portfolio',
  description: 'This is Anshul Vishwakarma Portfoli website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
