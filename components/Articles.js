'use client'

import { useState, useEffect } from 'react'

function Articles() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    // if category = general is the same as no category
    const [category, setCategory] = useState('general');

    const apiKey = process.env.ARTICLE_API_KEY;
    const categoryParam = `&category=${category}`;
    const url = `https://newsapi.org/v2/top-headlines?language=en${categoryParam}&apiKey=${apiKey}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // Filter out articles with title "[Removed]"
                const filteredArticles = data.articles.filter((article) => article.title !== "[Removed]");
                setData(filteredArticles);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, [category]);

    console.log(data)

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>Only works with localhost</p>;

    return (
        <div>
            <h1 className="text-3xl font-bold pb-4">News Feed</h1>
            <form class="max-w-sm pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Select category</label>
                <select
                    name="categories"
                    id="categories"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="general">All</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </form>
            <div
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.map((article) => (<article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-start" key={article.title}>
                    <img
                        src={article.urlToImage ? article.urlToImage : 'https://placehold.co/243x132'}
                        className="object-cover h-[243px] w-full"
                        alt="Thumbnail"
                    />
                    <div className="flex justify-between items-center my-5 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                            {article.source.name}
                        </span>
                        <span className="text-sm">Published at {new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900"><a href={article.url}>{article.title}</a></h2>
                    <p className="mb-5 font-light text-gray-500 line-clamp-3">{article.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                        <div className="flex flex-1 items-center space-x-4">
                            <span className="font-medium text-left line-clamp-1">
                                {article.author}
                            </span>
                        </div>
                        <a href={article.url} className="flex-1 items-center font-medium text-right text-primary-600 hover:underline">
                            Read more
                        </a>
                    </div>
                </article>))}
            </div>
        </div>
    )
}

export default Articles