// This site's public IDs. Separate from every other site's resource/project.
const GA_ID = 'G-22G95ZX01G';
const CLARITY_ID = 'yvzvg0qyvi';
const CHOICE_KEY = 'psdw-analytics-consent-v1';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
const production = location.hostname === 'psdworkbench.com';
let accepted = false, started = false;
const allowed = new Set(['psd_choose_click','psd_file_selected','psd_preview_success','psd_conversion_success','psd_download_initiated','psd_processing_error','psd_file_cleared']);
const values = { source: ['picker','drop'], kind: ['composite','layer'], step: ['open','preview','layer','download'], reason: ['size_limit','unsupported_browser','worker_start','timeout','parse','worker','read','no_preview','image_decode','layer','download'] };
function loadScript(src) { const script = document.createElement('script'); script.async = true; script.src = src; script.dataset.load = 'pending'; script.onload = () => { script.dataset.load = 'loaded'; }; script.onerror = () => { script.dataset.load = 'failed'; }; document.head.append(script); }
function start() {
  if (!production || started || !accepted) return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  window.gtag('consent','update',{analytics_storage:'granted'});
  window.gtag('js',new Date());
  // No query/hash, raw referrer, filenames, dimensions, layer names, or error text.
  let referrer = '';
  try { referrer = document.referrer ? new URL(document.referrer).origin + '/' : ''; } catch {}
  window.gtag('config',GA_ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:location.origin+location.pathname,page_referrer:referrer});
  window.gtag('event','page_view',{send_to:GA_ID,page_location:location.origin+location.pathname,page_referrer:referrer,page_title:document.title});
  loadScript('https://www.googletagmanager.com/gtag/js?id='+GA_ID);
  window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
  window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'granted'});
  loadScript('https://www.clarity.ms/tag/'+CLARITY_ID);
}
export function track(name, params = {}) {
  if (!production || !accepted || !allowed.has(name)) return;
  start();
  const safe = {send_to:GA_ID};
  for (const [key, list] of Object.entries(values)) if (list.includes(params[key])) safe[key] = params[key];
  window.gtag('event',name,safe);
  window.clarity('event',name);
}
function clearCookies() {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga(?:_|$)|_clck$|_clsk$)/.test(name)) continue;
    for (const domain of ['', '; domain=psdworkbench.com', '; domain=.psdworkbench.com']) document.cookie = name+'=; Max-Age=0; path=/'+domain;
  }
}
function readChoice() { try { const choice = JSON.parse(localStorage.getItem(CHOICE_KEY)); return choice && Date.now()-choice.at < MAX_AGE ? choice.accepted === true ? 'accept' : 'reject' : null; } catch { return null; } }
function choose(value) {
  const wasStarted = started;
  accepted = value;
  try { localStorage.setItem(CHOICE_KEY,JSON.stringify({accepted:value,at:Date.now()})); } catch {}
  document.querySelector('#analytics-choice').hidden = true;
  if (value) start();
  else {
    window['ga-disable-'+GA_ID] = true;
    window.gtag?.('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.clarity?.('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'});
    clearCookies();
    // Fully unload recording code after revocation. Explain this before the action.
    if (wasStarted) location.reload();
  }
}
const box = document.createElement('section');
box.id = 'analytics-choice'; box.className = 'analytics-choice'; box.setAttribute('aria-label','Optional analytics');
box.innerHTML = '<div><strong>Help improve this tool?</strong><p>Allow Google Analytics and Microsoft Clarity to measure visits and interactions. File information and previews are masked. Your PSD stays on your device. <a href="/privacy/">Privacy details</a></p><small>Changing to “Reject” reloads the page if analytics is active. Export or finish your work first.</small></div><div class="analytics-actions"><button id="analytics-reject">Reject</button><button id="analytics-accept" class="primary">Allow analytics</button></div>';
document.body.append(box);
document.querySelector('#analytics-reject').onclick = () => choose(false);
document.querySelector('#analytics-accept').onclick = () => { window['ga-disable-'+GA_ID] = false; choose(true); };
document.querySelector('#analytics-settings')?.addEventListener('click',()=>{ box.hidden = false; box.querySelector('button').focus(); });
const choice = readChoice(); box.hidden = choice !== null;
if (choice === 'accept') { accepted = true; start(); }
