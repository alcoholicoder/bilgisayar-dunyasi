import React from 'react'

const Footer = () => {
  return (

    
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex flex-col justify-center px-8"
      style={{
        backgroundImage:
          `url("https://bilgisayaratolyesi.com/wp-content/uploads/2023/01/motherboard-background-scaled.jpg")`,
      }}
    >
      {/* Siyah yarı saydam overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Yazılar burada, overlayin üstünde */}
      <div className='max-w-7xl mx-auto px-4 py-20 flex flex-row gap-20'>
        <ul className="relative z-10 list-disc list-inside text-white space-y-2 max-w-xs">
            <li>Ansayfa</li>
            <li>Hakkımızda</li>
            <li>Servislerimiz</li>
            <li>İletişim</li>
        </ul>
              <ul className="relative z-10 list-disc list-inside text-white space-y-2 max-w-xs">
            <li>Ansayfa</li>
            <li>Hakkımızda</li>
            <li>Servislerimiz</li>
            <li>İletişim</li>
        </ul>
                <ul className="relative z-10 list-disc list-inside text-white space-y-2 max-w-xs">
            <li>Ansayfa</li>
            <li>Hakkımızda</li>
            <li>Servislerimiz</li>
            <li>İletişim</li>
        </ul>
        <ul className="relative z-10 list-disc list-inside text-white space-y-2 max-w-xs">
            <li>Ansayfa</li>
            <li>Hakkımızda</li>
            <li>Servislerimiz</li>
            <li>İletişim</li>
        </ul>
      </div>




    </div>
  )
}

export default Footer
