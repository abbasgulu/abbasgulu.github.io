# abbasgulu.github.io — Personal Portfolio

Personal portfolio of **Abbasgulu Allahverdili**, Data Analyst based in Baku, Azerbaijan.

Live: https://abbasgulu.github.io

Plain HTML, CSS and vanilla JavaScript — no build step, no dependencies.

## Structure

```
index.html              # single page; sections toggled by JS
assets/
  css/style.css         # all styling (CSS variables at the top of the file)
  js/script.js          # nav + mobile sidebar + form validation
  images/               # avatar, service icons, design/ gallery
  doc/                  # CV and certificates (PDF)
  favicon_io/           # favicons
.nojekyll               # tells GitHub Pages to serve files as-is
```

## Local preview

Open the folder in VS Code, install the **Live Server** extension,
then right-click `index.html` → *Open with Live Server*.

Or:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## TODO

- [ ] Replace `YOUR_FORM_ID` in the contact form with a real Formspree ID
- [ ] Swap `project-placeholder.svg` for real project screenshots
- [ ] Point the three portfolio cards at their specific repo / dataset URLs
- [ ] Re-add the Google Data Analytics certificate once renewed

## Credits

Based on [vCard by codewithsadee](https://github.com/codewithsadee/vcard-personal-portfolio) (MIT), substantially modified.
