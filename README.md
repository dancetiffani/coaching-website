# Start Vegan Today — website

A simple, colorful website for Start Vegan Today vegan coaching.
Pages: **Home** (`index.html`), **About**, **Packages**, **Contact**, plus a thank-you page shown after the contact form is sent.
Plain HTML and CSS: no build step, works on phones, and is free to host on GitHub Pages.

## Publish free with GitHub Pages

1. Merge this work into the `main` branch (or open a pull request and merge it).
2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Source: Deploy from a branch**, then **Branch: `main`**, folder **`/ (root)`**, and click **Save**.
4. After a minute or two the site is live at `https://<your-github-username>.github.io/coaching-website/`.

Want your own domain (like `startvegantoday.com`)? Add it in the same **Pages** settings under **Custom domain**.

## Things to fill in

| What | Where |
|---|---|
| **Square payment links** | Already connected. To change one, open `packages.html` and search for `Square payment link`. |
| **Photos** | Upload to `images/` and swap the dashed placeholder boxes. See `images/README.md`. |
| **Your story** | `about.html`: search for `EDIT`. |
| **Package descriptions** | `packages.html`: search for `EDIT`. The Planted Premium list needs your details. |
| **Colors** | Top of `css/style.css`. |

## Contact form

The form is sent to **StartVeganToday@gmail.com** using [FormSubmit](https://formsubmit.co), a free service (no account needed).

- **First time only:** after the site is live, send yourself a test message. FormSubmit emails StartVeganToday@gmail.com a confirmation link. Click it, and every message after that is delivered.
- Messages are limited to 100 characters, with a live counter.
- Optional: FormSubmit's confirmation email gives you a random "alias" code. Replacing the email address in the form's `action` with that code (`https://formsubmit.co/<code>`) hides the email address from spam bots.
