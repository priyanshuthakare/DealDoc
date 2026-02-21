import AiDemo from './components/AiDemo'
import AnnouncementBar from './components/AnnouncementBar'
import ComparisonTable from './components/ComparisonTable'
import Faq from './components/Faq'
import Features from './components/Features'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import FounderNote from './components/FounderNote'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Navbar from './components/Navbar'
import PainPoints from './components/PainPoints'
import Pricing from './components/Pricing'
import RoiCalculator from './components/RoiCalculator'
import SocialProof from './components/SocialProof'

/**
 * @intent Main landing page — assembles all 16 original sections in blueprint order
 */
export default function App() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <PainPoints />
                <HowItWorks />
                <Features />
                <AiDemo />
                <RoiCalculator />
                <Pricing />
                <ComparisonTable />
                <Integrations />
                <FounderNote />
                <Faq />
                <FinalCta />
            </main>
            <Footer />
        </>
    )
}
