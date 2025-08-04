import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

export const metadata = {
  title: "Anasayfa",
  description: "Sitenin anasayfası",
};

const Layout =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
        </div>
        

		{children}

        
        <Footer/>
    </>
  )
}

export default Layout