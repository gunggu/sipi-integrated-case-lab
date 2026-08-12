# SIPI Integrated Case & Certification Lab

A browser-based mock simulation for **Sistem Informasi dan Pengendalian Internal (SIPI)** using one simulated company, **PT NusaNiaga**, across 14 learning sessions.

## Purpose

The application is a **case-immersion, evidence-evaluation, and professional-reasoning scaffold**. Learners explore ERP-style records, inspect evidence, identify material clues, cite evidence, document an investigation, and make a defensible decision.

It does not replace the IAI SIPI module, RPKPS, teaching notes, or a real ERP/accounting system.

## Current features

- 14 session scenarios aligned to the SIPI course structure
- PT NusaNiaga integrated simulation briefing
- ERP-style module and record exploration
- module-specific datasets for Sessions 11–14
- Evidence Room with Evidence IDs, source/type, status, reliability, observed content, and limitations
- evidence-status distinctions including confirmed, incomplete, conflicting, management representation, and corroborated evidence
- Investigation Notebook with material-clue selection and evidence citations
- Decision Gate requiring cited evidence and substantive structured justification
- Student Mode and Instructor Mode
- instructor debrief/rubric guidance for Sessions 11–14
- optional 45-minute mock-certification timer for Session 14
- JSON export and browser Print/PDF
- local browser persistence; no server or student-data collection
- responsive static site suitable for GitHub Pages

## Sessions 11–14

### Session 11

Integrated data, ERP, process, control, audit evidence, vendor/master-data risk, SoD, interface exception, change management, sales-to-GL reconciliation, blocking conditions, and operational/reporting decisions.

### Session 12

Payroll-to-report, bank-file integrity, financial close, unsupported journals, suspense ageing, XBRL/AI reporting, deficiency aggregation, publication gates, and ICoFR conclusion.

### Session 13

Cloud shared responsibility, SOC reports and CUECs, AI/RPA governance, bot identity, biometric privacy, evidence traceability, and 30/60/90 remediation.

### Session 14

Capstone mock certification using I-P-A-R-E-C, evidence citations, conflicting evidence, management representation, prioritisation, publication gates, ICoFR, and optional timer.

## Recommended learning sequence

1. briefing;
2. ERP/module exploration;
3. evidence inspection;
4. clue selection;
5. evidence citation;
6. I-P-A-R-E-C investigation note;
7. structured decision gate;
8. export/submit;
9. instructor-led debrief.

## Student and Instructor Modes

Student Mode hides instructor debrief and rubric guidance. Instructor Mode reveals guidance for Sessions 11–14.

**Important:** because the repository and GitHub Pages are public, Instructor Mode is a pedagogical separation only, not a secure access-control boundary. Do not store confidential answer keys, personal data, or high-stakes exam secrets in the public source.

## Documentation

- [Content audit](docs/AUDIT_KONTEN_APLIKASI.md)
- [Instructor guide](docs/PANDUAN_DOSEN.md)
- [Student guide](docs/PANDUAN_MAHASISWA.md)

## Run locally

Open `index.html` in a modern browser, or serve the folder with a static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

In repository settings, open **Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

## Privacy

Learner progress is stored only in the browser using `localStorage`. No information is transmitted to a server. Do not enter personal data, confidential institutional data, or real company information.

## Remaining limitations

- The application is still a pedagogical mock-up, not a transaction-processing ERP or ledger engine.
- Sessions 1–10 remain more compact than the enriched Sessions 11–14.
- There is no centralized instructor dashboard, backend authentication, or verified identity.
- Professional judgment is not auto-graded; instructor assessment and debrief remain necessary.
- Exported files are learning artefacts, not verified assessment records.