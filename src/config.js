// Scorely India — site settings. Change these and redeploy; every page picks them up.

// Page paths (each page is its own folder: /rankrush, /features, ...)
export const ROUTES = {
    home: "/",
    rankrush: "/rankrush",
    features: "/features",
    plans: "/plans",
    colleges: "/colleges",
    faq: "/faq",
};
export const PARTNER_FORM = ROUTES.colleges + "#apply";
export const ASK_FORM = ROUTES.faq + "#ask";
// Where Sign up, Log in, Get Pro and College login buttons go.
export const DEFAULT_APP_URL = "https://claude.ai/artifact/MowdXqu6N7WEXSC9qRKhre";
export const FORM_EMAIL = "dipleena.saikia@geniehire.ai";
// Every form (partner application, Ask a question) posts here (FormSubmit, no backend needed). The very first submission sends an
// activation email to the address above; click "Activate" once and every form after that
// is delivered. You can later swap the address for the random alias FormSubmit gives you.
export const DEFAULT_FORM_ENDPOINT = "https://formsubmit.co/ajax/" + FORM_EMAIL;
