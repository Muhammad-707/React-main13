import React from 'react'
import i1 from "../assets/Button (8).png"

export default function Card4({img, name, role, title, text }) {
  return (
    <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#262626]">
    <h4 className="text-[#D48D71] text-sm font-bold mb-2 uppercase tracking-tighter">{title}</h4>
    <p className="text-gray-400 text-sm mb-8 italic">"{text}"</p>
    <div className="flex items-center gap-3 border-t border-[#262626] pt-6">
      <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <div className="text-white text-sm font-bold">{name}</div>
        <div className="text-gray-500 text-[10px]">{role}</div>
      </div>
      <img src={i1} alt="" />
    </div>
  </div>
  )
}