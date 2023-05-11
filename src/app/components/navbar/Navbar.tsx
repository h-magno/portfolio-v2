/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import Image from 'next/image'
import { useWindowSize } from 'react-use'
import { useRef, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './Navbar.css'

const Navbar = (navbarRefProp: any) => {
  const { width: screenWidth } = useWindowSize()
  const [isVisible, setIsVisible] = useState(false)
  const closeMenu = useRef(null)

  const clickToClose = () => closeMenu.current.click()

  const NavbarRefIsInView = navbarRefProp.navbarRefIsInView

  return (
    <>
      {
        screenWidth < 768 || isVisible === false
          ? (
            <div className={`${ isVisible ? 'translateDown ' : 'translateUp ' } hidden sm:block shadow-lg bg-[#081941] h-96 fixed -top-96 w-full z-40 pt-16 box-border`}>
              <ul className='text-center '>
                <li
                  className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'
                >
                  <Link onClick={() => setIsVisible(!isVisible)} href='/'>Home</Link>
                </li>
                <li
                  className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'
                >
                  <Link onClick={() => setIsVisible(!isVisible)} href='/skills'>Skills</Link>
                </li>
                <li
                  className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'
                >
                  <Link onClick={() => setIsVisible(!isVisible)} href='/about-me'>Sobre Mim </Link>
                </li>
                <li className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'>
                  <button type='button' onClick={() => setIsVisible(!isVisible)}>
                    Currículo PDF
                  </button>
                </li>
                <li className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'>
                  <button type='button' onClick={() => setIsVisible(!isVisible)}>
                    Contato
                  </button>
                </li>
                <li className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'> Idioma </li>
                <li className='w-full border-b-2 pt-2 border-green-400 h-[45.7px]'> Tema</li>
              </ul>
            </div>
          )
          : setIsVisible(!isVisible)
      }

      {isVisible
        ? <button type='button' onClick={() => clickToClose()} className='z-30 fixed cursor-default bg-black w-screen bg-opacity-70 h-screen duration-500' />
        : ''}

      <div className='w-full h-16 fixed top-0 left-0 sm:flex backdrop-blur-sm justify-end items-center pr-5 shadow-md bg-[#0819418e] hidden  z-50'>

        <button type='button' ref={closeMenu} onClick={() => setIsVisible(!isVisible)} className='relative pr-5'>
          <MenuIcon className={`${ isVisible ? 'rotateIcon absolute left-3 ' : '' } text-green-400 z-10`} sx={{ fontSize: '30px', cursor: 'pointer' }} />
          <CloseIcon className={`${ isVisible ? 'none' : 'absolute rotateIcon' }  text-green-400`} />
        </button>
      </div>

      {/* /////////////////// */}
      <div
        className={`
        ${ screenWidth > 1021
          ? ' py-10'
          : ' py-5 shadow-md'
        }
        ${ NavbarRefIsInView
          ? ' py-10'
          : 'bg-[#0819418e] py-5 shadow-md'
        }
        fixed top-0 z-50 box-border flex xl:w-[99.5%] lg:w-[99.2%] md:w-[99%] justify-between  px-14 font-mono uppercase text-white backdrop-blur-sm duration-500 sm:hidden`}
      >
        <ul className='flex items-center justify-center space-x-5 text-green-400'>
          <Link href='/' className='cursor-pointer '>
            .<span className='text-white'>Portfólio</span>()
          </Link>
          <Link href='skills' className='cursor-pointer '>
            .<span className='text-white'>Skills</span>()
          </Link>
          <Link href='about-me' className='cursor-pointer '>
            .<span className='text-white'>SobreMim</span>()
          </Link>
        </ul>

        <div className='space-x-5'>
          <label
            className={`
            ${ screenWidth < 1021
              ? 'px-6 py-1 backdrop-blur-2xl'
              : ''
            }
            ${ NavbarRefIsInView && screenWidth > 1021
              ? 'px-10 py-2'
              : 'px-6 py-1 backdrop-blur-2xl'
            } cursor-pointer rounded-xl border-2 border-blue-500 bg-blue-500 bg-opacity-5 font-black uppercase text-blue-500 duration-500 hover:bg-opacity-10`}
          >
            Currículo PDF
          </label>
          <label
            htmlFor='my-modal-4'
            className={`
            ${ screenWidth < 1021
              ? 'px-6 py-1 backdrop-blur-2xl'
              : ''
            }
            ${ NavbarRefIsInView && screenWidth > 1021
              ? 'px-10 py-2'
              : 'px-6 py-1 backdrop-blur-2xl'
            } cursor-pointer rounded-xl border-2 border-green-500 bg-green-500 bg-opacity-5 font-black uppercase text-green-500 duration-500 hover:bg-opacity-10`}
          >
            Contato
          </label>
        </div>
      </div>
      <input type='checkbox' id='my-modal-4' className='modal-toggle' />
      <label htmlFor='my-modal-4' className=' cursor-pointer modal bg-[#08090ebb] '>
        <label className='relative bg-[#13254ec7] backdrop-blur-3xl shadow-xl  modal-box'>

          <div className='chat chat-start'>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <Image
                  src='/chat-pic.png'
                  alt='Picture of the author'
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className='mb-2 text-gray-300 chat-header'>
              Henrique Magno
            </div>
            <div className='bg-gray-500 chat-bubble'>
              <h3 className='text-white'>Envie-me um email ou visite minhas rede sociais. 😃</h3>
            </div>
          </div>
          <form className='pt-10 text-black'>
            <input
              type='text'
              placeholder='Nome (opcional)'
              className='w-full input'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full mt-3 input'
            />
            <textarea
              placeholder='Mensagem'
              className='w-full pt-2 mt-3 input h-52'
            />
            <div className='flex items-center justify-between w-full h-20 mt-3'>
              <div className='flex items-center justify-around h-16 w-52 '>
                <a
                  rel='noreferrer'
                  href='https://github.com/henrique-magno-dev'
                  target='_blank'
                >
                  <GitHubIcon sx={{
                    fontSize: '40px', color: 'grey', cursor: 'pointer', '&:hover': { color: 'lightgrey' },
                  }}
                  />
                </a>
                <a
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/henrique-magno-dev/'
                  target='_blank'
                >
                  <LinkedInIcon sx={{
                    fontSize: '40px', color: 'grey', cursor: 'pointer', '&:hover': { color: 'lightgrey' },
                  }}
                  />
                </a>
                <a
                  rel='noreferrer'
                  href='https://wa.me/5521984378738'
                  target='_blank'
                >
                  <WhatsAppIcon sx={{
                    fontSize: '40px', color: 'grey', cursor: 'pointer', '&:hover': { color: 'lightgrey' },
                  }}
                  />
                </a>
              </div>
              <button type='submit' className='py-2 font-black text-green-500 duration-500 bg-green-500 border-2 border-green-500 px-14 rounded-xl bg-opacity-5 hover:border-green-500 hover:bg-opacity-10'>
                Enviar
              </button>
            </div>

          </form>

        </label>
      </label>
    </>
  )
}

export default Navbar
