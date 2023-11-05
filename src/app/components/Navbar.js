"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Navbar() {
    const path = usePathname()
    return (
        <div className="fixed top-0 bg-white w-full p-3 z-50">
            <ul className="flex justify-center gap-3">
                <li>
                    <Link className="text-black" href="/">
                        <span className="material-symbols-outlined">
                            nutrition
                        </span>
                    </Link>
                </li>
                {path === "/" &&
                    <li>
                        <a className='text-gray-700' href="#ourProducts">
                            Our Products
                        </a>
                    </li>
                }
            </ul>
        </div >
    )
}

export default Navbar