import PageImage from '@/components/PageImage';
import React from 'react'
import { Clock, Users, BadgeCheck, Smile } from "lucide-react";

const whyUs = [
  {
    title: "Hızlı Servis",
    desc: "Aynı gün içinde teslim",
    icon: <Clock className="w-10 h-10 text-black" />
  },
  {
    title: "Deneyimli Kadro",
    desc: "Alanında uzman teknisyenler",
    icon: <Users className="w-10 h-10 text-black" />
  },
  {
    title: "Şeffaf Fiyat",
    desc: "Sürpriz ücret yok",
    icon: <BadgeCheck className="w-10 h-10 text-black" />
  },
  {
    title: "Memnuniyet Garantisi",
    desc: "Yüzlerce olumlu geri bildirim",
    icon: <Smile className="w-10 h-10 text-black" />
  }
];

const About = () => {
	return (
		<>
			<PageImage />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
					<div className="flex flex-col md:flex-row items-center gap-12">

						{/* Görsel */}
						<div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
						<img
							src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
							alt="Servis Masası"
							className="w-full h-auto object-cover"
						/>
						</div>

						{/* Metin Alanı */}
						<div className="md:w-1/2 flex flex-col gap-8">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold text-gray-900">
							Hakkımızda
							<span className="block w-12 h-1 bg-black mt-2 rounded"></span>
							</h1>
							<p className="text-gray-600 leading-relaxed">
							Yılların deneyimiyle, bilgisayar tamiri ve teknik servis alanında hızlı ve güvenilir çözümler sunuyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, en kaliteli hizmeti vermeye çalışıyoruz.
							</p>
						</div>

						<div className="space-y-2">
							<h1 className="text-3xl font-bold text-gray-900">
							Misyonumuz
							<span className="block w-12 h-1 bg-black mt-2 rounded"></span>
							</h1>
							<p className="text-gray-600 leading-relaxed">
							Bilgisayar kullanıcılarının karşılaştığı her türlü teknik soruna çözüm üretmek ve cihazlarını en kısa sürede ilk günkü performansına kavuşturmak. Eğitimli ve deneyimli kadromuzla, güvenilir bir hizmet anlayışı sunmak.
							</p>
						</div>

						<div className="space-y-2">
							<h1 className="text-3xl font-bold text-gray-900">
							Vizyonumuz
							<span className="block w-12 h-1 bg-black mt-2 rounded"></span>
							</h1>
							<p className="text-gray-600 leading-relaxed">
							Türkiye’nin her yerinde erişilebilir, kaliteli ve yenilikçi bir teknik servis ağı oluşturarak sektörde öncü olmak. Teknolojik gelişmeleri yakından takip ederek, müşterilerimize daima en güncel çözümleri sunmak.
							</p>
						</div>
						</div>
					</div>
					<div className="mt-20 bg-gray-50 py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-2xl font-bold mb-10">Neden Bizi Tercih Etmelisiniz?</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{whyUs.map((item, idx) => (
							<div
							key={idx}
							className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center space-y-3"
							>
							<div>{item.icon}</div>
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-gray-600 text-sm">{item.desc}</p>
							</div>
						))}
						</div>
					</div>
					</div>


				</div>

		</>
	)
}

export default About    