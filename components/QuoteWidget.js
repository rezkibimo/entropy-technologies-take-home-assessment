'use client'

import { useState, useEffect } from 'react'

function QuoteWidget() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const url = process.env.QUOTE_OF_THE_DAY_API_KEY

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p className="min-w-[230px] min-h-[150px]">Loading...</p>
  if (!data) return <p>No quote data</p>

  return (
    <div className="flex md:flex-1 lg:flex flex-col">
      <h1 className="text-3xl font-bold pb-4">Quote</h1>
      <figure className="max-w-screen-md mx-auto text-center min-w-xs max-w-xs min-h-[230px]">
        <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-base italic font-medium text-gray-900 dark:text-white">{data.quote}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">{data.author}</cite>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default QuoteWidget