import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import React from 'react'
import Link from 'next/link'; // Eğer Next.js kullanıyorsan


const Navbar = () => {
    return (
        <NavigationMenu className="px-10">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="px-4 py-2">Anasayfa</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/about" className="px-4 py-2">Hakkımızda</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/services" className="px-4 py-2">Hizmetlerimiz</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>Hizmetlerimiz</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 rounded-md shadow-md pointer-events-auto bg-red-500">
                        <ul className="grid gap-2 p-4 w-64">
                        <li>
                            <Link
                            href="/services/pc-tamir"
                            className="block px-3 py-2 hover:bg-gray-100 rounded"
                            >
                            PC Tamiri
                            </Link>
                        </li>
                        <li>
                            <Link
                            href="/services/laptop-anakart"
                            className="block px-3 py-1 hover:bg-gray-100 rounded"
                            >
                            Laptop Anakart Tamiri
                            </Link>
                        </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}



                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/contact" className="px-4 py-2">İletişim</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/products" className="px-4 py-2">Ürünlerimiz</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Navbar