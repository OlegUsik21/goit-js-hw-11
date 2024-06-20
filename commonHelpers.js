import{S as m,i as n}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44402114-eddf09e8e038ad1f496236950",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}?${o.toString()}`;return fetch(i).then(e=>e.json())}function f(t){return`<li class="gallery-item">
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
    </li>`}function h(t){return t.map(s=>f(s)).join("")}const c=document.querySelector(".loader");function p(){c.classList.remove("loader-hidden")}function y(){c.classList.add("loader-hidden")}const g="Sorry, there are no images matching your search query. Please try again!",L=new m(".gallery a",{}),u=document.querySelector(".form"),a=document.querySelector(".gallery");u.addEventListener("submit",w);function w(t){t.preventDefault(),a.innerHTML="",p(),d(u.elements.search.value.trim()).then(s=>{s.hits.length===0&&n.show({message:g});const o=h(s.hits);a.innerHTML=o,L.refresh()}).catch(s=>{n.show({message:s.message})}).finally(()=>{y()})}
//# sourceMappingURL=commonHelpers.js.map
