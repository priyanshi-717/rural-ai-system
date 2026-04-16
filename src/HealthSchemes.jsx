import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BriefcaseMedical, CheckCircle2 } from 'lucide-react';

export default function HealthSchemes() {
  const navigate = useNavigate();

  const schemes = [
    {
      name: "Ayushman Bharat",
      desc: "Free treatment up to Rs 5 lakh per family per year.",
      eligible: "Families listed in SECC database",
      apply: "Visit nearest Ayushman Bharat center with Aadhaar card"
    },
    {
      name: "Janani Suraksha Yojana",
      desc: "Cash assistance for pregnant women for institutional delivery.",
      eligible: "Pregnant women from BPL families",
      apply: "Register at nearest health center during pregnancy"
    },
    {
      name: "Mission Indradhanush",
      desc: "Free vaccination for children and pregnant women.",
      eligible: "All children under 2 and pregnant women",
      apply: "Visit nearest health center or Anganwadi"
    },
    {
      name: "Rashtriya Swasthya Bima Yojana",
      desc: "Health insurance for BPL families.",
      eligible: "Below Poverty Line families",
      apply: "Register at district health office with BPL card"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] font-sans pb-8">
      <header className="bg-[#e57368] text-white p-4 flex items-center gap-4 sticky top-0 shadow-sm z-10">
        <button onClick={() => navigate(-1)} className="p-2 bg-black/10 rounded-full hover:bg-black/20">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <BriefcaseMedical size={24} />
          <h1 className="font-bold text-lg">Health Schemes</h1>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {schemes.map((scheme, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-[#e57368]" size={20} />
              <h2 className="font-bold text-gray-800 text-lg">{scheme.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">{scheme.desc}</p>
            <div className="text-sm">
              <div className="grid grid-cols-[70px_1fr] gap-2 mb-2">
                <span className="font-semibold text-gray-800">Eligible:</span>
                <span className="text-gray-600">{scheme.eligible}</span>
              </div>
              <div className="grid grid-cols-[70px_1fr] gap-2">
                <span className="font-semibold text-gray-800">Apply:</span>
                <span className="text-gray-600 flex items-center gap-1">
                  {scheme.apply} <span className="text-[10px] opacity-50">↗</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}