import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const WhiteCollarCrimes = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="White Collar Crimes Defense"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          White Collar Crimes Defense
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            White collar crimes are often complex, document-intensive cases involving allegations of fraud, embezzlement, insider trading, money laundering, and other financial offenses. At {config.BUSINESS_NAME}, we have the knowledge and resources to defend individuals and businesses facing these serious accusations.
          </p>

          <p className="mb-4">
            These cases typically involve federal investigations and sophisticated prosecution teams. Our attorneys are experienced in handling federal criminal defense and understand the intricacies of financial regulations and corporate law. We work with forensic accountants and other experts to analyze complex financial records and challenge the government's evidence.
          </p>

          <p className="mb-4">
            We believe in a proactive defense strategy, often getting involved during the investigation stage to prevent charges from being filed or to negotiate a favorable resolution before an indictment is returned. We work tirelessly to protect your reputation, your professional license, and your freedom.
          </p>

          <p className="mb-6">
            A white collar crime conviction can destroy your career and your future. If you are under investigation or have been charged with a financial crime, you need experienced legal counsel immediately. Contact us today for a confidential consultation to discuss your case and how we can protect your rights.
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
            Free Consultation
          </a>
          <Link
            to="/criminal-defense"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Criminal Defense
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhiteCollarCrimes

