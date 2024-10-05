import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Headphones, FileText, FileAudio, FileVideo } from 'lucide-react'
import { useIntl } from 'react-intl'

const Home: React.FC = () => {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {intl.formatMessage({ id: 'home.hero.title' })}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          {intl.formatMessage({ id: 'home.hero.subtitle' })}
        </p>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
          {intl.formatMessage({ id: 'home.getStarted' })}
        </Link>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 sm:mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageSquare size={40} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{intl.formatMessage({ id: 'home.feature1.title' })}</h2>
          <p className="text-gray-600">{intl.formatMessage({ id: 'home.feature1.description' })}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Headphones size={40} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{intl.formatMessage({ id: 'home.feature2.title' })}</h2>
          <p className="text-gray-600">{intl.formatMessage({ id: 'home.feature2.description' })}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileText size={40} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{intl.formatMessage({ id: 'home.feature3.title' })}</h2>
          <p className="text-gray-600">{intl.formatMessage({ id: 'home.feature3.description' })}</p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 sm:p-8 rounded-lg mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">{intl.formatMessage({ id: 'home.howItWorks.title' })}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <FileAudio size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{intl.formatMessage({ id: 'home.howItWorks.step1.title' })}</h3>
            <p className="text-gray-600">{intl.formatMessage({ id: 'home.howItWorks.step1.description' })}</p>
          </div>
          <div className="text-center">
            <FileText size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{intl.formatMessage({ id: 'home.howItWorks.step2.title' })}</h3>
            <p className="text-gray-600">{intl.formatMessage({ id: 'home.howItWorks.step2.description' })}</p>
          </div>
          <div className="text-center">
            <FileVideo size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{intl.formatMessage({ id: 'home.howItWorks.step3.title' })}</h3>
            <p className="text-gray-600">{intl.formatMessage({ id: 'home.howItWorks.step3.description' })}</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">{intl.formatMessage({ id: 'home.cta.title' })}</h2>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
          {intl.formatMessage({ id: 'home.cta.button' })}
        </Link>
      </section>
    </div>
  )
}

export default Home