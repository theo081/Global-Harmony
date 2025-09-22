const cultureSelect = document.getElementById("culture");
const cultureInfoBox = document.getElementById("culture-info");
const youtubePlayer = document.getElementById("youtubePlayer");
const tapButton = document.getElementById("tapButton");
const feedback = document.getElementById("feedback");
const reflectionBox = document.getElementById("reflection-box");
const reflectionText = document.getElementById("reflection-text");

const homeIntro = `
  <h2>Welcome to Global Harmony</h2>
  <p>As an international student and music lover, I’ve traveled widely and met friends from many cultures. I’m fascinated by the unique and beautiful songs each country offers—especially pop music, which, despite language and cultural barriers, feels universal and deeply relatable.</p>
  <p>Music has helped me connect cross-culturally, sparking my interest to explore, learn, and adapt to new cultures. American pop music, like J.B., Taylor Swift and Westlife, greatly influenced me back home and helped me improve my English.</p>
  <p>Through music, I learned about the U.S. lifestyle and culture even before arriving, making the transition easier. On this site, I share music from different cultures so you can experience firsthand how music transcends language, allowing us to feel and fall in love with diverse cultures.</p>
`;

const cultureData = {
  myanmar: {
    link: "https://www.youtube.com/embed/pycZ0tWfzb0",
    info: `<h3>Myanmar</h3><p>Traditional Burmese music is rich with classical instruments. It often accompanies festivals and rituals, preserving Myanmar’s deep cultural heritage. Music connects me to my roots and shares stories across generations.</p>`,
    reflection: "Thingyan always brings me back to childhood—the water fights, sweet 'monte lone yay paw', summer breaks, love letters, family trips, and temple visits. It’s a celebration of joy, family, and cultural roots."
  },
  china: {
    link: "https://www.youtube.com/embed/bv_cEeDlop0",
    info: `<h3>China</h3><p>Chinese music blends ancient instruments with modern pop styles. It reflects thousands of years of history and philosophy. Chinese pop (C-pop) brings vibrant youth culture, helping me relate to friends from China.</p>`,
    reflection: "Listening to Teresa Teng was one of the reasons I started learning Mandarin. Her songs are peaceful and timeless, and they became the soundtrack of my early connections with Chinese-speaking friends."
  },
  hongkong: {
    link: "https://www.youtube.com/embed/TvSLCxXyrBA",
    info: `<h3>Hong Kong</h3><p>Hong Kong’s music scene mixes Cantonese pop (Cantopop) with international influences. It is known for its catchy melodies and emotional lyrics, bridging East and West.</p>`,
    reflection: "This song reminds me of my Hong Kong roommate in Singapore and my attempt to learn Cantonese. The deep tones and emotions of Cantopop captured both the beauty and complexity of life in Hong Kong."
  },
  taiwan: {
    link: "https://www.youtube.com/embed/JvkqZrYJUe8",
    info: `<h3>Taiwan</h3><p>Taiwanese music features both traditional folk songs and Mandopop, with artists blending indigenous sounds and modern pop. It reflects Taiwan’s multicultural identity and creative spirit.</p>`,
    reflection: "While exploring where to study Chinese, I discovered Taiwanese culture and music. I was drawn to their politeness, dialects, and warm traditions—different yet deeply connected to Chinese identity."
  },
  japan: {
    link: "https://www.youtube.com/embed/Fve_lHIPa-I",
    info: `<h3>Japan</h3><p>Japanese music spans from traditional styles to J-pop and anime soundtracks. It offers unique emotional expression and deep cultural storytelling, making cultural exchange exciting.</p>`,
    reflection: "This anime theme brings back my high school obsession with Japanese culture. From their art to architecture, Japan's discipline, creativity, and beauty left a lasting impression on me."
  },
  korea: {
    link: "https://www.youtube.com/embed/MzCbEdtNbJ0",
    info: `<h3>Korea</h3><p>Korean music is famous worldwide for K-pop. Music from Korea has helped me connect with many people and understand their culture beyond language.</p>`,
    reflection: "This K-pop song takes me back to high school days—learning dance routines, performing at school events, and later bonding with Korean friends during my time abroad. It was a rhythm-filled chapter of life."
  },
  singapore: {
    link: "https://www.youtube.com/embed/QgVBXDbPZqI",
    info: `<h3>Singapore</h3><p>Singapore’s music scene is a vibrant mix of Chinese, Malay, Indian, and Western influences, reflecting its multicultural population. Music here embodies harmony and diversity.</p>`,
    reflection: "Singapore felt like a second home. The local music and multicultural harmony showed me how diverse identities can thrive together. I'm grateful for the safety, friendships, and lessons I found there."
  },
  malaysia: {
    link: "https://www.youtube.com/embed/RsO6zvRiGaI",
    info: `<h3>Malaysia</h3><p>Malaysia’s music blends traditional Malay instruments and rhythms with pop and rock, showcasing the country’s ethnic diversity and cultural fusion.</p>`,
    reflection: "This cheerful Malaysian song reminds me of my younger years. Though I didn’t understand it at first, its warmth grew with me. My few visits to Malaysia were always vibrant and lively."
  },
  thailand: {
    link: "https://www.youtube.com/embed/AJEoJYgktb4",
    info: `<h3>Thailand</h3><p>Thai music includes both classical and modern forms alongside lively pop genres. It often tells stories of everyday life and cultural values, creating warmth and connection.</p>`,
    reflection: "I heard this catchy song in a Bangkok mall during vacation. Thailand’s mix of modern energy and ancient history fascinated me—it truly felt like a land of tradition and hospitality."
  },
  philippines: {
    link: "https://www.youtube.com/embed/lgrsWlCu4CA",
    info: `<h3>Philippines</h3><p>Filipino music is famous for heartfelt ballads and festive folk songs, reflecting deep emotion and strong family values. Music is a key way Filipinos bond and express identity.</p>`,
    reflection: "A Filipino friend shared this song with me, and we often danced, sang, and recorded music together. Their passion for music feels natural—like it’s part of their soul."
  },
  vietnam: {
    link: "https://www.youtube.com/embed/gJHSDZfJrRY",
    info: `<h3>Vietnam</h3><p>Vietnamese music combines traditional instruments with modern pop and hip-hop, symbolizing a country balancing heritage and progress. It shares stories of resilience and hope.</p>`,
    reflection: "I discovered this viral Vietnamese song during an internship where I made a close Vietnamese friend. We even planned a trip to Vietnam together—it was an experience filled with laughter and good food like pho."
  },
  australia: {
    link: "https://www.youtube.com/embed/I0czvJ_jikg",
    info: `<h3>Australia</h3><p>Australia’s music scene displays contemporary rock and pop, highlighting a rich cultural history and modern creativity.</p>`,
    reflection: "I used to listen to this track often without realizing the artist was Australian. Once I found out, the song became my musical link to Australia—big land, big dreams, and vibrant energy."
  },
  england: {
    link: "https://www.youtube.com/embed/6hzrDeceEKc",
    info: `<h3>England</h3><p>English music has shaped global culture with genres from classical to rock and pop.</p>`,
    reflection: "I learned this classic song when I picked up the guitar. I even played it for someone special. It didn’t go how I hoped, but it became a memory that stuck—a mix of courage and youth."
  },
  usa: {
    link: "https://www.youtube.com/embed/ulOb9gIGGd0",
    info: `<h3>USA</h3><p>American music is incredibly diverse—from jazz, blues, and country to pop and hip-hop. It reflects a melting pot of cultures and has been a major influence on the world stage.</p>`,
    reflection: "This was the song my mom played for me when I was just a child. It reminds me of her arms, of dreams, of family hopes to one day reach the land of freedom. Being here now feels like a full circle."
  }
};


function showHome() {
  cultureInfoBox.innerHTML = homeIntro;
  youtubePlayer.style.display = "none";
  youtubePlayer.src = "";
  reflectionBox.style.display = "none";
  reflectionText.textContent = "";
  tapButton.style.display = "none";
  feedback.textContent = "";
}

function showCulture(culture) {
  const data = cultureData[culture];
  if (!data) return showHome();

  cultureInfoBox.innerHTML = data.info;

  if (data.link) {
    youtubePlayer.src = data.link;
    youtubePlayer.style.display = "block";
  } else {
    youtubePlayer.src = "";
    youtubePlayer.style.display = "none";
  }

  if (data.reflection) {
    reflectionText.textContent = data.reflection;
    reflectionBox.style.display = "block";
  } else {
    reflectionText.textContent = "";
    reflectionBox.style.display = "none";
  }

  tapButton.style.display = "inline-block";
  feedback.textContent = "";
}

cultureSelect.addEventListener("change", () => {
  const selected = cultureSelect.value;
  if (selected === "") {
    showHome();
  } else {
    showCulture(selected);
  }
});

showHome();

// Simple beat tapper
let lastTapTime = 0;
let tapCount = 0;

tapButton.addEventListener("click", () => {
  const currentTime = new Date().getTime();

  if (lastTapTime === 0) {
    lastTapTime = currentTime;
    tapCount = 1;
    feedback.textContent = "Keep tapping!";
    return;
  }

  const interval = currentTime - lastTapTime;
  lastTapTime = currentTime;
  tapCount++;

  if (tapCount >= 4) {
    const bpm = Math.round(60000 / interval);
    feedback.textContent = `🎵 Your rhythm is about ${bpm} BPM!`;
    tapCount = 0;
    lastTapTime = 0;
  }
});
