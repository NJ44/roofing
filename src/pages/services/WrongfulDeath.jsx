import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const WrongfulDeath = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="Wrongful Death"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Wrongful Death
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Losing a loved one is a tragedy, but losing them due to someone else's negligence is an unbearable injustice. At {config.BUSINESS_NAME}, we provide compassionate and aggressive representation for families who have lost loved ones in wrongful death accidents. We understand that no amount of money can replace your loss, but we are committed to holding responsible parties accountable and securing financial security for your family's future.
          </p>

          <p className="mb-4">
            Wrongful death claims can arise from various incidents, including motor vehicle accidents, medical malpractice, workplace accidents, and defective products. Our attorneys will thoroughly investigate the circumstances of your loved one's death to determine liability and build a compelling case for justice. We work with medical experts, accident reconstructionists, and financial planners to calculate the full extent of your damages.
          </p>

          <p className="mb-4">
            Damages in a wrongful death claim may include funeral and burial expenses, loss of income and future earnings, loss of companionship and guidance, and pain and suffering endured by the deceased before their passing. We will fight tirelessly to ensure you receive the maximum compensation available under the law.
          </p>

          <p className="mb-6">
            We handle these sensitive cases with the utmost care and respect, allowing you to focus on grieving and healing while we handle the legal proceedings. If you have lost a loved one due to negligence, contact us today for a free, confidential consultation. We are here to listen, support you, and fight for the justice your family deserves.
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

export default WrongfulDeath

