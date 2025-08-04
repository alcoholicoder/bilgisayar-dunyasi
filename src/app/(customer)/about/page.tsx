import PageImage from '@/components/PageImage';
import React from 'react'
import { FaBeer } from 'react-icons/fa';

const About = () => {
	return (
		<>
			<PageImage />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
				<div className='flex flex-col md:flex-row items-center gap-8'>

					<div className='md:w-1/2 border-2 rounded-xl overflow-hidden shadow-md'>
						<img
							src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
							alt="Servis Masası"
							className="w-full h-auto object-cover"
						/>
					</div>

					<div className='md:w-1/2 flex flex-col gap-8'>
						<div>
							<h1 className='text-3xl font-bold mb-2'>Hakkımızda</h1>
							<p className='text-gray-700'>
								Yılların deneyimiyle, bilgisayar tamiri ve teknik servis alanında hızlı ve güvenilir çözümler sunuyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, en kaliteli hizmeti vermeye çalışıyoruz.
							</p>
						</div>
						<div>
							<h1 className='text-3xl font-bold mb-2'>Misyonumuz</h1>
							<p className='text-gray-700'>
								Bilgisayar kullanıcılarının karşılaştığı her türlü teknik soruna çözüm üretmek ve cihazlarını en kısa sürede ilk günkü performansına kavuşturmak. Eğitimli ve deneyimli kadromuzla, güvenilir bir hizmet anlayışı sunmak.
							</p>
						</div>
						<div>
							<h1 className='text-3xl font-bold mb-2'>Vizyonumuz</h1>
							<p className='text-gray-700'>
								Türkiye’nin her yerinde erişilebilir, kaliteli ve yenilikçi bir teknik servis ağı oluşturarak sektörde öncü olmak. Teknolojik gelişmeleri yakından takip ederek, müşterilerimize daima en güncel çözümleri sunmak.
							</p>
						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default About    