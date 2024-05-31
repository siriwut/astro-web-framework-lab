import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">E-commerce Store</h1>
        <nav>
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/shop" className="mr-4">
            Shop
          </a>
          <a href="/contact" className="mr-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
