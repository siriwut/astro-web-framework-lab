import { FC } from 'react'

const Pagination: FC = () => {
  return (
    <div className="flex justify-center my-4">
      <a
        href="#previous"
        className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Previous
      </a>
      <a href="#1" className="px-4 py-2 mx-1 bg-blue-600 text-white rounded">
        1
      </a>
      <a
        href="#2"
        className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        2
      </a>
      <a
        href="#next"
        className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next
      </a>
    </div>
  )
}

export default Pagination
