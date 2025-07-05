let countsec=document.getElementById("sec3")
let count=countsec.querySelectorAll("h1")
let s3=false
let sec3cont=countsec.querySelector(".container");
count.forEach(el=>{
    let num=0   

window.addEventListener("scroll",()=>{
    if(window.scrollY>countsec.offsetTop- countsec.offsetHeight-100&&!s3)
    {
        sec3cont.classList.add("activator");
         let inter=setInterval(()=>{
             s3=true
            el.innerHTML=++num
            if (num > parseInt(el.getAttribute("count"))) {
      clearInterval(inter);

    }
        },50)
    }
})
       
})

let form=document.querySelector("#sec6 form")
let spann=form.querySelectorAll("span")
let txtarea=form.querySelector("textarea")
let numer=0
txtarea.addEventListener("keydown",()=>{
    spann[2].innerHTML=txtarea.value.length
    if(txtarea.value.length>180)
    {
        txtarea.value = txtarea.value.slice(0, 180)
    }

})

let inputt=form.querySelectorAll("input")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let err=0
     spann.forEach(rl=>{rl.innerHTML=""})
    if(inputt[0].value.length<1)
    {
        spann[0].innerHTML="Enter Name"
        err++
    }
    if(inputt[1].value.length!=10)
    {
        spann[1].innerHTML="Enter Valid Mobile Numer"
        err++
    }
    if(err==0)
    {
        alert("Submitted")
        form.reset()
    }

})



$(function()
{
    let sec=false
    if(!sec)
    {
        $(".fors").delay(1000).fadeIn(2000)
    }
    $(".callers").on("click",(e)=>{
        e.preventDefault()
        $(".fors").fadeIn(500)
    })
    $(".fors i").on("click",()=>{ $(".fors").fadeOut("2000")})
    $(".fms").on("submit",(e)=>{
        e.preventDefault()
            $(".fms span").text("");
        let err = 0;

if ($(".fms input:eq(0)").val().length < 1) {
  $(".fms span:eq(0)").text("Enter Name");
  err++;
}

if ($(".fms input:eq(1)").val().length != 10) {
  $(".fms span:eq(1)").text("Enter Valid Mobile Number");
  err++;
}

if (err == 0) {
  alert("Submitted");
  $(".fms")[0].reset();
  $(".fors").fadeOut("2000")
}
        
    })
})



let sec2=document.querySelector("#sec2 .container")
let sec2it=false
window.addEventListener("scroll",()=>{
    if(window.scrollY>sec2.offsetHeight-sec2.offsetTop-500 && !sec2it)
    {
        sec2it=true
        sec2.classList.add("activator")
    }
})
let sec4=document.querySelector("#sec4 .container")
let sec4it=false
window.addEventListener("scroll",()=>{
    if(window.scrollY>sec4.offsetTop-500&& !sec4it)
    {
        sec4it=true
        sec4.classList.add("activator")
    }
})
let sec5=document.querySelector("#sec5 .container")
let sec5it=false
window.addEventListener("scroll",()=>{
    if(window.scrollY>sec5.offsetTop-500 && !sec5it)
    {
        sec5it=true
        sec5.classList.add("activator")
    }
})

let sec7=document.querySelector("#sec7 .container")
let sec7it=false
window.addEventListener("scroll",()=>{
    if(window.scrollY>sec7.offsetTop-500 && !sec7it)
    {
        sec7it=true
        sec7.classList.add("activator")
    }
})
let footerS=document.querySelector("footer .container")
let sec8=document.querySelector("#sec8 .container")
let sec8it=false
window.addEventListener("scroll",()=>{
    if(window.scrollY>sec5.offsetTop-500 && !sec8it)
    {
        sec8it=true
        sec8.classList.add("activator")
        footerS.classList.add("activator")
    }
})
