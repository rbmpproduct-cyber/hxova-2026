import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/shared/Footer'
import { SubscribeBar } from '@/components/shared/SubscribeBar'
import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { SceneSection } from '@/components/home/SceneSection'
import { CTASection } from '@/components/home/CTASection'
export default function HomePage(){
return(<><Navbar/><main><HeroSection/><StatsSection/><SceneSection/><CTASection/></main><SubscribeBar/><Footer/></>)}
