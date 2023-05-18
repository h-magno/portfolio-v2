/* eslint-disable jsx-a11y/label-has-associated-control */

import { useWindowSize } from 'react-use'
import NavbarMobile from './Navbarmobile/NavbarMobile'
import './Navbar.css'
import NavbarBrowserAndTablet from './NavbarBrowserAndTablet/NavbarBrowserAndTablet'

const Navbar = (props: any) => {
  const { width: clientWidth } = useWindowSize()

  const NavbarRefIsInView = props.navbarRefIsInView

  return (
    <>
      <NavbarMobile clientWidth={clientWidth} />

      <NavbarBrowserAndTablet clientWidth={clientWidth} navbarRefIsInView={NavbarRefIsInView} />
    </>
  )
}

export default Navbar
