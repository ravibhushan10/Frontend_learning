function timing(){
    
    const timer=document.getElementById("root");
    const now = new Date();
    const indian_time=now.toLocaleTimeString();
    timer.innerHTML=indian_time;
}
setInterval(timing,1000);


 const timer=document.getElementById("root");
timer.style.fontSize="100px";
timer.style.display="flex";
timer.style.height="100vh";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.color="green";

