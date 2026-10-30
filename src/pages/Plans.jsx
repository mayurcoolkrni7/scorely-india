// Scorely India — Plans page (/plans).

import * as React from "react"
import { Check, Cross, Cta, DEFAULT_APP_URL, FaqItem, FinalCTA, Ghost, Intro, PARTNER_FORM, PageHero, PageShell, PlanCards, PlansStage, ROUTES, SHead, TextLink, ThinkingMascot, srOnly } from "../shared.jsx"

function Mark({ v, pro }) {
    if (v === true)
        return (<span style={{ display: "inline-flex" }}>
                <Check color={pro ? "#1D5AA6" : "#1D5AA6"}/>
                <span style={srOnly}>{"Included"}</span>
            </span>);
    if (v === false)
        return (<span style={{ display: "inline-flex" }}>
                <Cross />
                <span style={srOnly}>{"Not included"}</span>
            </span>);
    return <span style={{ fontSize: "14px", color: "#475467", lineHeight: 1.4 }}>{v}</span>;
}
export default function ScorelyPlans(props = {}) {
    const heroRef = React.useRef(null);
    const appUrl = props.appUrl || DEFAULT_APP_URL;
    const rows = [
        ["RankRush All-India mocks", "Pay per mock", "Every one included", "Every one included"],
        ["Full RankRush result and detailed feedback", true, true, true],
        ["RankRush calendar and alerts", true, true, true],
        ["Play friends' challenges", true, true, true],
        ["Class mocks from your partner college", true, true, true],
        ["Create challenge papers for friends", false, true, true],
        ["Practice builder with full reports", false, true, true],
        ["Daily Dose", false, true, true],
        ["Weak-topic plan", false, true, true],
        ["AI Mentor for doubts", false, true, true],
        ["Previous papers", false, true, true],
    ];
    return (<PageShell appUrl={appUrl} active="plans">
            <PageHero heroRef={heroRef} label="Plans: switch between Free and Pro" kicker="Plans" line1="Start free." line2="Go Pro." lede="₹0 to sign up. ₹749 + GST a year for every student feature, or less with your partner college's code." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "Compare plans", href: "#compare" }} chips={["Pay by UPI", "Invoice in your name", "College codes"]}>
                <PlansStage heroRef={heroRef}/>
            </PageHero>
            <main>
                <Intro as="h2" kicker="Plans" segs={[{ t: "Start free." }, { t: "Go Pro", g: true, em: true }, { t: "when you want the full week." }]} lede="Pay by UPI inside the app. A tax invoice in your name appears under Profile › Invoices.">
                    <Cta href={appUrl}>{"Sign up free"}</Cta>
                    <Ghost href="#compare">{"Compare plans"}</Ghost>
                </Intro>

                <section id="plans" aria-label="Plans" style={{ position: "relative", padding: "72px 0 120px" }}>
                    <div aria-hidden="true" style={{ position: "absolute", left: "10%", right: "10%", top: "42%", height: "260px", background: "linear-gradient(90deg, #74B4D9, #4A90C7, #74B4D9)", filter: "blur(90px)", opacity: 0.28 }}></div>
                    <div className="wrap" style={{ position: "relative" }}>
                        <PlanCards appUrl={appUrl} free={{
            yes: [
                "Full RankRush result and detailed feedback for each mock you enter",
                "Class mocks from your own partner college",
                "Play friends' challenges",
                "RankRush calendar and alerts",
            ],
            no: ["Practice builder, Daily Dose, weak-topic plan", "AI Mentor and previous papers"],
        }}/>
                    </div>
                </section>

                {/* Comparison */}
                <section id="compare" aria-labelledby="cmp-h" style={{ position: "relative", padding: "96px 0 112px", background: "linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%)" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                        <SHead id="cmp-h" kicker="Side by side" title={<>
                                    {"What each plan "}
                                    <em className="gtext">{"includes."}</em>
                                </>}/>
                        <div data-reveal="" className="glass tbl-wrap" style={{ maxWidth: "1040px", width: "100%", margin: "0 auto" }}>
                            <table className="tbl" style={{ minWidth: "620px" }}>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "40%" }}>
                                            <span style={srOnly}>{"Feature"}</span>
                                        </th>
                                        <th scope="col">
                                            {"Free"}
                                            <span style={{ display: "block", marginTop: "6px", font: "500 13px/1 Inter, sans-serif", color: "#667085" }}>{"₹0"}</span>
                                        </th>
                                        <th scope="col" className="hl">
                                            {"Pro"}
                                            <span style={{ display: "block", marginTop: "6px", font: "500 13px/1 Inter, sans-serif", color: "#1D5AA6" }}>{"₹749 + GST / year"}</span>
                                        </th>
                                        <th scope="col">
                                            {"Pro with a college code"}
                                            <span style={{ display: "block", marginTop: "6px", font: "500 13px/1 Inter, sans-serif", color: "#667085" }}>{"Lower price"}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(([f, a, b, c]) => (<tr key={f}>
                                            <th scope="row">{f}</th>
                                            <td>
                                                <Mark v={a}/>
                                            </td>
                                            <td className="hl">
                                                <Mark v={b} pro/>
                                            </td>
                                            <td>
                                                <Mark v={c}/>
                                            </td>
                                        </tr>))}
                                    <tr>
                                        <th scope="row">
                                            <span style={srOnly}>{"Choose a plan"}</span>
                                        </th>
                                        <td>
                                            <a className="tlink" href={appUrl}>
                                                {"Sign up free"}
                                            </a>
                                        </td>
                                        <td className="hl">
                                            <a className="tlink" href={appUrl}>
                                                {"Get Pro"}
                                            </a>
                                        </td>
                                        <td>
                                            <a className="tlink" href={appUrl}>
                                                {"Use my code"}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#667085", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                            {"Class mocks are set by your own partner college and are free for its verified students. College codes work once your college has verified you."}
                        </p>
                    </div>
                </section>

                {/* Plans questions */}
                <section id="plan-faq" aria-labelledby="pf-h" style={{ padding: "112px 0" }}>
                    <div className="wrap g-faq">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
                            <span className="kicker">{"Plans questions"}</span>
                            <h2 id="pf-h" className="h2">
                                {"Before you "}
                                <em className="gtext">{"pay."}</em>
                            </h2>
                            <ThinkingMascot />
                        </div>
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #E1E1E1" }}>
                            <FaqItem open q="How do I pay?" a="By UPI. Invoices are issued in the student's own name, under Profile › Invoices."/>
                            <FaqItem q="What is a college code?" a="A Pro discount code your partner college shares, for example SAHYADRI27. Enter it at checkout once your college has verified you, and pay a lower Pro price."/>
                            <FaqItem q="What happens to Pro if I change college?" a="Pro stays yours."/>
                            <FaqItem q="Do I need to pay to sign up?" a="No. Signing up is free. On the Free plan you pay per RankRush you enter; Pro includes every RankRush."/>
                            <div style={{ paddingTop: "28px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
                                <TextLink href={ROUTES.faq}>{"See all questions"}</TextLink>
                                <TextLink href={PARTNER_FORM}>{"Is your college a partner yet?"}</TextLink>
                            </div>
                        </div>
                    </div>
                </section>

                <FinalCTA title={<>
                            {"Stop guessing. "}
                            <em className="gtext" style={{ fontStyle: "italic" }}>
                                {"Start ranking."}
                            </em>
                        </>} body="Sign-up takes two minutes: pick your exam, apply for Sunday's paper and start practising today." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "Log in", href: appUrl }}/>
            </main>
        </PageShell>);
}
