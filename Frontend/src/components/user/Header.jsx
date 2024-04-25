import React from 'react'

function Header() {
    return (
        <div>
            <header>
                <div className="bg-gray-100 border-b border-gray-200">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between h-16 lg:h-20">
                        {/* This div is use to align the sign in and register button to left */}
                            <div className="hidden lg:flex lg:items-center lg:space-x-10">

                            </div>
                            <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                                <div className="flex-shrink-0">
                                    <div href="#" title="" className="flex">
                                        <div href="#" title="" className="text-3xl font-bold text-black">
                                            ClipNote
                                        </div>

                                        {/* This later for logo + text */}
                                        {/* <img
                                            className="w-auto h-8 lg:h-10"
                                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                                            alt=""
                                        /> */}
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                            {/* <div className="hidden lg:flex lg:items-center lg:space-x-10">
                                <a href="#" title="" className="text-base font-medium text-black">
                                    Sign up{" "}
                                </a>
                                <a href="#" title="" className="text-base font-medium text-black">
                                    Sign in
                                </a>

                            </div> */}
                        </nav>
                    </div>
                </div>
                {/* xs to lg */}

            </header>
        </div>
    )
}

export default Header