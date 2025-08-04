import React from "react"
import HomeCard from "../../components/HomeCard"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function HomePage() {
	return (

		<div>

			{/* HOME TOP IMAGE & NAVBAR SECTION */}
			<div className="relative w-full h-[900px] bg-cover bg-center flex flex-col"
				style={{
					backgroundImage: `url("https://bilgisayaratolyesi.com/wp-content/uploads/2023/01/motherboard-background-scaled.jpg")`,
				}}
			>
				<div className="absolute inset-0 bg-black/50 z-0" />

				<div className="relative z-10 h-[150px] max-w-7xl mx-auto w-full px-4 flex justify-between items-center text-white">
					<Navbar />
					<Button variant="outline" className="text-black border-white hover:text-black">
						Bize Ulaşın
					</Button>
				</div>

				<div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 flex items-start justify-start">
					{/* Burayı padding veya margin ile hizalayabilirsin */}
					<div className="mt-[200px] ml-[60px] text-white flex flex-col gap-5">
						<h1 className="text-7xl">Anasayfa</h1>
						<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum, explicabo beatae ipsum deserunt non maiores laborum incidunt quasi odit sapiente id vero accusantium dolore nisi? Atque, ad. Veritatis, qui.</p>
						<Button variant="outline" className="self-start text-black border-white hover:text-black">
							Bize Ulaşın
						</Button>
					</div>
				</div>
			</div>
			{/* HOME TOP IMAGE & NAVBAR SECTION */}



			<div className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-20">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="md:w-1/2">
						<h2 className="text-red-600 font-bold text-sm mb-2">BİZ KİMİZ?</h2>
						<h1 className="text-4xl font-extrabold mb-4">10 YILLIK DENEYİM, GÜVENİLİR HİZMET</h1>
						<p className="mb-4 text-gray-700">
							Bilgisayar Atölyesi olarak, bilgisayar teknik servisi, bakım, onarım ve yedek parça hizmetlerinde uzmanız...
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Bilgisayarlarınız için hızlı ve güvenilir onarım çözümleri sunuyoruz.</li>
							<li>Her türlü bilgisayar sorunu için uzman ekibimizle yanınızdayız.</li>
							<li>Bilgisayarınızı ilk günkü gibi yapacak güvenilir bir adres.</li>
							<li>Bilgisayar onarımı, bakım ve yedek parça temininde profesyonel hizmet.</li>
						</ul>
					</div>

					<div className="md:w-1/2">
						<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center gap-8">

					<div className="md:w-1/2">
						<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />

					</div>

					<div className="md:w-1/2">
						<h2 className="text-red-600 font-bold text-sm mb-2">BİZ KİMİZ?</h2>
						<h1 className="text-4xl font-extrabold mb-4">10 YILLIK DENEYİM, GÜVENİLİR HİZMET XXXX</h1>
						<p className="mb-4 text-gray-700">
							Bilgisayar Atölyesi olarak, bilgisayar teknik servisi, bakım, onarım ve yedek parça hizmetlerinde uzmanız...
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Bilgisayarlarınız için hızlı ve güvenilir onarım çözümleri sunuyoruz.</li>
							<li>Her türlü bilgisayar sorunu için uzman ekibimizle yanınızdayız.</li>
							<li>Bilgisayarınızı ilk günkü gibi yapacak güvenilir bir adres.</li>
							<li>Bilgisayar onarımı, bakım ve yedek parça temininde profesyonel hizmet.</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row items-center gap-6">
				<HomeCard />
			</div>

			<div className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-20">

				<div className="flex flex-col md:flex-row items-center gap-8">

					<div className="md:w-1/2">
						<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />
					</div>

					<div className="md:w-1/2">
						<h2 className="text-red-600 font-bold text-sm mb-2">BİZ KİMİZ?</h2>
						<h1 className="text-4xl font-extrabold mb-4">10 YILLIK DENEYİM, GÜVENİLİR HİZMET</h1>
						<p className="mb-4 text-gray-700">
							Bilgisayar Atölyesi olarak, bilgisayar teknik servisi, bakım, onarım ve yedek parça hizmetlerinde uzmanız...
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis modi ut, natus quidem ipsam aperiam quos veniam adipisci quae odio fugiat harum sapiente inventore nam possimus optio quis voluptatum?
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />
							</div>
							<div>
								<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />
							</div>
							<div>
								<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />
							</div>
							<div>
								<img src="https://bilgisayaratolyesi.com/wp-content/uploads/2025/04/pccc.png" alt="Servis Masası" className="rounded-lg shadow-lg" />
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
