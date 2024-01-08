import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export const metadata = {
  title: 'Diego Letelier is here!',
  description: 'Portfolio of Diego Letelier, chilean guy of 23 years old.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <SpeedInsights/>
        <Footer/>
      </body>
    </html>
  )
}