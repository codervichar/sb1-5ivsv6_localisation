import React, { useState } from 'react'
import { User, Mail, Phone, Lock, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'

const Signup: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('en')
  const navigate = useNavigate()
  const intl = useIntl()

  const languages = {
    'ar': 'Arabic',
    'az': 'Azerbaijan',
    'zh': 'Chinese Simplified',
    'zh-TW': 'Chinese Traditional',
    'da': 'Danish',
    'de': 'German',
    'el': 'Greek',
    'en': 'English',
    'es': 'Spanish',
    'fa': 'Persian',
    'fr': 'French',
    'he': 'Hebrew',
    'id': 'Indonesian',
    'it': 'Italian',
    'ja': 'Japanese',
    'nl': 'Dutch',
    'no': 'Norwegian',
    'pt_BR': 'Brazilian Portuguese',
    'ru': 'Russian',
    'sv': 'Swedish',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup data:', { name, email, phoneNumber, password, language })
    console.log('Signup successful, redirecting to welcome page...')
    navigate('/welcome')
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{intl.formatMessage({ id: 'signup.title' })}</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signup.name' })}</label>
          <div className="flex items-center border rounded-md">
            <User size={20} className="ml-2 text-gray-400" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signup.email' })}</label>
          <div className="flex items-center border rounded-md">
            <Mail size={20} className="ml-2 text-gray-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signup.phoneNumber' })}</label>
          <div className="flex items-center border rounded-md">
            <Phone size={20} className="ml-2 text-gray-400" />
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signup.password' })}</label>
          <div className="flex items-center border rounded-md">
            <Lock size={20} className="ml-2 text-gray-400" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="language" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signup.transcriptionLanguage' })}</label>
          <div className="flex items-center border rounded-md">
            <Globe size={20} className="ml-2 text-gray-400" />
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {Object.entries(languages).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          {intl.formatMessage({ id: 'signup.submit' })}
        </button>
      </form>
    </div>
  )
}

export default Signup