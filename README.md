# SIPI Integrated Case Lab

A lightweight, browser-based mock simulation for **Sistem Informasi dan Pengendalian Internal (SIPI)**. The application uses one simulated company, **PT NusaNiaga**, to support integrated case exploration across 14 sessions.

## Purpose

The application is a **case-immersion and professional-reasoning scaffold**. Learners explore mock ERP records, inspect evidence, identify material clues, document an investigation, and make a defensible decision.

It does not replace the IAI SIPI module, the RPKPS, teaching notes, or a real ERP/accounting system.

## Current features

- 14 session scenarios aligned to the SIPI course structure
- PT NusaNiaga simulation briefing
- ERP-style module and record exploration
- Evidence Room with mock documents and logs
- Investigation Notebook
- Decision Gate for release, hold, investigate, escalate, go/no-go, ICoFR, and readiness judgments
- Local browser persistence; no server or student-data collection
- Responsive static site suitable for GitHub Pages

## Documentation

- [Content audit](docs/AUDIT_KONTEN_APLIKASI.md)
- [Instructor guide](docs/PANDUAN_DOSEN.md)
- [Student guide](docs/PANDUAN_MAHASISWA.md)

The instructor and student guides are intentionally separate. Instructors must prepare the activity, manage evidence limitations, facilitate debriefing, and assess professional reasoning; students focus on exploration, investigation, evidence evaluation, and decision making.

## Run locally

Open `index.html` in a modern browser, or serve the folder with any static server.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

## Course design

The app supports applications of systems, data, ERP, internal control, IT audit, business cycles, reporting, ICoFR, professional updates, remediation, and capstone judgment.

The recommended learning sequence is:

1. briefing;
2. ERP mock-up exploration;
3. evidence inspection;
4. clue selection and investigation note;
5. decision gate;
6. instructor-led debrief.

## Important limitations

- Evidence artefacts are still partly generic.
- Records do not yet form a fully transactional end-to-end accounting database.
- Module tabs do not always have separate datasets.
- The application does not automatically score professional judgment.
- Local progress is not a verified assessment record.

See the [content audit](docs/AUDIT_KONTEN_APLIKASI.md) before classroom deployment.

## Privacy

All learner progress is stored only in the browser using `localStorage`. No information is transmitted to a server. Do not enter personal data, confidential institutional data, or real company information.
