import{j as e}from"./utils-DvD4i5RQ.js";import{r as o}from"./charts-C-zmPWFf.js";import{M as b}from"./MarkdownRenderer-DoCuVvZw.js";import{R as f}from"./RunHistorySummary-DMuF-wfe.js";import{eb as F,ec as I,ed as B,ee as $,ef as O}from"./index-9nypHQxV.js";import"./react-vendor-wzZzN_Jv.js";import"./google-services-C6huTpaC.js";const D=`Use this guide to run core AI features on a cadence that produces clear patterns without over-analysis.

## Summary Cheat Sheet

| AI feature | Optimal frequency | Why |
| --- | --- | --- |
| Habit Insights | Weekly | 7 days = meaningful pattern detection |
| Oracle's Synthesis Hub | Every 2-3 weeks | 30-90 day data needs time to accumulate |
| Architect's Briefing | Auto (every 4 hours) | Built-in cooldown, short data window |
| Opportunity Spotter | Auto (every 2 hours) | Built-in cooldown, 3-5 day window |
| Growth Guardian | Daily | Morning check-in + data integrity |
| Action Scanner | Auto (nightly) | Background processing is optimal |

## Habit Insights

### Purpose
Generate tactical habit insights based on recent completions, vitality, and related context.

### Recommended frequency
Weekly (every 7 days).

### Why weekly works best
- Pattern detection needs enough data to be meaningful (7 data points per habit).
- Repeated insights build confidence through reinforcement.
- Cross-domain signals (vitality, interactions, focus) need several days to stabilize.
- Weekly cadence reduces insight fatigue and leaves time to act on changes.

### Frequency guide

| Frequency | When to use |
| --- | --- |
| Weekly | Standard recommendation for stable, meaningful patterns |
| After major changes | New habits, routine shift, life event |
| Before weekly review | If you do weekly planning or reflection |
| Bi-weekly | If habits are stable and you want less noise |

### Not recommended

| Frequency | Why avoid |
| --- | --- |
| Daily | Too little new data, repetitive output, wastes API calls |
| Monthly | Patterns go stale, delayed course correction |

### Tip
Pick one day each week (Sunday evening or Monday morning) and keep it consistent.

## Oracle's Synthesis Hub

### Purpose
Generate cross-domain synthesis (30-90 day patterns) across memory, finance, habits, vitality, and interactions.

### Recommended frequency
Every 2 to 3 weeks.

### Why this cadence fits the design
- The synthesis prompt relies on 30-90 days of data, which changes slowly.
- Cross-domain patterns need weeks to reveal real correlations.
- Output is strategic, not tactical, so it benefits from longer action windows.
- The system already caps output when active insights are sufficient.

### Frequency guide

| Frequency | When to use |
| --- | --- |
| Every 2-3 weeks | Standard recommendation for meaningful cross-domain patterns |
| After major life events | Job change, relationship shift, big financial decision |
| After clearing active insights | Once your current insights are resolved or archived |
| Monthly | If life is stable and you want broader perspective |

### Not recommended

| Frequency | Why avoid |
| --- | --- |
| Weekly | Cross-domain inputs change too slowly, output becomes redundant |
| Daily | Noise overwhelms signal, high cost, minimal value |

## Automatic Systems

Use these mostly as automatic or semi-automatic systems. Run manually only when a major shift happens or you need an immediate recalibration.

## Opportunity Spotter (Horizon Scanner)

### Purpose
Detect short-term opportunity conditions and pre-pattern signals.

### Recommended frequency
Semi-automatic (every 2 hours, auto-refresh when the tab is active).

### Why this cadence fits the design
- Data window is last 3-5 days, so it changes slowly within a day.
- Built-in refresh loop already keeps it current.
- Manual runs are best after a major event or a sharp change.

### Frequency guide

| Frequency | When to use |
| --- | --- |
| Auto every 2 hours | Standard recommendation |
| Manual refresh | After a major event or decision point |

### Not recommended

| Frequency | Why avoid |
| --- | --- |
| Hourly or on-demand spam | Low signal, repeated output, fatigue |

## Growth Guardian (Sentinel Report)

### Purpose
Daily data integrity check plus momentum and sovereignty assessment.

### Recommended frequency
Daily (on Dashboard visit).

### Why this cadence fits the design
- Designed as a daily check-in to validate core data logs.
- Uses recent activity and today’s data.
- Manual refresh only helps if you updated logs midday.

### Frequency guide

| Frequency | When to use |
| --- | --- |
| Daily on dashboard | Standard recommendation |
| Manual refresh | After significant data entry the same day |

### Not recommended

| Frequency | Why avoid |
| --- | --- |
| Multiple times per day | Minimal new signal, repeated warnings |

## Architect's Briefing (Momentum Catalyst)

### Purpose
Monitor negative momentum signals and surface a corrective action.

### Recommended frequency
Semi-automatic (every 4 hours).

### Why this cadence fits the design
- Built-in cooldown keeps it fresh without noise.
- Best for daily awareness, not constant polling.
- Manual use only when something changes materially.

### Frequency guide

| Frequency | When to use |
| --- | --- |
| Auto every 4 hours | Standard recommendation |
| Manual refresh | After a major shift or urgent update |

### Not recommended

| Frequency | Why avoid |
| --- | --- |
| Repeated manual runs | Cooldown already covers the window |

## Action Scanner

### Purpose
Find cross-domain patterns and extract actionable items.

### Recommended frequency
Automatic (nightly at 2 AM).

### Why this cadence fits the design
- Nightly scan is designed to capture the full day.
- Manual runs are only useful after heavy data entry.

### Frequency guide

| Frequency | When to use |
| --- | --- |
| Nightly auto-scan | Standard recommendation |
| Manual scan | After major data entry sessions |

### Not recommended

| Frequency | Why avoid |
| --- | --- |
| Frequent manual runs | Redundant patterns, unnecessary load |
`,C=new Set(["Opportunity Spotter (Horizon Scanner)","Growth Guardian (Sentinel Report)","Architect's Briefing (Momentum Catalyst)","Action Scanner"]),G=h=>{const c=h.split(/\r?\n/),d=[],r=[];let n="",u=[];const a=()=>{if(!n)return;const m=u.join(`
`).trim();d.push({title:n,body:m}),n="",u=[]};return c.forEach(m=>{if(m.startsWith("## ")){a(),n=m.replace(/^##\s+/,"").trim();return}n?u.push(m):r.push(m)}),a(),{intro:r.join(`
`).trim(),sections:d}},L=h=>{const c=h.split(/\r?\n/),d=[];let r="",n=[];const u=()=>{if(!r)return;const a=n.join(`
`).trim();d.push({title:r,body:a}),r="",n=[]};return c.forEach(a=>{if(a.startsWith("### ")){u(),r=a.replace(/^###\s+/,"").trim();return}(r||a.trim())&&n.push(a)}),!r&&n.length>0?(d.push({title:"Overview",body:n.join(`
`).trim()}),d):(u(),d)},T=h=>{const c=h.toLowerCase();return c.includes("habit")?{accent:"bg-amber-400",border:"border-amber-500/40",heading:"text-amber-200",panel:"from-amber-500/15 via-slate-900/60 to-slate-900/80"}:c.includes("synthesis")?{accent:"bg-sky-400",border:"border-sky-500/40",heading:"text-sky-200",panel:"from-sky-500/15 via-slate-900/60 to-slate-900/80"}:{accent:"bg-slate-400",border:"border-slate-700",heading:"text-slate-100",panel:"from-slate-700/30 via-slate-900/60 to-slate-900/80"}},V=({variant:h="page"})=>{const[c]=o.useState(()=>F()),[d]=o.useState(()=>I()),[r]=o.useState(()=>B()),[n]=o.useState(()=>$()),[u]=o.useState(()=>O()),[a,m]=o.useState(!1),[y,S]=o.useState(!1),[g,M]=o.useState(!1),v=h==="embedded",x=o.useMemo(()=>G(D),[]),k=o.useMemo(()=>x.sections.filter(t=>C.has(t.title)),[x.sections]),N=()=>{S(t=>!t)},H=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),N())},A=(t,s)=>t.map(i=>i.title.toLowerCase()==="recommended frequency"?e.jsxs("div",{className:`rounded-xl border ${s.border} bg-slate-900/70 p-4 shadow-md`,children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs uppercase tracking-wide text-slate-300",children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${s.accent}`,"aria-hidden":"true"}),"Recommended frequency"]}),e.jsx("div",{className:`mt-2 text-base sm:text-lg font-semibold ${s.heading}`,children:e.jsx(b,{text:i.body,className:"prose prose-xs sm:prose-sm prose-invert max-w-none text-slate-100"})})]},i.title):e.jsx("div",{children:e.jsx(b,{text:`### ${i.title}

${i.body}`,className:"prose prose-xs sm:prose-sm prose-invert max-w-none text-slate-200"})},i.title)),R=t=>{const s=T(t.title),i=L(t.body),w=t.title.toLowerCase(),W=w==="summary cheat sheet",p=w==="automatic systems",j=p?i.find(l=>l.title.toLowerCase()==="overview"):void 0,E=p?i.filter(l=>l!==j):i,q=p?"operating-guide-automatic-systems-body":void 0;return p?e.jsx("section",{className:`rounded-2xl border ${s.border} bg-gradient-to-br ${s.panel} p-6 shadow-lg`,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:`mt-1 h-10 w-1.5 rounded-full ${s.accent}`,"aria-hidden":"true"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{role:"button",tabIndex:0,onClick:N,onKeyDown:H,"aria-expanded":y,"aria-controls":q,className:"rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-xl sm:text-2xl font-bold ${s.heading}`,children:t.title}),e.jsxs("span",{className:"flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-sky-200",children:[y?"Collapse":"Expand",e.jsx("svg",{className:`h-4 w-4 transition-transform ${y?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),j&&e.jsx("div",{className:"mt-3 text-left",children:e.jsx(b,{text:j.body,className:"prose prose-xs sm:prose-sm prose-invert max-w-none text-slate-200"})})]}),e.jsxs("div",{id:q,className:`mt-4 space-y-4 ${y?"":"hidden"}`,children:[A(E,s),k.length>0&&e.jsx("div",{className:"space-y-6 pt-2",children:k.map(l=>R(l))})]})]})]})},t.title):e.jsx("section",{className:`rounded-2xl border ${s.border} bg-gradient-to-br ${s.panel} p-6 shadow-lg`,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:`mt-1 h-10 w-1.5 rounded-full ${s.accent}`,"aria-hidden":"true"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-xl sm:text-2xl font-bold ${s.heading}`,children:t.title}),W&&e.jsx("button",{type:"button",onClick:()=>m(l=>!l),className:"text-xs font-semibold text-sky-300 hover:text-sky-200",children:a?"Collapse":"Expand"}),p&&e.jsx("button",{type:"button",onClick:()=>S(l=>!l),className:"text-xs font-semibold text-sky-300 hover:text-sky-200",children:y?"Collapse":"Expand"})]}),e.jsx("div",{className:`mt-4 space-y-4 ${W&&!a||p&&!y?"hidden":""}`,children:A(i,s)})]})]})},t.title)};return e.jsxs("div",{className:v?"space-y-6":"max-w-5xl mx-auto space-y-8",children:[!v&&e.jsxs("header",{className:"text-center mb-6",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-100",children:"Operating Guide"}),e.jsx("p",{className:"mt-3 text-lg text-slate-400 max-w-3xl mx-auto",children:"Best practices for running core AI features at a healthy cadence."})]}),x.intro&&e.jsx("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/70 p-4",children:e.jsx(b,{text:x.intro,className:"prose prose-xs sm:prose-sm prose-invert max-w-none text-slate-200"})}),e.jsxs("section",{className:"space-y-3",children:[e.jsxs("button",{type:"button",onClick:()=>M(t=>!t),className:"w-full flex flex-wrap items-center justify-between gap-3 text-left","aria-expanded":g,children:[e.jsx("h2",{className:v?"text-lg font-semibold text-slate-100":"text-xl font-semibold text-slate-100",children:"Run History"}),e.jsxs("span",{className:"flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-sky-200",children:[g?"Collapse":"Expand",e.jsx("svg",{className:`h-4 w-4 transition-transform ${g?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),g&&e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[e.jsx(f,{label:"Habit Insights",history:c,variant:"card"}),e.jsx(f,{label:"Oracle's Synthesis Hub",history:d,variant:"card"}),e.jsx(f,{label:"Architect's Briefing",history:r,variant:"card"}),e.jsx(f,{label:"Oracle Whisper",history:n,variant:"card"}),e.jsx(f,{label:"Relational AI",history:u,variant:"card"})]})]}),e.jsx("div",{className:"space-y-6",children:x.sections.map(t=>C.has(t.title)?null:R(t))})]})};export{V as default};
