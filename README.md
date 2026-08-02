# SIPI Integrated Case Lab

A lightweight, browser-based learning application for **Sistem Informasi dan Pengendalian Internal (SIPI)**. The app uses one simulated company, **PT NusaNiaga**, to support integrated cases across 14 sessions.

## Features

- 14 session scenarios aligned to the SIPI course structure
- Evidence room with case-specific documents and logs
- Risk–control–evidence issue workspace
- Decision gate: release, hold, investigate, escalate, go, conditional go, no-go, and ICoFR conclusions
- Instructor summary view
- Local browser persistence; no server or student data collection
- Responsive static site suitable for GitHub Pages

## Run locally

Open `index.html` in a modern browser, or serve the folder with any static server.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

## Course design

The app does not replace the IAI SIPI module or the RPKPS. It provides an interactive case environment for applying concepts from systems, data, ERP, internal control, IT audit, business cycles, reporting, ICoFR, professional updates, remediation, and capstone judgment.

## Privacy

All learner progress is stored only in the browser using `localStorage`. No information is transmitted to a server.
