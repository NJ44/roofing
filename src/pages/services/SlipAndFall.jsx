import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const SlipAndFall = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="Slip and Fall Accidents"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Slip and Fall Accidents
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Property owners have a legal duty to maintain safe premises and warn visitors of known hazards. At {config.BUSINESS_NAME}, we represent individuals who have been injured in slip and fall accidents due to property owner negligence. Whether the accident occurred at a grocery store, restaurant, hotel, or private residence, our attorneys have the experience and resources to hold negligent parties accountable.
          </p>

          <p className="mb-4">
            Slip and fall accidents can result in serious injuries, including broken bones, traumatic brain injuries, and spinal cord injuries. We understand the physical, emotional, and financial toll these accidents can take on victims and their families. Our goal is to help you recover full compensation for your medical expenses, lost wages, pain and suffering, and other damages.
          </p>

          <p className="mb-4">
            Premises liability cases can be complex, requiring thorough investigation and preservation of evidence. Our team works quickly to secure surveillance footage, interview witnesses, and document hazardous conditions before they are corrected. We also work with safety experts to establish liability and prove that the property owner knew or should have known about the dangerous condition.
          </p>

          <p className="mb-6">
            If you've been injured on someone else's property, don't face the insurance companies alone. Contact us today for a free consultation to discuss your case and effective legal options. We work on a contingency fee basis, so you don't pay any attorney fees unless we successfully recover compensation for you.
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
            to="/personal-injury"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Personal Injury
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlipAndFall

