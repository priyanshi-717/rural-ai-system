import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, CheckCircle2 } from 'lucide-react';

export default function AgriSchemes() {
  const navigate = useNavigate();

  const schemes = [
    {
      name: "PM-KISAN",
      desc: "Rs 6,000 per year direct income support to farmer families.",
      eligible: "All landholding farmer families",
      apply: "Visit local agriculture office or pmkisan.gov.in"
    },
    {
      name: "Fasal Bima Yojana",
      desc: "Crop insurance at very low premium rates.",
      eligible: "All farmers growing notified crops",
      apply: "Apply through bank or insurance company before sowing"
    },
    {
      name: "Kisan Credit Card",
      desc: "Easy credit for farming needs at low interest.",
      eligible: "All farmers, including tenant farmers",
      apply: "Apply at nearest bank branch with land documents"
    },
    {
      name: "Soil Health Card",
      desc: "Free soil testing and recommendations for your land.",
      eligible: "All farmers",
      apply: "Contact local agriculture department"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] font-sans pb-8">
      <header className="bg-[#5e8264] text-white p-4 flex items-center gap-4 sticky top-0 shadow-sm z-10">
        <button onClick={() => navigate(-1)} className="p-2 bg-black/10 rounded-full hover:bg-black/20">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <Leaf size={24} />
          <h1 className="font-bold text-lg">Agriculture Schemes</h1>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {schemes.map((scheme, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-[#5e8264]" size={20} />
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