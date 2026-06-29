function setupAR(audioId, description)
{

const marker =
document.querySelector("a-marker");

const audio =
document.getElementById(audioId);

const mission =
document.getElementById("mission");

const progress =
document.getElementById("progressBar");

const quiz =
document.getElementById("quizBtn");

const btnKeliling =
document.getElementById("btnKeliling");

const btnPutar =
document.getElementById("btnPutar");

let scanDone=false;
let audioDone=false;
let kelilingDone=false;
let putarDone=false;

function updateProgress(){

let total=0;

if(scanDone) total+=20;

if(audioDone) total+=20;

if(kelilingDone) total+=30;

if(putarDone) total+=30;

progress.style.width=total+"%";

if(total==100){

document.getElementById("task5").innerHTML=
"✅ Quiz";

quiz.disabled=false;

quiz.innerHTML="📝 Mulai Quiz";

quiz.onclick=function(){

location.href="quiz-level.html";

}

mission.innerHTML=
"🏆 Semua misi selesai! Sekarang kerjakan Quiz.";

}

}

marker.addEventListener("markerFound",()=>{

mission.innerHTML=
"🔊 Dengarkan penjelasan sampai selesai.";

if(!scanDone){

scanDone=true;

document.getElementById("task1").innerHTML=
"✅ Scan kartu";

updateProgress();

}

// Putar ulang dari awal setiap marker muncul
audio.pause();
audio.currentTime=0;

audio.play();

});
audio.addEventListener("ended",()=>{

if(audioDone) return;

audioDone=true;

document.getElementById("task2").innerHTML=
"✅ Dengarkan audio";

mission.innerHTML=
"🚶 Sekarang kelilingi objek lalu tekan tombol.";

btnKeliling.disabled=false;

updateProgress();

});

btnKeliling.onclick=function(){

kelilingDone=true;

btnKeliling.disabled=true;

document.getElementById("task3").innerHTML=
"✅ Kelilingi objek";

mission.innerHTML=
"🔄 Sekarang putar kartu lalu tekan tombol.";

btnPutar.disabled=false;

updateProgress();

}

btnPutar.onclick=function(){

putarDone=true;

btnPutar.disabled=true;

document.getElementById("task4").innerHTML=
"✅ Putar kartu";

updateProgress();

}

marker.addEventListener("markerLost",()=>{

mission.innerHTML=
"🔍 Marker hilang. Arahkan kembali kamera ke kartu.";

// Stop audio
audio.pause();

// Kembali ke awal
audio.currentTime=0;

});

}