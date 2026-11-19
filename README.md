# Kenlens website

This is a static multi-page website. Keep all HTML pages, `styles.css`, and `script.js` together in the same folder when opening the site or uploading it to GitHub.

## Pages

- `index.html` — home page with links to the three main sections
- `photography.html` — photography main page
  - `photography-portfolio.html`
  - `photography-galleries.html`
- `videography.html` — videography main page
  - `videography-films.html`
  - `videography-services.html`
- `streaming.html` — streaming main page
  - `streaming-live.html`
  - `streaming-booking.html`

## Set your links and contacts

Open `script.js` and update the `KENLENS` settings near the top:

- `youtube` — your YouTube channel URL
- `email` — your customer service email
- `whatsappNumbers` — the three WhatsApp contacts (digits only, including country code)

The gallery buttons currently say “Gallery link coming soon.” Add your new public gallery link to the site when the new account is ready. Share client event galleries privately with each customer.

## Set the current live video

In `script.js`, change `liveVideoId` before each broadcast. For a YouTube URL such as `https://www.youtube.com/watch?v=AbC123xyz`, the video ID is `AbC123xyz`. Leave it blank when there is no current live stream.

## Publish with GitHub Pages

Create a GitHub repository and upload all the files in this folder to the repository root. In the repository settings, enable GitHub Pages and publish from the `main` branch and root folder. The home page is `index.html`.


## Enquiry forms and packages

The Photography, Videography and Streaming pages each have an enquiry form. Visitors enter their event and contact details, then choose **Continue to WhatsApp** to prepare a message for the first number in the WhatsApp list in `script.js`.

The package cards and package choices currently use temporary labels and say “Price to be added.” Replace those labels, inclusions, and prices in the relevant main page HTML once your package details are finalized.

## Home page background image

The home page hero background uses `images/lens.jpeg`. Keep the `images` folder beside `styles.css` when uploading the site.

## Floating contact desk

Every page includes a floating Contact desk with email, the service enquiry form, phone call links, and WhatsApp links for all three customer service numbers. Update the `email` setting in `script.js` before publishing so the email option reaches the right inbox.
