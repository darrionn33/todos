if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const a=e=>i(e,o),f={module:{uri:o},exports:c,require:a};s[o]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(n(...e),c)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/android-chrome-192x192.png",revision:"621903f3921edffa9dba8a170c9f84b4"},{url:"assets/android-chrome-512x512.png",revision:"eab26034c40d76ee3b370fbb8ea36a3c"},{url:"assets/apple-touch-icon.png",revision:"a8f30cf8c3fe2bd8ee8ac2e7b34f44c4"},{url:"assets/browserconfig.xml",revision:"b4227186db230455277d454544286351"},{url:"assets/favicon-16x16.png",revision:"a1bb7e9adee965e56f3236fbedda2883"},{url:"assets/favicon-32x32.png",revision:"06783e374a4d429556230285bb263642"},{url:"assets/favicon.ico",revision:"7afc25383e5dd00ecff8e8021aa950be"},{url:"assets/mstile-150x150.png",revision:"f34ed396be60c58f913c288f7bf6536b"},{url:"assets/placeholder.removeme",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/safari-pinned-tab.svg",revision:"413e0b8e8c947e4c39652f9882c6a692"},{url:"assets/site.webmanifest",revision:"ed79245958aba00ecea0a062417eee07"},{url:"bundle.js",revision:"337c60acb0d8b0d64e8fd7012f80f82c"},{url:"index.html",revision:"34fbcfbdc410f753f4d458e02697db80"}],{})}));
//# sourceMappingURL=service-worker.js.map
