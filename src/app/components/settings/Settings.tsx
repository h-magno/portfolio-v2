import { ThemeContext } from '@/hooks/useTheme'
import { useState, useContext } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import Switch from '@mui/material/Switch'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [translateToEnglish, setTranslateToEnglish] = useState(false)

  return (
    <div tabIndex={0} className='dropdown dropdown-top dropdown-end fixed bottom-10 right-10 rounded-full w-14 h-14 flex justify-center items-center bg-gray-600  dark:bg-gray-200 dark:text-black sm:hidden hover:bg-gray-500 dark:hover:bg-gray-300 duration-500 cursor-pointer z-50'>
      <SettingsIcon className='text-white dark:text-black' sx={{ fontSize: '25px', opacity: '70%' }} />

      <ul className='dropdown-content menu p-2 shadow bg-gray-200 rounded-box w-52'>

        <li className='hover:bg-gray-300 duration-200 flex flex-row justify-around items-center'>
          <span>Tema</span>
          <div className='flex '>

            { !darkMode
              ? <LightModeIcon sx={{ fontSize: '20px' }} className='text-gray-900 -mr-2' />
              : <DarkModeIcon sx={{ fontSize: '20px' }} className='text-gray-900 -mr-2' />}
            <Switch color='default' onClick={() => setDarkMode(!darkMode)} defaultChecked />
          </div>

        </li>
        <li className='hover:bg-gray-300 duration-200 flex flex-row justify-between items-center'>
          <span>Idioma</span>

          <div className='w-24 h-[22px] mr-2 flex relative rounded-3xl'>
            <div className='flex'>
              <div
                className=' absolute left-0 rounded-l-3xl h-full flex justify-center items-center '
              >
                <div className={`${ translateToEnglish ? 'eng-flag' : 'br-flag' } absolute left-0 rounded-l-3xl h-full w-8 flex justify-center items-center`}> </div>
              </div>
              <Switch
                className='-mt-2 ml-3'
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

export default Settings
