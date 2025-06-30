let countsec=document.getElementById("sec3")
let count=countsec.querySelectorAll("h1")
let s3=false
count.forEach(el=>{
    let num=0

window.addEventListener("scroll",()=>{
    if(window.scrollY>countsec.offsetTop- countsec.offsetHeight-100&&!s3)
    {
        
         let inter=setInterval(()=>{
            el.innerHTML=num++
            if (num > parseInt(el.getAttribute("count"))) {
      clearInterval(inter);
      s3=true
    }
        },50)
    }
})
       
})

let form=document.querySelector("#sec6 form")
let spann=form.querySelectorAll("span")
let txtarea=form.querySelector("textarea")
console.log(form)
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