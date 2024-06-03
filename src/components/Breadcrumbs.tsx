import { FC } from 'react'

const Breadcrumbs: FC = () => {
  return (
    <nav className="text-sm mb-4">
      <ul className="flex space-x-2">
        <li>
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>
        </li>
        <li> / </li>
        <li>
          <a href="/shop" className="text-blue-600 hover:underline">
            Shop
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrumbs
