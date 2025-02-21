import{a as l,S as d,i as u}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="48897668-7102e16b6983a9d2c1f1ac079",f="https://pixabay.com/api/";async function p(s){try{return(await l.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){return console.error("Error fetching images:",r),[]}}const y=document.getElementById("search-form"),g=document.getElementById("search-input"),c=document.getElementById("gallery"),a=document.getElementById("loader"),h=new d("#gallery a");y.addEventListener("submit",async s=>{s.preventDefault();const r=g.value.trim();if(!r)return;c.innerHTML="",a.classList.remove("hidden");const t=await p(r);if(a.classList.add("hidden"),t.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(t),h.refresh()});function L(s){const r=s.map(t=>`
        <a href="${t.largeImageURL}" class="gallery-item">
          <img src="${t.webformatURL}" alt="${t.tags}" />
          <div class="info">
            <p>❤️ ${t.likes} Likes</p>
            <p>👁️ ${t.views} Views</p>
            <p>💬 ${t.comments} Comments</p>
            <p>📥 ${t.downloads} Downloads</p>
          </div>
        </a>
      `).join("");c.innerHTML=r}
//# sourceMappingURL=index.js.map
