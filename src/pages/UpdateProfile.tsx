import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { User, Mail, Phone, Lock, ArrowLeft, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const UpdateProfile: React.FC = () => {
  // Mock initial user data
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [phoneNumber, setPhoneNumber] = useState('+1234567890')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('en')

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated data to your backend
    console.log('Updated profile data:', { name, email, phoneNumber, password, language })
    // Show a success message or redirect
    alert('Profile updated successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>Update Profile - WhatsApp2Text</title>
        <meta name="description" content="Update your WhatsApp2Text profile information." />
      </Helmet>
      <div className="mb-6">
        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Update Your Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
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
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
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
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
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
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">New Password (leave blank to keep current)</label>
          <div className="flex items-center border rounded-md">
            <Lock size={20} className="ml-2 text-gray-400" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="language" className="block text-gray-700 font-bold mb-2">Transcription Language</label>
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
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default UpdateProfile