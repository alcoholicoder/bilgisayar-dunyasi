import PageImage from '@/components/PageImage'
import ServiceCard from '@/components/ServiceCard'
import { Wrench, Cpu, Monitor, ShoppingCart, Code, Settings, HardDrive, Package } from "lucide-react";
import React from 'react'

    const cardsData = [
        {
            icon: <Wrench className="w-16 h-16 text-cyan-600" />,
            title: "PC & Laptop Tamiri",
            description:
            "Bilgisayar ve laptoplarınızın donanım ve yazılım sorunlarını hızlı ve güvenilir şekilde tamir ediyoruz. Garantili hizmet anlayışıyla cihazınızı ilk günkü performansına kavuşturuyoruz.",
        },
        {
            icon: <Cpu className="w-16 h-16 text-cyan-600" />,
            title: "Anakart & Parça Tamiri",
            description:
            "Anakart tamiri ve değişimi konusunda uzman ekibimizle, en karmaşık teknik sorunları bile çözüyor, yüksek kaliteli yedek parçalar kullanarak cihazınızı koruyoruz.",
        },
        {
            icon: <HardDrive className="w-16 h-16 text-cyan-600" />,
            title: "2. El Parça Alım Satım",
            description:
            "Güvenilir ve test edilmiş ikinci el bilgisayar parçaları alım-satımında uygun fiyatlarla en kaliteli ürünleri sunuyor, ihtiyacınıza hızlı çözümler getiriyoruz.",
        },
        {
            icon: <Package className="w-16 h-16 text-cyan-600" />,
            title: "Sarf Malzeme Temini",
            description:
            "Yazıcı kartuşları, temizleme kitleri, kablolar ve diğer sarf malzemeleri alanında geniş ürün yelpazemizle ihtiyaçlarınızı karşılıyoruz.",
        },
        {
            icon: <Monitor className="w-16 h-16 text-cyan-600" />,
            title: "Donanım Yükseltme",
            description:
            "Bilgisayar performansınızı artırmak için RAM, SSD ve diğer donanım yükseltme hizmetlerimizle cihazlarınızı en yeni teknolojilerle güçlendiriyoruz.",
        },
        {
            icon: <ShoppingCart className="w-16 h-16 text-cyan-600" />,
            title: "Bilgisayar Satışı",
            description:
            "İhtiyacınıza uygun masaüstü ve dizüstü bilgisayar modellerini en uygun fiyatlarla sunuyor, satış sonrası destek hizmetleriyle yanınızdayız.",
        },
        {
            icon: <Code className="w-16 h-16 text-cyan-600" />,
            title: "Web Tasarım & Yazılım",
            description:
            "Kurumsal web siteleri, e-ticaret platformları ve özel yazılım çözümleri geliştirerek dijital dünyadaki yerinizi güçlendiriyoruz.",
        },
        {
            icon: <Settings className="w-16 h-16 text-cyan-600" />,
            title: "Teknik Destek & Danışmanlık",
            description:
            "Donanım ve yazılım alanında teknik destek ve danışmanlık hizmetlerimizle işletmenizin BT altyapısını sağlıklı ve verimli tutuyoruz.",
        },
    ];

    const page = () => {
    return (
        <>
            <PageImage />
        
               			<div className="flex flex-col md:flex-row items-center gap-6">


                    <ServiceCard cards={cardsData} />;

                </div>
        
        </>
    )
}

export default page