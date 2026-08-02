(() => {
  const DATA = window.SIPI_DATA;
  const STORE_KEY = "sipi-case-lab-v1";
  const state = loadState();
  let currentSessionId = state.currentSessionId || 1;
  let currentEvidenceIndex = null;

  const $ = (id) => document.getElementById(id);
  const sessionSelect = $("sessionSelect");
  const sessionNav = $("sessionNav");

  const navItems = [
    ["overviewView", "Ringkasan"],
    ["evidenceView", "Evidence room"],
    ["workspaceView", "Issue workspace"],
    ["answerView", "I‑P‑A‑R‑E‑C"],
    ["instructorView", "Instructor summary"]
  ];

  function defaultSessionState() {
    return { reviewedEvidence: [], decision: "", issues: [], iparec: {} };
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || { sessions: {} };
    } catch {
      return { sessions: {} };
    }
  }

  function saveState() {
    state.currentSessionId = currentSessionId;
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    updateProgress();
    renderSummary();
  }

  function getSessionState(id = currentSessionId) {
    if (!state.sessions) state.sessions = {};
    if (!state.sessions[id]) state.sessions[id] = defaultSessionState();
    return state.sessions[id];
  }

  function currentSession() {
    return DATA.sessions.find((s) => s.id === Number(currentSessionId));
  }

  function initializeNavigation() {
    DATA.sessions.forEach((s) => {
      const option = document.createElement("option");
      option.value = s.id;
      option.textContent = `Sesi ${s.id} — ${s.title}`;
      sessionSelect.appendChild(option);
    });
    sessionSelect.value = currentSessionId;

    navItems.forEach(([viewId, label], index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `nav-btn${index === 0 ? " active" : ""}`;
      button.dataset.view = viewId;
      button.textContent = label;
      button.addEventListener("click", () => switchView(viewId, button));
      sessionNav.appendChild(button);
    });
  }

  function switchView(viewId, button) {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    $(viewId).classList.add("active");
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    if (viewId === "instructorView") renderSummary();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSession() {
    const session = currentSession();
    const sessionState = getSessionState();
    $("sessionKicker").textContent = `Sesi ${session.id} • PT NusaNiaga`;
    $("sessionTitle").textContent = session.title;
    $("sessionSummary").textContent = session.summary;
    $("sessionBadge").textContent = session.badge;

    $("objectivesList").innerHTML = session.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join("");
    $("decisionPrompt").textContent = session.decisionPrompt;
    $("caseFacts").innerHTML = session.facts.map((fact, i) => `<div class="fact-card"><strong>Fakta ${i + 1}</strong>${escapeHtml(fact)}</div>`).join("");

    $("decisionOptions").innerHTML = "";
    session.decisions.forEach((decision) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `decision-chip${sessionState.decision === decision ? " selected" : ""}`;
      btn.textContent = decision;
      btn.addEventListener("click", () => {
        sessionState.decision = decision;
        saveState();
        renderSession();
      });
      $("decisionOptions").appendChild(btn);
    });

    renderEvidence();
    renderIssues();
    renderIparec();
    renderSummary();
    updateProgress();
  }

  function renderEvidence() {
    const session = currentSession();
    const reviewed = getSessionState().reviewedEvidence;
    $("evidenceGrid").innerHTML = "";
    session.evidence.forEach((ev, index) => {
      const card = document.createElement("article");
      card.className = `evidence-card${reviewed.includes(index) ? " reviewed" : ""}`;
      card.innerHTML = `<div class="evidence-meta"><span>${escapeHtml(ev[1])}</span><span>${reviewed.includes(index) ? "Reviewed" : "Open"}</span></div><h3>${escapeHtml(ev[0])}</h3><p>${escapeHtml(ev[2].slice(0, 115))}${ev[2].length > 115 ? "…" : ""}</p>`;
      card.tabIndex = 0;
      card.addEventListener("click", () => openEvidence(index));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") openEvidence(index); });
      $("evidenceGrid").appendChild(card);
    });
    $("evidenceCounter").textContent = `${reviewed.length} dari ${session.evidence.length} ditinjau`;
  }

  function openEvidence(index) {
    currentEvidenceIndex = index;
    const ev = currentSession().evidence[index];
    $("modalType").textContent = ev[1];
    $("modalTitle").textContent = ev[0];
    $("modalBody").textContent = ev[2];
    $("markReviewed").checked = getSessionState().reviewedEvidence.includes(index);
    $("evidenceModal").classList.add("open");
    $("evidenceModal").setAttribute("aria-hidden", "false");
  }

  function closeEvidence() {
    $("evidenceModal").classList.remove("open");
    $("evidenceModal").setAttribute("aria-hidden", "true");
    currentEvidenceIndex = null;
  }

  function renderIssues() {
    const container = $("issuesContainer");
    const issues = getSessionState().issues;
    container.innerHTML = "";
    if (!issues.length) {
      container.innerHTML = `<article class="panel"><p>Belum ada isu. Tambahkan isu setelah meninjau evidence pack.</p></article>`;
      return;
    }
    issues.forEach((issue, index) => {
      const card = document.createElement("article");
      card.className = "issue-card";
      card.innerHTML = `
        <div class="issue-head"><strong>Isu ${index + 1}</strong><button class="remove-btn" type="button">Hapus</button></div>
        <div class="form-grid">
          ${issueField(index,"issue","Issue / fakta",issue.issue,"textarea")}
          ${issueField(index,"risk","Risk / assertion",issue.risk,"textarea")}
          ${issueField(index,"control","Expected control",issue.control,"textarea")}
          ${issueField(index,"evidence","Evidence / limitation",issue.evidence,"textarea")}
          ${issueField(index,"action","Recommendation / owner / timing",issue.action,"textarea")}
          ${issueField(index,"closure","Closure evidence / residual risk",issue.closure,"textarea")}
          ${severityField(index, issue.severity)}
        </div>`;
      card.querySelector(".remove-btn").addEventListener("click", () => {
        issues.splice(index, 1); saveState(); renderIssues();
      });
      card.querySelectorAll("textarea,select").forEach((input) => {
        input.addEventListener("input", (e) => {
          issues[index][e.target.dataset.key] = e.target.value;
          saveState();
        });
      });
      container.appendChild(card);
    });
  }

  function issueField(index, key, label, value = "", type = "textarea") {
    return `<div class="form-field"><label>${label}</label><${type} data-key="${key}" aria-label="${label}">${escapeHtml(value || "")}</${type}></div>`;
  }

  function severityField(index, value = "") {
    const options = ["","Monitor","Moderate","High","Blocker","Escalate"];
    return `<div class="form-field"><label>Priority / severity</label><select data-key="severity">${options.map((o) => `<option value="${o}"${o === value ? " selected" : ""}>${o || "Pilih"}</option>`).join("")}</select></div>`;
  }

  function addIssue() {
    getSessionState().issues.push({ issue:"", risk:"", control:"", evidence:"", action:"", closure:"", severity:"" });
    saveState(); renderIssues();
  }

  function renderIparec() {
    const form = $("iparecForm");
    const answer = getSessionState().iparec;
    form.innerHTML = "";
    DATA.iparec.forEach(([name, hint]) => {
      const key = name.toLowerCase();
      const card = document.createElement("article");
      card.className = "iparec-card";
      card.innerHTML = `<h3>${name}</h3><p>${hint}</p><textarea data-key="${key}" aria-label="${name}">${escapeHtml(answer[key] || "")}</textarea>`;
      card.querySelector("textarea").addEventListener("input", (e) => {
        answer[e.target.dataset.key] = e.target.value;
        saveState();
      });
      form.appendChild(card);
    });
  }

  function sessionProgress() {
    const s = currentSession();
    const st = getSessionState();
    const evidenceScore = s.evidence.length ? st.reviewedEvidence.length / s.evidence.length : 0;
    const decisionScore = st.decision ? 1 : 0;
    const issueScore = Math.min(st.issues.filter((i) => i.issue && i.control && i.evidence).length / 3, 1);
    const answerValues = DATA.iparec.map(([name]) => st.iparec[name.toLowerCase()] || "");
    const answerScore = answerValues.filter((v) => v.trim().length > 10).length / DATA.iparec.length;
    return Math.round((evidenceScore * .25 + decisionScore * .15 + issueScore * .30 + answerScore * .30) * 100);
  }

  function updateProgress() {
    const progress = sessionProgress();
    $("progressText").textContent = `${progress}%`;
    $("progressBar").style.width = `${progress}%`;
  }

  function buildSummary() {
    const s = currentSession();
    const st = getSessionState();
    const lines = [
      `SIPI INTEGRATED CASE LAB — SESI ${s.id}`,
      s.title,
      "",
      `Keputusan: ${st.decision || "Belum dipilih"}`,
      `Evidence ditinjau: ${st.reviewedEvidence.length}/${s.evidence.length}`,
      `Isu dicatat: ${st.issues.length}`,
      `Progres: ${sessionProgress()}%`,
      "",
      "ISSUE WORKSPACE"
    ];
    if (!st.issues.length) lines.push("Belum ada isu.");
    st.issues.forEach((i, idx) => {
      lines.push(`\n${idx + 1}. ${i.issue || "[Issue belum diisi]"}`);
      lines.push(`   Risk/assertion: ${i.risk || "-"}`);
      lines.push(`   Control: ${i.control || "-"}`);
      lines.push(`   Evidence: ${i.evidence || "-"}`);
      lines.push(`   Action: ${i.action || "-"}`);
      lines.push(`   Closure/residual risk: ${i.closure || "-"}`);
      lines.push(`   Severity: ${i.severity || "-"}`);
    });
    lines.push("\nI‑P‑A‑R‑E‑C ANSWER");
    DATA.iparec.forEach(([name]) => lines.push(`\n${name}:\n${st.iparec[name.toLowerCase()] || "-"}`));
    return lines.join("\n");
  }

  function renderSummary() {
    const st = getSessionState();
    const reviewed = st.reviewedEvidence.length;
    const completedIparec = Object.values(st.iparec).filter((v) => v && v.trim().length > 10).length;
    $("summaryCards").innerHTML = `
      <div class="metric"><span>Progress</span><strong>${sessionProgress()}%</strong></div>
      <div class="metric"><span>Evidence reviewed</span><strong>${reviewed}</strong></div>
      <div class="metric"><span>Issues / I‑P‑A‑R‑E‑C fields</span><strong>${st.issues.length} / ${completedIparec}</strong></div>`;
    $("summaryText").textContent = buildSummary();
  }

  function exportSummary() {
    const blob = new Blob([buildSummary()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SIPI_Sesi_${currentSessionId}_Ringkasan.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function resetProgress() {
    if (!confirm("Hapus seluruh progres yang tersimpan di browser ini?")) return;
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  }

  sessionSelect.addEventListener("change", () => {
    currentSessionId = Number(sessionSelect.value);
    saveState(); renderSession();
  });
  $("addIssueBtn").addEventListener("click", addIssue);
  $("closeModalBtn").addEventListener("click", closeEvidence);
  $("evidenceModal").addEventListener("click", (e) => { if (e.target.id === "evidenceModal") closeEvidence(); });
  $("markReviewed").addEventListener("change", (e) => {
    if (currentEvidenceIndex === null) return;
    const reviewed = getSessionState().reviewedEvidence;
    const pos = reviewed.indexOf(currentEvidenceIndex);
    if (e.target.checked && pos < 0) reviewed.push(currentEvidenceIndex);
    if (!e.target.checked && pos >= 0) reviewed.splice(pos, 1);
    saveState(); renderEvidence();
  });
  $("exportBtn").addEventListener("click", exportSummary);
  $("resetBtn").addEventListener("click", resetProgress);
  $("copySummaryBtn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(buildSummary()); $("copySummaryBtn").textContent = "Tersalin"; setTimeout(() => $("copySummaryBtn").textContent = "Salin ringkasan", 1200); }
    catch { alert("Clipboard tidak tersedia. Gunakan tombol Ekspor ringkasan."); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeEvidence(); });

  initializeNavigation();
  renderSession();
})();
