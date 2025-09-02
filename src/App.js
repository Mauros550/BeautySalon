import React from "react";
import { Sparkles, Scissors, Camera, Star, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="container py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-500 grid place-items-center text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight">Dapper & Dazzles</p>
              <p className="text-xs text-neutral-500 -mt-1">Beauty Salon • Nairobi, KE</p>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a className="hover:text-fuchsia-600" href="#services">Services</a>
            <a className="hover:text-fuchsia-600" href="#gallery">Gallery</a>
            <a className="hover:text-fuchsia-600" href="#pricing">Pricing</a>
            <a className="hover:text-fuchsia-600" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#book" className="btn btn-primary hidden sm:inline-flex">Book Now</a>
            <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Look <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-600">Dapper</span>, Feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-600">Dazzling</span>
            </h1>
            <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
              Premium hair, beauty, and grooming in the heart of Nairobi. Trend-led styling, expert care, and a luxurious experience—without the luxury price tag.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#book">Book An Appointment</a>
              <a className="btn border border-neutral-300 hover:bg-white" href="#services">View Services</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> Mon–Sun: 9am–8pm</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Westlands, Nairobi</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +254 700 000 000</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1600&auto=format&fit=crop"
                alt="Salon interior"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="card w-64 rotate-[-3deg] shadow-xl">
                <div className="p-4 pb-2">
                  <p className="text-base font-semibold">This Week's Glow-Ups</p>
                </div>
                <div className="p-4 pt-0 text-sm text-neutral-600">
                  • 20% off braid installs<br/>
                  • Free beard trim with cut<br/>
                  • Bridal makeup trials
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container section">
        <div className="text-center mb-10">
          <p className="subheading">Our Services</p>
          <h2 className="heading">From Fresh Fades to Full Glam</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Unisex services designed for everyday confidence and special-occasion shine.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Scissors className='h-5 w-5'/>, title: "Haircuts & Styling", desc: "Fades, trims, silk press, blowouts, braids." },
            { icon: <Camera className='h-5 w-5'/>, title: "Makeup & Lashes", desc: "Soft glam, bridal looks, lash lifts & sets." },
            { icon: <Star className='h-5 w-5'/>, title: "Treatments", desc: "Deep conditioning, keratin, scalp therapy." },
            { icon: <Sparkles className='h-5 w-5'/>, title: "Grooming", desc: "Shaves, beard sculpting, brow shaping, nails." },
          ].map((s, i) => (
            <div key={i} className="card hover:shadow-lg transition">
              <div className="p-5 border-b">
                <div className="h-10 w-10 rounded-xl bg-fuchsia-100 grid place-items-center text-fuchsia-700 mb-3">{s.icon}</div>
                <p className="text-lg font-semibold">{s.title}</p>
              </div>
              <div className="p-5 text-neutral-600 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white">
        <div className="container section">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="subheading">Gallery</p>
              <h3 className="heading text-3xl">Recent Work</h3>
            </div>
            <div className="flex items-center gap-3 small">
              <a className="inline-flex items-center gap-2 hover:text-neutral-900" href="#">
                <Instagram className="h-4 w-4"/> Instagram
              </a>
              <a className="inline-flex items-center gap-2 hover:text-neutral-900" href="#">
                <Facebook className="h-4 w-4"/> Facebook
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522335789203-9c770306cb9c?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1559599101-b3f92f8b4078?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1596464716121-8b92f9aa9b9a?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1616394584738-fc6e612b4f1e?q=80&w=1600&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img src={src} alt={`Gallery ${i+1}`} className="h-64 w-full object-cover group-hover:scale-105 transition-transform"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container section">
        <div className="text-center mb-10">
          <p className="subheading">Pricing</p>
          <h3 className="heading">Transparent & Fair</h3>
          <p className="mt-3 text-neutral-600">Indicative starting prices (KES). Final quotes depend on hair length, style & products.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Essential", price: "1,500", points: ["Wash & Blow-dry", "Basic Cut / Trim", "Beard Trim or Brow Shape"] },
            { name: "Signature", price: "3,500", points: ["Silk Press / Protective Style", "Makeup Soft Glam", "Treatment Add-on"] },
            { name: "Bridal & Events", price: "10,000+", points: ["Trial Session", "On-Location Option", "Artist Priority Booking"] },
          ].map((p, i) => (
            <div key={i} className={`card relative ${i===1 ? 'ring-2 ring-fuchsia-500' : ''}`}>
              <div className="p-5 border-b">
                <div className="text-xl font-bold flex items-baseline justify-between">
                  <span>{p.name}</span>
                  <span className="text-3xl font-extrabold">KES {p.price}</span>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-neutral-700">
                  {p.points.map((pt, idx) => (<li key={idx}>• {pt}</li>))}
                </ul>
                <a className="btn btn-primary w-full mt-6" href="#book">Book This</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-rose-50 to-white">
        <div className="container section">
          <h3 className="heading text-center mb-8">Clients Love The Glow</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="card shadow-sm">
                <div className="p-6 text-neutral-700">
                  “Absolutely obsessed with my silk press and makeup! The team is kind, professional, and fast.”
                  <div className="mt-4 text-sm text-neutral-500">— Aisha, Westlands</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="container section">
        <div className="card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold tracking-tight">Ready to Dazzle?</h3>
              <p className="mt-2 text-neutral-600">Leave your details and we’ll confirm your slot ASAP.</p>
              <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full px-3 py-2 rounded-xl border border-neutral-300" placeholder="Full Name" />
                <input className="w-full px-3 py-2 rounded-xl border border-neutral-300" placeholder="Phone / WhatsApp" />
                <input className="w-full px-3 py-2 rounded-xl border border-neutral-300" placeholder="Service (e.g. Silk Press, Glam, Fade)" />
                <button className="btn btn-primary w-full" type="submit">Request Booking</button>
              </form>
              <p className="text-xs text-neutral-500 mt-3">By submitting, you agree to our policies. We’ll reach out on WhatsApp.</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1596464716121-8b92f9aa9b9a?q=80&w=1600&auto=format&fit=crop"
              alt="Client glow-up"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-neutral-950 text-neutral-100">
        <div className="container py-14 grid md:grid-cols-4 gap-10">
          <div>
            <p className="text-xl font-bold">Dapper & Dazzles</p>
            <p className="mt-2 text-neutral-400">Beauty & Grooming in Nairobi. Book online, walk out glowing.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4"/></a>
              <a href="https://wa.me/254700000000" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><MessageCircle className="h-4 w-4"/></a>
            </div>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="mt-2 text-neutral-400">Mon–Sun: 9am–8pm</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="mt-2 text-neutral-400">Westlands, Nairobi, Kenya</p>
            <p className="text-neutral-500 text-sm mt-1">(Exact address to be added)</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p className="mt-2 text-neutral-400">Phone: +254 700 000 000</p>
            <p className="text-neutral-400">Email: hello@dapperanddazzles.co.ke</p>
            <a href="#book" className="btn btn-primary mt-3 inline-flex">Book Now</a>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-neutral-400 text-sm">
          © {new Date().getFullYear()} Dapper & Dazzles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
