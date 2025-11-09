🕰️ Analog Clock – Dynamic Hourly Quote

A beautifully designed analog clock built with HTML, CSS, and JavaScript, featuring a dark/light theme toggle and an inspirational quote that updates every hour using the Quotable API
.
🌐 Live Demo

👉 Live Project: https://analog-clock-project-delta.vercel.app/

🌟 Overview

This project combines elegant design with dynamic functionality:

A fully functional analog clock synchronized with the system time.

Hourly motivational quotes fetched from an API, changing exactly at the start of each hour.

Dark and Light theme toggle with saved user preference.

Responsive design for all screen sizes.

Smooth fade-in animations and a subtle image background for professional aesthetics.

Perfect as a mini frontend project or a portfolio showcase for beginners and intermediates learning JavaScript DOM manipulation and APIs.

✨ Features

✅ Real-time analog clock (hour, minute, and second hands)
✅ Fetches new quotes from Quotable API

✅ Updates exactly at the top of every hour
✅ Smooth fade-in quote transitions
✅ Caches quotes for the current hour (no redundant API calls)
✅ Dark / Light mode toggle with localStorage memory
✅ Responsive and modern UI with custom background image
✅ Built with pure HTML + CSS + JavaScript — no frameworks

🧠 How It Works

The JavaScript clock runs continuously using setInterval().

Every hour (e.g., 1:00:00, 2:00:00...), a new quote is fetched from the Quotable API.

The quote is stored in localStorage and displayed with a fade animation.

The dark/light theme preference is also saved in localStorage and loaded automatically on page reload.

Quotes are cached so the same one is shown if the page reloads within the same hour.

🛠️ Technologies Used

HTML5 – structure

CSS3 – responsive styling, animations, gradients

JavaScript (ES6) – time logic, API integration, DOM manipulation

Quotable API – for dynamic quotes

LocalStorage – theme and quote caching

📂 Project Structure
analog-clock/
│
├── index.html        # Main HTML structure
├── index.css         # Styling & responsive layout
├── index.js          # Clock logic, theme toggle, and quote fetching
├── clock-bg.jpg      # Background image for clock face (add your own)
└── README.md         # Project documentation

⚙️ Setup Instructions

Clone the repository

git clone https://github.com/<your-username>/analog-clock.git


Navigate into the project

cd analog-clock


Add a background image

Place your image in the root directory.

Name it clock-bg.jpg or update the path in index.css.

Open the project

Simply open index.html in your browser.

(No server setup required — it’s pure front-end!)

💬 API Reference

API Used: Quotable.io

Endpoint Example:

GET https://api.quotable.io/random?tags=time|life|success


This returns:

{
  "_id": "quoteId",
  "content": "Time is precious. Make every second count.",
  "author": "Unknown"
}

🎨 Customization


🕶️ Default Theme:

Change the default theme by adding or removing body.dark in index.js.

🕰️ Quote Interval:

Change the interval in index.js:

setInterval(fetchAndShowQuote, 3600000); // every hour


(e.g., use 10000 for every 10 seconds if testing)

📱 Responsive Design

The layout adjusts beautifully on:

Desktop & laptops

Tablets

Mobile phones

All text and elements scale proportionally for readability.
