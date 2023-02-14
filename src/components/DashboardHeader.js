import React from 'react';
import ToggleBtn from './ToggleBtn';
import { ReactComponent as NotificationIcon } from "../assests/notification.svg";


const DashboardHeader = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full h-12 bg-slate-700 px-4'>
        <ToggleBtn />
        <NotificationIcon className='w-6 h-6 text-white mr-2' />
    </div>
  )
}

export default DashboardHeader