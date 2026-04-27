/* Mini phone-screen renderers for the marketing site.
   Self-contained, scaled to fit ~320×690 phone shell. */

const { useState: useStateMP } = React;

/* Tiny icon set */
const MPIcon = ({ name, size = 18, color = "currentColor", stroke = 2 }) => {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "fire":   return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M13.5 2c-1 5.5-3.5 7-3.5 11a3 3 0 0 0 6 0c0-1-.5-2.5-1-3.5 1.5 1 3 3 3 5.5a6 6 0 0 1-12 0c0-4 3.5-6 7.5-13z"/></svg>;
    case "star":   return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l2.6 5.4 5.9.6-4.5 4 1.3 5.9L12 15l-5.3 2.9 1.3-5.9-4.5-4 5.9-.6z"/></svg>;
    case "school": return <svg {...c}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
    case "puzzle": return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M19 11h-1V8a2 2 0 0 0-2-2h-3V5a2 2 0 1 0-4 0v1H6a2 2 0 0 0-2 2v3.5a.5.5 0 0 0 .8.4 1.5 1.5 0 1 1 0 2.2.5.5 0 0 0-.8.4V18a2 2 0 0 0 2 2h3.5a.5.5 0 0 0 .4-.8 1.5 1.5 0 1 1 2.2 0 .5.5 0 0 0 .4.8H16a2 2 0 0 0 2-2v-3h1a2 2 0 1 0 0-4z"/></svg>;
    case "controller": return <svg {...c}><rect x="2" y="7" width="20" height="11" rx="5.5"/><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><circle cx="15" cy="11" r="1" fill={color}/><circle cx="17.5" cy="13.5" r="1" fill={color}/></svg>;
    case "grid":   return <svg {...c}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>;
    case "home":   return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3z"/></svg>;
    case "feedback": return <svg {...c}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6M12 16h.01"/></svg>;
    case "settings": return <svg {...c}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
    case "chevron":return <svg {...c}><polyline points="9 18 15 12 9 6"/></svg>;
    case "back":   return <svg {...c}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
    case "lightbulb":return <svg {...c}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.7c-.6.5-1 1.3-1 2.1V18H9v-1.2c0-.8-.4-1.6-1-2.1A7 7 0 0 1 12 2z"/></svg>;
    case "left":   return <svg {...c}><polyline points="15 18 9 12 15 6"/></svg>;
    case "right":  return <svg {...c}><polyline points="9 6 15 12 9 18"/></svg>;
    case "skip":   return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M5 4l10 8-10 8zM17 4h2v16h-2z"/></svg>;
    case "clock":  return <svg {...c}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>;
    default: return null;
  }
};

/* StatusBar */
function MPStatusBar() {
  return (
    <div style={{
      height: 50, padding: "16px 22px 0",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: "var(--cr-font-body)", fontSize: 14, fontWeight: 700, color: "#D9E2EC",
      position: "relative", zIndex: 4,
    }}>
      <div>9:41</div>
      <div style={{display:"flex", gap:5, alignItems:"center"}}>
        <svg width="16" height="10" viewBox="0 0 16 10"><rect x="0" y="6" width="3" height="4" rx="0.5" fill="#D9E2EC"/><rect x="4" y="4" width="3" height="6" rx="0.5" fill="#D9E2EC"/><rect x="8" y="2" width="3" height="8" rx="0.5" fill="#D9E2EC"/><rect x="12" y="0" width="3" height="10" rx="0.5" fill="#D9E2EC"/></svg>
        <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0.5" y="0.5" width="19" height="9" rx="2" stroke="#D9E2EC" fill="none"/><rect x="2" y="2" width="16" height="6" rx="1" fill="#D9E2EC"/></svg>
      </div>
    </div>
  );
}

/* TabBar */
function MPTabBar({ active = "home" }) {
  const tabs = [
    { id: "home", label: "Home", icon: "home" },
    { id: "feedback", label: "Feedback", icon: "feedback" },
    { id: "settings", label: "Settings", icon: "settings" },
  ];
  return (
    <div style={{
      height: 56, borderTop: "1px solid rgba(255,255,255,.08)",
      display: "flex", background: "#0A0A0A", flexShrink: 0,
    }}>
      {tabs.map(t => {
        const isActive = t.id === active;
        return (
          <div key={t.id} style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap: 2}}>
            <MPIcon name={t.icon} size={18} color={isActive ? "var(--cr-gold)" : "#9CA3AF"} stroke={t.icon === "home" ? 0 : 2} />
            <div style={{fontFamily:"var(--cr-font-body)", fontSize:9, fontWeight: isActive ? 700 : 600, color: isActive ? "var(--cr-gold)" : "#9CA3AF"}}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

/* App container */
function MPApp({ children, accent = "gold" }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0A0A0A",
      display: "flex", flexDirection: "column",
      fontFamily: "var(--cr-font-body)",
      position: "relative",
      overflow: "hidden",
    }}>
      <MPStatusBar />
      {children}
    </div>
  );
}

/* ───── HOME screen ───── */
function MPScreenHome() {
  return (
    <MPApp>
      <div style={{flex:1, overflow:"hidden", position:"relative"}}>
        <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 40% at 50% 20%, rgba(255,155,0,.10), transparent 60%)", pointerEvents:"none"}}></div>
        <div style={{height: 38}}></div>
        <div style={{textAlign:"center", fontFamily:"var(--cr-font-display)", fontSize: 19, letterSpacing: ".5px", color: "#D9E2EC", padding: "0 16px"}}>CHESS REHEARSAL</div>

        <div style={{display:"flex", justifyContent:"center", gap: 22, marginTop: 18, color:"#9CA3AF", fontSize: 12, fontWeight:600}}>
          <div style={{display:"flex", alignItems:"center", gap:5}}><MPIcon name="fire" size={14} color="var(--cr-gold)" />1 Day Streak</div>
          <div style={{display:"flex", alignItems:"center", gap:5}}><MPIcon name="star" size={14} color="var(--cr-gold)" />223 Solved</div>
        </div>

        <div style={{padding: "20px 18px 6px", color:"#9CA3AF", fontSize:11, fontWeight:600}}>Continue</div>
        {[
          ["Easy Rehearsal 2", "50 left in Cycle 2"],
          ["Advanced Rehearsal 1", "38 left in Cycle 1"],
        ].map(([t, s], i) => (
          <div key={t} style={{display:"flex", alignItems:"center", gap:10, padding:"10px 18px", borderBottom: i === 0 ? "1px solid rgba(255,255,255,.05)" : "none", marginLeft: i === 0 ? 0 : 0}}>
            <MPIcon name="school" size={14} color="var(--cr-gold)" />
            <div style={{fontSize:12, fontWeight:700, color:"#D9E2EC", whiteSpace:"nowrap"}}>{t}</div>
            <div style={{fontSize:10, color:"#9CA3AF", whiteSpace:"nowrap", flex:1, overflow:"hidden", textOverflow:"ellipsis"}}>{s}</div>
            <MPIcon name="chevron" size={11} color="#9CA3AF" />
          </div>
        ))}

        <div style={{padding: "16px 18px 0"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 12}}>
            {[
              ["school", "Rehearsal", 2],
              ["puzzle", "Puzzles", 0],
              ["controller", "Games", 2],
              ["grid", "Notation", 2],
            ].map(([icon, label, stroke]) => (
              <div key={label} style={{
                aspectRatio: "1.1",
                background: "#151515",
                border: "1px solid rgba(255,155,0,.30)",
                borderRadius: 14,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 6,
              }}>
                <MPIcon name={icon} size={28} color="var(--cr-gold)" stroke={stroke || 2} />
                <div style={{fontSize: 13, fontWeight: 700, color:"#D9E2EC"}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MPTabBar active="home" />
    </MPApp>
  );
}

/* ───── PUZZLE board screen ───── */
function MPBoardSquare({ light, piece }) {
  return (
    <div style={{
      background: light ? "#E8D8A0" : "#A89048",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
    }}>
      {piece && <img src={"../assets/pieces/" + piece} alt="" style={{width: "92%", height: "92%"}} />}
    </div>
  );
}
function MPScreenPuzzle() {
  // Compact position
  const pos = {
    "g8":"black_king.png", "h7":"white_pawn.png",
    "a6":"black_knight.png", "b6":"black_pawn.png", "g6":"black_pawn.png",
    "a5":"white_pawn.png",
    "e5":"white_queen.png",
    "a4":"white_pawn.png", "c4":"white_pawn.png",
    "b3":"black_bishop.png", "c3":"white_knight.png", "d3":"white_bishop.png", "g3":"white_pawn.png",
  };
  const files = ["a","b","c","d","e","f","g","h"];
  const ranks = [8,7,6,5,4,3,2,1];
  return (
    <MPApp>
      <div style={{height: 44, display:"flex", alignItems:"center", justifyContent:"center", position:"relative"}}>
        <div style={{position:"absolute", left:12, top:"50%", transform:"translateY(-50%)"}}>
          <MPIcon name="back" size={18} color="#D9E2EC" />
        </div>
        <div style={{fontFamily:"var(--cr-font-display)", fontSize:15, color:"#D9E2EC", letterSpacing:".5px"}}>ADVANCED REHEARSAL 1</div>
      </div>

      <div style={{padding:"8px 12px", background:"#0A0A0A", borderTop:"1px solid rgba(255,255,255,.08)", borderBottom:"1px solid rgba(255,255,255,.08)", display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:11}}>
        <div style={{display:"flex", alignItems:"center", gap:8}}>
          <div style={{width: 10, height:10, borderRadius:"50%", background:"var(--cr-gold)"}}></div>
          <div><strong style={{color:"#D9E2EC"}}>White</strong> <span style={{color:"#9CA3AF"}}>to move</span></div>
        </div>
        <div style={{display:"flex", gap:10, color:"#9CA3AF", fontWeight:600}}>
          <span>C1: 13/50</span>
          <span style={{display:"flex", alignItems:"center", gap:3}}><MPIcon name="clock" size={11} color="#9CA3AF" />00:04</span>
        </div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(8, 1fr)", aspectRatio:"1"}}>
        {ranks.flatMap(r => files.map(f => {
          const sq = f + r;
          const fIdx = files.indexOf(f);
          const rIdx = ranks.indexOf(r);
          const light = (fIdx + rIdx) % 2 === 0;
          return <MPBoardSquare key={sq} light={light} piece={pos[sq]} />;
        }))}
      </div>

      <div style={{padding:"8px 12px", background:"#0A0A0A", display:"flex", alignItems:"center", gap:8, borderBottom:"1px solid rgba(255,255,255,.08)", fontSize:11}}>
        <span style={{color:"#D9E2EC"}}>1.</span>
        <span style={{color:"#9CA3AF"}}>--</span>
        <span style={{color:"#D9E2EC", borderBottom:"2px solid #D9E2EC"}}>Ba6</span>
      </div>

      <div style={{flex:1}}></div>
      <div style={{display:"flex", justifyContent:"space-around", padding:"14px 12px"}}>
        <MPIcon name="left" size={22} color="#9CA3AF" />
        <MPIcon name="right" size={22} color="#9CA3AF" />
        <MPIcon name="lightbulb" size={20} color="#D9E2EC" />
        <MPIcon name="skip" size={20} color="#D9E2EC" />
      </div>
    </MPApp>
  );
}

/* ───── REHEARSAL SET screen ───── */
function MPScreenRehearsal() {
  const cycles = [
    { n:1, avg:"32.8s" },
    { n:2, avg:"25.9s", d:"-7.0s", down:true },
    { n:3, avg:"17.7s", d:"-8.1s", down:true },
    { n:4, avg:"14.5s", d:"-3.2s", down:true },
    { n:5, avg:"15.9s", d:"+1.4s", down:false },
    { n:6, avg:"12.0s", d:"-4.0s", down:true },
    { n:7, avg:"9.5s",  d:"-2.5s", down:true },
    { n:8, avg:"8.1s",  d:"-1.4s", down:true },
    { n:9, avg:"6.2s",  d:"-1.9s", down:true },
  ];
  return (
    <MPApp>
      <div style={{height: 44, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", flexShrink:0}}>
        <div style={{position:"absolute", left:12, top:"50%", transform:"translateY(-50%)"}}><MPIcon name="back" size={18} color="#D9E2EC" /></div>
        <div style={{fontFamily:"var(--cr-font-display)", fontSize:15, color:"#D9E2EC", letterSpacing:".5px"}}>EASY REHEARSAL 1</div>
      </div>
      <div style={{padding:"8px 16px 0", flex:1, overflow:"hidden"}}>
        <div style={{border:"1px solid rgba(255,155,0,.30)", borderRadius:14, padding:"14px 14px 10px"}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12, fontSize:11}}>
            <div style={{display:"flex", alignItems:"center", gap:6, color:"#9CA3AF", fontWeight:600}}>
              <MPIcon name="puzzle" size={12} color="#9CA3AF" stroke={2} /> 50 puzzles
            </div>
            <div style={{color:"#9CA3AF"}}>15 days ago</div>
          </div>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute", left:11, top:11, bottom:11, width:2, background:"rgba(255,155,0,.30)"}}></div>
            {cycles.map(c => (
              <div key={c.n} style={{display:"flex", alignItems:"center", gap:8, marginBottom:7, position:"relative", whiteSpace:"nowrap"}}>
                <div style={{width:22, height:22, borderRadius:"50%", background:"var(--cr-gold)", color:"#1F2933", fontWeight:800, fontSize:11, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, zIndex:1}}>{c.n}</div>
                <div style={{fontSize:11, fontWeight:700, color:"#D9E2EC", flexShrink:0}}>Cycle {c.n}</div>
                <div style={{color:"#9CA3AF", fontSize:10, flexShrink:0}}>·</div>
                <div style={{fontSize:11, color:"#9CA3AF", flexShrink:0}}>{c.avg} avg</div>
                {c.d && <div style={{display:"flex", gap:1, fontSize:10, fontWeight:700, color: c.down ? "#4ADE80" : "#EF4444", flexShrink:0}}>{c.down ? "↓" : "↑"} {c.d}</div>}
              </div>
            ))}
          </div>
          <div style={{display:"flex", justifyContent:"space-around", marginTop:8, paddingTop:10, borderTop:"1px solid rgba(255,255,255,.06)"}}>
            <div style={{textAlign:"center"}}>
              <div style={{display:"flex", justifyContent:"center", gap:4, alignItems:"baseline"}}>
                <div style={{fontWeight:800, fontSize:18, color:"var(--cr-gold)"}}>6.2s</div>
                <div style={{color:"#4ADE80", fontWeight:700, fontSize:10}}>↓81%</div>
              </div>
              <div style={{fontSize:10, color:"#9CA3AF"}}>Best</div>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontWeight:800, fontSize:18, color:"var(--cr-gold)"}}>1h 59m</div>
              <div style={{fontSize:10, color:"#9CA3AF"}}>Total Time</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding:"10px 16px 16px", borderTop:"1px solid rgba(255,255,255,.08)"}}>
        <div style={{height:42, background:"var(--cr-gold)", color:"#1F2933", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:13, gap:7}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#1F2933"><path d="M6 4l14 8-14 8z"/></svg>
          Start Cycle 10
        </div>
      </div>
    </MPApp>
  );
}

Object.assign(window, { MPIcon, MPScreenHome, MPScreenPuzzle, MPScreenRehearsal });
