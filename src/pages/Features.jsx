// Scorely India — Features page (/features).

import * as React from "react"
import { Check, Cta, DEFAULT_APP_URL, DarkBand, FeaturesStage, FinalCTA, Ghost, IMG_WORKING, Intro, Marquee, MiniBuilder, MiniLeaderboard, MiniMentor, MiniPlan, PageHero, PageShell, ROUTES, SHead } from "../shared.jsx"

function ChapterBars() {
    const rows = [
        ["Rotational Motion", 41],
        ["Electrochemistry", 48],
        ["Definite Integrals", 52],
        ["Kinematics", 86],
    ];
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
            {rows.map(([n, v]) => (<div key={n} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#344054" }}>
                        <span>{n}</span>
                        <span style={{ fontWeight: 600, color: v < 60 ? "#1D5AA6" : "#10367D", fontVariantNumeric: "tabular-nums" }}>{v + "%"}</span>
                    </div>
                    <div style={{ height: "8px", borderRadius: "8px", background: "rgba(16,54,125,.08)", overflow: "hidden" }}>
                        <div style={{ width: v + "%", height: "100%", borderRadius: "8px", background: v < 60 ? "var(--grad)" : "#10367D" }}></div>
                    </div>
                </div>))}
            <span style={{ fontSize: "12px", color: "#667085" }}>{"Sample · chapter-wise accuracy"}</span>
        </div>);
}
function GroupChips() {
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", font: "500 14px/1 Inter, sans-serif" }}>
                <span style={{ padding: "11px 16px", borderRadius: "999px", background: "#10367D", color: "#FFFFFF" }}>{"PCM"}</span>
                <span style={{ padding: "11px 16px", borderRadius: "999px", border: "1px solid #E1E1E1", color: "#667085" }}>{"PCB"}</span>
                <span style={{ padding: "11px 16px", borderRadius: "999px", border: "1px solid #E1E1E1", color: "#667085" }}>{"PCMB"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <span className="gtext" style={{ font: "800 44px/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em" }}>
                    {"10"}
                </span>
                <span style={{ font: "500 14px/1 Inter, sans-serif", color: "#667085" }}>{"focused minutes a day"}</span>
            </div>
        </div>);
}
function ChallengeBoard() {
    const rows = [
        ["1", "Prisha", "54/60", false],
        ["2", "You", "51/60", true],
        ["3", "Aarav", "47/60", false],
        ["4", "Khushi", "39/60", false],
    ];
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px" }}>
            <span style={{ fontSize: "12px", color: "#667085", paddingLeft: "14px", marginBottom: "2px" }}>{"Sample · Physics speed round · You beat 2 of your 3 friends"}</span>
            {rows.map(([n, who, s, me]) => (<div key={n} style={me
                ? { display: "flex", justifyContent: "space-between", padding: "12px 14px", borderRadius: "14px", background: "var(--grad)", color: "#FFFFFF", fontWeight: 600, boxShadow: "0 14px 30px rgba(29,90,166,.3)" }
                : { display: "flex", justifyContent: "space-between", padding: "10px 14px", borderRadius: "12px", color: "#667085" }}>
                    <span>{n + " · " + who}</span>
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>{s}</span>
                </div>))}
        </div>);
}
function PapersCard() {
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Past exam paper · JEE Main pattern", "Past exam paper · NEET pattern"].map((t, i) => (<div key={t} className="glass" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "14px 16px", borderRadius: "16px", fontSize: "14px", color: "#10367D", transform: i ? "translateX(18px)" : undefined }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5AA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M14 3v6h6 M8 13h8 M8 17h5"></path>
                        </svg>
                        {t}
                    </span>
                    <span style={{ fontSize: "12px", color: "#667085" }}>{"With solutions"}</span>
                </div>))}
        </div>);
}
function CalendarCard() {
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
            {[
            ["Sun 15 Nov", "JEE paper · 09:00", false],
            ["Sun 15 Nov", "NEET paper · 14:00", false],
            ["Sun 15 Nov", "Results out · 20:00", true],
        ].map(([d, t, live], i) => (<div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 14px", borderRadius: "14px", background: live ? "#EBEBEB" : "transparent" }}>
                    <span style={{ font: "700 13px/1 'Plus Jakarta Sans', sans-serif", color: "#1D5AA6", minWidth: "78px" }}>{d}</span>
                    <span style={{ color: "#10367D", flex: 1 }}>{t}</span>
                    {live && <span className="live" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4A90C7" }}></span>}
                </div>))}
        </div>);
}
function BadgeCard() {
    return (<div className="ui" style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <svg aria-hidden="true" width="96" height="110" viewBox="-60 -100 120 160" className="m-medal" style={{ flex: "none", overflow: "visible" }}>
                <path d="M-18 -60 l-14 -38 h22 l10 25 z M18 -60 l14 -38 h-22 l-10 25 z" fill="#10367D"></path>
                <circle r="54" fill="#74B4D9"></circle>
                <circle r="45" fill="#1D5AA6"></circle>
                <text y="-9" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#EBEBEB" letterSpacing="1.6">
                    {"MERIT"}
                </text>
                <text y="17" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="25" fill="#FFFFFF">
                    {"★"}
                </text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ font: "700 17px/1.3 'Plus Jakarta Sans', sans-serif", color: "#10367D" }}>{"Certificate of merit"}</span>
                <span style={{ fontSize: "13px", color: "#667085" }}>{"Sample · kept in your profile with your rank history"}</span>
            </div>
        </div>);
}
export default function ScorelyFeatures(props = {}) {
    const heroRef = React.useRef(null);
    const appUrl = props.appUrl || DEFAULT_APP_URL;
    const features = [
        {
            title: "RankRush All-India mocks",
            tags: [
                ["Free · pay per mock", "free"],
                ["Included in Pro", "pro"],
            ],
            desc: "Full-length papers in the JEE, NEET and CET pattern with exam-day rules and a strict timer, so the real exam feels familiar.",
            bullets: ["Every weekend, year-round", "Results, rank and full analysis the same night"],
            ui: <MiniLeaderboard />,
        },
        {
            title: "Your rank and the reasons behind it",
            tags: [["Free", "free"]],
            desc: "Score, percentile, All-India and state rank, plus chapter-wise accuracy, you vs the top 1%, and exactly where marks were lost.",
            bullets: ["Subject and chapter breakdown", "Time spent per question", "Shareable rank card"],
            ui: <ChapterBars />,
        },
        {
            title: "Weak-topic plan",
            tags: [["Pro", "pro"]],
            desc: "Your mistakes turn into a short list of chapters to revise this week, ranked by how many marks they cost, with a ready revision set for each.",
            bullets: ["Updated after every mock and practice test", "Shows when a chapter moves from weak to strong"],
            ui: <MiniPlan />,
        },
        {
            title: "Build your own practice tests",
            tags: [["Pro", "pro"]],
            desc: "Pick the exam, the whole syllabus or just a few chapters, and 15, 30 or 60 questions. Every test comes with a full report and step-by-step solutions.",
            bullets: ["Mix subjects and chapters freely", "Test history with every past report"],
            ui: <MiniBuilder />,
        },
        {
            title: "Daily Dose",
            tags: [["Pro", "pro"]],
            desc: "A short set of questions every day for your exams and group (PCM, PCB or PCMB). Ten focused minutes keeps every subject warm, even in a week packed with board work.",
            bullets: ["Fresh questions each day", "Save favourites to come back to"],
            ui: <GroupChips />,
        },
        {
            title: "Challenge a friend",
            tags: [
                ["Free to play", "free"],
                ["Pro to create", "pro"],
            ],
            desc: "Create a paper and send it to your study group, even friends who are not on Scorely India yet: they sign up free, play, and land on the same leaderboard.",
            bullets: ["Invite by link or mobile number", "Leaderboard after every challenge", "Share results with your group"],
            ui: <ChallengeBoard />,
        },
        {
            title: "AI Mentor for doubts",
            tags: [["Pro", "pro"]],
            desc: "Stuck on a question? Type it or snap a photo, get a step-by-step explanation, and save the answer to your revision notebook for later.",
            bullets: ["Works from your phone camera", "Revision notebook of saved answers"],
            ui: <MiniMentor />,
        },
        {
            title: "Previous papers",
            tags: [["Pro", "pro"]],
            desc: "Practise past exam papers in the same test window you use for RankRush, with solutions, so you know the style of the real thing.",
            bullets: [],
            ui: <PapersCard />,
        },
        {
            title: "RankRush calendar and alerts",
            tags: [["Free", "free"]],
            desc: "See every upcoming paper for your exams and get notified in the app when one is scheduled, rescheduled or its results are out.",
            bullets: [],
            ui: <CalendarCard />,
        },
        {
            title: "Certificates and badges",
            tags: [["Partner colleges", "col"]],
            desc: "Top performers at partner colleges get certificates and badges after each RankRush, kept in your profile alongside your rank history.",
            bullets: [],
            ui: <BadgeCard />,
        },
    ];
    return (<PageShell appUrl={appUrl} active="features">
            <PageHero heroRef={heroRef} label="Features: the test, rank, fix and repeat loop" kicker="Features" line1="Test. Rank." line2="Fix. Repeat." lede="Ten tools for the week between two Sundays, on your phone. Free covers RankRush and challenges; Pro adds the daily practice tools." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "Compare plans", href: ROUTES.plans }} chips={["10 tools", "Free + Pro", "Works on your phone"]}>
                <FeaturesStage heroRef={heroRef}/>
            </PageHero>
            <main>
                <Intro as="h2" kicker="What you get" segs={[{ t: "One platform for the whole loop:" }, { t: "test, rank, fix, repeat.", g: true, em: true }]} lede="Everything you need between two Sundays, on your phone. Free covers RankRush and challenges; Pro adds the daily practice tools.">
                    <Cta href={appUrl}>{"Sign up free"}</Cta>
                    <Ghost href={ROUTES.plans}>{"Compare plans"}</Ghost>
                </Intro>

                <Marquee big={[
            ["Test", false],
            ["Rank", true],
            ["Fix", false],
            ["Repeat", true],
        ]} small={["RankRush mocks", "Weak-topic plan", "Practice builder", "Daily Dose", "Challenge a friend", "AI Mentor", "Previous papers"]}/>

                <section id="all-features" aria-labelledby="feat-h" style={{ padding: "128px 0 112px" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="feat-h" kicker="Every feature" title={<>
                                    {"Everything between "}
                                    <em className="gtext">{"two Sundays."}</em>
                                </>} lede="Ten tools that turn one weekly rank into a plan for the next seven days."/>
                        <div style={{ position: "relative", display: "flex", flexDirection: "column", borderTop: "1px solid #E1E1E1", maxWidth: "1040px", width: "100%", margin: "0 auto" }}>
                            <img src={IMG_WORKING} alt="" className="m-peek" loading="lazy" decoding="async" style={{ position: "absolute", right: "-40px", top: "-132px", width: "150px", height: "auto" }}/>
                            {features.map((f, i) => (<article key={f.title} className="frow" data-reveal="">
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                                            <span style={{ font: "600 13px/1 Inter, sans-serif", color: "#1D5AA6", marginRight: "4px" }}>{(i < 9 ? "0" : "") + (i + 1)}</span>
                                            {f.tags.map(([t, k]) => (<span key={t} className={"pill pill-" + k}>
                                                    {t}
                                                </span>))}
                                        </div>
                                        <h3 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-.02em", color: "#10367D" }}>{f.title}</h3>
                                        <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#667085" }}>{f.desc}</p>
                                        {f.bullets.length > 0 && (<ul className="checks" style={{ marginTop: "4px", gap: "8px" }}>
                                                {f.bullets.map((b) => (<li key={b} style={{ fontSize: "15px", color: "#344054" }}>
                                                        <Check size={16}/>
                                                        {b}
                                                    </li>))}
                                            </ul>)}
                                    </div>
                                    {f.ui}
                                </article>))}
                        </div>
                    </div>
                </section>

                {/* Devices */}
                <DarkBand labelledBy="dev-h">
                    <div className="wrap g-col">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <span className="kicker" style={{ color: "#74B4D9" }}>
                                {"Devices"}
                            </span>
                            <h2 id="dev-h" className="h2" style={{ color: "#FFFFFF" }}>
                                {"Laptop for RankRush, "}
                                <em style={{ color: "#74B4D9" }}>{"phone for the rest."}</em>
                            </h2>
                            <p style={{ fontSize: "18px", lineHeight: 1.65, color: "#EBEBEB", maxWidth: "480px" }}>
                                {"The All-India mock is a full-length paper built to feel like the real exam, so take it on a laptop or desktop. Practice tests, results, Daily Dose, challenges and AI Mentor all work on your phone."}
                            </p>
                        </div>
                        <div data-reveal="" style={{ position: "relative", display: "flex", justifyContent: "center", padding: "20px 8% 50px 0" }}>
                            <div className="laptop float-a">
                                <div className="scr">
                                    <div style={{ height: "100%", borderRadius: "10px", background: "linear-gradient(160deg,#174A92,#1D5AA6)", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", font: "600 11px/1 Inter, sans-serif", color: "#C3D3E4" }}>
                                            <span>{"RankRush · JEE Main pattern"}</span>
                                            <span className="live">{"● Live"}</span>
                                        </div>
                                        <div style={{ height: "10px", width: "70%", borderRadius: "6px", background: "rgba(255,255,255,.55)" }}></div>
                                        <div style={{ height: "10px", width: "88%", borderRadius: "6px", background: "rgba(255,255,255,.3)" }}></div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "auto" }}>
                                            {[0, 1, 2, 3].map((n) => (<div key={n} style={{ height: "26px", borderRadius: "8px", background: n === 1 ? "#FFFFFF" : "rgba(255,255,255,.16)" }}></div>))}
                                        </div>
                                    </div>
                                </div>
                                <div className="base"></div>
                            </div>
                            <div className="phone float-b">
                                <div className="scr">
                                    <span style={{ font: "700 11px/1.2 'Plus Jakarta Sans', sans-serif", color: "#10367D" }}>{"Daily Dose"}</span>
                                    {[0, 1, 2].map((n) => (<div key={n} style={{ height: "30px", borderRadius: "10px", background: n === 0 ? "var(--grad)" : "#FFFFFF" }}></div>))}
                                    <div style={{ marginTop: "auto", height: "26px", borderRadius: "999px", background: "#10367D" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DarkBand>

                <FinalCTA kicker="Plans" title={<>
                            {"Start free. "}
                            <em className="gtext" style={{ fontStyle: "italic" }}>
                                {"Go Pro"}
                            </em>
                            {" when you want the full week."}
                        </>} body="Signing up is free. Pro is ₹749 + GST a year for every student feature, or less with your partner college's code." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "Compare plans", href: ROUTES.plans }}/>
            </main>
        </PageShell>);
}
