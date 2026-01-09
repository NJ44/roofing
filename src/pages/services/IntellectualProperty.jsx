import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const IntellectualProperty = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Intellectual Property"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Intellectual Property
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Protecting your intellectual property (IP) is crucial for maintaining your competitive advantage and business value. At {config.BUSINESS_NAME}, we help you identify, protect, and leverage your valuable IP assets, including trademarks, copyrights, trade secrets, and patents.
          </p>

          <p className="mb-4">
            Our services include conducting comprehensive searches to ensure your desired marks are available and filing trademark and copyright applications with the appropriate government agencies. We also draft and negotiate licensing agreements that allow you to monetize your IP while protecting your rights. By securing your IP early, you can prevent costly disputes and establish a strong market position.
          </p>

          <p className="mb-4">
            We also provide guidance on trade secret protection, helping you implement policies and agreements to safeguard confidential information. In the event of infringement, our attorneys are prepared to enforce your rights through cease-and-desist letters, negotiation, and litigation if necessary.
          </p>

          <p className="mb-6">
            Whether you are a creative individual, a startup, or an established corporation, our intellectual property services are designed to support your innovation and growth. We work closely with you to develop a comprehensive IP strategy that aligns with your business goals and maximizes the value of your intangible assets.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToElement('#contact', { offset: -100 })
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Schedule a Consultation
          </a>
          <Link
            to="/business-law"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Business Law
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IntellectualProperty

