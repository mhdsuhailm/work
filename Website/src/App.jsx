
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/About'
import Services from './pages/Service'
import IndustryFocus from './pages/IndustryFocusArea'
import OurMethodology from './pages/Methodology'
import CaseStudies from './pages/CaseStudy'
import EngagementModels from './pages/EngagementModel'
import ContactDetails from './pages/Contact'
function App(){
  return(
    <Router>
      <Header/>
      <Home/>
      <AboutUs/>
      <Services/>
      <IndustryFocus/>
      <OurMethodology/>
      <CaseStudies/>
      <EngagementModels/>
      <ContactDetails/>
    </Router>
  )
}

export default App