import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'

const BlogList: React.FC = () => {
  const intl = useIntl()

  const blogPosts = [
    { id: 1, titleId: "blog.post1.title", date: "2023-05-15" },
    { id: 2, titleId: "blog.post2.title", date: "2023-05-20" },
    { id: 3, titleId: "blog.post3.title", date: "2023-05-25" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>{intl.formatMessage({ id: 'blog.pageTitle' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'blog.pageDescription' })} />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">{intl.formatMessage({ id: 'blog.title' })}</h1>
      <div className="space-y-4 sm:space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">
                {intl.formatMessage({ id: post.titleId })}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList