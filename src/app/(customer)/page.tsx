import React from "react"
import HomeCard from "../../components/HomeCard"

export default function HomePage() {
  return (
   <div>

		<div className="flex justify-center items-center">
      
    </div>


		<div className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-20">
			<div className="flex flex-col md:flex-row items-center gap-8">
				{/* Sol içerik */}
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

			</div>


		</div>

		<div className="flex flex-col md:flex-row items-center gap-6">
			<HomeCard/>
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
