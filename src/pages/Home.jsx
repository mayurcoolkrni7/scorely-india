// Scorely India — Home page (/).

import * as React from "react"
import { Cta, DEFAULT_APP_URL, FaqItem, FinalCTA, Ghost, IMG_WORKING, Intro, Marquee, MiniBuilder, MiniLeaderboard, MiniMentor, MiniPlan, PARTNER_FORM, PageShell, PlanCards, ROUTES, ResultCard, RevealHero, SHead, TextLink, ThinkingMascot, clamp } from "../shared.jsx"

const label13 = { font: "600 13px/1 Inter, sans-serif", color: "#1D5AA6" };
const h3s = { fontSize: "24px", fontWeight: 700, letterSpacing: "-.02em", color: "#10367D" };
const p17 = { fontSize: "17px", lineHeight: 1.6, color: "#667085" };
export default function ScorelyHome(props = {}) {
    const appUrl = props.appUrl || DEFAULT_APP_URL;
    return (<PageShell appUrl={appUrl} active="home">
            <RevealHero />
            <main>
                <Intro kicker="For Class 11, 12 and droppers" segs={[
            { t: "Know your" },
            { t: "All-India rank", g: true },
            { t: "every" },
            { t: "Sunday,", em: true },
            { t: "not just in May." },
            { t: "Practise all week, rank on Sunday, fix your weak chapters on Monday.", m: true },
        ]} lede="RankRush is a full JEE, NEET or CET mock every weekend, with your score, percentile and AIR the same evening.">
                    <Cta href={appUrl}>{"Sign up free"}</Cta>
                    <Ghost href={appUrl}>{"I have an account"}</Ghost>
                </Intro>

                <Marquee />

                {/* RankRush */}
                <section id="rankrush" aria-labelledby="rr-h" style={{ padding: "128px 0 112px" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="rr-h" kicker="RankRush Sunday" title={<>
                                    {"One weekend, one paper, "}
                                    <em className="gtext">{"one honest rank."}</em>
                                </>} lede="Most free All-India mocks run once a year or only in exam season. RankRush runs every weekend, year-round, so you can watch your rank move."/>
                        <ol className="acc" data-reveal="" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {[
            ["Mon – Sat", "Apply", "Pick your exam paper in the app. You get a reminder when the paper is scheduled.", "01", ""],
            ["Sun · 09:00 – 12:00", "JEE paper", "Full pattern, timed, with exam-day rules.", "02", ""],
            ["Sun · 14:00 – 17:20", "NEET paper", "Full 180-question paper on the NEET pattern.", "03", ""],
            ["Sun · 20:00", "Results night", "Score, percentile, AIR, state rank, answer explanations and a detailed analysis.", "04", "night"],
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
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
                            <TextLink href={ROUTES.rankrush}>{"See how RankRush works"}</TextLink>
                            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#667085", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                                {"First RankRush: Sunday 15 November 2026. Timings shown are the launch-day plan. Scorely India is an independent platform and is not affiliated with NTA; RankRush ranks are among Scorely India test-takers only."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Results night */}
                <section aria-labelledby="res-h" style={{ position: "relative", padding: "120px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%)", overflow: "hidden" }}>
                    <div className="wrap g-res">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "22px", alignItems: "flex-start" }}>
                            <span className="kicker">{"Results night"}</span>
                            <h2 id="res-h" className="h2">
                                {"Your rank, "}
                                <em className="gtext">{"the same evening."}</em>
                            </h2>
                            <p className="lede" style={{ maxWidth: "460px" }}>
                                {"Every RankRush ends with a full result: where you stand across India and in your state, the answer explanations, and which subject earned or cost you marks. The pool size is shown with every rank."}
                            </p>
                            <TextLink href={ROUTES.rankrush + "#result-night"}>{"What you get on result night"}</TextLink>
                        </div>
                        <ResultCard />
                    </div>
                </section>

                {/* Features */}
                <section id="features" aria-labelledby="feat-h" style={{ padding: "128px 0 112px" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="feat-h" kicker="What you get" title={<>
                                    {"Everything between "}
                                    <em className="gtext">{"two Sundays."}</em>
                                </>} lede="Four tools that turn one weekly rank into a plan for the next seven days.">
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginTop: "4px" }}>
                                <Cta href={ROUTES.plans}>{"See plans"}</Cta>
                                <Ghost href={ROUTES.features}>{"Explore all features"}</Ghost>
                            </div>
                        </SHead>
                        <div style={{ position: "relative", display: "flex", flexDirection: "column", borderTop: "1px solid #E1E1E1", maxWidth: "1040px", width: "100%", margin: "0 auto" }}>
                            <img src={IMG_WORKING} alt="" className="m-peek" loading="lazy" decoding="async" style={{ position: "absolute", right: "-40px", top: "-132px", width: "150px", height: "auto" }}/>
                            <article className="frow" data-reveal="">
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    <span style={label13}>{"01 · Weekly"}</span>
                                    <h3 style={h3s}>{"RankRush mocks"}</h3>
                                    <p style={p17}>{"All-India mocks with AIR, percentile, state rank and where you lost marks."}</p>
                                </div>
                                <MiniLeaderboard />
                            </article>
                            <article className="frow" data-reveal="">
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    <span style={label13}>{"02 · Daily"}</span>
                                    <h3 style={h3s}>{"Practice builder"}</h3>
                                    <p style={p17}>{"Choose the whole syllabus or exact chapters, then 15, 30 or 60 questions. Full report after each test."}</p>
                                </div>
                                <MiniBuilder />
                            </article>
                            <article className="frow" data-reveal="">
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    <span style={label13}>{"03 · Weak topics"}</span>
                                    <h3 style={h3s}>{"Improvement plan"}</h3>
                                    <p style={p17}>{"Your weakest chapters turned into a plan for the week, plus Daily Dose questions."}</p>
                                </div>
                                <MiniPlan />
                            </article>
                            <article className="frow" data-reveal="">
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", font: "600 13px/1 Inter, sans-serif", color: "#1D5AA6" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#74B4D9" }}></span>
                                        {"04 · Anytime · AI"}
                                    </span>
                                    <h3 style={h3s}>{"AI Mentor"}</h3>
                                    <p style={p17}>{"Type a doubt or upload a photo of the question. Save answers to your revision notebook."}</p>
                                </div>
                                <MiniMentor />
                            </article>
                        </div>
                    </div>
                </section>

                {/* Colleges */}
                <section id="colleges" aria-labelledby="col-h" style={{ position: "relative", padding: "160px 0", background: "#10367D", color: "#FFFFFF", overflow: "hidden" }}>
                    <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ position: "absolute", left: 0, top: "-1px", width: "100%", height: "clamp(34px, 5.5vw, 84px)", display: "block", zIndex: 2 }}>
                        <path d="M0 0 L1440 0 L1440 26 Q720 124 0 26 Z" fill="#FFFFFF"></path>
                    </svg>
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg, #10367D 0%, #174A92 45%, #1D5AA6 70%, #4A90C7 100%)" }}></div>
                    <div aria-hidden="true" style={{
            position: "absolute",
            left: "-10%",
            right: "-10%",
            top: "30%",
            height: "220px",
            background: "linear-gradient(90deg, transparent, #74B4D9 30%, #4A90C7 60%, transparent)",
            filter: "blur(60px)",
            opacity: 0.55,
            transform: "rotate(-12deg)",
        }}></div>
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.14) 1.2px, transparent 1.3px)", backgroundSize: "22px 22px" }}></div>
                    <div className="wrap g-col" style={{ position: "relative" }}>
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <span className="kicker" style={{ color: "#74B4D9" }}>
                                {"For colleges and coaching classes"}
                            </span>
                            <h2 id="col-h" className="h2" style={{ color: "#FFFFFF" }}>
                                {"Become a free "}
                                <em style={{ color: "#74B4D9" }}>{"partner college."}</em>
                            </h2>
                            <p style={{ fontSize: "18px", lineHeight: 1.65, color: "#EBEBEB", maxWidth: "480px" }}>
                                {"Give your students weekly All-India ranking and give your teachers a clear view of where each division is losing marks."}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                <Cta href={PARTNER_FORM} white>
                                    {"Partner with us"}
                                </Cta>
                                <Ghost href={appUrl} light>
                                    {"College login"}
                                </Ghost>
                            </div>
                            <TextLink href={ROUTES.colleges} light>
                                {"Everything partner colleges get"}
                            </TextLink>
                        </div>
                        <div className="g-tiles" data-reveal="">
                            {[
            ["01", "Free RankRush tests for your students", "Free-plan students verified at your college get free entries."],
            ["02", "A discount code for Pro", "Your own code with a set number of places."],
            ["03", "Class mocks by your teachers", "Full, subject-wise or topic-wise, from our verified bank or your own."],
            ["04", "Reports by division", "Percentile spread, weak topics, toppers, certificates and badges."],
        ].map(([n, t, d], i) => (<div key={n} className="glass-dark" style={{ borderRadius: "26px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px", transform: i % 2 ? "translateY(32px)" : undefined }}>
                                    <span style={{ font: "800 15px/1 'Plus Jakarta Sans', sans-serif", color: "#74B4D9" }}>{n}</span>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>{t}</h3>
                                    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#DDE7F0" }}>{d}</p>
                                </div>))}
                        </div>
                    </div>
                    <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: "-1px", width: "100%", height: "clamp(34px, 5.5vw, 84px)", display: "block", zIndex: 2 }}>
                        <path d="M0 90 L0 64 Q720 -34 1440 64 L1440 90 Z" fill="#FFFFFF"></path>
                    </svg>
                </section>

                {/* Plans */}
                <section id="plans" aria-labelledby="plans-h" style={{ position: "relative", padding: "112px 0 120px" }}>
                    <div aria-hidden="true" style={{ position: "absolute", left: "10%", right: "10%", top: "42%", height: "260px", background: "linear-gradient(90deg, #74B4D9, #4A90C7, #74B4D9)", filter: "blur(90px)", opacity: 0.28 }}></div>
                    <div className="wrap" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="plans-h" kicker="Plans" title={<>
                                    {"Start free. "}
                                    <em className="gtext">{"Go Pro"}</em>
                                    {" when you want the full week."}
                                </>} lede="Pay by UPI inside the app. A tax invoice in your name appears under Profile › Invoices."/>
                        <PlanCards appUrl={appUrl}/>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <TextLink href={ROUTES.plans + "#compare"}>{"Compare plans"}</TextLink>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" aria-labelledby="faq-h" style={{ padding: "112px 0" }}>
                    <div className="wrap g-faq">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
                            <span className="kicker">{"Questions"}</span>
                            <h2 id="faq-h" className="h2">
                                {"Before you "}
                                <em className="gtext">{"sign up"}</em>
                            </h2>
                            <ThinkingMascot />
                        </div>
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #E1E1E1" }}>
                            <FaqItem open q="Is the RankRush rank the same as my real exam rank?" a="No. It is your rank among everyone who took that RankRush on Scorely India. The bigger the pool, the closer it gets to reality, which is why we show the pool size with every rank. Scorely India is not affiliated with NTA."/>
                            <FaqItem q="Which exams are covered?" a="JEE Main, NEET and CET. You can pick more than one exam and apply to each paper separately."/>
                            <FaqItem q="Do I need to pay to sign up?" a="No. Signing up is free. On the Free plan you pay per RankRush you enter; Pro includes every RankRush."/>
                            <FaqItem q="Will my college see my scores?" a="Only if you add a partner college to your profile and the college verifies you. You can change or remove your college at any time."/>
                            <FaqItem q="How do I pay?" a="By UPI inside the app. A tax invoice in your name appears under Profile › Invoices."/>
                            <div style={{ paddingTop: "28px" }}>
                                <TextLink href={ROUTES.faq}>{"See all questions"}</TextLink>
                            </div>
                        </div>
                    </div>
                </section>

                <FinalCTA title={<>
                            {"Practise in the week. "}
                            <em className="gtext" style={{ fontStyle: "italic" }}>
                                {"Relax on Sunday night"}
                            </em>
                            {" with your rank."}
                        </>} body="Sign up takes two minutes. Pick your exam, apply for this Sunday's paper and start a practice test today." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "Log in", href: appUrl }}/>
            </main>
        </PageShell>);
}
