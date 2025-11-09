// ----------------------- Analog Clock -----------------------
(function startClock() {
  const hourEl = document.getElementById("hour");
  const minuteEl = document.getElementById("minute");
  const secondEl = document.getElementById("seconds");

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    const hRotation = 30 * (h % 12) + m / 2; // hour hand with minute contribution
    const mRotation = 6 * m;
    const sRotation = 6 * s;

    hourEl.style.transform = `rotate(${hRotation}deg)`;
    minuteEl.style.transform = `rotate(${mRotation}deg)`;
    secondEl.style.transform = `rotate(${sRotation}deg)`;
  }

  tick();
  setInterval(tick, 1000);
})();


// ----------------------- Theme Toggle -----------------------
(function themeSetup() {
  const themeBtn = document.getElementById("themeBtn");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
})();


// ----------------------- Hourly Quotes (sync to top of hour) -----------------------
(function hourlyQuotes() {
  const quoteContainer = document.getElementById("quoteContainer");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  // Call API and update UI; do not hide previous quote until new one is ready
  async function fetchAndShowQuote() {
    try {
      const res = await fetch("https://api.quotable.io/random?tags=time|life|success");
      if (!res.ok) throw new Error("Network response not OK");
      const data = await res.json();

      // Show container if hidden
      if (quoteContainer.style.display === "none") {
        quoteContainer.style.display = "block";
      }

      // Update text with fade
      quoteText.textContent = `“${data.content}”`;
      quoteAuthor.textContent = `— ${data.author || "Unknown"}`;
      quoteText.classList.add("fade");
      quoteAuthor.classList.add("fade");
      setTimeout(() => {
        quoteText.classList.remove("fade");
        quoteAuthor.classList.remove("fade");
      }, 1200);

      // Cache with current hour
      const now = new Date();
      const cache = { text: data.content, author: data.author || "Unknown", hour: now.getHours() };
      localStorage.setItem("cachedQuote", JSON.stringify(cache));
    } catch (err) {
      // If fetch failed we silently keep previous quote (no flashing)
      console.error("Quote fetch failed:", err);
    }
  }

  // Load cached quote or fetch immediately
  function loadInitialQuote() {
    const cached = JSON.parse(localStorage.getItem("cachedQuote"));
    const now = new Date();
    if (cached && cached.hour === now.getHours()) {
      quoteContainer.style.display = "block";
      quoteText.textContent = `“${cached.text}”`;
      quoteAuthor.textContent = `— ${cached.author}`;
    } else {
      // fetch but don't remove any existing content (there's none on first load)
      fetchAndShowQuote();
    }
  }

  // Schedule next fetch exactly at the start of the next hour,
  // then fetch every hour on the hour.
  function scheduleHourlyFetch() {
    const now = new Date();
    const msToNextHour =
      (59 - now.getMinutes()) * 60 * 1000 +
      (60 - now.getSeconds()) * 1000 -
      now.getMilliseconds();

    // Safety: if msToNextHour is negative for some reason, set small timeout
    const firstTimeout = Math.max(msToNextHour, 0);

    setTimeout(() => {
      // Fetch right at the top of the hour
      fetchAndShowQuote();

      // Then set repeating hourly interval aligned with the hour
      setInterval(fetchAndShowQuote, 60 * 60 * 1000);
    }, firstTimeout);
  }

  // Initialize
  loadInitialQuote();
  scheduleHourlyFetch();
})();
