// Scorely India — RankRush page (/rankrush).

import * as React from "react"
import { Check, Cta, DEFAULT_APP_URL, DarkBand, FinalCTA, Ghost, IMG_THUMBS, Intro, Marquee, PageHero, PageShell, ROUTES, RankRushStage, ResultCard, SHead, TextLink, ThinkingMascot, clamp } from "../shared.jsx"

export default function ScorelyRankRush(props = {}) {
    const heroRef = React.useRef(null);
    const appUrl = props.appUrl || DEFAULT_APP_URL;
    return (<PageShell appUrl={appUrl} active="rankrush">
            <PageHero heroRef={heroRef} label="RankRush: a countdown to the next paper, the mascot sitting it and celebrating his rank" kicker="RankRush · the weekend All-India mock" line1="One honest" line2="number." lede="A full JEE, NEET or CET paper that students across India sit at the same time, on the same rules. Your All-India rank arrives the same evening." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "See the schedule", href: "#schedule" }} chips={["Sun 15 Nov 2026", "JEE · NEET · CET", "Results at 20:00"]}>
                <RankRushStage heroRef={heroRef}/>
            </PageHero>
            <main>
                <Intro as="h2" kicker="RankRush · the weekend All-India mock" segs={[{ t: "Your week, built around" }, { t: "one honest number.", g: true, em: true }]} lede="RankRush is a full-length JEE, NEET or CET paper that thousands of students across India sit at the same time, on the same paper, under the same rules. The same evening you get your All-India rank and a detailed answer-by-answer analysis.">
                    <Cta href={appUrl}>{"Sign up free"}</Cta>
                    <Ghost href="#schedule">{"See the schedule"}</Ghost>
                </Intro>

                <Marquee />

                {/* Why a bigger pool matters */}
                <section aria-labelledby="pool-h" style={{ position: "relative", padding: "128px 0 120px", background: "linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%)", overflow: "hidden" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="pool-h" kicker="Pool size" title={<>
                                    {"Why a bigger pool "}
                                    <em className="gtext">{"matters."}</em>
                                </>} lede="Coming first in your batch and ranking well across India are two very different things."/>
                        <div className="g-2" style={{ gap: "22px", maxWidth: "1040px", width: "100%", margin: "0 auto", alignItems: "stretch" }}>
                            <article data-reveal="" className="glass lift" style={{ borderRadius: "32px", padding: "34px", display: "flex", flexDirection: "column", gap: "18px" }}>
                                <span style={{ font: "600 13px/1 Inter, sans-serif", color: "#667085", letterSpacing: ".04em", textTransform: "uppercase" }}>{"Class or college test"}</span>
                                <p style={{ font: "800 clamp(44px, 5vw, 64px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.045em", color: "#10367D" }}>{"300 – 500"}</p>
                                <div aria-hidden="true" style={{ height: "10px", borderRadius: "10px", background: "rgba(16,54,125,.08)", overflow: "hidden" }}>
                                    <div style={{ width: "6%", height: "100%", borderRadius: "10px", background: "#98A2B3" }}></div>
                                </div>
                                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#667085" }}>
                                    {"You are ranked against your own batch. Coming first here tells you little about the exam you will actually sit."}
                                </p>
                            </article>
                            <div style={{ position: "relative", display: "flex" }}>
                                <article data-reveal="" className="lift" style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            borderRadius: "32px",
            padding: "34px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            color: "#FFFFFF",
            background: "var(--grad)",
            boxShadow: "0 36px 70px rgba(29,90,166,.38)",
            overflow: "hidden",
        }}>
                                    <div aria-hidden="true" style={{ position: "absolute", right: "-60px", top: "-60px", width: "220px", height: "220px", borderRadius: "40px", background: "rgba(255,255,255,.1)", transform: "rotate(24deg)" }}></div>
                                    <span style={{ position: "relative", font: "600 13px/1 Inter, sans-serif", color: "#EBEBEB", letterSpacing: ".04em", textTransform: "uppercase" }}>{"A RankRush paper"}</span>
                                    <p style={{ position: "relative", font: "800 clamp(44px, 5vw, 64px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.045em" }}>{"2,000 – 5 lakh"}</p>
                                    <div aria-hidden="true" style={{ position: "relative", height: "10px", borderRadius: "10px", background: "rgba(255,255,255,.2)", overflow: "hidden" }}>
                                        <div style={{ width: "100%", height: "100%", borderRadius: "10px", background: "#FFFFFF" }}></div>
                                    </div>
                                    <p style={{ position: "relative", fontSize: "17px", lineHeight: 1.6, color: "#EBEBEB" }}>
                                        {"Depending on the exam, you are ranked among students from every state, the people you will compete with in January and May."}
                                    </p>
                                </article>
                            </div>
                        </div>
                        <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#667085", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                            {"Pool ranges are what each paper can reach as more students join. Every result shows the exact number who took that paper."}
                        </p>
                    </div>
                </section>

                {/* How RankRush works */}
                <section id="how" aria-labelledby="how-h" style={{ padding: "128px 0 112px" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="how-h" kicker="How RankRush works" title={<>
                                    {"One weekend, one paper, "}
                                    <em className="gtext">{"one honest rank."}</em>
                                </>} lede="Most free All-India mocks run once a year or only in exam season. RankRush runs every weekend, year-round, so you can watch your rank move."/>
                        <ol className="acc" data-reveal="" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {[
            [
                "Step 1 · Weekday",
                "Apply for the paper",
                "Pick your exam (JEE, NEET or CET) for the coming Sunday in two taps. Apply to each paper separately; you are notified when a paper is scheduled or moved.",
                "01",
                "",
            ],
            ["Step 2 · Sunday", "Sit the full mock", "Same time, same paper, same rules for every student in India. The paper unlocks at start time and the timer is strict, just like exam day.", "02", ""],
            ["Step 3 · Result night", "See your rank", "Score, percentile, All-India rank, state rank and a detailed analysis of every answer, declared the same evening.", "03", "night"],
            ["Step 4 · Next week", "Fix and climb", "Work through your weak-topic plan, practise those chapters, then try to beat your own rank next Sunday.", "04", ""],
        ].map(([tag, vt, body, num, cls], i) => (<li key={num} className={"pan" + (i === 0 ? " open" : "") + (cls ? " " + cls : "")}>
                                    <span className="tag">{tag}</span>
                                    <h3 className="vt">{vt}</h3>
                                    <p className="body" style={{ fontSize: "17px", lineHeight: 1.6, color: cls ? "#EBEBEB" : "#475467" }}>
                                        {body}
                                    </p>
                                    <span className="num" aria-hidden="true">
                                        {num}
                                    </span>
                                </li>))}
                        </ol>
                    </div>
                </section>

                {/* What you get on result night */}
                <section id="result-night" aria-labelledby="rn-h" style={{ position: "relative", padding: "120px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%)", overflow: "hidden" }}>
                    <div className="wrap g-res">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <span className="kicker">{"Results night"}</span>
                            <h2 id="rn-h" className="h2">
                                {"What you get "}
                                <em className="gtext">{"on result night."}</em>
                            </h2>
                            <ul className="checks" style={{ marginTop: "6px" }}>
                                {[
            "Score and percentile for the whole paper and for each subject",
            "All-India rank and state rank, with the exact pool size",
            "Chapter-wise accuracy, so you see which chapters cost marks",
            "You vs the top 1%: where toppers scored and you did not",
            "Time spent per question and where you rushed or got stuck",
            "Step-by-step solutions to every question in the paper",
            "A shareable rank card for your friends and study group",
            "An analysis PDF to keep and review before the next mock",
        ].map((t) => (<li key={t} style={{ color: "#344054" }}>
                                        <Check />
                                        {t}
                                    </li>))}
                            </ul>
                        </div>
                        <ResultCard />
                    </div>
                </section>

                {/* Why students take it every week */}
                <DarkBand labelledBy="why-h">
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead light id="why-h" kicker="Every week, year-round" title={<>
                                    {"Why students take it "}
                                    <em style={{ color: "#74B4D9" }}>{"every week."}</em>
                                </>}/>
                        <div className="g-3" data-reveal="">
                            {[
            ["Exam-day nerves, handled.", "Week after week of the real pattern and a real timer means January and May feel like one more RankRush."],
            ["Progress you can see.", "Your rank and percentile are tracked mock by mock, so you know whether the extra hours are working."],
            ["Revision that targets marks.", "Instead of re-reading the whole syllabus, you fix the three chapters that lost the most marks this week."],
            ["Better time management.", "Per-question timing shows where you over-invest, so you learn which questions to leave and come back to."],
            ["A rhythm for the week.", "Practise from Monday to Saturday, rank on Sunday. A fixed routine beats random test-taking."],
            ["Friendly competition.", "Compare with your batch, challenge friends and share your rank card. A bigger pool also makes everyone's rank truer."],
        ].map(([t, d], i) => (<div key={t} className="glass-dark lift" style={{ borderRadius: "26px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <span style={{ font: "800 15px/1 'Plus Jakarta Sans', sans-serif", color: "#74B4D9" }}>{"0" + (i + 1)}</span>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>{t}</h3>
                                    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#DDE7F0" }}>{d}</p>
                                </div>))}
                        </div>
                    </div>
                </DarkBand>

                {/* Fair by design */}
                <section id="fair" aria-labelledby="fair-h" style={{ padding: "128px 0 112px" }}>
                    <div className="wrap g-faq">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
                            <span className="kicker">{"Fair by design"}</span>
                            <h2 id="fair-h" className="h2">
                                {"A rank you "}
                                <em className="gtext">{"can trust."}</em>
                            </h2>
                            <ThinkingMascot />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #E1E1E1" }}>
                            {[
            ["Double-checked questions.", "Every question is reviewed by two different subject teachers before it reaches a paper."],
            ["Locked papers, exam-day rules.", "Papers stay locked until start time and everyone follows the same timer."],
            ["Pool size shown.", "Your result tells you how many students took the paper, so you know what your rank means."],
            ["Independent.", "Scorely India is a practice platform. It is not affiliated with NTA or any exam body."],
        ].map(([t, d], i) => (<article key={t} className="frow" data-reveal="" style={{ padding: "34px 0" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <span style={{ font: "600 13px/1 Inter, sans-serif", color: "#1D5AA6" }}>{"0" + (i + 1)}</span>
                                        <h3 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-.02em", color: "#10367D" }}>{t}</h3>
                                    </div>
                                    <p className="ui" style={{ fontSize: "17px", lineHeight: 1.6, color: "#667085" }}>
                                        {d}
                                    </p>
                                </article>))}
                        </div>
                    </div>
                </section>

                {/* Schedule */}
                <section id="schedule" aria-labelledby="sch-h" style={{ position: "relative", padding: "40px 0 112px" }}>
                    <div aria-hidden="true" style={{ position: "absolute", left: "15%", right: "15%", top: "40%", height: "240px", background: "linear-gradient(90deg, #74B4D9, #4A90C7, #74B4D9)", filter: "blur(90px)", opacity: 0.25 }}></div>
                    <div className="wrap" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "48px" }}>
                        <SHead id="sch-h" kicker="RankRush #1 schedule" title={<>
                                    {"Sunday "}
                                    <em className="gtext">{"15 November 2026."}</em>
                                </>}/>
                        <div data-reveal="" style={{ position: "relative", maxWidth: "760px", width: "100%", margin: "0 auto" }}>
                            <img src={IMG_THUMBS} alt="" className="m-thumbs hide-sm" loading="lazy" decoding="async" style={{ position: "absolute", right: "-96px", bottom: "-70px", width: "min(160px, 26%)", height: "auto", zIndex: 2 }}/>
                            <div className="glass tbl-wrap" style={{ position: "relative", zIndex: 1 }}>
                                <table className="tbl">
                                    <caption style={{ textAlign: "left", padding: "22px 22px 6px", font: "600 13px/1 Inter, sans-serif", color: "#475467" }}>
                                        <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                                            <span className="live" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4A90C7" }}></span>
                                            {"Sun 15 Nov 2026 · RankRush #1"}
                                        </span>
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"Paper"}</th>
                                            <th scope="col" style={{ textAlign: "right" }}>
                                                {"Time"}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
            ["JEE paper", "09:00 – 12:00"],
            ["NEET paper", "14:00 – 17:20"],
            ["Results declared", "20:00"],
        ].map(([a, b], i) => (<tr key={a} className={i === 2 ? "hl" : undefined}>
                                                <th scope="row" style={{ font: "600 17px/1.3 'Plus Jakarta Sans', sans-serif", color: "#10367D" }}>
                                                    {a}
                                                </th>
                                                <td style={{ textAlign: "right", font: "700 17px/1.3 'Plus Jakarta Sans', sans-serif", color: i === 2 ? "#1D5AA6" : "#10367D", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                                                    {b}
                                                </td>
                                            </tr>))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#667085", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                            {"Timings shown are the launch-day plan and may change; registered students are notified of any change. RankRush ranks are among Scorely India test-takers only and are not official exam ranks."}
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                            <TextLink href={ROUTES.features}>{"What else you get between Sundays"}</TextLink>
                            <TextLink href={ROUTES.faq}>{"RankRush questions"}</TextLink>
                        </div>
                    </div>
                </section>

                <FinalCTA title={<>
                            {"Stop guessing. "}
                            <em className="gtext" style={{ fontStyle: "italic" }}>
                                {"Start ranking."}
                            </em>
                        </>} body="Be among the first students in India to take RankRush #1. Sign-up takes two minutes: pick your exam, apply for Sunday's paper and start practising today." primary={{ label: "Apply for RankRush #1", href: appUrl }} secondary={{ label: "Log in", href: appUrl }}/>
            </main>
        </PageShell>);
}
