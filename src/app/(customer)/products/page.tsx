import Navbar from '@/components/Navbar'
import PageImage from '@/components/PageImage'
import { Button } from '@/components/ui/button'
import React from 'react'


const Products = () => {
    const categories = ['Laptop', 'Anakart', 'Ekran Kartı', 'Klavye', 'Fan', 'SSD', 'HDD', 'Batarya', 'Kasa', 'Adaptör']
    const brands = ['ASUS', 'HP', 'Dell', 'Lenovo']

    const products = [
        { name: 'ASUS TUF Gaming', price: '25.000₺', brand: 'ASUS' },
        { name: 'HP Pavilion', price: '22.000₺', brand: 'HP' },
        { name: 'Dell Inspiron', price: '20.000₺', brand: 'Dell' },
        { name: 'Lenovo Ideapad', price: '19.000₺', brand: 'Lenovo' },
        { name: 'ASUS TUF Gaming', price: '25.000₺', brand: 'ASUS' },
        { name: 'HP Pavilion', price: '22.000₺', brand: 'HP' },
        { name: 'Dell Inspiron', price: '20.000₺', brand: 'Dell' },
        { name: 'Lenovo Ideapad', price: '19.000₺', brand: 'Lenovo' },
        { name: 'HP Pavilion', price: '22.000₺', brand: 'HP' },
    ]

    return (
        <>
            <PageImage />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


                    <aside className="md:col-span-1">
                        <div className="bg-gray-100 border border-gray-300 rounded-lg h-[500px] overflow-y-auto p-4 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Kategoriler</h2>
                            <ul className="space-y-3">
                                {categories.map((category, idx) => (
                                    <li
                                        key={idx}
                                        className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200 transition"
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Ana İçerik */}
                    <main className="md:col-span-3">

                        {/* Sağ Üstte Markalar */}
                        <div className="flex justify-end mb-4">
                            <select className="border rounded px-3 py-2">
                                <option>Marka Seçin</option>
                                {brands.map((brand, idx) => (
                                    <option key={idx} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* Ürün Kartları */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                                >
                                    <img
                                        src="https://i0.shbdn.com/photos/86/98/17/x5_1201869817ryt.jpg"
                                        alt={product.name}
                                        className="h-70 w-full object-cover rounded mb-4"
                                    />
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-gray-500">{product.brand}</p>
                                    <p className="mt-2 font-bold">{product.price}</p>
                                </div>
                            ))}
                        </div>

                    </main>
                </div>
            </div>
        </>

    )
}

export default Products