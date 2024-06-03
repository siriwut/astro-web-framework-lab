import { FC } from 'react'

const HeroBanner: FC = () => {
  return (
    <div className="relative bg-gray-900 text-white p-8 flex items-center justify-center h-96">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our E-commerce Store
        </h1>
        <p className="text-lg mb-6">
          Find the best products at unbeatable prices
        </p>
        <a
          href="/shop"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Shop Now
        </a>
      </div>
    </div>
  )
}

export default HeroBanner
