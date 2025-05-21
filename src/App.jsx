import { useState } from 'react'
import { FaTelegramPlane, FaTwitter, FaChartLine } from "react-icons/fa";
import './App.css'

function App() {
  const sections = [
    {
      title: "JUST BUY $1 WORTH OF THIS COIN",
      text: "What’s a dollar? A snack? A gamble? Toss it into $BENJAMINS and feel the rush. Your future self might thank you—or at least have a wild story.",
      className: "section-blue-dark",
      image: "https://github.com/degenben/staticwebsite/blob/main/imgs/bf_iconjpg.jpg",
    },
    {
      title: "THE CURRENCY THEY CAN'T CONTROL",
      text: "Escape the system. Get in early. Nothing feels better than front-running the normies. This is your chance to ape into freedom.",
      className: "section-blue-mid",
      image: "https://github.com/degenben/staticwebsite/blob/main/imgs/Value3.png",
    },
    {
      title: "THE ORIGINS OF THE $BENJAMINS MEMECOIN",
      text: "Spawned from pure meme magic and the spirit of old-school rebellion. History’s most iconic flex, now tokenized. This isn't just a coin—it's a vibe.",
      className: "section-red",
      image: "https://github.com/degenben/staticwebsite/blob/main/imgs/hardcore_ben.png",
    },
    {
      title: "EXCHANGE LISTINGS",
      text: "Soon you’ll be able to chase that pump on your favorite platform. Don’t miss the green candles—stay frosty and follow the hype.",
      className: "section-black",
      image: "https://github.com/degenben/staticwebsite/blob/main/imgs/dexscreener-logo.png",
    },
    {
      title: "FLIP THE DOLLAR - JOIN THE RAID",
      text: "We're not here to save—we're here to flip. Dump the fiat. Join the pump. Meme your way into the new economy with laser eyes and diamond hands.",
      className: "section-blue-dark-alt",
      video: "https://github.com/degenben/staticwebsite/blob/main/imgs/best_bet.jpg",
    },
    {
      title: "COMMUNITY CONTRIBUTION",
      text: "Every degen counts. Got skills? Use 'em. Got memes? Drop 'em. Got vibes? Bring 'em. Let’s build this thing brick by ironic brick.",
      className: "section-gold",
      image: "https://github.com/degenben/staticwebsite/blob/main/imgs/community.jpg",
    },
    {
      title: "ROADMAP",
      text: [
        "Phase 1: Viral memes",
        "Phase 2: Listings",
        "Phase 3: Moon missions",
        "Phase 4: Lambos and lore",
        "Strap in—we're going full send."
      ],
      className: "section-blue-mid",
      image: "imgs/to_the_moon.jpg",
    }
  ];

  return (
    <div className="app-wrapper">
      <header className="header-bar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg"
          alt="$100 bill"
          className="bill-image"
        />
        <span className="wallet-id">
          AY4G1JdpmhSxLHydSgQoXTi63cFNfaoXBgCoJ2orpump
        </span>
        <img
          src="imgs/bf_iconjpg.jpg"
          alt="middle header"
          className="middle-header-image"
        />
        <div className="flex-spacer" />
        <div className="icon-group">
          <a href="https://t.me/+Mnnm8w01ZmM5OWE8" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaTelegramPlane />
          </a>
          <a href="https://x.com/sendingbens" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaTwitter />
          </a>
          <a href="https://dexscreener.com/solana/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaChartLine />
          </a>
        </div>
      </header>

      <div className="app-container">
        <main className="content">
          {sections.map((section, index) => (
            <section key={index} className={`section ${section.className}`}>
              <h2 className="section-title">{section.title}</h2>
              {typeof section.text === 'string' ? <p>{section.text}</p> : <ul>{section.text.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              <div className={`section-media ${index % 2 === 0 ? 'row' : 'row-reverse'}`}>
                {index === 0 && <a href="https://dexscreener.com/solana/" target="_blank" rel="noopener noreferrer" className="section-button">Buy Now</a>}
{index === 1 && <a href="https://medium.com/@onedollar/the-dollar-that-cant-be-printed-8ddf359c9288" target="_blank" rel="noopener noreferrer" className="section-button">Read About Our Cousins Mission</a>}
{index === 2 && <a href="https://x.com/SendingBens" target="_blank" rel="noopener noreferrer" className="section-button">Join The Community of Degens</a>}
{index === 3 && <a href="https://dexscreener.com/solana/" target="_blank" rel="noopener noreferrer" className="section-button">Exchange</a>}
{index === 4 && <a href="https://t.co/M7wF4Wv91J" target="_blank" rel="noopener noreferrer" className="section-button">Join the Table</a>}
{index === 5 && <a href="https://solscan.io/account/8Ficjsg8fE1J9JZn4SH3YqjGk2nkefF1KcUm3aqZvsgU" target="_blank" rel="noopener noreferrer" className="section-button">Community Wallet</a>}
                {section.image && (
                  <img src={section.image} alt="section" className="section-media-content" />
                )}
                {section.video && (
                  <img src={section.video} alt="video preview" className="section-media-content" />
                )}
              </div>
            </section>
          ))}
        </main>
      </div>

      <footer className="footer">
        Inspired by the $1 LTD© that proudly promotes the $1 mission to stand against inflation and drive community value worldwide.
      </footer>
    </div>
  );
}

export default App;
