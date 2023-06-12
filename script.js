const selectelement = (selector)=>{
    const element = document.querySelector(selector);
    if(element)return element;
    throw new Error(`can not find the element ${selector}`);
}

const form =selectelement('form');
const input =selectelement('.longurl').value;
const reasult=selectelement('.sorturl');
const hamburger =selectelement('.hamburger');
const navMenu =selectelement('.nav-menue');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const url=input.value;
    shortenUrl(url);
    
})
async function shortenUrl(url){
    try{
        const response=await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data=response.json();
        
        reasult.value=data.response.shortenUrl_link2;
    }
    catch {reasult.value$`<p>eror</p>`}
}


