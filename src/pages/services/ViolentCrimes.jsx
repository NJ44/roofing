import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const ViolentCrimes = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=600&fit=crop"
            alt="Violent Crimes Defense"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Violent Crimes Defense
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Violent crimes are among the most serious offenses in the criminal justice system, carrying the potential for lengthy prison sentences and life-altering consequences. At {config.BUSINESS_NAME}, we provide aggressive and strategic defense for individuals accused of violent crimes, including assault, battery, domestic violence, manslaughter, and homicide.
          </p>

          <p className="mb-4">
            We understand the high stakes involved in these cases and the importance of a vigorous defense. Our attorneys conduct independent investigations, interview witnesses, and examine forensic evidence to challenge the prosecution's narrative. We also work with experts in fields such as self-defense, psychology, and DNA analysis to build the strongest possible case for our clients.
          </p>

          <p className="mb-4">
            Self-defense, defense of others, and lack of intent are common defenses in violent crime cases, and we carefully evaluate all potential defenses applicable to your situation. We also scrutinize the actions of law enforcement to ensure your constitutional rights were protected at every stage of the investigation and arrest.
          </p>

          <p className="mb-6">
            If you are facing violent crime charges, your freedom and future are on the line. You need a legal team that is not afraid to fight for you in and out of the courtroom. Contact us today for a free, confidential consultation to discuss your case and begin building your defense.
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

export default ViolentCrimes

