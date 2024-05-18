import{a as u,S as w,i as l}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const y=r=>r.map(({id:t,webformatURL:i,largeImageURL:o,tags:e,likes:s,views:c,comments:v,downloads:b})=>`<li class="gallery-item">
   <a class="gallery-link" href="${o}">
    <img
    id=${t}
      class="gallery-image"
      src="${i}"
      alt="${e}"
    />
   
    </a>
    <div class="image-properties">
      <div class="property-item">
        <h3 class="image-property-title">Likes</h3>
        <p class="image-property-data">${s}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Views</h3>
        <p class="image-property-data">${c}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Comments</h3>
        <p class="image-property-data">${v}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Downloads</h3>
        <p class="image-property-data">${b}</p>
      </div>
    </div>
 </li>`).join("");u.defaults.baseURL="https://pixabay.com/api/";const S="43776865-31502832095c6a436255fe0a5",g=async(r,t)=>(await u.get("/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,E=document.querySelector(".search-form"),n=document.querySelector(".loader");let h=document.querySelector(".gallery");const a=document.querySelector(".more-btn");let f=0,d=1,m=15,p=null;const q=async r=>{r.preventDefault();const t=r.currentTarget;if(p=t.elements.search.value.trim(),h.innerHTML="",n.classList.remove("is-hidden"),d=1,p===""){l.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"}),t.reset(),n.classList.add("is-hidden");return}try{const{total:i,hits:o}=await g(p,d);if(i===0){l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),n.classList.add("is-hidden"),a.classList.add("btn-is-hidden");return}h.insertAdjacentHTML("beforeend",y(o)),a.classList.remove("btn-is-hidden"),f=Math.ceil(i/m),o.length<m?(a.classList.add("btn-is-hidden"),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"red"})):a.classList.remove("btn-is-hidden"),L.refresh()}catch{l.show({message:"An error occurred while fetching images",position:"topRight",timeout:2e3,color:"red"})}finally{n.classList.add("is-hidden")}t.reset()},R=()=>{h.querySelector("li.gallery-item:last-child").getBoundingClientRect().height,window.scrollBy({top:730,left:0,behavior:"smooth"})};async function $(r){try{d+=1,n.classList.remove("is-hidden");const{hits:t}=await g(p,d);h.insertAdjacentHTML("beforeend",y(t)),L.refresh(),R(),d>=f&&(a.classList.add("btn-is-hidden"),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"red"}))}catch{l.show({message:"An error occurred while fetching more images.",position:"topRight",timeout:2e3,color:"red"}),a.classList.add("is-hidden")}finally{n.classList.add("is-hidden")}}const L=new w(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("click",$);E.addEventListener("submit",q);
//# sourceMappingURL=commonHelpers.js.map
