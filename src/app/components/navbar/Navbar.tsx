/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import Image from 'next/image'
import { useWindowSize } from 'react-use'

import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Navbar = (navbarRefProp: any) => {
  const { width: screenWidth } = useWindowSize()

  const NavbarRefIsInView = navbarRefProp.navbarRefIsInView

  // useEffect(() => {
  //   const interval = setInterval(() => console.log(NavbarRefIsInView.navbarRefIsInView), 1000)
  //   return (() => clearInterval(interval))
  // }, [NavbarRefIsInView])

  return (
    <>
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
              <h3 className='text-white'>Envie-me um email. 😃</h3>
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
                <GitHubIcon sx={{
                  fontSize: '40px', color: 'grey', cursor: 'pointer', '&:hover': { color: 'lightgrey' },
                }}
                />
                <LinkedInIcon sx={{
                  fontSize: '40px', color: 'grey', cursor: 'pointer', '&:hover': { color: 'lightgrey' },
                }}
                />
                <YouTubeIcon sx={{
                  fontSize: '40px', color: 'grey', cursor: 'pointer', '&:hover': { color: 'lightgrey' },
                }}
                />
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
