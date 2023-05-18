'use client'

import './index.css'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import { useWindowSize } from 'react-use'
import useLoading from '@/hooks/useLoading'
import LastProjects from './components/home/last-projects/LastProjects'
import MainProjects from './components/home/main-projects/MainProjects'
import HomeTitle from './components/home/home-title/HomeTitle'
import HomeVideo from './components/home/home-video/HomeVideo'
import Footer from './components/footer/Footer'
// import HomeBG from './components/home-/home-background/HomeBG'

// ! TESTANDO BETTER COMMENTS - não use
// * TESTANDO BETTER COMMENTS - importante
// ? TESTANDO BETTER COMMENTS? - questão
// TODO: Testando better comments - to do

const HomePage = () => {
  const { ref: refTitle } = useInView()

  return (
    <>
      <div
        className='paddingClamp lg:mb-10 lg:mt-20 sm:flex sm:mt-20 sm:flex-col-reverse md:flex md:flex-col-reverse md:pt-32 lg:grid lg:grid-cols-2 lg:pt-0'
      >
        <div className='md:paddingClamp slideRightLeft sm:my-20 md:m-auto md:my-10 md:w-4/5 lg:my-0 lg:flex lg:w-full lg:items-center lg:justify-center lg:pt-16 xl:w-full 2xl:w-[800px]'>
          <Tilt
            glareEnable
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            glareMaxOpacity={0.1}
            glareColor='#EBEAF0'
            glareReverse
            glareBorderRadius='1.5rem'
          >
            <HomeVideo />
          </Tilt>
        </div>

        <div className='flex items-center justify-center w-full align-middle md:pl-0 lg:pl-10'>
          <header ref={refTitle} className='relative z-10 flex flex-col justify-center text-center slideLeftRight'>
            <HomeTitle />

          </header>
        </div>
      </div>

      <div className='z-10 flex items-center justify-center h-16 mb-5 '>
        <span className='absolute z-10'>PROJETOS PRINCIPAIS</span>
      </div>
      <section id='mainProjectSection' className='container grid grid-cols-1 gap-4 mx-auto mb-10 paddingClamp sm:grid-cols-1 2xl:px-52 2lg:px-0'>
        {useLoading('mainProjectSection')}
        <MainProjects />
      </section>

      <div className='z-10 flex items-center justify-center h-16 my-5 '>
        <span className='absolute z-10'>ÚLTIMOS PROJETOS</span>
      </div>
      <section>
        <LastProjects />
      </section>

      <Footer />
    </>
  )
}

export default HomePage
