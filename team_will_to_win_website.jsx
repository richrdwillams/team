import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/*
  Team Will to Win – Single‑Page Site (build‑clean version)
  --------------------------------------------------------
  • Fixes the build error by closing the <a> *and* <Button> tags in the
    Contact section.
  • Adds a tiny null‑check in the Insta embed hook so it never crashes.
  • Finishes the footer + root element so React renders correctly.
*/

const siteData = {
  overview: {
    tagline: "Changing Lives Through Fitness",
    purpose:
      "Personal‑training brand of Coach Richard Williams — 30+ years empowering clients through customised fitness and mindset coaching."
  },
  navigation: [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Programs", path: "#programs" },
    { label: "Testimonials", path: "#testimonials" },
    { label: "Gallery", path: "#gallery" },
    { label: "Video", path: "#video" },
    { label: "Contact", path: "#contact" }
  ],
  about: {
    photo: "https://raw.githubusercontent.com/placeholder/coach-will-headshot.jpg",
    bio: [
      "30+ years in bodybuilding & functional fitness.",
      "Helps busy adults regain strength, mobility and confidence."
    ]
  },
  programs: [
    { n: "1‑on‑1 Coaching", d: "Custom plan & mentoring.", p: "$249/mo" },
    { n: "Small Groups", d: "Max 5 – community focus.", p: "$25/session" }
  ],
  testimonials: [
    { q: "Dropped 30 lbs & ran my first 5K!", n: "— Maria L." },
    { q: "Recovered post‑surgery & stronger than ever.", n: "— Derrick P." }
  ],
  gallery: [
    "https://www.instagram.com/reel/DLX4WJmP6Iz/",
    "https://www.instagram.com/reel/DJwmamJJ5n-/"
  ],
  videoSrc: "/5a6b4df4-695d-4395-b496-5b42c0e6eba5.mp4",
  contact: {
    email: "teamwilltowinfitness@gmail.com",
    phone: "+1‑555‑123‑9876",
    ig: "https://www.instagram.com/teamwilltowin/"
  }
};

function Insta({ url }) {
  useEffect(() => {
    const existing = document.getElementById("ig-embed-script");
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.id = "ig-embed-script";
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
    } else {
      window?.instgrm?.Embeds?.process();
    }
  }, []);
  return (
    <blockquote
      className="instagram-media rounded-2xl overflow-hidden shadow"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ maxWidth: 540, margin: "0 auto" }}
    />
  );
}

export default function TeamWillToWin() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl p-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold">Team&nbsp;Will&nbsp;to&nbsp;Win</a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {siteData.navigation.map((n) => (
              <a key={n.label} href={n.path} className="hover:text-pink-600">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center min-h-[60vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={siteData.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-6 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            {siteData.overview.tagline}
          </h1>
          <p className="mb-8 text-lg md:text-xl">{siteData.overview.purpose}</p>
          <Button asChild size="lg">
            <a href="#contact">Start Your Journey</a>
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-gray-50 text-center">
        <img src={siteData.about.photo} alt="Coach Will" className="mx-auto w-40 h-40 rounded-full mb-6 object-cover" />
        {siteData.about.bio.map((b, i) => (
          <p key={i} className="max-w-md mx-auto mb-3 leading-relaxed">
            {b}
          </p>
        ))}
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Programs</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 px-6">
          {siteData.programs.map((p) => (
            <Card key={p.n} className="border rounded-2xl shadow-sm">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{p.n}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{p.d}</p>
                <span className="text-pink-600 font-bold">{p.p}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {siteData.testimonials.map((t, i) => (
            <blockquote key={i} className="bg-white p-8 rounded-2xl shadow">
              <p className="italic mb-4">“{t.q}”</p>
              <footer className="text-pink-600 font-medium">{t.n}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Gallery</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 px-6">
          {siteData.gallery.map((u) => (
            <Insta key={u} url={u} />
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Promo Video</h2>
        <video controls className="mx-auto w-full max-w-3xl rounded-2xl shadow">
          <source src={siteData.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">
          <a href={`mailto:${siteData.contact.email}`} className="hover:text-pink-600">
            {siteData.contact.email}
          </a>
        </p>
        <p className="mb-6">
          <a href="tel:+15551239876" className="hover:text-pink-600">
            {siteData.contact.phone}
          </a>
        </p>
        <Button asChild variant="outline">
          <a href={siteData.contact.ig} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Team Will to Win. All rights reserved.
      </footer>
    </div>
  );
}
