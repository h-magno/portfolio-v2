import Link from 'next/link'
import '../../Navbar.css'

import { useState, useContext } from 'react'

import StarIcon from '@mui/icons-material/Star'
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'
import HailOutlinedIcon from '@mui/icons-material/HailOutlined'
import DownloadIcon from '@mui/icons-material/Download'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import Switch from '@mui/material/Switch'

import './NavbarMobileMenu.css'
import { ThemeContext } from '@/hooks/useTheme'

const NavbarMobileMenu = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [darkModeIcon, setDarkModeIcon] = useState(false)
  const [translateToEnglish, setTranslateToEnglish] = useState(false)

  return (
    <div id='menu-list' className='hidden sm:block shadow-lg  h-96 fixed -top-96 w-full z-50 pt-16 box-border translateDownMenu '>
      <ul className=' '>
        <li
          className='w-full border-b  pl-5 pr-10 flex justify-between items-center  border-black dark:border-green-400 h-[45.7px] hover:bg-white hover:bg-opacity-5 duration-300 cursor-pointer'
        >
          <Link href='/'>Portfólio</Link>
          <div><StarIcon className='text-yellow-500 dark:text-green-400' /></div>

        </li>
        <li
          className='w-full border-b  pl-5 pr-10 flex justify-between items-center  border-black dark:border-green-400 h-[45.7px] hover:bg-white hover:bg-opacity-5 duration-300 cursor-pointer'
        >
          <Link href='/skills'>Skills</Link>
          <div><InsightsOutlinedIcon className='text-yellow-500 dark:text-green-400' /></div>
        </li>
        <li
          className='w-full border-b  pl-5 pr-10 flex justify-between items-center  border-black dark:border-green-400 h-[45.7px] hover:bg-white hover:bg-opacity-5 duration-300 cursor-pointer'
        >
          <Link href='/about-me'>Sobre Mim </Link>
          <div><HailOutlinedIcon className='text-yellow-500 dark:text-green-400' /></div>
        </li>
        <li className='w-full border-b  pl-5 pr-10 flex justify-between items-center  border-black dark:border-green-400 h-[45.7px] hover:bg-white hover:bg-opacity-5 duration-300 cursor-pointer'>
          <button type='button'>
            Currículo PDF
          </button>
          <div><DownloadIcon className='text-yellow-500 dark:text-green-400' /></div>
        </li>
        <li className='w-full border-b  pl-5 pr-10 flex justify-between items-center  border-black dark:border-green-400 h-[45.7px] hover:bg-white hover:bg-opacity-5 duration-300 cursor-pointer'>
          <button type='button'>
            Contato
          </button>
          <div><PersonAddAlt1Icon className='text-yellow-500 dark:text-green-400' /></div>
        </li>
        <li className='w-full border-b pt-2 pl-5 pr-10 flex justify-between items-center  border-black dark:border-green-400 h-[45.7px] hover:bg-white hover:bg-opacity-5 duration-300'>
          <span>Tema</span>
          <div className='pb-2'>
            <div className='w-24 h-[22px] flex justify-end relative bg-yellow-500 dark:bg-gray-300 rounded-3xl'>
              <div
                className=' absolute left-0 rounded-l-3xl h-full w-10 flex justify-center items-center'
              >
                {
                    darkModeIcon
                      ? <LightModeIcon sx={{ fontSize: '20px' }} className='text-gray-900' />
                      : <DarkModeIcon sx={{ fontSize: '20px' }} className='text-gray-900' />
                }
              </div>

              <Switch
                className='-mt-2'
                color='default'
                onClick={() => {
                  setDarkModeIcon(!darkModeIcon)
                  setDarkMode(!darkMode)
                }}
                defaultChecked
              />
            </div>
          </div>
        </li>
        <li className='w-full pt-2 pl-5 pr-10 flex justify-between items-center h-[45.7px] hover:bg-white hover:bg-opacity-5 cursor-pointer duration-300'>
          <span>Idioma</span>

          <div className='pb-2 relative'>
            <div className='w-24 h-[22px] flex justify-end relative bg-yellow-500 dark:bg-gray-300 rounded-3xl'>
              <div
                className=' absolute left-0 rounded-l-3xl h-full flex justify-center items-center '
              >

                <div className={`${ translateToEnglish ? 'eng-flag' : 'br-flag' } absolute left-0 rounded-l-3xl h-full w-10 flex justify-center items-center`}> </div>

              </div>
              <Switch
                className='-mt-2'
                color='default'
                onClick={() => setTranslateToEnglish(!translateToEnglish)}
                defaultChecked
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMobileMenu
