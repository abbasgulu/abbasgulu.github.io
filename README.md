# abbasgulu.github.io — Personal Portfolio

Personal portfolio of **Abbasgulu Allahverdili**, Data Analyst based in Baku, Azerbaijan.

**Live:** https://abbasgulu.github.io

Plain HTML, CSS and vanilla JavaScript: no build step, no dependencies.

## What's on the site

| Page | Contents |
|---|---|
| **About** | Intro, how I work (collection → cleaning → EDA → modelling), profile card with CV download |
| **Resume** | Education, experience, certifications with credential links, skills and languages |
| **Portfolio** | Five case studies with findings, full-size images and links |
| **Contact** | Email / LinkedIn and a contact form (Formspree) |

Dark and light themes follow the visitor's system setting and can be switched with the toggle in the top-right corner.

## Projects

| Project | Stack | Links |
|---|---|---|
| HR Workforce Analytics | Oracle 18c, SQL, Python | [Repo](https://github.com/abbasgulu/hr-workforce-analytics) · [Notebook](https://github.com/abbasgulu/hr-workforce-analytics/blob/main/notebooks/01_analysis.ipynb) |
| Crimes in Boston: EDA & Severity Prediction | Python, pandas, scikit-learn, Folium | [Notebook](https://www.kaggle.com/code/abbasgulu/boston-crime-eda-severity-prediction) · [Dataset](https://www.kaggle.com/datasets/AnalyzeBoston/crimes-in-boston) |
| Credit Card Churn | Power BI, Power Query, DAX | [Project file](https://drive.google.com/file/d/16fnfcs-xMDs2xJmWliApIJk1eDy3ct5c/view) · [Dataset](https://www.kaggle.com/datasets/sakshigoyal7/credit-card-customers) |
| Oxu.az News Dataset (52,946 articles) | Python, web scraping, EDA | [Dataset](https://www.kaggle.com/datasets/abbasgulu/oxu-az-news-dataset-52k-azerbaijani-articles) · [Notebook](https://www.kaggle.com/code/abbasgulu/oxu-az-news-dataset-comprehensive-eda-insights) |
| Global Superstore | Excel, Power Query, Power Pivot, DAX | [Project file](https://drive.google.com/drive/folders/1mOYiG1x8KqvLzyzbpG8NuErweJaxynJV) · [Dataset](https://www.kaggle.com/datasets/apoorvaappz/global-super-store-dataset) |

## Structure

```
index.html                  # single page; sections switched by JS
assets/
  css/style.css             # all styling (theme colours are CSS variables at the top)
  js/script.js              # navigation, theme toggle, mobile sidebar, form, image lightbox
  images/
    projects/               # project cover images
    projects/full/          # full-size versions opened by "View full size"
    social-card.jpg         # link preview image (LinkedIn, etc.)
  doc/                      # CV (PDF) and certificate files
  favicon_io/               # favicons
.nojekyll                   # tells GitHub Pages to serve files as-is
```

## Local preview

Open the folder in VS Code, install the **Live Server** extension,
then right-click `index.html` → *Open with Live Server*.

Or:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Credits

Based on [vCard by codewithsadee](https://github.com/codewithsadee/vcard-personal-portfolio) (MIT), substantially modified.
