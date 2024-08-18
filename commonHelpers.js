import{S as a,i as l}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(n){const t=document.querySelector("ul");let o="";t.insertAdjacentHTML("beforeend",o),n.forEach(i=>{o+=`
        <li id='parent-li'>
            <a href="${i.largeImageURL}">
                <img src="${i.webformatURL}" alt="${i.tags}" data-large-image="${i.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${i.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${i.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${i.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${i.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
    `}),t.insertAdjacentHTML("beforeend",o),new a("li a",{captionsData:"alt",captionDelay:250})}function c(n){let t=document.querySelector("#loader");t.style.display="block";const i=`https://pixabay.com/api/?${new URLSearchParams({key:"45503418-8e4034a5d9b1169325787ad22",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(i).then(e=>e.json()).then(e=>{e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"}):d(e.hits),t.style.display="none"}).catch(e=>{console.error("Error:",e),t.style.display="none"})}document.getElementById("form").addEventListener("submit",function(n){n.preventDefault();let t=n.target.elements.input.value;document.getElementById("main-ul").innerHTML="",t.trim()===""?alert("Please enter a search query."):c(t),n.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
