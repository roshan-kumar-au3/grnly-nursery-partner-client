import React from 'react';
import { ReactComponent as PlantMenu } from "../assests/plant-menu.svg";
import { ReactComponent as GreenHouseIcon } from "../assests/greenhouse-menu.svg";
import { ReactComponent as OrderIcon } from "../assests/order-menu.svg";
import { ReactComponent as UtilitiesIcon } from "../assests/gardening-tools.svg";
import { ReactComponent as ProfileIcon } from "../assests/profile-user.svg";



const BottomNav = () => {
  return (
    <section id="bottom-navigation" className="lg:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		<div id="tabs" className="flex justify-between">
			<a href="/" className="flex flex-col w-full focus:text-teal-500 hover:text-teal-500 justify-center items-center text-center pt-2 pb-1">
				<div className='w-7 h-7'>
					<PlantMenu className='w-7 h-7' />
				</div>
				<span className="tab tab-home block text-xs font-bold">Home</span>
			</a>
			<a href="/" className="flex flex-col w-full focus:text-teal-500 hover:text-teal-500 justify-center items-center text-center pt-2 pb-1">
			    <div className='w-7 h-7'>
				   <GreenHouseIcon className='w-7 h-7' />
				</div>
				<span className="font-bold tab tab-kategori block text-xs">Marketplace</span>
			</a>
			<a href="/" className="flex flex-col w-full focus:text-teal-500 hover:text-teal-500 justify-center items-center text-center pt-2 pb-1">
			    <div className='w-7 h-7'>
				   <OrderIcon className='w-7 h-7' />
				</div>
				<span className="font-bold tab tab-explore block text-xs">Orders</span>
			</a>
			<a href="/" className="flex flex-col w-full focus:text-teal-500 hover:text-teal-500 justify-center items-center text-center pt-2 pb-1">
			    <div className='w-7 h-7'>
				   <UtilitiesIcon className='w-7 h-7' />
				</div>
				<span className="font-bold tab tab-whishlist block text-xs">Utilities</span>
			</a>
			<a href="/" className="flex flex-col items-center w-full focus:text-teal-500 hover:text-teal-500 justify-center text-center pt-2 pb-1">
			    <div className='w-7 h-7'>
				   <ProfileIcon className='w-7 h-7' />
				</div>
				<span className="font-bold tab tab-account block text-xs">Account</span>
			</a>
		</div>
	</section>
  )
}

export default BottomNav