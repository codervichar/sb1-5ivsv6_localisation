import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useIntl } from 'react-intl'

const PricingTier: React.FC<{ name: string; price: string; period: string; transcriptionTime: string; features: string[]; highlight?: boolean }> = ({ name, price, period, transcriptionTime, features, highlight }) => {
  const intl = useIntl()
  return (
    <div className={`bg-white p-6 sm:p-8 rounded-lg shadow-md ${highlight ? 'border-2 border-blue-500' : ''}`}>
      {highlight && <div className="bg-blue-500 text-white py-1 px-4 rounded-t-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{intl.formatMessage({ id: 'pricing.bestValue' })}</div>}
      <h3 className="text-xl sm:text-2xl font-bold mb-4">{name}</h3>
      <p className="text-3xl sm:text-4xl font-bold mb-2">{price}<span className="text-base sm:text-lg font-normal">/{period}</span></p>
      <p className="text-gray-600 mb-6">{transcriptionTime}</p>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2 text-sm sm:text-base">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/signup" className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
        {intl.formatMessage({ id: 'pricing.startFreeTrial' })}
      </Link>
    </div>
  )
}

const Pricing: React.FC = () => {
  const intl = useIntl()
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{intl.formatMessage({ id: 'pricing.title' })}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <PricingTier
          name={intl.formatMessage({ id: 'pricing.weekly' })}
          price="$3.99"
          period={intl.formatMessage({ id: 'pricing.week' })}
          transcriptionTime={intl.formatMessage({ id: 'pricing.weeklyTime' })}
          features={[
            intl.formatMessage({ id: 'pricing.trialPeriod' }),
            intl.formatMessage({ id: 'pricing.weeklyHours' }),
            intl.formatMessage({ id: 'pricing.accuracy' }),
            intl.formatMessage({ id: 'pricing.emailSupport' }),
            intl.formatMessage({ id: 'pricing.cancelAnytime' })
          ]}
        />
        <PricingTier
          name={intl.formatMessage({ id: 'pricing.monthly' })}
          price="$9.99"
          period={intl.formatMessage({ id: 'pricing.month' })}
          transcriptionTime={intl.formatMessage({ id: 'pricing.monthlyTime' })}
          features={[
            intl.formatMessage({ id: 'pricing.trialPeriod' }),
            intl.formatMessage({ id: 'pricing.monthlyHours' }),
            intl.formatMessage({ id: 'pricing.accuracy' }),
            intl.formatMessage({ id: 'pricing.emailSupport' }),
            intl.formatMessage({ id: 'pricing.cancelAnytime' })
          ]}
        />
        <PricingTier
          name={intl.formatMessage({ id: 'pricing.annual' })}
          price="$59.99"
          period={intl.formatMessage({ id: 'pricing.year' })}
          transcriptionTime={intl.formatMessage({ id: 'pricing.annualTime' })}
          features={[
            intl.formatMessage({ id: 'pricing.trialPeriod' }),
            intl.formatMessage({ id: 'pricing.annualHours' }),
            intl.formatMessage({ id: 'pricing.accuracy' }),
            intl.formatMessage({ id: 'pricing.emailSupport' }),
            intl.formatMessage({ id: 'pricing.cancelAnytime' }),
            intl.formatMessage({ id: 'pricing.bestValueForHeavyUsers' })
          ]}
          highlight={true}
        />
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{intl.formatMessage({ id: 'pricing.allPlansInclude' })}</h2>
        <ul className="inline-block text-left">
          <li className="flex items-center mb-2">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>{intl.formatMessage({ id: 'pricing.trialPeriod' })}</span>
          </li>
          <li className="flex items-center mb-2">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>{intl.formatMessage({ id: 'pricing.accuracy' })}</span>
          </li>
          <li className="flex items-center mb-2">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>{intl.formatMessage({ id: 'pricing.emailSupport' })}</span>
          </li>
          <li className="flex items-center">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>{intl.formatMessage({ id: 'pricing.noLongTermCommitment' })}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing