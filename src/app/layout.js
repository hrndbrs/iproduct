import { Work_Sans } from 'next/font/google'
import { Navbar, Footer } from './components'
import StoreProvider from './store/StoreProvider'
import './globals.css'
import 'material-symbols'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: "400"
})

export const metadata = {
  title: 'iProduct',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <body className={workSans.className}>
          <Navbar />
          <main className='relative min-h-screen bg-white'>
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </StoreProvider>
  )
}
