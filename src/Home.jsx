import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Leaf, BriefcaseMedical, Landmark, FileText, History } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#fcfcfc] font-sans">
      {/* Header */}
      <header className="flex flex-col items-center pt-8 pb-4">
        <div className="flex items-center gap-2">
          <Sun className="text-orange-400" size={28} />
          <h1 className="text-2xl font-bold text-gray-800">Samadhan AI</h1>
        </div>
        <p className="text-gray-500 text-sm mt-1">Your Smart Rural Assistant</p>
      </header>
      <br /><br />

      {/* Placeholder for Hero Image */}
      <div className="mx-4 h-40 bg-[#f4ebd0] rounded-2xl mb-6 flex items-center justify-center border border-[#e8dfc5]">
        <span className="text-gray-500 font-medium"><img src="https://static.prod-images.emergentagent.com/jobs/c7bea7df-e77c-43d3-98c5-ca4e8fc33b76/images/c734be6832efaa7f71cc73a2be3994525565819b78cfbaf6d6a67584cb56cbee.png" /></span>
      </div>

      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">How can I help you today?</h2>
        
        {/* Big Domain Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button 
            onClick={() => navigate('/assistant/agriculture')}
            className="flex flex-col items-center justify-center bg-[#f0fdf4] border border-[#bbf7d0] p-6 rounded-2xl active:scale-95 transition"
          >
            <Leaf className="text-green-600 mb-2" size={32} />
            <span className="font-bold text-green-800">Agriculture</span>
            <span className="text-xs text-green-600 mt-1 text-center">Crop advice, weather, prices</span>
          </button>
          
          <button 
            onClick={() => navigate('/assistant/healthcare')}
            className="flex flex-col items-center justify-center bg-[#fef2f2] border border-[#fecaca] p-6 rounded-2xl active:scale-95 transition"
          >
            <BriefcaseMedical className="text-red-500 mb-2" size={32} />
            <span className="font-bold text-red-700">Healthcare</span>
            <span className="text-xs text-red-500 mt-1 text-center">Symptoms, schemes, tips</span>
          </button>
        </div>

        {/* List Buttons */}
        {/* List Buttons */}
        <div className="space-y-3 pb-8">
          <button onClick={() => navigate('/schemes/agriculture')} className="w-full flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-xl active:bg-gray-50">
            <Landmark className="text-gray-600" size={24} />
            <div className="text-left">
              <p className="font-semibold text-gray-800">Agriculture Schemes</p>
              <p className="text-xs text-gray-500">PM-KISAN, Fasal Bima & more</p>
            </div>
          </button>
          
          <button onClick={() => navigate('/schemes/health')} className="w-full flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-xl active:bg-gray-50">
            <FileText className="text-gray-600" size={24} />
            <div className="text-left">
              <p className="font-semibold text-gray-800">Health Schemes</p>
              <p className="text-xs text-gray-500">Ayushman Bharat & more</p>
            </div>
          </button>
          {/* ... Keep the Chat History button as is for now ... */}
          <button className="w-full flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-xl active:bg-gray-50">
            <History className="text-gray-600" size={24} />
            <div className="text-left">
              <p className="font-semibold text-gray-800">Chat History</p>
              <p className="text-xs text-gray-500">Continue a previous conversation</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}