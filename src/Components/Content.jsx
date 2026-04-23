import { useState } from 'react';

import i1 from "../assets/Button (5).png"
import i2 from "../assets/Image (18).png"
import i3 from "../assets/Button (6).png"
import i4 from "../assets/Icon Container.png"
import i5 from "../assets/Button (7).png"
import i6 from "../assets/Icon Container (1).png"
import i7 from "../assets/Icon Container (2).png"
import i8 from "../assets/Icon Container (3).png"
import i9 from "../assets/Icon Container (4).png"
import i10 from "../assets/Icon Container (5).png"
import i11 from "../assets/Icon Container (6).png"
import i12 from "../assets/Image (19).png"
import i13 from "../assets/Image (20).png"
import i20 from "../assets/Image (26).png"
import i21 from "../assets/Image (27).png"
import i22 from "../assets/Image (28).png"
import i23 from "../assets/Image (29).png"

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

export default function Content() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-28 pb-10 px-4 md:px-6 max-w-7xl mx-auto space-y-20">
      
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-[#1A1A1A] p-8 md:p-16 rounded-[40px] border border-[#262626]">
          <h1 className="text-white text-3xl flex items-center gap-3 md:text-5xl font-bold mb-8 leading-[1.1]">
            DIGITAL SOLUTIONS <img className="w-[200px]" src={i1} alt="" /> <br />
          </h1>
          <h1 className="text-white text-3xl flex md:text-5xl font-bold mb-8 leading-[1.1]">THAT DRIVE SUCCESS</h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mb-12">At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest pt-8 border-t border-[#262626]">
            <span>Website Design</span> • <span>Branding</span> • <span>Web Development</span> • <span>Digital Marketing</span>
          </div>
        </div>
        <div className="bg-[#1A1A1A] rounded-[40px] border border-[#262626] overflow-hidden p-4 flex flex-col">
          <div className="bg-[#262626] flex-grow rounded-[30px] relative">
            <img className="h-[350px]" src={i2} alt="" />
            <img className="absolute top-0 left-65" src={i3} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-white font-bold">ESTATEIN REAL ESTATE</h3>
            <p className="text-gray-400 text-xs">Web Development</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { l: "Clients", v: "200+" }, { l: "Projects", v: "280+" }, { l: "Happy Clients", v: "100%" },
          { l: "Follower", v: "420K" }, { l: "Experience", v: "10+" }
        ].map((s, i) => (
          <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#262626] text-center">
            <div className="text-2xl font-bold text-white mb-1">{s.v}</div>
            <div className="text-gray-500 text-[10px] uppercase">{s.l}</div>
          </div>
        ))}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#262626] flex items-center justify-center text-[#D48D71] font-bold text-xs cursor-pointer">
          <img className="w-[60px]" src={i4} alt="" /> KNOW MORE
        </div>
      </section>

      <section>
        <div className="bg-[#1A1A1A] text-3xl p-6 rounded-2xl mb-6 border border-[#262626] text-white font-bold uppercase tracking-widest">Reasons to Choose NexGen</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card1 title="Expertise" text="NexGen ensures your projects are powered by state-of-the-art technologies." />
          <Card1 title="Proven Track" text="NexGen demonstrates a consistent ability to meet and exceed expectations." />
          <Card1 title="Client-Centric" text="At NexGen, we prioritize understanding our clients' unique requirements." />
          <Card1 title="Dedicated Team" text="Our professionals bring a wealth of expertise to the table." />
        </div>
      </section>

      <section>
        <div className="bg-[#1A1A1A] text-3xl p-6 rounded-2xl mb-6 border border-[#262626] text-white font-bold uppercase">Our Services</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card2 img={i6} title="Web Design" price="$1,500" desc="Creating visually stunning and user-friendly websites." />
          <Card2 img={i7} title="Mobile App Development" price="$2,500" desc="Harnessing the power of mobile technology." />
          <Card2 img={i8} title="Web Development" price="$1,800" desc="Turning your website into a powerful digital asset." />
          <Card2 img={i9} title="Digital Marketing" price="$1,200" desc="Data-driven strategies to enhance brand visibility." />
        </div>
      </section>

      <section>
        <div className="bg-[#1A1A1A] p-6 rounded-2xl mb-6 border border-[#262626] flex justify-between items-center gap-3">
          <span className="text-white text-3xl font-bold uppercase">Frequently Asked Questions</span>
          <button className="text-gray-500 text-xs flex items-center gap-1"><img src={i5} alt="" /> ALL QUESTIONS</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-2xl border border-[#262626] overflow-hidden transition-all duration-300">
                <div
                  onClick={() => toggleAccordion(i)}
                  className="p-6 flex justify-between items-center text-white cursor-pointer hover:bg-[#222] transition-colors"
                >
                  <span className="text-sm font-medium">How long does it take to complete a project?</span>
                  <span className="text-gray-500 text-2xl w-6 text-center select-none">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </div>

                {openIndex === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm border-t border-[#262626]/50 pt-4">
                    Typically, a project takes 2-4 weeks depending on the complexity, features, and specific requirements of the client.
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#262626]">
            <h3 className="text-white font-bold mb-6 uppercase">Ask your question</h3>
            <div className="space-y-4">
              <input className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm outline-none focus:border-[#D48D71]" placeholder="Name" />
              <input className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm outline-none focus:border-[#D48D71]" placeholder="Email" />
              <textarea className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm h-32 outline-none focus:border-[#D48D71]" placeholder="Your Question" />
              <button className="w-full bg-[#D48D71] py-4 rounded-xl font-bold uppercase text-xs text-black hover:bg-[#c27a5f] transition-colors">Send Your Message</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D48D71] p-8 md:p-16 rounded-[40px] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-black text-2xl md:text-5xl font-black mb-4 uppercase">Ready to transform?</h2>
          <p className="text-black/70 text-sm">Take the first step towards digital success with NexGen.</p>
        </div>
        <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold uppercase text-sm flex items-center gap-5 hover:scale-105 transition-transform">
          Get in touch
          <img className="w-[40px]" src={i5} alt="" />
        </button>
      </section>
    </main>
  );
}