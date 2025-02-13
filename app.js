
var progress = document.querySelector(".progress");
var percent = document.querySelector(".percent");
var textBox = document.querySelector(".textBox");
var button = document.querySelector(".button");
var textBtn = document.querySelector(".textBtn");
var heartBox = document.querySelector(".heartBox");
var cursor = document.querySelector(".buttonCLick img"); 
var heartItem1 = document.querySelector(".heartItem.item1");
var heartItem2 = document.querySelector(".heartItem.item2");
var heartItem3 = document.querySelector(".heartItem.item3");
var loveMusic = document.getElementById("loveMusic"); // เพิ่มเพลง
var playButton = document.getElementById("playMusic");
var count = 0;
var percentWidth = 0;
var heartLeft = -3.2;
var progressLoad = setInterval(progressInterva, 100);

// แสดงปุ่มเมื่อหน้าเว็บโหลด
playButton.style.display = "block";

// หลังจาก 1 วินาทีให้เพลงเล่นอัตโนมัติ
setTimeout(function () {
    loveMusic.play().then(function () {
        playButton.style.display = "none"; // ซ่อนปุ่มเมื่อเพลงเริ่มเล่น
    }).catch(function (error) {
        console.log("Error playing music:", error);
    });
}, 1000); // เพลงจะเล่นหลังจาก 1 วินาที


function progressInterva() {
    if(count == 100 && percentWidth == 100) {
        clearInterval(progressLoad);
        percent.textContent = "เสร็จแล้วนะ ❤️";
        percent.style.letterSpacing = "1px";
        textBox.style.transform = "scale(1.3)";
        heartItem3.style.animation = "1s heartScale forwards";
        
        setTimeout(()=>{
            textBox.style.transform = "scale(0)";
        },400);
        setTimeout(()=>{
            textBox.style.opacity = "0";
        },600);
        setTimeout(()=>{
            button.style.transform= "scale(1)";
        },800);
        setTimeout(()=>{
            button.style.background = "rgb(244,118,121)";
            button.style.width = "150px";
            button.style.borderRadius = "20px";
        },1500);
        setTimeout(()=>{
            button.style.height = "50px";
        },2000);
        setTimeout(()=>{
            textBtn.textContent = "กดเลย 💖";
            textBtn.style.color = "#fff";
        },2500);
        setTimeout(()=>{
            cursor.style.opacity = "1";
        },3000);
    } else {
        if(count == 10){
            heartItem1.style.animation = "1s heartScale forwards";
        }
        if(count == 46){
            percent.style.color= "#fff";
        }
        if(count == 60){
            heartItem2.style.animation = "1s heartScale forwards";
        }
        count += 1;
        percentWidth += 1;
        heartLeft += 0.968;
        progress.style.width = percentWidth + '%';
        percent.innerText = count + '%';
        heartBox.style.left = heartLeft + '%';
    }
}
