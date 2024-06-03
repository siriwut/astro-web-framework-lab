import { FC } from 'react'
import { ProductType } from '@type/product.type'

export interface CartAddedPropsType {
  isOpen: boolean
  onClose: () => void
  product: ProductType
}

const CartAddedModal: FC<CartAddedPropsType> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Product added to cart</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-24 h-24 object-cover rounded mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default CartAddedModal
