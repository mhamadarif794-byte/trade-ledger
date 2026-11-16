// ===========================================================
//  Trade Ledger - settings you can edit WITHOUT touching index.html
//  (On GitHub: open this file -> pencil icon -> edit -> Commit changes)
// ===========================================================
window.TL_CONFIG = {

  // BEST (safe): your Cloudflare Worker address, e.g. "https://tl-ai.yourname.workers.dev"
  // With this set, the Gemini key stays hidden on the server.
  AI_PROXY_URL: "",

  // NOT recommended for a public site: anyone can read a key written here.
  // Only use it for quick testing, with a key restricted to your website address.
  AI_KEY: ""
};
