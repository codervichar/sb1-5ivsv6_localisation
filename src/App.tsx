import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'
import Pricing from './pages/Pricing'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import TranscriptionHistory from './pages/TranscriptionHistory'
import UpdateProfile from './pages/UpdateProfile'

import enMessages from './locales/en.json'
import esMessages from './locales/es.json'
import deMessages from './locales/de.json'
import nlMessages from './locales/nl.json'
import frMessages from './locales/fr.json'

const messages = {
  en: enMessages,
  es: esMessages,
  de: deMessages,
  nl: nlMessages,
  fr: frMessages,
}

function App() {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    // Detect user's language based on browser settings
    const userLanguage = navigator.language.split('-')[0]
    if (messages[userLanguage]) {
      setLocale(userLanguage)
    }
  }, [])

  // Create a new messages object with fallback to English
  const messagesWithFallback = {
    ...enMessages,  // Start with all English messages
    ...messages[locale],  // Overwrite with translations for the current locale
  }

  return (
    <IntlProvider
      messages={messagesWithFallback}
      locale={locale}
      defaultLocale="en"
      onError={(err) => {
        if (err.code === 'MISSING_TRANSLATION') {
          console.warn('Missing translation:', err.message);
          return;
        }
        throw err;
      }}
    >
      <HelmetProvider>
        <AuthProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-gray-100">
              <Header setLocale={setLocale} currentLocale={locale} />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/welcome" element={<Welcome />} />
                  <Route path="/transcription-history" element={<TranscriptionHistory />} />
                  <Route path="/update-profile" element={<UpdateProfile />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </HelmetProvider>
    </IntlProvider>
  )
}

export default App