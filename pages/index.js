// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroRef.current.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    if (heroRef.current) observer.observe(heroRef.current);
  }, []);

  return (
    <>
      <Head>
        <title>Sparsom</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <header className="header">
        <div className="logo">
          <img src="/sparsom_logo_full.png" alt="Sparsom logo" />
        </div>
        <div className="menu-toggle" onClick={() => document.querySelector('nav ul').classList.toggle('show')}>
          <span></span><span></span><span></span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Hjem</a></li>
            <li><a href="#">Om oss</a></li>
            <li><a href="#">Les mer</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" ref={heroRef}>
        <h1>Ta kontroll over økonomien din med Sparsom</h1>
        <p>Din AI-drevne økonomihjelper – personlig, trygg og alltid tilgjengelig.</p>
        <Link href="/auth/signin" className="cta-btn">Kom i gang nå</Link>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Budsjettverktøy</h2>
          <p>Sett mål, følg med på utgifter og se hvor du kan spare mer.</p>
        </div>
        <div className="feature">
          <h2>AI-sparingstips</h2>
          <p>Få daglige råd basert på dine vaner og livsstil.</p>
        </div>
        <div className="feature">
          <h2>Full kontroll</h2>
          <p>Din økonomi på ett sted – enkelt og oversiktlig.</p>
        </div>
      </section>

      <div className="tip">
        💡 Dagens AI-tips: Sett en fast spareoverføring hver gang du får lønn – du vil knapt merke det, men kontoen din vil gjøre det.
      </div>

      <footer>
        <p>&copy; 2025 Sparsom. Alle rettigheter reservert.</p>
      </footer>
    </>
  );
}
