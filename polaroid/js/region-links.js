(function () {

const defaultVinylUrl = "https://shop.eladiocarrion.com/es/products/3men2kbrn-3rd-anniversary-vinyl";
const euVinylUrl = "https://shop.eladiocarrion.com/en-es/products/sp-eu-3men2-kbrn-3rd-anniversary-vinyl";

const euCountries = [
"AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR",
"HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO",
"SK","SI","ES","SE","GB","NO","CH","IS"
];

const storageKey = "eladio_region";

function updateLinks(url){
document.querySelectorAll(".vinyl-link").forEach(link=>{
link.href = url;
});
}

function isEU(country){
return euCountries.includes(country);
}

const cachedRegion = localStorage.getItem(storageKey);

if(cachedRegion === "eu"){
updateLinks(euVinylUrl);
return;
}

if(cachedRegion === "global"){
updateLinks(defaultVinylUrl);
return;
}

fetch("https://ipapi.co/json/")
.then(res => res.json())
.then(data => {

const country = data.country_code;

if(isEU(country)){
localStorage.setItem(storageKey,"eu");
updateLinks(euVinylUrl);
}else{
localStorage.setItem(storageKey,"global");
updateLinks(defaultVinylUrl);
}

})
.catch(()=>{
updateLinks(defaultVinylUrl);
});

})();