import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const EmploymentLaw = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="Employment Law"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Employment Law
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Employment law compliance is essential for protecting your business from costly disputes and legal claims. At {config.BUSINESS_NAME}, we provide comprehensive employment law services to help you navigate the complex landscape of workplace regulations. From drafting employment contracts to handling termination matters, our goal is to help you maintain a compliant and productive workplace.
          </p>

          <p className="mb-4">
            Our services include the development of employee handbooks and workplace policies that clearly communicate expectations and comply with state and federal laws. We also advise on wage and hour compliance, discrimination and harassment prevention, and family and medical leave matters. By taking a proactive approach, we help prevent issues before they escalate into legal disputes.
          </p>

          <p className="mb-4">
            We also provide training for management and staff on key employment law topics, fostering a respectful and legally compliant work environment. When employment disputes do arise, we offer aggressive representation to defend your business against claims while working to minimize liability and reputational damage.
          </p>

          <p className="mb-6">
            Whether you are a small startup hiring your first employee or a large corporation with a complex workforce, our experienced attorneys are here to support your employment law needs. We partner with you to create a positive workplace culture that supports your business objectives while minimizing legal risk.
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

export default EmploymentLaw

