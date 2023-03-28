import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { FiSettings } from 'react-icons/fi'
import {FiShoppingCart} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '.';
import {useStateContext} from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={ title } position='BottomCenter'>
    <button type='button' onClick={ customFunc } style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode } = useStateContext()

  useEffect(() => {
    // function that sets the screenSize state with current window width
    const handleResize = () => setScreenSize(window.innerWidth)

    // everytime we resize the screen we are going to call the function, tracking the size of our screen in a state
    window.addEventListener('resize', handleResize)

    // initial call to set the current screenSize
    handleResize()

    // in react need to remove the eventlistener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // technically can be done in css but here we want to use the width to change the value of a state
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color= {currentColor}
        icon={<AiOutlineMenu/>}
      />
      <div className="flex">
        <NavButton 
          title='Cart'
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart/>}
        />
        <NavButton 
          title='Chat'
          dotColor='#03C9D7'
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft/>}
        />
        <NavButton 
          title='Notifications'
          dotColor='#03C9D7'
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line/>}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-[#484B52] rounded-lg" onClick={() => handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar}/>
            <p>
              <span className='text-grey-400 text-14' style={{color: currentMode === 'Dark' ? 'white' : 'rgb(153, 171, 180)'}}>Hi, </span> {' '}
              <span className='text-grey-400 font-bold ml-1 text-14' style={{color: currentMode === 'Dark' ? 'white' : 'rgb(153, 171, 180)'}}>Micheal</span>
            </p>
            <MdKeyboardArrowDown className='text-grey-400 text-14'/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar