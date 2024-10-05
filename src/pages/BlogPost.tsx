import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const intl = useIntl()

  // This is a mock-up. In a real application, you'd fetch the blog post data based on the ID.
  const post = {
    titleId: `blog.post${id}.title`,
    date: "2023-05-15",
    contentId: `blog.post${id}.content`,
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>{intl.formatMessage({ id: post.titleId })} - {intl.formatMessage({ id: 'blog.pageTitle' })}</title>
        <meta name="description" content={intl.formatMessage({ id: post.contentId }).substring(0, 160)} />
      </Helmet>
      <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; {intl.formatMessage({ id: 'blog.backToBlog' })}</Link>
      <article className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{intl.formatMessage({ id: post.titleId })}</h1>
        <p className="text-gray-600 mb-4 text-sm">{post.date}</p>
        <div className="prose max-w-none">
          <p className="text-base sm:text-lg">{intl.formatMessage({ id: post.contentId })}</p>
        </div>
      </article>
    </div>
  )
}

export default BlogPost