import HeroSection from './components/HeroSection'
import MyWorkSection from './components/MyWorkSection'
import GetInTouchSection from './components/GetInTouchSection'
import FooterSection from './components/FooterSection'

export const metadata = {
  title: `Home | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description:
    'Charlie Graham is a software engineer based in the US. He specializes in building high-performance web applications using React, Next.js, and TypeScript.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='px-4'>
        <MyWorkSection />
        {/* <DividerDot /> */}
        <GetInTouchSection />
        <FooterSection />
      </div>
    </>
  )
}
