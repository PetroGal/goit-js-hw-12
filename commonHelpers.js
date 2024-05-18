import{a as h,S as b,i as n}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u=r=>r.map(({id:t,webformatURL:i,largeImageURL:o,tags:e,likes:s,views:l,comments:L,downloads:v})=>`<li class="gallery-item">
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
        <p class="image-property-data">${l}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Comments</h3>
        <p class="image-property-data">${L}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Downloads</h3>
        <p class="image-property-data">${v}</p>
      </div>
    </div>
 </li>`).join("");h.defaults.baseURL="https://pixabay.com/api/";const w="43776865-31502832095c6a436255fe0a5",y=async(r,t)=>(await h.get("/",{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,S=document.querySelector(".search-form"),a=document.querySelector(".loader");let m=document.querySelector(".gallery");const d=document.querySelector(".more-btn");let g=0,c=1,E=15,p=null;const q=async r=>{r.preventDefault();const t=r.currentTarget;if(p=t.elements.search.value.trim(),m.innerHTML="",a.classList.remove("is-hidden"),c=1,p===""){n.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"}),t.reset(),a.classList.add("is-hidden");return}try{const{total:i,hits:o}=await y(p,c);if(i===0){n.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),a.classList.add("is-hidden"),d.classList.add("btn-is-hidden");return}m.insertAdjacentHTML("beforeend",u(o)),d.classList.remove("btn-is-hidden"),g=Math.ceil(i/E),f.refresh()}catch{n.show({message:"An error occurred while fetching images",position:"topRight",timeout:2e3,color:"red"})}finally{a.classList.add("is-hidden")}t.reset()},$=()=>{m.querySelector("li.gallery-item:last-child").getBoundingClientRect().height,window.scrollBy({top:730,left:0,behavior:"smooth"})};async function M(r){try{c+=1,a.classList.remove("is-hidden");const{hits:t}=await y(p,c);m.insertAdjacentHTML("beforeend",u(t)),f.refresh(),$(),c>=g&&(d.classList.add("btn-is-hidden"),n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"red"}))}catch{n.show({message:"An error occurred while fetching more images.",position:"topRight",timeout:2e3,color:"red"}),d.classList.add("is-hidden")}finally{a.classList.add("is-hidden")}}const f=new b(".gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("click",M);S.addEventListener("submit",q);
//# sourceMappingURL=commonHelpers.js.map
