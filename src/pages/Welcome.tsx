import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useIntl } from 'react-intl'

const Welcome: React.FC = () => {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>{intl.formatMessage({ id: 'welcome.pageTitle' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'welcome.pageDescription' })} />
      </Helmet>
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{intl.formatMessage({ id: 'welcome.title' })}</h1>
        <p className="text-xl mb-8">{intl.formatMessage({ id: 'welcome.subtitle' })}</p>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">{intl.formatMessage({ id: 'welcome.nextSteps' })}</h2>
          <ol className="text-left list-decimal list-inside space-y-2">
            <li>{intl.formatMessage({ id: 'welcome.step1' })}</li>
            <li>{intl.formatMessage({ id: 'welcome.step2' })}</li>
            <li>{intl.formatMessage({ id: 'welcome.step3' })}</li>
          </ol>
        </div>
        <Link to="/dashboard" className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
          {intl.formatMessage({ id: 'welcome.gotoDashboard' })} <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  )
}

export default Welcome