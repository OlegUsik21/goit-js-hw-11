import{S as u,i as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function d(t){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"44402114-eddf09e8e038ad1f496236950",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${r}?${o.toString()}`;return fetch(i).then(e=>e.json())}function f(t){return`<li class="gallery-item">
      <a href="${t.largeImageURL}"><img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"></a>
        <ul class="gallery-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes">${t.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views">${t.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments">${t.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads">${t.downloads}</p>
          </li>
        </ul>
    </li>`}function h(t){return t.map(r=>f(r)).join("")}const a=document.querySelector(".loader");function p(){a.classList.remove("loader-hidden")}function y(){a.classList.add("loader-hidden")}const g="Sorry, there are no images matching your search query. Please try again!",L=new u(".gallery a",{}),c=document.querySelector(".form"),n=document.querySelector(".gallery");c.addEventListener("submit",w);function w(t){t.preventDefault(),n.innerHTML="",p(),d(c.elements.search.value.trim()).then(r=>{r.hits.length===0&&m.show({message:g});const o=h(r.hits);n.innerHTML=o,L.refresh()}).catch(()=>{}).finally(()=>{y()})}
//# sourceMappingURL=commonHelpers.js.map
