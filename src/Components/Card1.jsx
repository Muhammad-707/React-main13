import React from 'react'
import i1 from "../assets/Icon Container.png"

export default function Card1({ title, text }) {
  return (
    <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#262626] flex flex-col h-full">
    <h3 className="text-white text-lg font-semibold mb-4 uppercase">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{text}</p>
    <button className="w-10 h-10 rounded-full bg-[#111] border border-[#262626] flex items-center justify-center text-gray-400 hover:text-[#D48D71] transition-all">
      <img src={i1} alt="" />
    </button>
  </div>
  )
}