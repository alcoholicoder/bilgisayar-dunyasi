import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button'

const PageImage = () => {
  return (
   
    <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col"
        style={{
            backgroundImage:
            `url("https://bilgisayaratolyesi.com/wp-content/uploads/2023/01/motherboard-background-scaled.jpg")`,
        }}>

        <div className="absolute inset-0 bg-black/50 z-0" />
			<div className="relative z-10 h-[150px] max-w-7xl mx-auto w-full px-4 flex justify-between items-center text-white">
				<Navbar />
				<Button variant="outline" className="text-black border-white hover:text-black">
					Bize Ulaşın
				</Button>
			</div>

			<div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 flex items-start justify-start">
			{/* Burayı padding veya margin ile hizalayabilirsin */}
			<div className="mt-[10px] ml-[60px] text-white flex flex-col gap-5">
				<h1 className="text-7xl">Sayfa Ismı</h1>
				<p>Sayfa Aciklaması</p>
			</div>
		</div>

    </div>

                   
  )
}

export default PageImage