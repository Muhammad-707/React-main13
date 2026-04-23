import React from 'react'
import i1 from "../assets/Image (21).png"
import i2 from "../assets/Image (22).png"
import i3 from "../assets/Image (23).png"
import i4 from "../assets/Image (24).png"
import i5 from "../assets/Image (25).png"

export default function Card3({ img, img2, title, category, time, tech, desc }) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-3xl border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-6">
    <div className="lg:col-span-4 flex flex-col">
      <div className="flex items-center gap-2 text-white font-bold mb-4 uppercase">
        <img src={img} alt="" /> {title}
      </div>
      <div className="flex gap-2 mb-6">
        <span className="bg-[#111] px-3 py-1 rounded-full text-[10px] text-gray-400 border border-[#262626]">{category}</span>
        <span className="bg-[#111] px-3 py-1 rounded-full text-[10px] text-gray-400 border border-[#262626]">{time}</span>
      </div>
      <p className="text-gray-500 text-xs mb-auto">{desc}</p>
    </div>
    <div className="lg:col-span-4 bg-[#262626] rounded-2xl min-h-[200px] overflow-hidden">
      <img src={img2} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="lg:col-span-4 flex flex-col gap-4">
      <div className="bg-[#111] p-4 rounded-xl border border-[#262626]">
        <p className="text-[10px] text-gray-500 mb-2 uppercase">Technologies Used</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(t => <span key={t} className="text-[10px] text-white bg-[#1A1A1A] px-2 py-1 rounded border border-[#262626]">{t}</span>)}
        </div>
        <div className="bg-[#111] p-2 rounded-xl border border-[#262626] flex items-center justify-between">
          <h2 className="text-[10px] text-gray-500 uppercase">Team</h2>
          <div className="flex items-center -space-x-2">
            <img className="w-[30px] rounded-full border border-[#262626]" src={i1} alt="" />
            <img className="w-[30px] rounded-full border border-[#262626]" src={i2} alt="" />
            <img className="w-[30px] rounded-full border border-[#262626]" src={i3} alt="" />
            <img className="w-[30px] rounded-full border border-[#262626]" src={i4} alt="" />
            <img className="w-[30px] rounded-full border border-[#262626]" src={i5} alt="" />
          </div>
        </div>
      </div>
      <button className="w-full bg-[#D48D71] text-black py-3 rounded-xl font-bold text-sm">BOOK A CALL</button>
    </div>
  </div>
  )
}