import { Card } from '@/components/ui/card'
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import React from 'react'

const ContactCard = () => {

    const cards = [
    {
        icon: <Facebook className="w-10 h-10 text-[#1877F2]" />,
        title: "Facebook"
    },
    {
        icon: <Twitter className="w-10 h-10 text-[#1DA1F2]" />,
        title: "Twitter"
    },
    {
        icon: <Youtube className="w-10 h-10 text-[#FF0000]" />,
        title: "YouTube"
    },
    {
        icon: <Instagram className="w-10 h-10 text-[#E1306C]" />,
        title: "Instagram"
    },
    {
        icon: <Linkedin className="w-10 h-10 text-[#0077B5]" />,
        title: "LinkedIn"
    }
    ];

return (
  <div className="mx-auto py-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          className="flex flex-col items-center p-6 text-center justify-center rounded-xl shadow transition-colors duration-200 border border-transparent hover:border-red-300 hover:bg-gray-50">
          <div>{card.icon}</div>
          <p className="mt-4">{card.title}</p>
        </Card>
      ))}
    </div>
  </div>
);

}

export default ContactCard