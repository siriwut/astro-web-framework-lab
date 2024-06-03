import { FC, useState } from 'react'
import { ProductType } from '@type/product.type'
import CartAddedModal from '@components/CartAddedModal'

export interface ProductDetailPropsType {
  product: ProductType
}

const ProductDetail: FC<ProductDetailPropsType> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddToCart = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
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
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <CartAddedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={product}
      />
    </div>
  )
}

export default ProductDetail
