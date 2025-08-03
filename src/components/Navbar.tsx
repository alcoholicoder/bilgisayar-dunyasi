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
{/*       
      <NavigationMenuItem>
        
        <NavigationMenuTrigger>Hizmetlerimiz</NavigationMenuTrigger>
        <NavigationMenuContent className="p-4 flex flex-col gap-2">
          <NavigationMenuLink asChild>
            <Link href="/pc-tamiri">PC Tamiri</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/laptop-tamiri">Laptop Tamiri</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/parca-satisi">2.El Parça Satışı</Link>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem> */}

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/contact" className="px-4 py-2">İletişim</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/gallery" className="px-4 py-2">Galeri</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
}

export default Navbar