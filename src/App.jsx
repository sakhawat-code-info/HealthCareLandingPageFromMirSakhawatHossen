
import './App.css'
import Appointment from './Components/Appointment'
import Banner from './Components/Banner'
import ComprehensiveCare from './Components/ComprehensiveCare'
import FAQ from './Components/FAQ'
import OurMission from './Components/OurMission'
import Service from './Components/Service'
import Testimonial from './Components/Testimonial'

function App() {


  return (
    <>
      <div>
        <Banner></Banner>
        <ComprehensiveCare></ComprehensiveCare>
        <OurMission></OurMission>
        <Service></Service>
        <Testimonial></Testimonial>
        <FAQ></FAQ>
        <Appointment></Appointment>

      </div>

    </>
  )
}

export default App
