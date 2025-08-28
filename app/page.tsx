import HeroSection from './components/HeroSection'
import MyWorkSection from './components/MyWorkSection'
import GetInTouchSection from './components/GetInTouchSection'
import FooterSection from './components/FooterSection'
import MyProjectsSection from './components/MyProjectsSection'

export const metadata = {
  title: `Home | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description:
    'Charlie Graham is a software engineer based in the US. He specializes in building high-performance web applications using React, Next.js, and TypeScript.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='w-full flex flex-col md:gap-8 items-center justify-center px-4'>
        <MyWorkSection />
        <MyProjectsSection />
        {/* <DividerDot /> */}
        <GetInTouchSection />
        <FooterSection />
      </div>
    </>
  )
}
