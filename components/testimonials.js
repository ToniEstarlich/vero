class QuoteRotator {
  constructor(container) {
    this.container = container;

    this.index = 0;

    // 📌 Quotes 
   this.quotes = [
  { quote: "Honestly, I didn’t expect it to look this good. The details are amazing.", author: "@laura.vlc" },

  { quote: "Such a beautiful portrait, it really looks like him. Thank you so much!", author: "@martin_89" },

  { quote: "I love how soft the shading is, it feels super natural.", author: "@cami.artlover" },

  { quote: "Really happy with the result. You captured the expression perfectly.", author: "@daniel.sanchez" },

  { quote: "This came out way better than I imagined. Super talented!", author: "@julia_moon" },

  { quote: "The drawing looks so clean and professional. I’m impressed.", author: "@alex.ramos" },

  { quote: "I love the pencil texture, it feels very handmade and special.", author: "@sofia_illustrations" },

  { quote: "The portrait turned out so nice, it actually feels like a memory on paper.", author: "@marta.vibes" },

  { quote: "Amazing job, especially the eyes. They look so real.", author: "@hugo.sketchfan" },

  { quote: "This is such a lovely gift idea, I’m so glad I ordered one.", author: "@paula_gifts" },

  { quote: "The final result is really beautiful and looks very realistic.", author: "@nicolas.art" },

  { quote: "I can tell you put a lot of care into it. Thank you!", author: "@emma.creative" },

  { quote: "Very happy with the drawing, the shading is so smooth.", author: "@lucas_pencil" },

  { quote: "I love the style, it feels classic and simple but still detailed.", author: "@andrea.valencia" },

  { quote: "Such a nice portrait. It looks like something you would frame immediately.", author: "@rachel.doodle" }
];

    this.injectStyles();
    this.render();
    this.showQuote(0);
    this.start();
  }

  injectStyles() {
    if (document.getElementById("qr-styles")) return;

    const style = document.createElement("style");
    style.id = "qr-styles";

    style.textContent = `
      #quote-app {
        display: flex;
        justify-content: center;
        margin-top: 18px;
        font-family: sans-serif;
        position: relative;
        z-index: 9999;
      }

      .qr-card {
        width: 320px;
        padding: 0px;
        color: #fff;
        border-radius: 2px;
        text-align: center;
      }

      .qr-quote {
        font-size: 1.2rem;
        min-height: 80px;
        transition: opacity .4s ease;
        margin-top: 10px;
      }

      .qr-author {
        margin-top: 10px;
        opacity: 0.7;
      }

      .qr-controls {
        margin-top: 15px;
        display: flex;
        justify-content: center;
        gap: 10px;
      }

      .qr-btn {
        background: #222;
        color: #fff;
        border: none;
        padding: 6px 10px;
        cursor: pointer;
        border-radius: 6px;
      }

      .qr-btn:hover {
        background: #333;
      }
    `;

    document.head.appendChild(style);
  }

  render() {
    this.container.innerHTML = `
      <div class="qr-card">
       <h4>Testinomials;</h4>
        <div class="qr-quote" id="qrQuote"></div>
        <div class="qr-author" id="qrAuthor"></div>

        <div class="qr-controls">
          <button class="qr-btn" id="prev">Prev</button>
          <button class="qr-btn" id="next">Next</button>
        </div>
      </div>
    `;

    this.quoteEl = this.container.querySelector("#qrQuote");
    this.authorEl = this.container.querySelector("#qrAuthor");

    this.container.querySelector("#prev")
      .addEventListener("click", () => this.prev());

    this.container.querySelector("#next")
      .addEventListener("click", () => this.next());
  }

  showQuote(i) {
    const q = this.quotes[i];

    
    this.quoteEl.style.opacity = 0;
    this.authorEl.style.opacity = 0;

    setTimeout(() => {
      this.quoteEl.textContent = `"${q.quote}"`;
      this.authorEl.textContent = `— ${q.author}`;

      this.quoteEl.style.opacity = 1;
      this.authorEl.style.opacity = 1;
    }, 200);

    this.index = i;
  }

  next() {
    this.index = (this.index + 1) % this.quotes.length;
    this.showQuote(this.index);
  }

  prev() {
    this.index =
      (this.index - 1 + this.quotes.length) % this.quotes.length;
    this.showQuote(this.index);
  }

  start() {
    setInterval(() => this.next(), 8000);
  }
}