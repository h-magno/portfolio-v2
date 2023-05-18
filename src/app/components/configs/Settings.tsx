import { ThemeContext } from '@/hooks/useTheme'
import SettingsIcon from '@mui/icons-material/Settings'
import Switch from '@mui/material/Switch'
import { useContext } from 'react'

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <div tabIndex={0} className='dropdown dropdown-top dropdown-end fixed bottom-10 right-10 rounded-full w-14 h-14 flex justify-center items-center bg-gray-200 text-black sm:hidden hover:bg-gray-300 duration-500 cursor-pointer z-50'>
      <SettingsIcon sx={{ color: 'black', fontSize: '25px', opacity: '70%' }} />

      <ul className='dropdown-content menu p-2 shadow bg-gray-200 rounded-box w-52'>

        <li className='hover:bg-gray-300 duration-200 flex flex-row justify-between items-center'>
          <span>Tema</span>
          <Switch onClick={() => setDarkMode(!darkMode)} defaultChecked />

        </li>
        <li className='hover:bg-gray-300 duration-200 flex flex-row justify-between items-center'>
          <span>Idioma</span>
          <Switch onClick={() => setDarkMode(!darkMode)} defaultChecked />

        </li>
      </ul>
    </div>
  )
}

export default Settings
