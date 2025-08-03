import React from 'react'
import Image from 'next/image';
import HeaderSocial from "./HeaderSocial";
import { MdLocalPhone, MdEmail, MdLocationOn } from 'react-icons/md';


const Header = () => {
  return (
    <div className="py-2">
      <div className="mx-auto flex justify-between items-center border-2">
     
        <div>
          <Image
            src="https://bilgisayaratolyesi.com/wp-content/uploads/2023/01/BILGI_LOGO_syhhhh.png"
            alt="logo"
            width={150}
            height={60}
          />
        </div>

        <div className="flex gap-x-8 items-center mr-10">
          <HeaderSocial
            icon={MdLocalPhone}
            title="Telefon"
            text="+122 222 222 222"
          />
          <HeaderSocial
            icon={MdEmail}
            title="E-posta"
            text="info@example.com"
          />
        </div>
      </div>
    </div>
  );
};


export default Header