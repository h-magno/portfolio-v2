import './HomeTitle.css'
import { Anek_Telugu } from '@next/font/google'

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-title',
})

const ScrambleTextLine1 = () => (
  <>
    <span className='h-full textoCapa shuffleText font-extralight'>
      <span className='text-green-500'>lO,</span>
      bEm-v!ndX Oa meu 3eb
    </span>
    <span className='h-full textoCapa shuffleText font-extralight'>
      <span className='text-green-500'>!lá,</span>
      Xe$-v!nd% Oa mOu 3eb
    </span>
    <span className='h-full textoCapa shuffleText font-extralight'>
      <span className='text-green-500'>oXá,</span>
      B3$-v!nd0 a* Meeu Web
    </span>
    <span className='h-full textoCapa shuffleText font-extralight'>
      <span className='text-green-500'>#l¬,</span>
      b¬-v&ndo ao *u w%b
    </span>
    <span className='h-full textoCapa shuffleText font-extralight'>
      <span className='text-green-500'>Ç7á,</span>
      b%m-vYdo ¨#3 ¨e% WEb
    </span>
    <span className='h-full textoCapa shuffleText font-extralight'>
      <span className='text-green-500'>&@á,</span>
      B3m-v!n*0 To mxu web
    </span>
  </>
)

const ScrambleTextLine2 = () => (
  <>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle h-full font-extrabold`}
    >
      PORTFÓLIO
    </span>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle h-full font-extrabold`}
    >
      *¬R*f#LIO
    </span>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle h-full font-extrabold `}
    >
      Po%TFÓLI#
    </span>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle h-full font-extrabold `}
    >
      !@R¨FóLO
    </span>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle h-full font-extrabold `}
    >
      )O%7F0LIo
    </span>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle flex h-full  items-center font-extrabold `}
    >
      P@RT_ÓLI#
    </span>
    <span
      className={`tituloCapa ${ anekTelugu.variable } font-sans shuffleTitle flex h-full  items-center font-extrabold `}
    >
      %O¢TF0L!#
    </span>
  </>
)

const ScrambleTextLine3 = () => (
  <>
    <div className='w-full h-full shuffleText2'>
      <span className='textoCapa2'>cr!@dO x0r:</span>
      <span className={`${ anekTelugu.variable } font-sans textoNomeCapa textoCapa2 ml-3 font-extrabold tracking-wide`}>
        hEF+IqU# m@$N0
      </span>
    </div>
    <div className='w-full h-full shuffleText2'>
      <span className='textoCapa2'>cR!@dO =oR:</span>
      <span className={`${ anekTelugu.variable } font-sans textoNomeCapa textoCapa2 ml-3 font-extrabold tracking-wide`}>
        h#nRiQu3 %aG+O
      </span>
    </div>
    <div className='w-full h-full shuffleText2'>
      <span className='textoCapa2'>Ri@d0 PoR:</span>
      <span className={`${ anekTelugu.variable } font-sans textoNomeCapa textoCapa2 ml-3 font-extrabold tracking-wide`}>
        H#$r!qUe ¬A¨No
      </span>
    </div>
    <div className='w-full h-full shuffleText2'>
      <span className='textoCapa2'>cri4%0 p0r:</span>
      <span className={`${ anekTelugu.variable } font-sans textoNomeCapa textoCapa2 ml-3 font-extrabold tracking-wide`}>
        h&RiQu~3 Ma*&³1
      </span>
    </div>
    <div className='w-full h-full shuffleText2'>
      <span className='textoCapa2'>$R!Ad0 7oR::</span>
      <span className={`${ anekTelugu.variable } font-sans textoNomeCapa textoCapa2 ml-3 font-extrabold tracking-wide`}>
        @E*iQuE #aG-4¬
      </span>
    </div>
    <div className='w-full h-full shuffleText2'>
      <span className='textoCapa2'>#TI+D0 _ Or:</span>
      <span className={`${ anekTelugu.variable } font-sans textoNomeCapa textoCapa2 ml-3 font-extrabold tracking-wide`}>
        %En+-iQu3 @aG$O
      </span>
    </div>
  </>
)

const HomeTitle = () => (
  <>
    <div className='sm:hidden md:static'>
      <div className='flex flex-col -mb-9'>
        <div className='relative flex flex-col h-10 overflow-y-hidden'>
          <span className='h-full textoCapa shuffleText font-extralight'>
            <span className='text-green-500'>Olá, </span>
            bem-vindo ao meu web
          </span>
          <ScrambleTextLine1 />
        </div>
        <div className='relative flex flex-col overflow-y-hidden h-28 '>
          <ScrambleTextLine2 />
        </div>
      </div>
      <div className='relative flex flex-col h-8 mt-10 overflow-y-hidden'>
        <div className='w-full h-full shuffleText2'>
          <span className='textoCapa2'>Criado por:</span>
          <span className={`${ anekTelugu.variable } textoNomeCapa textoCapa2 ml-3 font-sans font-extrabold tracking-wide`}>HENRIQUE MAGNO</span>
        </div>
        <ScrambleTextLine3 />
      </div>
    </div>
    <div className='sm:static md:hidden'>
      <div className='flex flex-col -mb-9'>
        <span className='textoCapa font-extralight'>
          <span className='text-green-500'>Olá,</span>
          bem-vindo ao meu web
        </span>
        <span className={`${ anekTelugu.variable } tituloCapa `}>PORTFÓLIO</span>
      </div>
      <div className='w-full sm:mt-10 md:mt-10 lg:mt-5'>
        <span className='textoCapa2'>Criado por:</span>
        <span className={`${ anekTelugu.variable } textoNomeCapa textoCapa2 ml-3 font-sans font-extrabold tracking-wide`}>HENRIQUE MAGNO</span>
      </div>
    </div>
  </>
)

export default HomeTitle
