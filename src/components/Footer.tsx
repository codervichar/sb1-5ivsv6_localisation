import React from 'react'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const intl = useIntl()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{intl.formatMessage({ id: 'footer.description' })}</h3>
            <p className="text-sm">{intl.formatMessage({ id: 'footer.description' })}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{intl.formatMessage({ id: 'footer.quickLinks' })}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">{intl.formatMessage({ id: 'nav.home' })}</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400">{intl.formatMessage({ id: 'nav.pricing' })}</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">{intl.formatMessage({ id: 'nav.blog' })}</Link></li>
              <li><Link to="/signup" className="hover:text-blue-400">{intl.formatMessage({ id: 'nav.signup' })}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{intl.formatMessage({ id: 'footer.contactUs' })}</h3>
            <p>{intl.formatMessage({ id: 'footer.email' })}</p>
            <p>{intl.formatMessage({ id: 'footer.phone' })}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{intl.formatMessage({ id: 'footer.followUs' })}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Facebook />
                <span className="sr-only">{intl.formatMessage({ id: 'footer.facebook' })}</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram />
                <span className="sr-only">{intl.formatMessage({ id: 'footer.instagram' })}</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter />
                <span className="sr-only">{intl.formatMessage({ id: 'footer.twitter' })}</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin />
                <span className="sr-only">{intl.formatMessage({ id: 'footer.linkedin' })}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>{intl.formatMessage({ id: 'footer.copyright' }, { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer