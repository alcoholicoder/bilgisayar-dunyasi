import { Card } from '@/components/ui/card'
import React from 'react'

const HomeCard = () => {

      const cards = [
    {
      icon: "icon",
      title: "Başlık 1",
      description: "Burada küçük açıklama yazısı yer alır.",
    },
    {
      icon: "icon",
      title: "Başlık 2",
      description: "Burada küçük açıklama yazısı yer alır.",
    },
        {
      icon: "icon",
      title: "Başlık 2",
      description: "Burada küçük açıklama yazısı yer alır.",
    },
        {
      icon: "icon",
      title: "Başlık 2",
      description: "Burada küçük açıklama yazısı yer alır.",
    },

    {
      icon: "icon",
      title: "Başlık 2",
      description: "Burada küçük açıklama yazısı yer alır.",
    },
    
    {
      icon: "icon",
      title: "Başlık 2",
      description: "Burada küçük açıklama yazısı yer alır.",
    },
    
    // 6 tane olacak şekilde çoğalt
  ];

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {cards.map((card, idx) => (
          <Card key={idx} className="flex flex-col items-center p-6 text-center">
            <div>{card.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{card.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomeCard