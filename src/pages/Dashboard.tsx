import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, CreditCard, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'

const Dashboard: React.FC = () => {
  const intl = useIntl()
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Pro',
    transcriptionsLeft: 87,
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>{intl.formatMessage({ id: 'dashboard.pageTitle' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'dashboard.pageDescription' })} />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">{intl.formatMessage({ id: 'dashboard.welcome' }, { name: user.name })}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" />
            {intl.formatMessage({ id: 'dashboard.transcriptions' })}
          </h2>
          <p className="text-gray-600">{intl.formatMessage({ id: 'dashboard.transcriptionsLeft' }, { count: user.transcriptionsLeft })}</p>
          <Link to="/transcription-history" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            {intl.formatMessage({ id: 'dashboard.viewHistory' })}
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2 text-blue-600" />
            {intl.formatMessage({ id: 'dashboard.subscription' })}
          </h2>
          <p className="text-gray-600">{intl.formatMessage({ id: 'dashboard.currentPlan' }, { plan: user.plan })}</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            {intl.formatMessage({ id: 'dashboard.manageSubscription' })}
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Settings className="mr-2 text-blue-600" />
            {intl.formatMessage({ id: 'dashboard.accountSettings' })}
          </h2>
          <p className="text-gray-600">{intl.formatMessage({ id: 'dashboard.email' })}: {user.email}</p>
          <Link to="/update-profile" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            {intl.formatMessage({ id: 'dashboard.updateProfile' })}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard