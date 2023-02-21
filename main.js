// landing page -> beginning 
function enterSite(){
    document.getElementById('enter').classList.add('hide');
    document.getElementById('buttons').classList.remove('hide');
    document.getElementById('hr0').classList.remove('hide');
}

// go to help page 
function getHelp(){
    document.getElementById('help').classList.remove('hide');
    document.getElementById('enter').classList.add('hide');
}

// leave help page
function leaveHelp(){
    document.getElementById('help').classList.add('hide');
    document.getElementById('buttons').classList.remove('hide');
}

// hour 0 - real sound 
function hr0TimeReveal(){
    document.getElementById('hr0-img').classList.remove('hide');

    var audio = document.getElementById("audio-0");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr0');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "00:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr0').classList.add('hide');
        document.getElementById('hr1').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 1 - real sound 
function hr1TimeReveal(){
    document.getElementById('hr1-img').classList.remove('hide');

    var audio = document.getElementById("audio-1");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr1');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "01:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr1').classList.add('hide');
        document.getElementById('hr2').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 1 - fast sound 
function hr1Fast(){
    document.getElementById('hr1-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-1-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr1');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr1-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}




// var audio = new Audio("assets/sound/10.silentscream-slow.wav");

// // sound play automatically on hover 
// document.onmouseover = function() {
//   audio.play();
//   audio.loop = true;
// }



// function play0() {
//     var audio = document.getElementById("audio");
//     audio.play();
//      audio.loop = true; 
//      function myFunction () {

        // }
//      setTimeout(myFunction, 1000);
//   }