import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '../context/AuthContext'
import { useIntl } from 'react-intl'

const Signin: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const intl = useIntl()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signin data:', { email, password })
    login()
    navigate('/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>{intl.formatMessage({ id: 'signin.pageTitle' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'signin.pageDescription' })} />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{intl.formatMessage({ id: 'signin.title' })}</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signin.email' })}</label>
          <div className="flex items-center border rounded-md">
            <User size={20} className="ml-2 text-gray-400" />
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
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">{intl.formatMessage({ id: 'signin.password' })}</label>
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
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          {intl.formatMessage({ id: 'signin.submit' })}
        </button>
        <div className="mt-4 text-center text-sm">
          <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">{intl.formatMessage({ id: 'signin.forgotPassword' })}</Link>
        </div>
        <p className="mt-4 text-center text-sm">
          {intl.formatMessage({ id: 'signin.noAccount' })} <Link to="/signup" className="text-blue-600 hover:text-blue-800">{intl.formatMessage({ id: 'signin.signUp' })}</Link>
        </p>
      </form>
    </div>
  )
}

export default Signin