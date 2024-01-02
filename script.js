

const mod =document.querySelector(".mod")
const sun = document.querySelector(".fa-sun")
const body = document.querySelector("body")
const link =document.getElementById("link")
const i = document.createElement("i")
const agırlık=document.getElementById("input_agırlık")
const uzunluk = document.getElementById("input_kütle")
const buton=document.getElementById("btn")
const p=document.querySelector(".paragraf")
const div=document.querySelector(".display")




mod.addEventListener("click",function () {
 
 sun.classList.toggle("fa-moon")
 if(sun.classList.toggle("fa-sun")){
   body.style.background="yellow"
   body.style.color="red"
 }else{
   body.style.background="black"
   body.style.color="white"
 }


 })

 
 const bki_hesapla= function(){
    let sonuc=0
 let bölüm=Number(uzunluk.value)

    sonuc=((agırlık.value)/((bölüm*bölüm)/10000)).toFixed("2")
    sayı=Number(sonuc)
 if(sayı<18.5){
    p.textContent=`BKI : ${sonuc} tur ve Kilonuz İdeal kilonun altındadır.`
   
 }else if(sayı<24.8){
    p.textContent=`BKI: ${sonuc} ve Kilonuz İdeal kilodadır. `
    
 }else if(sayı <29.9){
      p.textContent=`BKI: ${sonuc} ve Kilonuz İdeal kilonun üstündedir. `
 }else if(sayı<39.9){
    p.textContent=`BKI: ${sonuc}  ve Kilonuz İdeal kilonu çok üstündedir. (obez) `
 }else if(sayı>40){
    p.textContent=`BKI: ${sonuc} ve Kilonuz İdeal kilonun çok çok üstündedir(Morbid Obez). `
 }else{
    p.textContent=""
 }
   
 if(agırlık.value !=="" && uzunluk.value !==""){
   div.classList.remove("display")
 }


 }

 buton.addEventListener("click",bki_hesapla)


