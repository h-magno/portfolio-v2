import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useRef, useState, useEffect } from 'react'
import NavbarMobileMenu from './NavbarMobileMenu/NavbarMobileMenu'

const NavbarMobile = (props: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const closeMenu = useRef(null)

  const { clientWidth } = props

  const clickToClose = () => {
    const menuOpened = document.querySelector('#menu-opened-from-top')
    const menuList = document.querySelector('#menu-list')
    const blackBackground = document.querySelector('#black-background-mobile')

    blackBackground?.classList.add('fadeOut')
    menuOpened?.classList.add('translateUp')
    menuList?.classList.add('translateUp')

    setTimeout(() => {
      setIsVisible(!isVisible)
      const barraMenu = menuOpened?.parentElement
      const menuSlide = barraMenu?.lastChild
      barraMenu?.removeChild(menuSlide!)
    }, 500)
  }

  useEffect(() => {
    if (clientWidth > 768) {
      setIsVisible(false)
      if (isVisible) {
        clickToClose()
      }
    }
  }, [clientWidth])

  return (
    <>

      {isVisible
        ? (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            id='black-background-mobile'
            type='button'
            className='hidden sm:block z-30 fixed top-0 cursor-default bg-black w-screen bg-opacity-70 h-screen duration-500'
            onClick={() => clickToClose()}
          />
        )
        : ''}

      {isVisible
        ? <NavbarMobileMenu />
        : ''}

      <div id='top-bar-mobile-menu' className='z-40'>
        <div className='w-full h-16 fixed top-0 left-0 sm:flex backdrop-blur-lg dark:backdrop-blur-sm justify-end items-center  shadow-md bg-gray-300 bg-opacity-50  dark:bg-[#0819418e] hidden z-50'>
          <button
            type='button'
            ref={closeMenu}
            className='relative pr-5'
            onClick={() => {
              if (isVisible) {
                clickToClose()
                return
              }
              const barraMenu = document.querySelector('#top-bar-mobile-menu')
              const menuOpeningFromTop = document.createElement('div')

              menuOpeningFromTop.id = 'menu-opened-from-top'
              menuOpeningFromTop.className = 'translateDown fixed  h-96 -top-96 left-0 w-full z-40 pt-16 box-border rounded-b-xl border-b border-blue-600 dark:border-green-400 dark:bg-[#081941] bg-gray-300'

              barraMenu?.appendChild(menuOpeningFromTop)
              setIsVisible(!isVisible)
            }}
          >

            {isVisible
              ? <CloseIcon className='text-blue-600 dark:text-green-400 rotateIcon' />
              : <MenuIcon className='text-blue-600 dark:text-green-400 z-10 rotateIcon' sx={{ fontSize: '30px', cursor: 'pointer' }} /> }
          </button>

        </div>
      </div>

    </>
  )
}

export default NavbarMobile
