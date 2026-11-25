# Start Vegan Today — website

A one-page, mobile-friendly website for Start Vegan Today vegan coaching with Tiffani.
Everything is in `index.html`. Photos are in `images/` and the welcome video is in `video/`.
Plain HTML: no build step, free to host on GitHub Pages.

## Publish free with GitHub Pages

1. On GitHub, open the repository → **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Source: Deploy from a branch**, then **Branch: `main`**, folder **`/ (root)`**, and click **Save**.
3. After a minute or two the site is live at `https://<your-github-username>.github.io/coaching-website/`.

Want your own domain (like `startvegantoday.com`)? Add it in the same **Pages** settings under **Custom domain**.

## Editing

| What | Where in `index.html` |
|---|---|
| **Square payment links** | Search for `Square payment link`. Each Book Now / Buy Now button's link is in its `href="..."`. |
| **Prices** | Search for `$58`, `$175`, `$349`, `$449`, `$60`. |
| **Client reviews** | Search for `[Add a real client quote` and `[Client name]`. |
| **Photos** | Replace a file in `images/` with one of the same name, or change the `src="images/..."` path. |

## Contact form

The form sends to **StartVeganToday@gmail.com** using [FormSubmit](https://formsubmit.co), a free service (no account needed).

- **First time only:** after the site is live, send yourself a test message. FormSubmit emails StartVeganToday@gmail.com a confirmation link. Click it, and every message after that is delivered.
- Messages are limited to 100 characters. The sender gets an automatic "please give us 48 hours" reply.
