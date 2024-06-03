import { FC } from 'react'

const FilterSidebar: FC = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul>
          <li>
            <input type="checkbox" id="category1" />{' '}
            <label htmlFor="category1">Category 1</label>
          </li>
          <li>
            <input type="checkbox" id="category2" />{' '}
            <label htmlFor="category2">Category 2</label>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <input type="range" min="0" max="100" className="w-full" />
      </div>
    </aside>
  )
}

export default FilterSidebar
