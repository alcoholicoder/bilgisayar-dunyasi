import ContactCard from '@/components/ContactCard'
import PageImage from '@/components/PageImage'
import React from 'react'

const Contact = () => {
	return (
		<>
			<PageImage />
			<div className="flex flex-col md:flex-row items-center gap-6">
				<ContactCard />
			</div>


			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
				<div className='flex flex-col md:flex-row items-start gap-8'>

					<div className="md:w-1/3 space-y-4 text-gray-700">
						<h1 className="text-2xl font-semibold text-gray-900">Merkez Bina</h1>

						<p className="flex items-start text-base leading-relaxed">
							<span className="mr-2 text-xl">📍</span>
							Karayolları Mah. Cebeci Cad. 574/4 Sk. No:6 <br /> BÜYÜKMEKECE / İSTANBUL - TÜRKİYE
						</p>

						<p className="flex items-center text-base">
							<span className="mr-2 text-xl">📞</span>
							+90 532 222 22 22
						</p>

						<p className="flex items-center text-base">
							<span className="mr-2 text-xl">💬</span>
							<a href="https://wa.me/905322222222" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">
								WhatsApp üzerinden yazın
							</a>
						</p>

						<p className="flex items-center text-base">
							<span className="mr-2 text-xl">✉️</span>
							<a href="mailto:info@ornekmail.com" className="text-cyan-700 hover:underline">
								info@ornekmail.com
							</a>
						</p>
					</div>

					<div className="md:w-2/3 flex items-center">
						<form className="w-full space-y-4 bg-white p-6 px-20 py-10 rounded-lg border-1">
							<h2 className="text-2xl font-semibold text-gray-900">İLETİŞİM FORMU</h2>
							<div>
								<label className="block text-sm font-medium text-gray-700">Adınız</label>
								<input type="text" name="name" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">E-posta</label>
								<input type="email" name="email" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">Mesajınız</label>
								<textarea name="message" rows={4} required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
									{/* Text area içi */}
								</textarea>
							</div>
							<button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
								Gönder
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact