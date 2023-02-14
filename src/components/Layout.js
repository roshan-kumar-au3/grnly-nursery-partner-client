import React from "react";
import { Link, Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { ReactComponent as PlantMenu } from "../assests/plant-menu.svg";
import { ReactComponent as GreenHouseIcon } from "../assests/greenhouse-menu.svg";
import { ReactComponent as OrderIcon } from "../assests/order-menu.svg";
import { ReactComponent as UtilitiesIcon } from "../assests/gardening-tools.svg";
import { ReactComponent as ProfileIcon } from "../assests/profile-user.svg";
import { ReactComponent as LogoutIcon } from "../assests/logout.svg";

export default function Layout() {
    return (
        <>
        <div className="flex">
            <div className="hidden lg:flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-2xl text-green-900 font-bold">Grnly.com</h2>
                    </div>
                    {/* <div className="relative">
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div> */}
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md focus:text-teal-500 hover:text-teal-500"
                                >
                                    <PlantMenu className="w-8 h-8" />
                                    <span className="font-bold">Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <GreenHouseIcon className="w-8 h-8" />
                                    <span className="font-bold">Marketplace</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <OrderIcon className="w-8 h-8" />
                                    <span className="font-bold">Orders</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <UtilitiesIcon className="w-8 h-8" />
                                    <span className="font-bold">Utilities</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <ProfileIcon className="w-8 h-8" />
                                    <span className="font-bold">Profile</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <LogoutIcon className="w-8 h-8" />
                                    <span className="font-bold">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full">
                    <Outlet />
            </div>
        </div>
        <BottomNav />
    </>
    );
}