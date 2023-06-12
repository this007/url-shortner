let newUrl=document.getElementById('sort');
let coptButton =document.getElementById('copy');

coptButton.onclick=()=>{
    newUrl.select();

    window.navigator.clipboard.writeText(newUrl.value);
}