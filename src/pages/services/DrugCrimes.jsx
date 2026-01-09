import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const DrugCrimes = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Drug Crimes Defense"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Drug Crimes Defense
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Drug charges are taken very seriously by prosecutors and courts, and a conviction can lead to severe penalties including mandatory minimum prison sentences, heavy fines, and a permanent criminal record. At {config.BUSINESS_NAME}, we provide aggressive defense for individuals charged with drug offenses, ranging from simple possession to trafficking and manufacturing.
          </p>

          <p className="mb-4">
            Our experienced attorneys understand the nuances of drug laws and know how to identify weaknesses in the prosecution's case. We thoroughly investigate the circumstances of your arrest, including whether law enforcement had probable cause for search and seizure, whether your rights were violated during questioning, and whether the evidence against you was properly handled and tested.
          </p>

          <p className="mb-4">
            We explore all available defense strategies, including challenging the legality of the search, questioning the chain of custody of the evidence, and negotiating for alternative sentencing programs such as drug courts or diversion programs that focus on rehabilitation rather than punishment.
          </p>

          <p className="mb-6">
            If you are facing drug charges, do not delay in seeking legal representation. The earlier we get involved, the more options we may have to protect your future. Contact us today for a confidential consultation to discuss your case and learn how we can help you fight these charges.
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

export default DrugCrimes

