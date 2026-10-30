// Scorely India — FAQ page (/faq).

import * as React from "react"
import { Consent, Cta, DEFAULT_APP_URL, DEFAULT_FORM_ENDPOINT, EmailForm, FAQStage, FORM_EMAIL, FaqItem, Field, FinalCTA, Ghost, IMG_THUMBS, Intro, PARTNER_FORM, PageHero, PageShell, ROUTES, TextLink, ThinkingMascot, clamp } from "../shared.jsx"

const STUDENTS = [
    {
        title: "Getting started",
        items: [
            ["Is Scorely India free?", "Yes. The Free plan is ₹0 and lets you enter RankRush mocks one at a time, play friends' challenges and get RankRush alerts. Pro is ₹749 + GST a year for every student feature."],
            ["Which exams and classes are covered?", "JEE, NEET and CET, for Class 11, Class 12 and droppers, with Daily Dose for PCM, PCB or PCMB groups. You can pick more than one exam and apply to each paper separately."],
            ["How long does sign-up take?", "Two minutes: pick your exam, apply for Sunday's paper and start practising."],
            ["Do I need a laptop?", "For RankRush, yes: take the full-length mock on a laptop or desktop. Practice tests, results, Daily Dose, challenges and AI Mentor all work on your phone."],
        ],
    },
    {
        title: "RankRush",
        items: [
            ["Is my RankRush rank an official rank?", "No. RankRush ranks are among Scorely India test-takers only and are not official exam ranks. Scorely India is not affiliated with NTA or any exam body."],
            ["Why take an All-India mock instead of my class test?", "A class test ranks you among 300 to 500 students in your batch. A RankRush paper ranks you among students from every state, the people you will compete with in January and May."],
            ["When are results declared?", "The same evening. For RankRush #1, results are declared at 20:00."],
        ],
    },
    {
        title: "Plans and payment",
        items: [
            ["How do I pay?", "By UPI. Invoices are issued in your own name."],
            ["What is a college code?", "A Pro discount code from your partner college, for example SAHYADRI27. Enter it at checkout once your college verifies you, and pay a lower Pro price."],
            ["What happens to Pro if I change college?", "Pro stays yours."],
        ],
    },
    {
        title: "Privacy and features",
        items: [
            ["Will my college see my scores?", "Only if you link to your college. You see a notice before linking. If you leave, your college keeps only your class-mock results, not your RankRush reports."],
            ["Can I challenge friends who are not on Scorely India?", "Yes. Send a challenge by link or mobile number. They sign up free, play, and land on the same leaderboard."],
            ["How does AI Mentor work?", "Type a question or snap a photo of it, get a step-by-step explanation, and save the answer to your revision notebook."],
            ["Are the questions checked?", "Yes. Every question is reviewed by two different subject teachers before it reaches a paper."],
        ],
    },
];
const COLLEGES = [
    {
        title: "Partnership",
        items: [
            ["Does partnership cost the college anything?", "No. Partner colleges pay nothing. Students pay for their own Pro or RankRush entries by UPI and receive invoices in their own name."],
            ["How do we become a partner?", "Apply online with your college details and expected number of students. Your status page shows Under review, then Approved with your code, discount and free tests, and login details are emailed to you."],
            ["What do our students get?", "Free-plan students verified at your college get free RankRush entries, and your college gets one Pro discount code with a set number of places. You can request more places from the portal."],
        ],
    },
    {
        title: "Teachers and class mocks",
        items: [
            ["Can our teachers set their own mocks?", "Yes. Create full mocks on the JEE or NEET pattern, subject-wise or topic-wise mocks, from Scorely India's two-level checked bank, your college's private question bank, or both."],
            ["What does each teacher see?", "Each teacher sees only their own divisions and subject: accuracy by division, the weakest topics and a list of students scoring below 55%. You can deactivate a teacher anytime."],
            ["What reports does the college get?", "RankRush percentile spread, participation trend, weak topics by division and a drill-down into each student's history, compared against the All-India pool, plus a ranked toppers list after each RankRush."],
        ],
    },
    {
        title: "Students and privacy",
        items: [
            ["Which students count as verified?", "A student counts as verified only when your student list has their email or mobile number, so codes and free tests reach your students only. Add students one by one or upload an Excel sheet."],
            ["What can the college see about a student?", "Students see a notice that their college can view their scores before they link to you. If a student leaves, you keep only their class-mock results, not their RankRush reports."],
        ],
    },
];
export default function ScorelyFAQ(props = {}) {
    const heroRef = React.useRef(null);
    const appUrl = props.appUrl || DEFAULT_APP_URL;
    const endpoint = props.formEndpoint || DEFAULT_FORM_ENDPOINT;
    const [tab, setTab] = React.useState("students");
    const groups = tab === "students" ? STUDENTS : COLLEGES;
    // /faq#for-colleges opens the colleges tab
    React.useEffect(() => {
        if (typeof window === "undefined")
            return;
        const sync = () => {
            if (window.location.hash === "#for-colleges") {
                setTab("colleges");
                const el = document.getElementById("faqs");
                if (el)
                    setTimeout(() => el.scrollIntoView({ block: "start" }), 80);
            }
        };
        sync();
        window.addEventListener("hashchange", sync);
        return () => window.removeEventListener("hashchange", sync);
    }, []);
    const onTabKey = (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const next = tab === "students" ? "colleges" : "students";
            setTab(next);
            const el = document.getElementById("tab-" + next);
            if (el)
                el.focus();
        }
    };
    return (<PageShell appUrl={appUrl} active="faq">
            <PageHero heroRef={heroRef} label="FAQ: the mascot thinking through common questions" kicker="Questions" line1="Ask us" line2="anything." lede="What students, parents and colleges ask before they sign up. Can't find yours? Ask us at the bottom of the page." primary={{ label: "Browse questions", href: "#faqs" }} secondary={{ label: "Ask a question", href: "#ask" }} chips={["For students", "For colleges", "Reply within 2 working days"]}>
                <FAQStage heroRef={heroRef}/>
            </PageHero>
            <main>
                <Intro as="h2" kicker="Questions" segs={[{ t: "Frequently asked" }, { t: "questions.", g: true, em: true }]} lede="What students and colleges ask before they sign up. Can't find yours? Ask us at the bottom of the page.">
                    <Cta href="#faqs">{"Browse questions"}</Cta>
                    <Ghost href="#ask">{"Ask a question"}</Ghost>
                </Intro>

                <section id="faqs" aria-labelledby="faqs-h" style={{ padding: "24px 0 112px" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                        <div data-reveal="" style={{ display: "flex", justifyContent: "center" }}>
                            <h2 id="faqs-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                                {"All questions"}
                            </h2>
                            <div className="tabs glass" role="tablist" aria-label="Who is asking">
                                {[
            ["students", "For students"],
            ["colleges", "For colleges"],
        ].map(([k, l]) => (<button key={k} id={"tab-" + k} type="button" role="tab" className="tab" aria-selected={tab === k} aria-controls="faq-panel" tabIndex={tab === k ? 0 : -1} onClick={() => setTab(k)} onKeyDown={onTabKey}>
                                        {l}
                                    </button>))}
                            </div>
                        </div>
                        <div className="g-faq" style={{ alignItems: "start" }}>
                            <div className="sticky" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
                                <span className="kicker">{tab === "students" ? "For students" : "For colleges"}</span>
                                <p className="h2" aria-hidden="true">
                                    {tab === "students" ? "Before you " : "Before you "}
                                    <em className="gtext" style={{ whiteSpace: "nowrap" }}>{tab === "students" ? "sign up" : "partner"}</em>
                                </p>
                                <ThinkingMascot />
                                {tab === "colleges" && <TextLink href={PARTNER_FORM}>{"Apply to partner"}</TextLink>}
                            </div>
                            <div id="faq-panel" role="tabpanel" aria-labelledby={"tab-" + tab} key={tab} className="form-ok" style={{ display: "flex", flexDirection: "column" }}>
                                {groups.map((g, gi) => (<div key={g.title} style={{ display: "flex", flexDirection: "column", paddingTop: gi ? "40px" : 0 }}>
                                        <h3 className="fgroup">{g.title}</h3>
                                        <div style={{ borderTop: "1px solid #E1E1E1" }}>
                                            {g.items.map(([q, a], i) => (<FaqItem key={q} q={q} a={a} open={gi === 0 && i === 0}/>))}
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ask a question */}
                <section id="ask" aria-labelledby="ask-h" style={{ position: "relative", padding: "112px 0 128px", background: "linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%)", overflow: "hidden" }}>
                    <div className="wrap g-feat">
                        <div data-reveal="" className="sticky" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <span className="kicker">{"Still have a question?"}</span>
                            <h2 id="ask-h" className="h2">
                                {"Ask us "}
                                <em className="gtext">{"anything."}</em>
                            </h2>
                            <p className="lede">{"Students, parents, colleges and coaching classes: send us your question and we'll reply by email."}</p>
                            <p style={{ fontSize: "14px", color: "#667085" }}>
                                {"Or write to "}
                                <a href={"mailto:" + FORM_EMAIL + "?subject=" + encodeURIComponent("Question for Scorely India")} style={{ fontWeight: 600 }}>
                                    {FORM_EMAIL}
                                </a>
                            </p>
                            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                                <TextLink href={ROUTES.rankrush}>{"How RankRush works"}</TextLink>
                                <TextLink href={ROUTES.plans}>{"Plans"}</TextLink>
                            </div>
                        </div>
                        <div data-reveal="" style={{ position: "relative" }}>
                            <img src={IMG_THUMBS} alt="" className="m-thumbs hide-sm" loading="lazy" decoding="async" style={{ position: "absolute", right: "-40px", top: "-92px", width: "min(150px, 28%)", height: "auto", zIndex: 0 }}/>
                            <div className="glass" style={{ position: "relative", zIndex: 1, borderRadius: "32px", padding: "clamp(22px, 3.4vw, 36px)" }}>
                                <EmailForm formName="question" subject="New question from the Scorely India website" endpoint={endpoint} submitLabel="Send question" successTitle="Question sent" successBody="Thanks for asking. We'll reply to your email, usually within two working days.">
                                    <Field label="Your name" name="Name" required autoComplete="name"/>
                                    <Field label="I am a" name="Asking as" required options={["Student", "Parent", "College or coaching class", "Teacher", "Other"]}/>
                                    <Field label="Email" name="email" type="email" required autoComplete="email"/>
                                    <Field label="Mobile number" name="Mobile" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+\-\s]{10,15}"/>
                                    <Field label="Exam" name="Exam" options={["JEE", "NEET", "CET", "More than one", "Not exam-specific"]} full/>
                                    <Field label="Your question" name="Question" textarea required full placeholder="Type your question here…"/>
                                    <Consent text="I agree to be contacted by email about my question."/>
                                </EmailForm>
                            </div>
                        </div>
                    </div>
                </section>

                <FinalCTA title={<>
                            {"Stop guessing. "}
                            <em className="gtext" style={{ fontStyle: "italic" }}>
                                {"Start ranking."}
                            </em>
                        </>} body="Be among the first students in India to take RankRush #1. Sign-up takes two minutes: pick your exam, apply for Sunday's paper and start practising today." primary={{ label: "Sign up free", href: appUrl }} secondary={{ label: "Log in", href: appUrl }}/>
            </main>
        </PageShell>);
}
