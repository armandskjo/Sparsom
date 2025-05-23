<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sparsom</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f7f9fb;
      color: #333;
      scroll-behavior: smooth;
    }
    header {
      background-color: #4e9cd9;
      color: white;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .logo img {
      height: 60px;
    }
    .menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }
    .menu-toggle span {
      height: 3px;
      width: 25px;
      background: white;
      margin: 4px 0;
    }
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 20px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      nav ul {
        display: none;
        flex-direction: column;
        background: #4e9cd9;
        position: absolute;
        top: 60px;
        right: 20px;
        width: 200px;
        padding: 10px;
        border-radius: 8px;
      }
      nav ul.show {
        display: flex;
      }
      .menu-toggle {
        display: flex;
      }
    }
    .hero {
      text-align: center;
      padding: 100px 20px;
      background-image: url('/hero-bg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: white;
      opacity: 0;
      transform: translateY(40px);
      transition: all 1s ease;
    }
    .hero.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero img {
      max-width: 90%;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
    .cta-btn {
      display: inline-block;
      margin-top: 30px;
      background-color: #ffffff;
      color: #4e9cd9;
      padding: 14px 28px;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .cta-btn:hover {
      background-color: #e6f3fc;
      color: #3b8bc3;
    }
    .features {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 60px 20px;
      background: white;
    }
    .feature {
      flex: 1 1 300px;
      margin: 20px;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      background: #fff;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .feature:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }
    .tip {
      background: #e6f3fc;
      padding: 20px;
      margin: 40px auto;
      max-width: 600px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      font-style: italic;
    }
    footer {
      text-align: center;
      padding: 20px;
      background: #4e9cd9;
      color: white;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">
      <img src="/sparsom_logo_full.png" alt="Sparsom logo">
    </div>
    <div class="menu-toggle" onclick="document.querySelector('nav ul').classList.toggle('show')">
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

  <section class="hero" id="hero">
    <h1>Ta kontroll over økonomien din med Sparsom</h1>
    <p>Din AI-drevne økonomihjelper – personlig, trygg og alltid tilgjengelig.</p>
    <a href="/auth/signin" class="cta-btn">Kom i gang nå</a>
  </section>

  <section class="features">
    <div class="feature">
      <h2>Budsjettverktøy</h2>
      <p>Sett mål, følg med på utgifter og se hvor du kan spare mer.</p>
    </div>
    <div class="feature">
      <h2>AI-sparingstips</h2>
      <p>Få daglige råd basert på dine vaner og livsstil.</p>
    </div>
    <div class="feature">
      <h2>Full kontroll</h2>
      <p>Din økonomi på ett sted – enkelt og oversiktlig.</p>
    </div>
  </section>

  <div class="tip">
    💡 Dagens AI-tips: Sett en fast spareoverføring hver gang du får lønn – du vil knapt merke det, men kontoen din vil gjøre det.
  </div>

  <footer>
    <p>&copy; 2025 Sparsom. Alle rettigheter reservert.</p>
  </footer>

  <script>
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hero.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(hero);
  </script>
</body>
</html>
