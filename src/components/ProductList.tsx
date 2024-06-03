import { FC } from 'react'

export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface ProductListProps {
  products: Product[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products?.map((product) => (
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
  )
}

export default ProductList
