import './globals.css'
import { CartProvider } from '@/modules/context/CartContext'
import { ReactNode } from 'react'

function MyApp({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

export default MyApp

