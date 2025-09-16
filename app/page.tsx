import HeroSection from './components/HeroSection'
import MyWorkSection from './components/MyWorkSection'
import GetInTouchSection from './components/GetInTouchSection'
import FooterSection from './components/FooterSection'
import MyProjectsSection from './components/MyProjectsSection'
import AboutMeSection from './components/AboutMeSection'

export const metadata = {
  title: `Home | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description:
    'Charlie Graham is a software engineer based in the US. He specializes in building high-performance web applications using React, Next.js, and TypeScript.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <div className='w-full flex flex-col md:gap-8 items-center justify-center px-4'>
        <MyWorkSection />
        <MyProjectsSection />
        <GetInTouchSection />
        <FooterSection />
      </div>
    </>
  )
}
