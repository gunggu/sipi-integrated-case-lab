# Forensic First Response — PSI Session 11 (Static Pilot v2)

**URL:** https://gunggu.github.io/sipi-integrated-case-lab/psi11-forensic/

A 30-minute small-group simulation of digital forensics, evidence handling, alert triage and continuous auditing for AKU3304. It is deliberately independent from NRD AuditLab and the textbook/Colab exercises. Company and artifacts are fictional.

## Classroom use

- One device per team of 3–5 students.
- Begin with a 2-minute briefing, complete all four decisions by minute 26, then allow 4 minutes for JSON export and debrief.
- Stage 1: evidence preservation versus restoration; Stage 2: source reconciliation and chain of custody; Stage 3: risk-based alert triage and monitoring-rule calibration; Stage 4: appropriately limited audit conclusion.
- Each stage has realistic expandable case artifacts with metadata, dates, log excerpts and provenance limitations. Students cite **one or two** evidence IDs, submit their selected action, and explain a tradeoff in at least 25 characters. Stages 2 and 3 contain an additional procedural decision.
- The outcome text is shown **after** submission. Source limitation notes are factual and avoid explicitly declaring the best action.
- After the case, students download a JSON result file; this must be submitted to eLOK or transferred to the lecturer manually. The website does **not** collect files centrally.

## Instructor area

- The Instructor button uses client-side SHA-256 comparison only. It is an organizational divider, not secure authentication.
- Import multiple JSON files. Each run has a random group ID (FFR-XXXXXXXX); overwriting a duplicate run requires confirmation. Different runs with identical group names remain distinct.
- The dashboard shows team scores, choice distribution, and each team’s cited evidence, procedural responses, and written rationale.
- CSV export is available. Instructor import data remain on that browser in localStorage, not in the cloud.

## Assessment

Automatic score **0–112**: selected actions up to 60, relevance of cited evidence up to 28, and procedural choices up to 24. A score is a formative indicator only; written justification needs separate instructor review. Students can inspect and modify client code and local storage. No assessment-integrity claim is made.

## Known static-site limitations

- The countdown uses the local device clock and can be circumvented by changing browser storage or system time. Treat it as pacing only.
- Full student scoring and the SHA-256 hash are in public code; this cannot be a secure examination.
- Reset starts a new local session, and session data are lost if browser data are cleared.
- No cross-device real-time classroom progress.
- Browser downloading, printing, and file selection require on-device validation on each target browser.
- An instructor should archive JSON results centrally outside the browser if needed.

## Acceptance checklist (manual testing before class)

1. Load the public GitHub Pages URL on Android Chrome, iPhone Safari and desktop Chrome/Firefox.
2. Student registration: create a fictional group; record unique run ID in the exported JSON.
3. Open/close every evidence artifact, inspect source and local/UTC time, ensure no clipped content on phone.
4. For stage 2 select an acquisition procedure; stage 3 select a monitoring rule.
5. Confirm a stage cannot be locked without a choice, 1–2 citations, a required procedure, and a 25+ character rationale.
6. Refresh between stages to confirm autosave; verify the consequence and next stage.
7. Complete the exercise and download valid version-2 JSON.
8. In instructor mode import two runs with the same group name but different run IDs; both should appear.
9. Import the same run ID twice and verify overwrite confirmation; reject malformed JSON.
10. Verify score totals and reasons on dashboard; export CSV.
11. Verify reset clears read markers, and note the clock limitation.
12. Ensure no documents or student private data are used in a public repository.

For any summative grading, migrate storage, time validation, login and scoring to a secure server with appropriate authentication and access controls.
