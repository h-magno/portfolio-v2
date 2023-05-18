/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const NavbarBrowserAndTablet = (props: any) => {
  const { clientWidth, navbarRefIsInView } = props

  return (
    <>
      <div
        className={`
        ${ clientWidth > 1021
          ? ' py-10'
          : ' py-5 shadow-md'
        }
        ${ navbarRefIsInView
          ? ' py-10'
          : ' bg-[#e1e1e16b] dark:bg-[#0819418e] py-5 shadow-md'
        }
        fixed top-0 z-50 box-border flex xl:w-[99.5%] lg:w-[99.2%] md:w-[99%] justify-between  px-14 font-mono uppercase text-white backdrop-blur-sm duration-500 sm:hidden`}
      >
        <div className='relative' >
          <ul className='flex items-center justify-center space-x-5 text-blue-600 dark:text-green-400'>
            <Link href='/' className='cursor-pointer '>
              .<span className=' dark:text-white text-gray-900 font-bold dark:font-normal'>Portfólio</span>()
            </Link>
            <Link href='skills' className='cursor-pointer '>
              .<span className=' dark:text-white text-gray-900 font-bold dark:font-normal'>Skills</span>()
            </Link>
            <Link href='about-me' className='cursor-pointer '>
              .<span className=' dark:text-white text-gray-900 font-bold dark:font-normal'>SobreMim</span>()
            </Link>
          </ul>
        </div>

        <div className='space-x-5 '>
          <label
            className={`
              ${ clientWidth < 1021
              ? 'px-6 py-1 backdrop-blur-2xl'
              : ''
              }
              ${ navbarRefIsInView && clientWidth > 1021
                ? 'px-10 py-2'
                : 'px-6 py-1 backdrop-blur-2xl'
              } cursor-pointer rounded-xl border-2 b bg-opacity-20 hover:bg-opacity-30  border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-blue-600 dark:text-blue-500  dark:bg-opacity-5 font-black uppercase duration-500 dark:hover:bg-opacity-10`}
          >
            Currículo PDF
          </label>
          <label
            htmlFor='my-modal-4'
            className={`
            ${ clientWidth < 1021
              ? 'px-6 py-1 backdrop-blur-2xl'
              : ''
            }
            ${ navbarRefIsInView && clientWidth > 1021
              ? 'px-10 py-2'
              : 'px-6 py-1 backdrop-blur-2xl'
            } cursor-pointer rounded-xl border-2  bg-opacity-20 hover:bg-opacity-30 dark:bg-opacity-5 dark:hover:bg-opacity-10  border-green-500 bg-green-500 text-green-500   font-black uppercase duration-500 `}
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

export default NavbarBrowserAndTablet
