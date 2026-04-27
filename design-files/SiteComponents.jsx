/* Marketing site components — both Theatrical Dark and Warm variations.
   All components rendered inline (no external assets except mascot). */

const { useState: useStateSite } = React;

/* SVG store badges */
function GooglePlayBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path fill="#FF9B00" d="M3.6 1.5C3.2 1.7 3 2.1 3 2.7v18.6c0 .6.2 1 .6 1.2l10.7-10.5L3.6 1.5z"/>
      <path fill="#FFB84D" d="M16.7 8.6 13.5 6.7 4.5 1.4l9.8 10.6 2.4-3.4z"/>
      <path fill="#D97757" d="m14.3 12 9.6-5.6c.7-.4.7-1.5 0-1.9L16.7 8.6 14.3 12z"/>
      <path fill="#A04A2E" d="m4.5 22.6 12.2-7-2.4-3.6L4.5 22.6z"/>
    </svg>
  );
}
function AppStoreBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
      <path d="M17.05 12.04c-.03-3.16 2.58-4.68 2.7-4.75-1.47-2.15-3.76-2.45-4.58-2.48-1.95-.2-3.8 1.15-4.79 1.15-.99 0-2.51-1.13-4.13-1.1-2.13.03-4.09 1.24-5.18 3.13-2.21 3.83-.57 9.49 1.59 12.6 1.05 1.52 2.31 3.23 3.95 3.17 1.59-.06 2.19-1.03 4.11-1.03 1.92 0 2.46 1.03 4.13.99 1.71-.03 2.79-1.55 3.83-3.08 1.21-1.77 1.71-3.49 1.74-3.58-.04-.02-3.34-1.28-3.37-5.07zM13.94 3.18c.86-1.05 1.45-2.5 1.29-3.95-1.25.05-2.77.83-3.66 1.87-.8.92-1.5 2.4-1.31 3.81 1.39.11 2.81-.71 3.68-1.73z"/>
    </svg>
  );
}

/* Phone shell with mini-app inside */
function PhoneShell({ children, scale = 1 }) {
  return (
    <div className="cr-phone-shell" style={{transform: `scale(${scale})`, transformOrigin: "center center"}}>
      <div className="cr-phone-island"></div>
      <div className="cr-phone-screen">
        {children}
      </div>
    </div>
  );
}

/* ─── Nav ─── */
function SiteNav({ active = "home", warm = false, basePath = "" }) {
  return (
    <nav className="cr-nav">
      <a href={basePath + "index.html"} className="cr-nav-brand">
        <img src="../assets/mascot.png" alt="Chess Rehearsal mascot" />
        <span>Chess Rehearsal</span>
      </a>
      <div className="cr-nav-links">
        <a href={basePath + "index.html#screenshots"}>Screenshots</a>
        <a href={basePath + "index.html#download"}>Download</a>
        <a href={basePath + "privacy.html"}>Privacy</a>
      </div>
    </nav>
  );
}

/* ─── Download Buttons ─── */
function DownloadButtons({ centered = false }) {
  return (
    <div className="cr-dl-row" style={centered ? {justifyContent:"center"} : null}>
      <a className="cr-dl-btn" href="#">
        <GooglePlayBadge />
        <div className="cr-dl-btn-text">
          <small>GET IT ON</small>
          <strong>Google Play</strong>
        </div>
      </a>
      <a className="cr-dl-btn" href="#">
        <AppStoreBadge />
        <div className="cr-dl-btn-text">
          <small>Download on the</small>
          <strong>App Store</strong>
        </div>
      </a>
    </div>
  );
}

/* ─── Hero (theatrical dark) ─── */
function HeroDark() {
  return (
    <section className="cr-hero">
      <div>
        <div className="cr-hero-eyebrow">For chess players in training</div>
        <h1>
          Master tactics,
          <span className="accent">one rehearsal at a time.</span>
        </h1>
        <p className="cr-hero-sub">
          Curated puzzles paired with spaced repetition. Solve, sleep, repeat — until
          the patterns become instinct.
        </p>
        <DownloadButtons />
      </div>
      <div className="cr-hero-phone-wrap">
        <PhoneShell><MPScreenHome /></PhoneShell>
      </div>
    </section>
  );
}

/* ─── Hero (warm) ─── */
function HeroWarm() {
  return (
    <section className="cr-hero">
      <div>
        <div className="cr-hero-eyebrow">A friendly chess coach in your pocket</div>
        <h1>
          Pattern recognition,
          <span className="accent">drilled into instinct.</span>
        </h1>
        <p className="cr-hero-sub">
          Curated puzzles meet spaced repetition. Spend ten minutes a day; watch
          your tactics get sharper week after week.
        </p>
        <DownloadButtons />
      </div>
      <div className="cr-warm-hero-stage">
        <img className="cr-warm-mascot" src="../assets/mascot.png" alt="Chess Rehearsal mascot" />
        <div className="cr-warm-phone">
          <PhoneShell><MPScreenHome /></PhoneShell>
        </div>
      </div>
    </section>
  );
}

/* ─── Screenshots section ─── */
function ScreenshotsSection({ warm = false }) {
  const shots = [
    { num: "01", title: "Your training stage", desc: "A daily home base showing streaks, queues, and the next puzzle waiting to be solved.", screen: <MPScreenHome /> },
    { num: "02", title: "Curated puzzles, calibrated",  desc: "Each set is hand-chosen and tuned to your level — from mate-in-1 to deep tactical lines.", screen: <MPScreenPuzzle /> },
    { num: "03", title: "Rehearsal that sticks",   desc: "Spaced cycles bring patterns back at exactly the right time. Watch your average solve time drop.", screen: <MPScreenRehearsal /> },
  ];
  return (
    <section id="screenshots" className="cr-screens">
      <div className="cr-container">
        <div className="cr-screens-head">
          <div className="cr-screens-eyebrow">Take a look inside</div>
          <h2 className="cr-screens-title">A stage built for practice.</h2>
          <p className="cr-screens-sub">Three core acts: a home you'll return to daily, puzzles built around real game patterns, and rehearsal cycles that turn study into reflex.</p>
        </div>
        <div className="cr-screens-grid">
          {shots.map(s => (
            <div key={s.num} className="cr-screen-card">
              <div className="cr-screen-frame">
                <PhoneShell scale={0.85}>{s.screen}</PhoneShell>
              </div>
              <div className="cr-screen-caption">
                <span className="num">ACT {s.num}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA ─── */
function BottomCTA({ showMascot = false }) {
  return (
    <section id="download" className="cr-cta">
      <div className="cr-container">
        {showMascot && <img className="cr-cta-mascot" src="../assets/mascot.png" alt="" />}
        <h2>Take the stage.</h2>
        <p className="cr-cta-sub">Download Chess Rehearsal and start your first cycle today. Free, no signup required.</p>
        <DownloadButtons centered />
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function SiteFooter() {
  return (
    <footer className="cr-container">
      <div className="cr-footer">
        <div className="cr-footer-left">
          <img src="../assets/mascot.png" alt="" />
          <span>© 2026 Chess Rehearsal</span>
        </div>
        <div className="cr-footer-links">
          <a href="mailto:hello@chessrehearsal.app">Contact</a>
          <a href="terms.html">Terms</a>
          <a href="privacy.html">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page assemblies ─── */
function HomePageDark() {
  return (
    <div className="cr-site cr-theatre" data-screen-label="Site Home — Theatrical">
      <div className="cr-container">
        <SiteNav />
        <HeroDark />
      </div>
      <div className="cr-stage-divider"></div>
      <ScreenshotsSection />
      <BottomCTA showMascot />
      <SiteFooter />
    </div>
  );
}

function HomePageWarm() {
  return (
    <div className="cr-site cr-warm" data-screen-label="Site Home — Warm">
      <div className="cr-container">
        <SiteNav warm />
        <HeroWarm />
      </div>
      <ScreenshotsSection warm />
      <BottomCTA />
      <SiteFooter />
    </div>
  );
}

function PrivacyPage({ warm = false }) {
  const cls = "cr-site " + (warm ? "cr-warm" : "cr-theatre");
  return (
    <div className={cls} data-screen-label={"Privacy — " + (warm ? "Warm" : "Theatrical")}>
      <div className="cr-container">
        <SiteNav warm={warm} />
        <div className="cr-privacy-head">
          <h1>Privacy Policy</h1>
          <div className="updated">Last updated · April 2026</div>
        </div>
      </div>
      <div className="cr-container">
        <div className="cr-privacy-body">
          <p className="muted">Chess Rehearsal is built around your practice — not your personal data. This page lays out, in plain language, exactly what we collect and what we don't.</p>

          <h2>What we collect</h2>
          <p>We store the things you'd expect a chess-training app to store: your puzzle history, completion times, rehearsal cycles, and personal settings. This data lives on your device and, if you sign in, in your account so it can sync across devices.</p>
          <ul>
            <li>Puzzle history and solve times</li>
            <li>Rehearsal cycle progress and streak data</li>
            <li>App preferences (theme, board, sounds)</li>
            <li>Crash reports and anonymous usage metrics</li>
          </ul>

          <h2>How we use it</h2>
          <p>Your training data powers the app itself: choosing the next puzzle, scheduling rehearsals, and showing your progress over time. Aggregate, anonymous metrics help us understand which puzzles work, which features get used, and where the app can improve.</p>
          <p>We do not sell or share your data. We do not show ads. We do not build a profile of you to monetize.</p>

          <h2>Third parties</h2>
          <p>We use a small number of trusted services to deliver the app — for crash reporting, analytics, and (if you sign in) authentication. Each is contractually bound to handle your data only on our behalf and only for these limited purposes.</p>

          <h2>Your rights</h2>
          <p>You can request a copy of your data, ask us to correct anything that's wrong, or delete your account at any time. Open Settings → Privacy in the app, or email us at <a href="mailto:privacy@chessrehearsal.app" style={{color:"var(--cr-gold)"}}>privacy@chessrehearsal.app</a>.</p>

          <h2>Children</h2>
          <p>Chess Rehearsal is suitable for chess learners of all ages. We do not knowingly collect personal information from children under 13 beyond what's necessary to deliver the app's training features.</p>

          <h2>Contact</h2>
          <p>Questions, comments, or concerns? Reach us at <a href="mailto:hello@chessrehearsal.app" style={{color:"var(--cr-gold)"}}>hello@chessrehearsal.app</a>. We read every message.</p>
        </div>
      </div>
      <div className="cr-container">
        <SiteFooter />
      </div>
    </div>
  );
}

Object.assign(window, { HomePageDark, HomePageWarm, PrivacyPage, PhoneShell });
