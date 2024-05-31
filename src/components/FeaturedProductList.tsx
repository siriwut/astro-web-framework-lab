import React from 'react'

interface ProductType {
  id: number
  name: string
  price: number
  image: string
}

const featuredProducts: ProductType[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 50,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 75,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
]

const FeaturedProductList: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow-md text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <a
              href={`/product/${product.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProductList
