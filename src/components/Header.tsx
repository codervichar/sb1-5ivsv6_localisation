import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useIntl } from 'react-intl'
import { useAuth } from '../context/AuthContext'

interface HeaderProps {
  setLocale: (locale: string) => void;
  currentLocale: string;
}

const Header: React.FC<HeaderProps> = ({ setLocale, currentLocale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const intl = useIntl()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLogout = () => {
    logout()
    // Redirect to home page or show a logout message
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value)
  }

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">WhatsApp2Text</Link>
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-4">
              <li><Link to="/">{intl.formatMessage({ id: 'nav.home' })}</Link></li>
              <li><Link to="/pricing">{intl.formatMessage({ id: 'nav.pricing' })}</Link></li>
              <li><Link to="/blog">{intl.formatMessage({ id: 'nav.blog' })}</Link></li>
              {isAuthenticated ? (
                <>
                  <li><Link to="/dashboard">{intl.formatMessage({ id: 'nav.dashboard' })}</Link></li>
                  <li><button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">{intl.formatMessage({ id: 'nav.logout' })}</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/signin">{intl.formatMessage({ id: 'nav.signin' })}</Link></li>
                  <li><Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">{intl.formatMessage({ id: 'nav.signup' })}</Link></li>
                </>
              )}
            </ul>
            <div className="flex items-center ml-4">
              <Globe size={20} className="mr-2" />
              <select
                value={currentLocale}
                onChange={handleLanguageChange}
                className="bg-blue-600 text-white border border-white rounded-md px-2 py-1"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="nl">Nederlands</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700">
          <ul className="flex flex-col">
            <li><Link to="/" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>{intl.formatMessage({ id: 'nav.home' })}</Link></li>
            <li><Link to="/pricing" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>{intl.formatMessage({ id: 'nav.pricing' })}</Link></li>
            <li><Link to="/blog" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>{intl.formatMessage({ id: 'nav.blog' })}</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>{intl.formatMessage({ id: 'nav.dashboard' })}</Link></li>
                <li className="px-4 py-2">
                  <button onClick={() => { handleLogout(); toggleMenu(); }} className="w-full text-center bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">
                    {intl.formatMessage({ id: 'nav.logout' })}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/signin" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>{intl.formatMessage({ id: 'nav.signin' })}</Link></li>
                <li className="px-4 py-2">
                  <Link to="/signup" className="block w-full text-center bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100" onClick={toggleMenu}>
                    {intl.formatMessage({ id: 'nav.signup' })}
                  </Link>
                </li>
              </>
            )}
            <li className="px-4 py-2">
              <div className="flex items-center">
                <Globe size={20} className="mr-2 text-white" />
                <select
                  value={currentLocale}
                  onChange={handleLanguageChange}
                  className="bg-blue-700 text-white border border-white rounded-md px-2 py-1 w-full"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                  <option value="nl">Nederlands</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header