// ** React Imports
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
// ** Custom Components
import Avatar from '@components/avatar'
// ** Third Party Components
import { Disc, X, Circle } from 'react-feather'

// ** Config
import themeConfig from '@configs/themeConfig'

const VerticalMenuHeader = props => {
  // ** Props
  const { menuCollapsed, setMenuCollapsed, setMenuVisibility, setGroupOpen, menuHover } = props

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([])
  }, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {
      return (
        <Circle
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }
  const userAvatar = defaultAvatar
  return (
    <div className='navbar-header'>
      <ul className='nav navbar-nav flex-row'>
        <li className='nav-item mr-auto'>
          <NavLink to='/' className='navbar-brand'>
            <span className='brand-logo'>
            <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
            </span>
          </NavLink>
          {/* <h2 className='brand-text mb-0'>Ben Stuber</h2> */}
          <span className="block m-t-xs font-bold w-100 d-block" style={{color: '#002e5b'}}>Ben Stuber</span>
          <span className="text-muted text-xs block title-transpora" >Transpora GmbH</span>
        </li>
        <li className='nav-item nav-toggle'>
          <div className='nav-link modern-nav-toggle cursor-pointer'>
            <Toggler />
            <X onClick={() => setMenuVisibility(false)} className='toggle-icon icon-x d-block d-xl-none' size={20} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default VerticalMenuHeader
