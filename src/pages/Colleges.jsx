// Scorely India — For colleges page (/colleges).

import * as React from "react"
import { ChipGroup, CollegesStage, Consent, Cta, DEFAULT_APP_URL, DEFAULT_FORM_ENDPOINT, DarkBand, EmailForm, FORM_EMAIL, FaqItem, Field, FinalCTA, Ghost, IMG_THUMBS, Intro, Marquee, PageHero, PageShell, ROUTES, SHead, TextLink, ThinkingMascot, clamp } from "../shared.jsx"

const STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
    "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
    "Ladakh", "Lakshadweep", "Puducherry",
];
export default function ScorelyColleges(props = {}) {
    const heroRef = React.useRef(null);
    const appUrl = props.appUrl || DEFAULT_APP_URL;
    const endpoint = props.formEndpoint || DEFAULT_FORM_ENDPOINT;
    const perks = [
        ["For students", "Free RankRush tests", "Free-plan students verified at your college get free RankRush entries, set for your partnership: a number of free tests on any exam, or per exam (JEE, NEET, CET)."],
        ["For students", "Your own Pro discount code", "Your college gets one code (for example SAHYADRI27) with a set number of places. Verified students enter it at checkout and pay a lower Pro price. You can request more places from the portal."],
        ["Class mocks", "Mocks set by your teachers", "Create full mocks on the JEE or NEET pattern, subject-wise mocks or topic-wise mocks for chosen chapters. Pick divisions, date, start time, duration and result time. Free for your verified students."],
        ["Class mocks", "Verified bank or your own", "Draw questions from Scorely India's two-level checked bank, from your college's private question bank, or both. Lock a paper before the exam and declare results automatically or by hand."],
        ["Teachers", "Teacher accounts with the right access", "Add teachers with their subjects, divisions and permissions: see reports and toppers, create class mocks, assign tests. Each teacher sees only their own divisions and subject. Deactivate anytime."],
        ["Teachers", "A dashboard per teacher", "Subject accuracy by division, the weakest topics, and a list of students scoring below 55%, so teachers know who needs attention before the next class."],
        ["Reports", "College-wide reports", "RankRush percentile spread, participation trend, weak topics by division and a drill-down into each student's history, compared against the All-India pool."],
        ["Recognition", "Toppers, certificates and badges", "When each RankRush is declared, your top performers get certificates and badges automatically, and you get a ranked toppers list for notices and parent meetings."],
        ["Admin", "Student list and verification", "Add students one by one or upload an Excel sheet. A student counts as verified only when your list has their email or mobile, so codes and free tests reach your students only."],
        ["Admin", "Assign tests and welcome emails", "Assign practice tests to divisions, send welcome emails to new students, and track who has signed up, who is waiting and who has left."],
        ["Privacy", "Clear consent from students", "Students see a notice that their college can view their scores before they link to you. If a student leaves, you keep only their class-mock results, not their RankRush reports."],
        ["Cost", "No fee for the college", "Partner colleges pay nothing. Students pay for their own Pro or RankRush entries by UPI and receive invoices in their own name."],
    ];
    return (<PageShell appUrl={appUrl} active="colleges">
            <PageHero heroRef={heroRef} label="For colleges: division results, a podium and toppers declared" kicker="For colleges and coaching classes" line1="Partner" line2="for free." lede="Weekly All-India benchmarks for your students, division reports for your teachers and your own class mocks. Partnership costs the college nothing." primary={{ label: "Apply to partner", href: "#apply" }} secondary={{ label: "College login", href: appUrl }} chips={["₹0 for colleges", "Class mocks", "Toppers and certificates"]}>
                <CollegesStage heroRef={heroRef}/>
            </PageHero>
            <main>
                <Intro as="h2" kicker="For colleges and coaching classes" segs={[{ t: "Become a free" }, { t: "partner college.", g: true, em: true }]} lede="Give your students a weekly All-India benchmark, give your teachers a clear view of where each division is losing marks, and run your own class mocks on the same platform. Partnership costs the college nothing.">
                    <Cta href="#apply">{"Apply to partner"}</Cta>
                    <Ghost href={appUrl}>{"College login"}</Ghost>
                </Intro>

                <Marquee big={[
            ["Free RankRush tests", false],
            ["Class mocks", true],
            ["Teacher dashboards", false],
            ["Toppers", true],
        ]} small={["JEE", "NEET", "CET", "Division reports", "Pro discount code", "Certificates and badges", "No fee for the college"]}/>

                {/* What partner colleges get */}
                <DarkBand id="benefits" labelledBy="ben-h">
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead light id="ben-h" kicker="What partner colleges get" title={<>
                                    {"Everything for students, teachers "}
                                    <em style={{ color: "#74B4D9" }}>{"and admins."}</em>
                                </>}/>
                        <div className="g-3" data-reveal="">
                            {perks.map(([g, t, d], i) => (<div key={t} className="glass-dark lift" style={{ borderRadius: "26px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                                        <span style={{ font: "800 15px/1 'Plus Jakarta Sans', sans-serif", color: "#74B4D9" }}>{(i < 9 ? "0" : "") + (i + 1)}</span>
                                        <span style={{ font: "600 11px/1 Inter, sans-serif", letterSpacing: ".08em", textTransform: "uppercase", color: "#DDE7F0", padding: "6px 10px", borderRadius: "999px", background: "rgba(255,255,255,.12)" }}>
                                            {g}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>{t}</h3>
                                    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#DDE7F0" }}>{d}</p>
                                </div>))}
                        </div>
                    </div>
                </DarkBand>

                {/* How to become a partner */}
                <section id="how" aria-labelledby="how-h" style={{ padding: "128px 0 112px" }}>
                    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                        <SHead id="how-h" kicker="How to join" title={<>
                                    {"How to become "}
                                    <em className="gtext">{"a partner."}</em>
                                </>} lede="Three steps, and your students can sit the next RankRush with your college's free tests and code."/>
                        <ol className="acc" data-reveal="" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {[
            ["Step 1", "Apply online", "Fill in the partner form with your college details and expected number of students. Create your college login at the same time.", "01", ""],
            ["Step 2", "We review and approve", "Your status page shows Under review, then Approved with your code, discount and free tests. Login details are emailed to you.", "02", ""],
            ["Step 3", "Add students and teachers", "Upload your student list, add teachers, and set your first class mock or point students to the next RankRush.", "03", "night"],
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

                {/* Application form */}
                <section id="apply" aria-labelledby="apply-h" style={{ position: "relative", padding: "112px 0 128px", background: "linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%)", overflow: "hidden" }}>
                    <div className="wrap g-feat">
                        <div data-reveal="" className="sticky" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                            <span className="kicker">{"Apply to partner"}</span>
                            <h2 id="apply-h" className="h2">
                                {"Tell us about "}
                                <em className="gtext">{"your college."}</em>
                            </h2>
                            <p className="lede">
                                {"Fill in your college details and expected number of students. We review every application and email your login details once you're approved."}
                            </p>
                            <ul className="checks" style={{ color: "#344054" }}>
                                {["No fee for the college", "Free RankRush entries for verified students", "Your own Pro discount code"].map((t) => (<li key={t}>
                                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5AA6" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12l5 5 9-10"></path>
                                        </svg>
                                        {t}
                                    </li>))}
                            </ul>
                            <p style={{ fontSize: "14px", color: "#667085" }}>
                                {"Prefer email? Write to "}
                                <a href={"mailto:" + FORM_EMAIL + "?subject=" + encodeURIComponent("Partner college enquiry")} style={{ fontWeight: 600 }}>
                                    {FORM_EMAIL}
                                </a>
                            </p>
                        </div>
                        <div data-reveal="" style={{ position: "relative" }}>
                            <img src={IMG_THUMBS} alt="" className="m-thumbs hide-sm" loading="lazy" decoding="async" style={{ position: "absolute", right: "-40px", top: "-92px", width: "min(150px, 28%)", height: "auto", zIndex: 0 }}/>
                            <div className="glass" style={{ position: "relative", zIndex: 1, borderRadius: "32px", padding: "clamp(22px, 3.4vw, 36px)" }}>
                                <EmailForm formName="partner" subject="New partner college application · Scorely India" endpoint={endpoint} submitLabel="Send application" successTitle="Application received" successBody="Thank you. Our partnerships team will review your college and email you within two working days with next steps and your login details." requireOneOf={{ name: "Exams", message: "Please pick at least one exam your students prepare for." }}>
                                    <Field label="College or institute name" name="College name" required autoComplete="organization" full/>
                                    <Field label="Type of institute" name="Institute type" required options={["Junior college", "Degree college", "Coaching class", "School", "Other"]}/>
                                    <Field label="Expected number of students" name="Expected students" required options={["Under 100", "100 – 300", "300 – 500", "500 – 1,000", "1,000 – 5,000", "More than 5,000"]}/>
                                    <Field label="City" name="City" required autoComplete="address-level2"/>
                                    <Field label="State" name="State" required options={STATES}/>
                                    <ChipGroup label="Exams your students prepare for" name="Exams" options={["JEE", "NEET", "CET"]} required/>
                                    <Field label="Your name" name="Contact name" required autoComplete="name"/>
                                    <Field label="Designation" name="Designation" placeholder="Principal, director, coordinator…" autoComplete="organization-title"/>
                                    <Field label="Work email" name="email" type="email" required autoComplete="email"/>
                                    <Field label="Mobile number" name="Mobile" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9+\-\s]{10,15}" placeholder="10-digit mobile"/>
                                    <Field label="Anything else we should know?" name="Message" textarea full placeholder="Divisions, batches, when you'd like to start…"/>
                                    <Consent text="I'm authorised to apply on behalf of this institute and agree to be contacted about the partnership."/>
                                </EmailForm>
                            </div>
                        </div>
                    </div>
                </section>

                {/* College questions */}
                <section id="college-faq" aria-labelledby="cf-h" style={{ padding: "112px 0" }}>
                    <div className="wrap g-faq">
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
                            <span className="kicker">{"College questions"}</span>
                            <h2 id="cf-h" className="h2">
                                {"Before you "}
                                <em className="gtext">{"apply"}</em>
                            </h2>
                            <ThinkingMascot />
                        </div>
                        <div data-reveal="" style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #E1E1E1" }}>
                            <CollegeFaqs />
                            <div style={{ paddingTop: "28px" }}>
                                <TextLink href={ROUTES.faq + "#for-colleges"}>{"See all questions"}</TextLink>
                            </div>
                        </div>
                    </div>
                </section>

                <FinalCTA kicker="For colleges and coaching classes" title={<>
                            {"Give your students a "}
                            <em className="gtext" style={{ fontStyle: "italic" }}>
                                {"weekly All-India benchmark."}
                            </em>
                        </>} body="Partnership costs the college nothing. Apply online, and once approved you'll get your code, discount and free tests." primary={{ label: "Apply to partner", href: "#apply" }} secondary={{ label: "College login", href: appUrl }}/>
            </main>
        </PageShell>);
}
// Shared with the FAQ page's "For colleges" tab (kept in sync by copying this list there).
function CollegeFaqs() {
    return (<>
            <FaqItem open q="Does partnership cost the college anything?" a="No. Partner colleges pay nothing. Students pay for their own Pro or RankRush entries by UPI and receive invoices in their own name."/>
            <FaqItem q="How do we become a partner?" a="Apply online with your college details and expected number of students. Your status page shows Under review, then Approved with your code, discount and free tests, and login details are emailed to you."/>
            <FaqItem q="Which students count as verified?" a="A student counts as verified only when your student list has their email or mobile number, so codes and free tests reach your students only. Add students one by one or upload an Excel sheet."/>
            <FaqItem q="Can our teachers set their own mocks?" a="Yes. Teachers can create full, subject-wise or topic-wise class mocks from Scorely India's checked bank, your college's private question bank, or both."/>
            <FaqItem q="What can the college see about a student?" a="Students see a notice that their college can view their scores before they link to you. If a student leaves, you keep only their class-mock results, not their RankRush reports."/>
        </>);
}
