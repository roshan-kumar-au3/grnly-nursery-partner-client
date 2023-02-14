import React from 'react'
import { ReactComponent as OrderNewIcon } from "../assests/order-new-nav.svg";
// import { ReactComponent as ProcessingIcon } from "../assests/processing-icon.svg";
import { ReactComponent as OrderIcon } from "../assests/order-ready.svg";
import { ReactComponent as UtilitiesIcon } from "../assests/past-order.svg";
import { ReactComponent as ProcessingIcon } from "../assests/process-two.svg";


const DashboardSubHeader = () => {
    return (
        <section className="flex flex-row flex-wrap items-center justify-start bg-white shadow px-2 py-2 h-20 gap-x-12">
            <a href="/" className="flex flex-col lg:flex-row justify-center items-center text-center">
                <div className='w-10 h-10'>
                    <OrderNewIcon className='w-10 h-10' />
                </div>
                <span className="text-xs font-semibold">New </span>
            </a>
            <a href="/" className="flex flex-col lg:flex-row justify-center items-center text-center">
                <div className='w-10 h-10'>
                    <ProcessingIcon className='w-10 h-10' />
                </div>
                <span className="font-semibold text-xs">Processing</span>
            </a>
            <a href="/" className="flex flex-col lg:flex-row justify-center items-center text-center">
                <div className='w-10 h-10'>
                    <OrderIcon className='w-10 h-8' />
                </div>
                <span className="font-semibold text-xs">Ready</span>
            </a>
            <a href="/" className="flex flex-col lg:flex-row items-center justify-center text-center">
                <div className='w-10 h-10'>
                    <UtilitiesIcon className='w-10 h-8' />
                </div>
                <span className="font-semibold text-xs">Past Orders</span>
            </a>
        </section>
    )
}

export default DashboardSubHeader