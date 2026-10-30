# Scorely India website

Six pages built with React + Vite, ready for Vercel:

| Page | URL | File |
|---|---|---|
| Home | `/` | `src/pages/Home.jsx` |
| RankRush | `/rankrush` | `src/pages/RankRush.jsx` |
| Features | `/features` | `src/pages/Features.jsx` |
| Plans | `/plans` | `src/pages/Plans.jsx` |
| For colleges | `/colleges` | `src/pages/Colleges.jsx` |
| FAQ | `/faq` | `src/pages/FAQ.jsx` |

The header, footer, heroes, animations, forms and styles that all pages share live in `src/shared.jsx`. The mascot and logo images are in `public/images`.

## Settings you may want to change

Everything lives in `src/config.js`:

- `DEFAULT_APP_URL` sets where Sign up, Log in, Get Pro and College login go.
- `FORM_EMAIL` is the inbox that receives partner applications and questions.
- `ROUTES` holds the page paths.

**Forms:** the first form submitted on the live site makes FormSubmit send an activation email to `FORM_EMAIL`. Click **Activate** in that email once, and every form after that arrives as an email.

## Put it live on Vercel (no coding needed)

1. Create a free account at **github.com** and make a new repository called `scorely-india`.
2. On the repository page, click **Add file → Upload files**. Drag in everything inside this folder (not the folder itself), then click **Commit changes**.
3. Go to **vercel.com** and sign in with GitHub. Click **Add New → Project**, pick `scorely-india` and click **Deploy**. Vercel detects Vite by itself, so leave all the settings as they are.
4. After about a minute you get a live link such as `scorely-india.vercel.app`.

To use your own domain (e.g. `scorelyindia.com`), go to the Vercel project's **Settings → Domains**, add the domain, and copy the DNS records it shows into your domain provider's DNS settings.

**Updating the site:** edit or upload changed files in GitHub. Vercel redeploys automatically within a minute.

## Run it on your own computer (optional)

You need Node.js 18 or newer.

```bash
npm install
npm run dev       # opens a local preview at http://localhost:5173
npm run build     # builds the finished site into dist/
```
