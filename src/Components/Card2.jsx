import i1 from "../assets/Button (7).png"
import React from 'react'

export default function Card2({ title, price, desc, img }) {
  return (
    <div className="bg-[#1A1A1A] p-6 md:p-10 rounded-2xl border border-[#262626]">
    <div className="flex justify-between items-start mb-8">
      <div className="w-12 h-12 bg-[#262626] rounded-xl flex items-center justify-center text-[#D48D71]"><img src={img} alt="" /></div>
      <button className="text-gray-400 text-xs flex items-center gap-2 hover:text-white transition-all">
        <img src={i1} alt="" />
        BOOK A CALL
      </button>
    </div>
    <h3 className="text-white text-xl font-bold mb-4 uppercase">{title}</h3>
    <p className="text-gray-500 text-sm mb-10">{desc}</p>
    <div className="text-white font-bold border-t border-[#262626] pt-6 flex justify-between items-center">
      <span className="text-xs text-gray-500 uppercase tracking-widest">Starts From</span>
      <span className="text-xl md:text-2xl text-[#D48D71]">{price}</span>
    </div>
  </div>
  )
}