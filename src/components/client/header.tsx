import { BiSupport } from "react-icons/bi";
import HeaderActions from "./button";
import LanguageSelector from "./language";
import NavMenu from "./nav";
import { FaArrowDown, FaUser } from "react-icons/fa";

const HeaderClient = () => {
    return (
        <header className="bg-[#1a1832] h-16 text-white border-b border-[#2a2833] fixed top-0 left-0 w-full z-50">
            <div className="h-full px-6 max-w-[1920px] mx-auto">
                <nav className="flex items-center justify-between h-full">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            {/* Logo Container with hover effect */}
                            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#00A0DF] to-[#0077A7]
                                          p-[1px] transition-transform hover:scale-105 duration-300">
                                <div className="w-full h-full rounded-lg bg-[#1a1832] flex items-center justify-center">
                                    <img
                                        src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxnIGlkPSJYTUxJRF81MF8iPjxwYXRoIGlkPSJYTUxJRF8yMl8iIGZpbGw9IiMwMEEwREYiIGQ9Ik0wIDBoNTUuOXY1NS45SDB6Ii8+PGcgaWQ9IlhNTElEXzUxXyI+PGcgaWQ9IlhNTElEXzEwMV8iPjxwYXRoIGlkPSJYTUxJRF8yMV8iIGZpbGw9IiNGRkYiIGQ9Ik00OC42IDI1LjNjMC0uOC0uNS0xLjQtLjktMi0uNC0uNC0uNy0uOC0uNy0xLjMgMC0uNi40LTEgLjktMSAuMyAwIC41LjEuNy4yLjIuMS41LjIuNy4yLjQgMCAuNy0uNC43LS43IDAtLjQtLjQtLjgtMS4xLS44LTEuNiAwLTMgMS44LTMgMy4yIDAgLjguNSAxLjQuOSAxLjkuMy40LjYuOC42IDEuMiAwIC42LS42IDEtMS4xIDEtLjYgMC0uOS0uMy0xLjMtLjYtLjItLjItLjQtLjQtLjYtLjQtLjMgMC0uNC42LS40LjkgMCAuNC43IDEgMS42IDEgMS40LS4yIDMtMS40IDMtMi44Ii8+PC9nPjxnIGlkPSJYTUxJRF85OF8iPjxwYXRoIGlkPSJYTUxJRF85OV8iIGZpbGw9IiNGRkYiIGQ9Ik0xNC41IDE1LjVjLS4xIDAtLjEgMCAwIDBsLS4xLjR2LjFoLjVjLjQuMS41LjEuNS4zIDAgLjMtLjQgMS4zLS45IDIuN2wtLjQgMS4zYy0uNCAxLjEtMSAyLjctMS41IDQtLjYgMS42LTEuMSAyLjktMS4xIDMuMSAwIC4yLjEuMy42LjNzLjctLjEuOC0uM2MuOS0yLjkgMy4zLTYuMiA0LjUtNi4yLjQgMCAuNS4xLjUuNSAwIC42LS41IDEuOC0xLjEgMy0uNSAxLS45IDItLjkgMi41IDAgLjQuMi42LjYuNiAxLjIgMCAyLjItMS4xIDIuOS0ybC4xLS4xLS4zLS4zaC0uMWMtLjQuNC0xLjEgMS4xLTEuMyAxLjFoLS4xdi0uMmMwLS4xLjEtLjQuMy0uOC41LTEuMSAxLjMtMyAxLjMtNC4xIDAtLjktLjQtMS40LTEuMi0xLjQtMS41IDAtMi43IDEuNy0zLjMgMi42LS4xLjItLjMuNC0uMy40cy4xLS4yLjItLjZjLjItLjQuNC0xIC43LTEuOCAxLjEtMyAxLjYtNC41IDEuNi00LjcgMC0uMi0uMi0uMi0uMy0uMmgtMi4yeiIvPjwvZz48ZyBpZD0iWE1MSURfOTVfIj48cGF0aCBpZD0iWE1MSURfOTZfIiBmaWxsPSIjRkZGIiBkPSJNMTEuMSAyNi4xYy4xLS4xLjEtLjEgMCAwIDAtLjEtLjMtLjMtLjMtLjMtLjUuNC0xLjQgMS4yLTIuMiAxLjItLjMgMC0uNi0uMS0uOC0uMy0uMy0uMi0uNC0uNi0uNC0xLjEtLjEtMS4yIDEtMy4xIDItNC4yLjYtLjYgMS4xLS45IDEuNC0uOS40IDAgLjcuMyAxIC42LjIuMy40LjUuNy41LjEgMCAuMy0uMS4zLS4yLjEtLjEuMi0uMy4yLS40IDAtLjUtLjUtMS4yLTEuNi0xLjMtMS4yIDAtMi44LjctNCAxLjktMS4xIDEuMS0xLjcgMi41LTEuNiAzLjggMCAxLjEuNiAyLjMgMi4yIDIuMyAxLjYuMiAyLjktMS4yIDMuMS0xLjZ6Ii8+PC9nPjxnIGlkPSJYTUxJRF85Ml8iPjxwYXRoIGlkPSJYTUxJRF85M18iIGZpbGw9IiNGRkYiIGQ9Ik0zMS4zIDIzLjNjMCAuMS0uMS4yLS4xLjJ2LS4xYzAtLjEuMS0uNC4yLS44LjItLjguNC0xLjguNC0yLjEgMC0uNC0uMi0uNi0uNi0uNi0uOCAwLTIuMSAxLjQtMi41IDIuMWwuMi4zLjEtLjEuMS0uMWMuMy0uNC45LTEuMSAxLjItMS4xLjIgMCAuMy4yLjMuNSAwIC43LS44IDIuOS0xLjMgNC40LS4zLjgtLjUgMS40LS41IDEuNSAwIC4yLjEuMi4yLjJoLjdjLjEgMCAuMi0uMS4zLS4zIDAgMCAuMy0uOC41LTEuMiAxLjQtMi44IDIuMS00LjIgMi43LTQuOC40LS40LjctLjUuOS0uNS4yIDAgLjIuMS4zLjIuMS4xLjIuMy40LjMuMSAwIC4zIDAgLjQtLjEuMi0uMi4zLS40LjMtLjcgMC0uNS0uNC0uNy0uNy0uNy0xLjQuMS0yLjMgMS0zLjUgMy41eiIvPjwvZz48cGF0aCBpZD0iWE1MSURfODdfIiBmaWxsPSIjRkZGIiBkPSJNMjcgMTkuN2MtLjEgMC0uMi4xLS4yLjItLjEuMS0uMS4yLS4zLjItLjEgMC0uMiAwLS40LS4xLS4yIDAtLjQtLjEtLjctLjEtMy41IDAtNS4zIDQuNy01LjMgNi4zIDAgMS4xLjYgMS42IDEuMiAxLjYuNyAwIDEuNy0uMiAzLTIuMmwuMy0uNXYuMWwtLjEuMmMtLjIuMy0uNSAxLS41IDEuNiAwIC4zLjEuNS4yLjYuMS4xLjMuMi41LjIgMS4yIDAgMi4yLTEuNiAyLjYtMi4ybC0uMy0uM2gtLjFsLS4zLjNjLS40LjQtLjggMS0xLjEgMWgtLjF2LS4yYzAtLjQuOC0yLjMgMS4zLTMuOC40LTEuMS44LTIuMS44LTIuMyAwIDAgMC0uMi0uMS0uMmwtLjUtLjNjLjItLjEuMS0uMS4xLS4xem0tNS41IDYuMmMwLTIuMyAxLjgtNS40IDMuNi01LjQuNiAwIC45LjMuOS45IDAgLjktMi40IDUuMi00IDUuMi0uMy4xLS41IDAtLjUtLjd6Ii8+PHBhdGggaWQ9IlhNTElEXzgyXyIgZmlsbD0iI0ZGRiIgZD0iTTM4LjIgMjUuN2MwIDEuMy44IDIuMiAyIDIuMiAxLjQgMCAyLjktMS40IDMuMy0xLjhWMjZsLS4yLS4zaC0uMWwtLjIuMWMtLjUuNC0xLjMgMS0yIDEtLjggMC0xLjMtLjUtMS4zLTEuMyAwLTEgLjUtMS43LjgtMi4zdi0uMUg0MS4zYzEuMyAwIDMuNy0uNiAzLjctMi4xIDAtLjYtLjYtMS4zLTEuNi0xLjMtMiAuMi01LjIgMy4yLTUuMiA2em01LjEtNS4zYy40IDAgLjcuMy43LjcgMCAxLTEuMSAxLjUtMyAxLjUuMy0uNyAxLjQtMi4yIDIuMy0yLjJ6Ii8+PGcgaWQ9IlhNTElEXzc4XyI+PHBhdGggaWQ9IlhNTElEXzc5XyIgZmlsbD0iI0ZGRiIgZD0iTTM3LjYgMjUuOHMwLS4xIDAgMGMwLS4xLS4zLS40LS4zLS40bC0uMS4xYy0uNy43LTEgMS4yLTEuNCAxLjJoLS4xcy0uMS0uMS0uMS0uMmMwLS40LjctMi40IDIuMS02bDEtMi42Yy41LTEuMy44LTIgLjgtMi4xdi0uMWMwLS4xLS4xLS4xLS4zLS4xaC0yLjNzLS4xIDAtLjEuMXYuNWguNWMuMy4xLjUuMi41LjQgMCAuMy0xLjUgNC0xLjUgNC0uOCAyLTIuMiA1LjUtMi4yIDYuMyAwIC40LjEuNy4yLjguMi4yLjQuMy43LjMuOSAwIDEuOS0xLjIgMi41LTJsLjEtLjJ6bS0uOC05Ljh6Ii8+PC9nPjxnIGlkPSJYTUxJRF83NV8iPjxwYXRoIGlkPSJYTUxJRF83Nl8iIGZpbGw9IiNGRkYiIGQ9Ik01LjkgMzIuOGMwIDEuMS45IDEuNyAxLjcgMi4xbC40LjJjLjguNCAxLjIuOSAxLjIgMS41IDAgLjctLjUgMS4zLTEuMiAxLjMtMS4xIDAtMS43LTEuMS0yLTEuOGwtLjQuMWMuMS43LjMgMS41LjMgMS44aC4ybC41LjJjLjMuMS43LjIgMS4xLjIgMS41IDAgMi42LS45IDIuNi0yLjMgMC0xLjMtMS0xLjktMS43LTIuMmwtLjMtLjFjLS45LS41LTEuMy0uOS0xLjMtMS41cy40LTEuMiAxLjEtMS4yYy45IDAgMS4zLjcgMS41IDEuNGwuNC0uMWMtLjEtLjYtLjItMS4xLS4yLTEuNWwtLjMtLjEtLjItLjFjLS4zLS4xLS43LS4yLTEtLjItMS40LjEtMi40IDEtMi40IDIuM3oiLz48L2c+PGcgaWQ9IlhNTElEXzcyXyI+PHBhdGggaWQ9IlhNTElEXzczXyIgZmlsbD0iI0ZGRiIgZD0iTTExLjIgMzQuNmMwIDEuOSAxLjMgMy43IDQuMiAzLjcuNyAwIDEuNy0uMiAyLjEtLjMuMi0uNS41LTEuNC42LTEuOWwtLjQtLjFjLS42IDEuMi0xLjEgMS44LTIuNCAxLjgtMS42IDAtMi43LTEuNC0yLjctMy41IDAtMS41LjctMy4yIDIuNy0zLjIgMS4yIDAgMS44LjUgMi4xIDEuN2guNGwtLjEtLjUtLjItMS4zaC0uMmMtLjQtLjEtMS0uMi0xLjgtLjItMi41LS4yLTQuMyAxLjQtNC4zIDMuOHoiLz48L2c+PGcgaWQ9IlhNTElEXzY5XyI+PHBhdGggaWQ9IlhNTElEXzcwXyIgZmlsbD0iI0ZGRiIgZD0iTTI2LjUgMzAuOGgtMy4ydi40Yy44LjEuOS4xLjkgMS40djEuNWgtMy40di0xLjVjMC0xLjIuMS0xLjMuOS0xLjR2LS40aC0zLjN2LjRjMSAuMSAxIC4yIDEgMS40djRjMCAxLjItLjEgMS4zLTEgMS40di40aDMuM1YzOGMtLjgtLjEtMS0uMS0xLTEuNHYtMS45aDMuNHYxLjljMCAxLjItLjEgMS4zLTEgMS40di40aDMuM1YzOGMtLjktLjEtMS0uMS0xLTEuNHYtNGMwLTEuMi4xLTEuMyAxLTEuNGwuMS0uNHoiLz48L2c+PGcgaWQ9IlhNTElEXzY0XyI+PHBhdGggaWQ9IlhNTElEXzY1XyIgZmlsbD0iI0ZGRiIgZD0iTTM3LjggMzAuOGgtMi42di40aC40Yy4yIDAgLjMuMS40LjEgMCAuMS4xLjEuMS4yczAgLjMtLjEuNWMwIC4xLS42IDIuNi0xLjEgNC4yLS4xLS4yLTItNS4zLTItNS4zaC0uNXMtMS43IDUuMy0xLjcgNS40Yy0uMS0uMi0xLjMtNC40LTEuMy00LjQgMC0uMi0uMS0uMy0uMS0uNHYtLjJjLjEtLjEuMi0uMS40LS4xaC40di0uM0gyN3YuNGMuNi4xLjguMSAxLjEgMS4xbDEuOSA2aC41czEuNy01LjIgMS44LTUuM2MuMS4yIDEuOSA1LjMgMS45IDUuM2guNWMxLTMuNSAxLjktNS45IDEuOS02IC40LTEgLjUtMS4xIDEuMi0xLjF2LS41ek0zMi4zIDMzem0yLjYgMy4zeiIvPjwvZz48cGF0aCBpZD0iWE1MSURfNTlfIiBmaWxsPSIjRkZGIiBkPSJNMzkuOCAzMi42cy44IDIuNC45IDIuNEgzOWMtLjEgMCAuOC0yLjQuOC0yLjR6bTEuNC4ybC0uOC0yLjEtLjUuMS0yLjMgNS45Yy0uNCAxLS41IDEuMS0xLjIgMS4xdi40SDM5di0uNGgtLjNjLS4yIDAtLjQtLjEtLjQtLjJ2LS4yYzAtLjEgMC0uMi4xLS40bC4xLS4yYy4xLS40LjMtMSAuNC0xLjJINDFjLjIuNi41IDEuMy42IDEuNiAwIC4xLjEuMi4xLjN2LjFjMCAuMS0uMS4xLS4zLjFsLS4zLjF2LjNoM3YtLjRjLS42LS4xLS44LS4xLTEuMi0xLjFsLTEuNy0zLjh6Ii8+PHBhdGggaWQ9IlhNTElEXzUyXyIgZmlsbD0iI0ZGRiIgZD0iTTQ2LjUgMzEuOGMwLS4zIDAtLjUuMS0uNWguNWMuMyAwIDEuNC4xIDEuNCAxLjQgMCAuOS0uNiAxLjQtMS42IDEuNGgtLjR2LTIuM3ptLTIuMS0xdi40Yy44LjEuOS4xLjkgMS40djRjMCAxLjItLjEgMS4zLTEgMS40di40aDIuOGMuOSAwIDEuNy0uMiAyLjItLjUuNy0uNCAxLTEgMS0xLjcgMC0xLS43LTEuNy0yLTEuOS42LS4xIDEuNi0uNiAxLjYtMS42IDAtLjYtLjItMS0uNi0xLjMtLjQtLjMtLjktLjQtMS44LS40aC0zLjF6bTIuNSAzLjZjMS4zIDAgMiAuNiAyIDEuN3MtLjggMS42LTEuNSAxLjZjLS4zIDAtLjUgMC0uNi0uMS0uMi0uMi0uMi0uNS0uMi0xLjF2LTJjMC0uMS4zLS4xLjMtLjF6Ii8+PC9nPjwvZz48L3N2Zz4="
                                        alt="Charles Schwab Logo"
                                        className="w-10 h-10 object-contain p-1"
                                    />
                                </div>
                            </div>

                            {/* Brand Name with styled text */}
                            <div className="hidden md:flex flex-col ml-3">
                                <span className="text-lg font-semibold text-white tracking-wide">
                                    Charles Schwab
                                </span>
                                <span className="text-sm text-[#838B9C] leading-tight">
                                    International
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-8 bg-[#2a2833] mx-4" />

                        {/* Navigation Menu with proper spacing */}
                        <div className="hidden md:block">
                            <NavMenu />
                        </div>
                    </div>

                    {/* Right Section with consistent spacing */}
                    <div className="flex items-center gap-6">
                        {/* Action Buttons */}
                        <HeaderActions />

                        {/* Icons Section */}
                        <div className="flex items-center gap-5">
                            <LanguageSelector />

                            {/* Support Icon with tooltip */}
                            <div className="group relative">
                                <BiSupport className="w-5 h-5 text-[#ffff] hover:text-[#00c2ff] cursor-pointer transition-colors duration-200" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                                               scale-0 group-hover:scale-100 transition-transform duration-200
                                               text-xs text-white bg-[#2a2833] px-2 py-1 rounded whitespace-nowrap">
                                    Hỗ trợ
                                </span>
                            </div>

                            {/* Download Icon with tooltip */}
                            <div className="group relative">
                                <FaArrowDown className="w-5 h-5 text-[#ffff] hover:text-[#00c2ff] cursor-pointer transition-colors duration-200" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                                               scale-0 group-hover:scale-100 transition-transform duration-200
                                               text-xs text-white bg-[#2a2833] px-2 py-1 rounded whitespace-nowrap">
                                    Tải xuống
                                </span>
                            </div>

                            {/* User Profile with tooltip */}
                            <div className="group relative">
                                <FaUser className="w-5 h-5 text-[#ffff] hover:text-[#00c2ff] cursor-pointer transition-colors duration-200" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                                               scale-0 group-hover:scale-100 transition-transform duration-200
                                               text-xs text-white bg-[#2a2833] px-2 py-1 rounded whitespace-nowrap">
                                    Tài khoản
                                </span>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md
                                         hover:bg-[#2a2833] transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderClient;
