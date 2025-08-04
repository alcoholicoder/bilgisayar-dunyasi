import { Card } from '@/components/ui/card';
import React from 'react';

type CardData = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ServiceCardProps = {
  cards: CardData[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ cards }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Ne Yapıyoruz?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            className="flex flex-col items-center p-8 text-center justify-center rounded-xl shadow-md border border-transparent hover:border-cyan-500 hover:bg-cyan-50 transition h-80"
          >
            <div>{card.icon}</div>
            <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
