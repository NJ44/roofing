import React, { useState } from 'react'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: 'url(/lawyer_office_hero_standing.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay - lighter for black text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          {/* Text Content */}
          <div className="text-black space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Experienced Legal Representation for Your Rights
            </h1>
            <h2 className="text-xl md:text-2xl text-black font-normal max-w-2xl">
              Proven results, dedicated advocacy, and a team that fights for you.
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors text-center shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contact', { offset: -100 });
                }}
              >
                {t.hero.requestAppointment}
              </a>
              <a
                href="#services"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors text-center shadow-md border border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#services', { offset: -100 });
                }}
              >
                {t.hero.ourServices}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

