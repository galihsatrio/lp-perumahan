"use client";

import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCFA] text-emerald-950 selection:bg-gold-200 overflow-x-hidden">
      {/* Background Organic Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-50 rounded-full blur-[120px] opacity-40 animate-float"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-gold-50 rounded-full blur-[100px] opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 nav-glass py-3 md:py-4 px-6 md:px-12 flex justify-between items-center rounded-full shadow-layered transition-all duration-300`}>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-900 organic-radius flex items-center justify-center shadow-lg">
            <span className="text-gold-500 font-serif font-bold text-xl md:text-2xl">L</span>
          </div>
          <span className="text-lg md:text-xl font-serif font-bold tracking-[0.1em] text-emerald-950">LUXURA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/70">
          <a href="#hero" className="hover:text-emerald-900 transition-all border-b border-transparent hover:border-gold-500 pb-1">Beranda</a>
          <a href="#features" className="hover:text-emerald-900 transition-all border-b border-transparent hover:border-gold-500 pb-1">Fasilitas</a>
          <a href="#units" className="hover:text-emerald-900 transition-all border-b border-transparent hover:border-gold-500 pb-1">Tipe Unit</a>
          <a href="#contact" className="hover:text-emerald-900 transition-all border-b border-transparent hover:border-gold-500 pb-1">Hubungi</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-emerald-950 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-emerald-900 transition-all shadow-layered hover:scale-105 active:scale-95">
            Reservasi
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            <span className={`w-6 h-0.5 bg-emerald-950 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-emerald-950 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-emerald-950 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`absolute top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-layered border border-emerald-900/5 flex flex-col gap-6 md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif font-bold text-emerald-950 border-b border-emerald-900/5 pb-4 focus:text-gold-600 transition-colors">Beranda</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif font-bold text-emerald-950 border-b border-emerald-900/5 pb-4 focus:text-gold-600 transition-colors">Fasilitas</a>
          <a href="#units" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif font-bold text-emerald-950 border-b border-emerald-900/5 pb-4 focus:text-gold-600 transition-colors">Tipe Unit</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif font-bold text-emerald-950 border-b border-emerald-900/5 pb-4 focus:text-gold-600 transition-colors">Hubungi</a>
          <button className="bg-emerald-950 text-white w-full py-5 rounded-full font-bold uppercase tracking-widest text-xs mt-4">
            Reservasi Sekarang
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* New Fluid Hero Section */}
        <section id="hero" className="relative min-h-screen lg:min-h-[110vh] flex items-center pt-32 pb-20 overflow-visible">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative z-20 text-center lg:text-left">
              <span className="inline-block text-gold-600 font-bold tracking-[0.4em] uppercase mb-6 text-[10px] md:text-xs animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                Kemewahan & Alam yang Menyatu
              </span>
              <h1 className="text-fluid-hero font-serif font-bold leading-[1.1] text-emerald-950 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                Harmoni Alam <br />
                dalam <span className="text-gold-600 italic">Kenyamanan</span> <br />
                Hunian Sejati.
              </h1>
              <p className="text-fluid-p text-emerald-900/60 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                Masuki dunia yang dirancang dengan keanggunan organik. Luxura Estate bukan sekadar tempat tinggal—ia adalah simfoni keajaiban arsitektur dan kenyamanan alami.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 animate-slide-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                <a href="#units" className="group relative flex items-center gap-4 bg-emerald-950 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold shadow-layered hover:shadow-2xl transition-all hover:-translate-y-1 text-sm md:text-base">
                  Lihat Unit
                  <span className="w-6 md:w-8 h-[1px] bg-gold-400 group-hover:w-12 transition-all"></span>
                </a>
                <a href="#features" className="group flex items-center gap-4 px-6 md:px-8 py-4 md:py-5 rounded-full border border-emerald-900/10 hover:border-emerald-900/30 transition-all text-sm md:text-base">
                  <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-all text-emerald-900">▶</span>
                  <span className="font-bold text-emerald-900">Virtual Tour</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-16 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full px-4 lg:px-0">
              {/* Overlapping Organic Images */}
              <div className="relative w-full aspect-[4/5] animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <div className="absolute inset-0 z-10 organic-radius overflow-hidden shadow-layered">
                  <Image
                    src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Arsitektur Utama"
                    fill
                    className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                {/* Floating Secondary Image - Adjusted for Responsive */}
                <div className="absolute -bottom-10 -left-6 md:-bottom-12 md:-left-20 w-3/4 aspect-square z-20 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-layered border-4 md:border-8 border-white animate-float">
                  <Image
                    src="https://images.unsplash.com/photo-1600121848594-d8644e57abab"
                    alt="Interior Mengalir"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Features */}
        <section id="features" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-fluid-h2 font-serif font-bold text-emerald-950 mb-6 md:mb-8 leading-tight">
                  Modernitas yang Mulus, <br /><span className="text-gold-600">Alami yang Jiwani.</span>
                </h2>
                <div className="w-24 md:w-32 h-1.5 bg-gold-500 rounded-full"></div>
              </div>
              <p className="text-emerald-900/40 font-bold uppercase tracking-[0.3em] vertical-text hidden lg:block">Arsitektur</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                { title: "Aliran Eco-Fluid", desc: "Interior kami dirancang dengan sudut melengkung dan jalur terbuka untuk meniru aliran alami udara dan cahaya.", icon: "🍃", color: "bg-emerald-50" },
                { title: "Smart Sanctuary", desc: "Rumah yang mengantisipasi kebutuhan Anda, menyesuaikan diri dengan ritme hidup tanpa mengganggu privat Anda.", icon: "💎", color: "bg-gold-50" },
                { title: "Taman Abadi", desc: "Akses ke ruang botani pribadi yang tumbuh dan berkembang bersama warisan keluarga Anda.", icon: "🌳", color: "bg-emerald-50" }
              ].map((item, idx) => (
                <div key={idx} className={`p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-soft hover:shadow-layered transition-all duration-500 group ${idx % 2 === 1 ? 'lg:translate-y-12' : ''}`}>
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${item.color} rounded-2xl md:rounded-3xl flex items-center justify-center text-3xl md:text-4xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-4 md:mb-6 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                  <p className="text-emerald-900/60 leading-[1.8] text-base md:text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overlapping Unit Showcase */}
        <section id="units" className="py-24 md:py-40 bg-emerald-950 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] border border-white/20 rounded-full animate-float"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="relative max-w-xl mx-auto lg:mx-0 w-full">
                <div className="organic-radius overflow-hidden shadow-2xl relative z-10 aspect-[4/5] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7"
                    alt="The Sovereign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-10 -right-4 md:-top-16 md:-right-16 bg-gold-500 text-emerald-950 p-8 md:p-12 rounded-full w-32 h-32 md:w-48 md:h-48 flex flex-col items-center justify-center shadow-2xl z-20 animate-float">
                  <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest mb-1">Mulai Dari</span>
                  <span className="text-xl md:text-3xl font-serif font-bold text-center">Rp 15M</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <span className="text-gold-500 font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 block text-xs md:text-sm">Residensi</span>
                <h2 className="text-fluid-h2 font-serif font-bold mb-6 md:mb-10 leading-tight">The Grand <br /><span className="italic text-gold-500 font-light">Sovereign</span></h2>
                <p className="text-emerald-50/60 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-lg mx-auto lg:mx-0">
                  Mahakarya kurva simetris dan ruang terbuka. Tipe unit ini mendefinisikan ulang kemewahan bagi era modern.
                </p>
                <ul className="space-y-4 md:space-y-6 mb-12 md:mb-16 inline-block lg:block text-left">
                  {["650m² Ruang Aliran Mewah", "Kolam Refleksi Infinity Pribadi", "Taman Botani Eksklusif"].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 md:gap-6 group">
                      <span className="w-8 md:w-12 h-[1px] bg-gold-500 group-hover:w-16 transition-all"></span>
                      <span className="text-base md:text-lg font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="block">
                  <button className="border-b-2 border-gold-500 pb-2 text-lg md:text-xl font-serif italic text-gold-400 hover:text-white transition-colors">
                    Unduh Brosur Lengkap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fluid Contact Section */}
        <section id="contact" className="py-24 md:py-40 relative px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-layered overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 lg:p-24 bg-emerald-50/50">
                <h2 className="text-fluid-h2 font-serif font-bold text-emerald-950 mb-6 md:mb-8 leading-tight">Wujudkan <br /> <span className="text-gold-600 italic">Hunian Impian.</span></h2>
                <p className="text-emerald-900/60 text-base md:text-lg mb-8 md:mb-12">
                  Konsultan pribadi kami tersedia untuk kunjungan fisik atau tur virtual 7 hari seminggu.
                </p>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl shadow-soft flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-all">📍</div>
                    <div>
                      <h4 className="font-bold text-emerald-950 uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">Kantor Pemasaran</h4>
                      <p className="text-emerald-800/70 text-sm md:text-base">Luxura Plaza, Distrik Beverly III</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl shadow-soft flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-all">📞</div>
                    <div>
                      <h4 className="font-bold text-emerald-950 uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">Layanan Cepat</h4>
                      <p className="text-emerald-800/70 text-sm md:text-base">+62 (800) LUX-ESTATE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-16 lg:p-24 bg-white relative">
                <form className="space-y-6 md:space-y-8 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/40 ml-1">Identitas</label>
                    <input type="text" className="w-full bg-emerald-50/30 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 focus:ring-2 focus:ring-emerald-900/10 outline-none transition-all placeholder:text-emerald-900/20 text-sm md:text-base" placeholder="Nama Lengkap" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/40 ml-1">Hubungi</label>
                    <input type="email" className="w-full bg-emerald-50/30 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 focus:ring-2 focus:ring-emerald-900/10 outline-none transition-all placeholder:text-emerald-900/20 text-sm md:text-base" placeholder="Alamat Email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/40 ml-1">Pesan</label>
                    <textarea className="w-full bg-emerald-50/30 border-none rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 h-32 md:h-40 focus:ring-2 focus:ring-emerald-900/10 outline-none transition-all placeholder:text-emerald-900/20 text-sm md:text-base" placeholder="Visi Hunian Anda..."></textarea>
                  </div>
                  <button className="w-full bg-emerald-950 text-white py-4 md:py-6 rounded-full font-bold shadow-layered hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base uppercase tracking-widest">
                    Kirim Pertanyaan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Minimal Footer */}
      <footer className="py-20 bg-[#FDFCFA]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-20 border-b border-emerald-900/5 gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-900 organic-radius flex items-center justify-center">
                  <span className="text-gold-500 font-serif font-bold text-lg">L</span>
                </div>
                <span className="text-lg font-serif font-bold tracking-[0.1em] text-emerald-950 uppercase">Luxura</span>
              </div>
              <p className="text-emerald-900/40 max-w-sm text-sm italic">Membangun masa depan residensi eksklusif melalui desain yang mengalir dan harmoni alam.</p>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-16 lg:gap-24 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/60">
              <div className="flex flex-col gap-4 md:gap-6">
                <span className="text-emerald-950">Perusahaan</span>
                <a href="#" className="hover:text-gold-600 transition-colors">Kisah Kami</a>
                <a href="#" className="hover:text-gold-600 transition-colors">Visi 2030</a>
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <span className="text-emerald-950">Sumber Daya</span>
                <a href="#" className="hover:text-gold-600 transition-colors">Media Kit</a>
                <a href="#" className="hover:text-gold-600 transition-colors">Arsitek</a>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/20">© 2026 LUXURA ESTATE GROUP</p>
            <div className="flex gap-8 opacity-20 hover:opacity-100 transition-opacity">
              <span className="cursor-pointer hover:text-gold-600">IG</span>
              <span className="cursor-pointer hover:text-gold-600">LI</span>
              <span className="cursor-pointer hover:text-gold-600">TW</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
