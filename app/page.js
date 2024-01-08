import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Profile from '../components/Profile/Profile'
import Contact from '../components/Contact/Contact'
import Services from '../components/Services/Services'


export default function Home() {
  return (
    <main className="m-0 p-0 w-full text-white text-5xl leading-snug overflow-hidden">
      <Hero/>
      <About/>
      <Profile/>
      <Services/>
      <Contact/>
    </main>
  )
}
