import React from 'react'
import { Link } from 'react-router-dom'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const ContractServices = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Contract Services"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contract Services
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Well-drafted contracts are the foundation of successful business relationships. At {config.BUSINESS_NAME}, our attorneys have extensive experience drafting, reviewing, and negotiating a wide variety of business contracts. We ensure that every agreement you enter into protects your interests, clearly defines rights and obligations, and minimizes potential disputes.
          </p>

          <p className="mb-4">
            Our contract services cover all aspects of business operations, including employment agreements, vendor contracts, service agreements, non-disclosure agreements (NDAs), licensing agreements, and partnership agreements. We pay meticulous attention to detail to ensure compliance with all applicable laws and regulations while securing favorable terms for your business.
          </p>

          <p className="mb-4">
            We understand that every contract is unique and requires a tailored approach based on your specific industry and business goals. Whether you need a standard contract template for daily operations or a complex agreement for a major transaction, we provide strategic legal counsel to help you navigate the process with confidence.
          </p>

          <p className="mb-6">
            In addition to drafting and negotiation, we also provide contract dispute resolution services. If a breach of contract occurs, we are prepared to enforce your rights and protect your business through aggressive representation. Let us help you build a solid legal foundation for your business relationships.
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

export default ContractServices

