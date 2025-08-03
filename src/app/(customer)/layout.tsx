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
        
            <div className="relative w-full h-[900px] bg-cover bg-center flex flex-col"
                style={{
                    backgroundImage:
                    `url("https://bilgisayaratolyesi.com/wp-content/uploads/2023/01/motherboard-background-scaled.jpg")`,
                }}
            >

            <div className="absolute inset-0 bg-black/50 z-0" />

            <div className="relative z-10 h-[150px] max-w-7xl mx-auto w-full px-4 flex justify-between items-center text-white">
                <Navbar />
                <Button variant="outline" className="text-black border-white hover:text-black">
                Bize Ulaşın
                </Button>
            </div>

            <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 flex items-start justify-start">
                {/* Burayı padding veya margin ile hizalayabilirsin */}
                <div className="mt-[200px] ml-[60px] text-white flex flex-col gap-5">
                    <h1 className="text-7xl">{metadata.title}</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum, explicabo beatae ipsum deserunt non maiores laborum incidunt quasi odit sapiente id vero accusantium dolore nisi? Atque, ad. Veritatis, qui.</p>
                    <Button variant="outline" className="self-start text-black border-white hover:text-black">
                    Bize Ulaşın
                    </Button>
                </div>
            </div>
        </div>

            {children}

          <main className="mt-10">
            {/* Diğer içerikler */}
          </main>
        
        <Footer/>
    </>
  )
}

export default Layout