'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo_notBg.svg';

const AIPage = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleComingSoon = () => {
    setStatusMessage('Coming soon — AI design features are on the way!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f2ff] via-white to-[#fff4e6] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-[#622AD1]/20 to-[#F89816]/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#622AD1]/10 px-4 py-2 text-[#622AD1] text-sm font-semibold mb-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#622AD1] text-white">AI</span>
                AI-Driven Print Studio
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Build editable designs from text prompts, print them fast, and deliver them to your campus or business.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                PrintRocket is an AI-powered design, printing, stationery, and delivery platform. We generate editable assets from text prompts, fulfill on-demand printing, and deliver materials quickly to students and SMEs.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleComingSoon}
                  className="inline-flex items-center justify-center rounded-3xl bg-[#622AD1] px-8 py-4 text-white font-semibold shadow-lg shadow-[#622AD1]/20 hover:bg-[#4f21aa] transition duration-300"
                >
                  Start AI Design
                </button>
                <Link href="/" className="inline-flex items-center justify-center rounded-3xl border border-[#622AD1]/20 bg-white px-8 py-4 text-[#622AD1] font-semibold hover:bg-[#622AD1]/5 transition duration-300">
                  Back to Home
                </Link>
              </div>
              {statusMessage && (
                <p className="mt-4 text-sm text-[#622AD1] font-medium">{statusMessage}</p>
              )}
            </div>

            <div className="relative w-full max-w-xl">
              <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-2xl shadow-[#622AD1]/10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Image src={logo} alt="PrintRocket logo" width={64} height={64} className="h-16 w-16 rounded-3xl bg-[#f5efff] p-2" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#622AD1] font-semibold">AI Studio</p>
                    <p className="text-sm text-slate-500">Instant design-to-print flow</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Prompt to Editable Design',
                      text: 'Turn keywords and instructions into polished layouts for notes, flyers, posters, and stationery.',
                    },
                    {
                      title: 'Quick Print Fulfillment',
                      text: 'Upload or choose ready-to-print assets and get them produced within hours.',
                    },
                    {
                      title: 'Smart Stationery for SMEs',
                      text: 'From business cards to brochures, we deliver premium branding materials with speed.',
                    },
                    {
                      title: 'Doorstep Delivery',
                      text: 'Fast delivery to student hostels, campuses, and offices across your city.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-3xl border border-[#e8e0ff] bg-[#faf5ff] p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#622AD1] to-[#F89816] text-white text-lg font-semibold">{index + 1}</div>
                        <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#622AD1]/5 via-white to-[#F89816]/10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                title: 'Editable Assignments',
                description: 'Generate formatting, headers, and layout options for university assignments and notes.',
              },
              {
                title: 'Branding Materials',
                description: 'Create business cards, letterheads, and flyers that reflect your identity.',
              },
              {
                title: 'Fast Delivery',
                description: 'Print and get materials delivered quickly to your doorstep with real-time tracking.',
              },
            ].map((item, index) => (
              <div key={index} className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-xl shadow-[#622AD1]/5">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#622AD1]/10 text-[#622AD1] mb-6">
                  <span className="text-2xl">{['✍️','💼','🚚'][index]}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIPage;
