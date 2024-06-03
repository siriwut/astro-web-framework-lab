import { FC } from 'react'
import { ProductType } from '@types/product.type'

export interface ProductDetailPropsType {
  product: ProductType
}

const ProductDetail: FC<ProductDetailPropsType> = ({ product }) => (
  <div className="container mx-auto p-4">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-4/6 object-cover rounded"
        />
      </div>
      <div className="md:w-1/2 md:ml-8">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-gray-700 mb-4">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)

export default ProductDetail
