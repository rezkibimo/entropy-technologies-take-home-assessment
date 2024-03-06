'use client'

import { useState, useEffect } from 'react'

function Articles() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const url = process.env.ARTICLE_API_KEY

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.slice(0, 6)) // Take the first 6 articles
                setLoading(false)
            })
    }, [])

    // console.log(data);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No articles data</p>

    return (
        <div>
            <h1 className="text-3xl font-bold">News Feed</h1>
            <div
                className="grid grid-flow-row md:gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((article) => (<div
                    key={article.id}
                    className="my-8 rounded shadow-lg shadow-gray-200 duration-300 hover:-translate-y-1">
                    <a href={article.url} className="cursor-pointer">
                        <figure>
                            <img src={article.thumbnailUrl} className="rounded-t h-72 w-full object-cover" />
                            <figcaption className="p-4">
                                <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800">
                                    {article.title}
                                </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>))}
            </div>
        </div>
    )
}

export default Articles