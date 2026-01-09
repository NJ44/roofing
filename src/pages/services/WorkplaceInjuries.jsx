import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const WorkplaceInjuries = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Workplace Injuries"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Workplace Injuries
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Workplace injuries can have devastating consequences, affecting your ability to work, your income, and your long-term health. At {config.BUSINESS_NAME}, we are committed to helping injured workers navigate the complexities of workers' compensation claims and third-party liability lawsuits to ensure they receive the benefits and compensation they deserve.
          </p>

          <p className="mb-4">
            While workers' compensation provides coverage for medical expenses and a portion of lost wages, it often doesn't cover the full extent of a worker's losses, especially in cases involving serious or permanent injuries. If your injury was caused by a third party's negligence—such as a subcontractor, equipment manufacturer, or property owner—you may be entitled to additional compensation through a personal injury lawsuit.
          </p>

          <p className="mb-4">
            Our attorneys have extensive experience handling workplace injury cases across a wide range of industries, including construction, manufacturing, healthcare, and transportation. We investigate accidents thoroughly, identify all liable parties, and fight aggressively to maximize your recovery. We understand the tactics insurance companies use to deny or minimize claims, and we are prepared to challenge them at every step.
          </p>

          <p className="mb-6">
            Don't let a workplace injury jeopardize your financial future. Contact us today for a free consultation to discuss your rights and legal options. We'll handle the legal burden so you can focus on your recovery and returning to work.
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

export default WorkplaceInjuries

