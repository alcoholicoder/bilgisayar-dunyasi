import React from 'react'
import { IconType } from 'react-icons';
import { MdLocalPhone } from "react-icons/md";


type HeaderSocialProps = {
  icon: IconType;
  title: string;
  text: string;
};

const HeaderSocial = ({ icon: Icon, title, text }: HeaderSocialProps) => {
  return (
    <div className="container flex items-center gap-x-4 py-4">
      <div className="text-blue-600">
        <Icon size={24} />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="font-light text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default HeaderSocial;