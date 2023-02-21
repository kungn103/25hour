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

// hour 2 - real sound 
function hr2TimeReveal(){
    document.getElementById('hr2-img').classList.remove('hide');

    var audio = document.getElementById("audio-2");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr2');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "02:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr2').classList.add('hide');
        document.getElementById('hr3').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 2 - fast sound 
function hr2Fast(){
    document.getElementById('hr2-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-2-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr2');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr2-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 2 - slow sound 
function hr2Slow(){
    document.getElementById('hr2-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-2-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr2');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr2-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 3 - real sound 
function hr3TimeReveal(){
    document.getElementById('hr3-img').classList.remove('hide');

    var audio = document.getElementById("audio-3");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr3');
    children = parent.children[1];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "03:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr3').classList.add('hide');
        document.getElementById('hr4').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 3 - fast sound 
function hr3Fast(){
    document.getElementById('hr3-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-3-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr3');
    children = parent.children[0];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr3-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 3 - slow sound 
function hr3Slow(){
    document.getElementById('hr3-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-3-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr3');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr3-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 4 - real sound 
function hr4TimeReveal(){
    document.getElementById('hr4-img').classList.remove('hide');

    var audio = document.getElementById("audio-4");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr4');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "04:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr4').classList.add('hide');
        document.getElementById('hr5').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 4 - fast sound 
function hr4Fast(){
    document.getElementById('hr4-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-4-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr4');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr4-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 4 - slow sound 
function hr4Slow(){
    document.getElementById('hr4-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-4-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr4');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr4-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 5 - real sound 
function hr5TimeReveal(){
    document.getElementById('hr5-img').classList.remove('hide');

    var audio = document.getElementById("audio-5");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr5');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "05:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr5').classList.add('hide');
        document.getElementById('hr6').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 5 - fast sound 
function hr5Fast(){
    document.getElementById('hr5-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-5-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr5');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr5-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 5 - slow sound 
function hr5Slow(){
    document.getElementById('hr5-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-5-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr5');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr5-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 6 - real sound 
function hr6TimeReveal(){
    document.getElementById('hr6-img').classList.remove('hide');

    var audio = document.getElementById("audio-6");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr6');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "06:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr6').classList.add('hide');
        document.getElementById('hr8').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 6 - fast sound 
function hr6Fast(){
    document.getElementById('hr6-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-6-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr6');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr6-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 6 - slow sound 
function hr6Slow(){
    document.getElementById('hr6-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-6-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr6');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr6-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 7 - real sound 
function hr7TimeReveal(){
    document.getElementById('hr7-img').classList.remove('hide');

    var audio = document.getElementById("audio-7");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr7');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "07:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr7').classList.add('hide');
        document.getElementById('hr8').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 7 - fast sound 
function hr7Fast(){
    document.getElementById('hr7-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-7-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr7');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr7-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 7- slow sound 
function hr7Slow(){
    document.getElementById('hr7-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-7-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr7');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr7-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 8 - real sound 
function hr8TimeReveal(){
    document.getElementById('hr8-img').classList.remove('hide');

    var audio = document.getElementById("audio-8");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr8');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "08:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr8').classList.add('hide');
        document.getElementById('hr9').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 8 - fast sound 
function hr8Fast(){
    document.getElementById('hr8-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-8-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr8');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr8-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 8- slow sound 
function hr8Slow(){
    document.getElementById('hr8-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-8-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr8');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr8-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 9 - real sound 
function hr9TimeReveal(){
    document.getElementById('hr9-img').classList.remove('hide');

    var audio = document.getElementById("audio-9");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr9');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "09:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr9').classList.add('hide');
        document.getElementById('hr10').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 9 - fast sound 
function hr9Fast(){
    document.getElementById('hr9-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-9-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr9');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr9-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 9- slow sound 
function hr9Slow(){
    document.getElementById('hr9-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-9-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr9');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr9-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 10 - real sound 
function hr10TimeReveal(){
    document.getElementById('hr10-img').classList.remove('hide');

    var audio = document.getElementById("audio-10");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr10');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "10:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr10').classList.add('hide');
        document.getElementById('hr11').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 10 - fast sound 
function hr10Fast(){
    document.getElementById('hr10-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-10-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr10');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr10-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 10- slow sound 
function hr10Slow(){
    document.getElementById('hr10-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-10-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr10');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr10-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 11 - real sound 
function hr11TimeReveal(){
    document.getElementById('hr11-img').classList.remove('hide');

    var audio = document.getElementById("audio-11");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr11');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "11:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr11').classList.add('hide');
        document.getElementById('hr12').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 11 - fast sound 
function hr11Fast(){
    document.getElementById('hr11-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-11-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr11');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr11-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 11- slow sound 
function hr11Slow(){
    document.getElementById('hr11-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-11-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr11');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr11-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 12 - real sound 
function hr12TimeReveal(){
    document.getElementById('hr12-img').classList.remove('hide');

    var audio = document.getElementById("audio-12");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr12');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "12:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr12').classList.add('hide');
        document.getElementById('hr13').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 12 - fast sound 
function hr12Fast(){
    document.getElementById('hr12-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-12-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr12');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr12-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 12- slow sound 
function hr12Slow(){
    document.getElementById('hr12-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-12-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr12');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr12-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 13 - real sound 
function hr13TimeReveal(){
    document.getElementById('hr13-img').classList.remove('hide');

    var audio = document.getElementById("audio-13");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr13');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "13:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr13').classList.add('hide');
        document.getElementById('hr14').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 13 - fast sound 
function hr13Fast(){
    document.getElementById('hr13-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-13-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr13');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr13-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 13- slow sound 
function hr13Slow(){
    document.getElementById('hr13-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-13-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr13');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr13-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 14 - real sound 
function hr14TimeReveal(){
    document.getElementById('hr14-img').classList.remove('hide');

    var audio = document.getElementById("audio-14");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr14');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "14:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr14').classList.add('hide');
        document.getElementById('hr15').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 14 - fast sound 
function hr14Fast(){
    document.getElementById('hr14-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-14-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr14');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr14-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 14- slow sound 
function hr14Slow(){
    document.getElementById('hr14-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-14-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr14');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr14-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 15 - real sound 
function hr15TimeReveal(){
    document.getElementById('hr15-img').classList.remove('hide');

    var audio = document.getElementById("audio-15");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr15');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "15:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr15').classList.add('hide');
        document.getElementById('hr16').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 15 - fast sound 
function hr15Fast(){
    document.getElementById('hr15-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-15-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr15');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr15-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 15- slow sound 
function hr15Slow(){
    document.getElementById('hr15-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-15-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr15');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr15-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 16 - real sound 
function hr16TimeReveal(){
    document.getElementById('hr16-img').classList.remove('hide');

    var audio = document.getElementById("audio-16");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr16');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "16:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr16').classList.add('hide');
        document.getElementById('hr17').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 16 - fast sound 
function hr16Fast(){
    document.getElementById('hr16-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-16-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr16');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr16-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 16- slow sound 
function hr16Slow(){
    document.getElementById('hr16-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-16-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr16');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr16-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 17 - real sound 
function hr17TimeReveal(){
    document.getElementById('hr17-img').classList.remove('hide');

    var audio = document.getElementById("audio-17");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr17');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "17:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr17').classList.add('hide');
        document.getElementById('hr18').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 17 - fast sound 
function hr17Fast(){
    document.getElementById('hr17-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-17-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr17');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr17-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 17- slow sound 
function hr17Slow(){
    document.getElementById('hr17-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-17-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr17');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr17-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 18 - real sound 
function hr18TimeReveal(){
    document.getElementById('hr18-img').classList.remove('hide');

    var audio = document.getElementById("audio-18");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr18');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "18:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr18').classList.add('hide');
        document.getElementById('hr19').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 18 - fast sound 
function hr18Fast(){
    document.getElementById('hr18-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-18-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr18');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr18-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 18- slow sound 
function hr18Slow(){
    document.getElementById('hr18-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-18-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr18');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr18-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 19 - real sound 
function hr19TimeReveal(){
    document.getElementById('hr19-img').classList.remove('hide');

    var audio = document.getElementById("audio-19");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr19');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "19:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr19').classList.add('hide');
        document.getElementById('hr20').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 19 - fast sound 
function hr19Fast(){
    document.getElementById('hr19-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-19-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr19');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr19-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 19- slow sound 
function hr19Slow(){
    document.getElementById('hr19-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-19-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr19');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr19-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 20 - real sound 
function hr20TimeReveal(){
    document.getElementById('hr20-img').classList.remove('hide');

    var audio = document.getElementById("audio-20");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr20');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "20:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr20').classList.add('hide');
        document.getElementById('hr21').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 20 - fast sound 
function hr20Fast(){
    document.getElementById('hr20-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-20-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr20');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr20-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 20- slow sound 
function hr20Slow(){
    document.getElementById('hr20-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-20-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr20');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr20-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 21 - real sound 
function hr21TimeReveal(){
    document.getElementById('hr21-img').classList.remove('hide');

    var audio = document.getElementById("audio-21");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr21');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "21:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr21').classList.add('hide');
        document.getElementById('hr22').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 21 - fast sound 
function hr21Fast(){
    document.getElementById('hr21-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-21-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr21');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr21-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 21- slow sound 
function hr21Slow(){
    document.getElementById('hr21-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-21-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr21');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr21-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 22 - real sound 
function hr22TimeReveal(){
    document.getElementById('hr22-img').classList.remove('hide');

    var audio = document.getElementById("audio-22");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr22');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "22:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr22').classList.add('hide');
        document.getElementById('hr23').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 22 - fast sound 
function hr22Fast(){
    document.getElementById('hr22-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-22-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr22');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr22-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 22- slow sound 
function hr22Slow(){
    document.getElementById('hr22-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-22-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr22');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr22-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 23 - real sound 
function hr23TimeReveal(){
    document.getElementById('hr23-img').classList.remove('hide');

    var audio = document.getElementById("audio-23");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr23');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "23:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr23').classList.add('hide');
        document.getElementById('hr24').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 23 - fast sound 
function hr23Fast(){
    document.getElementById('hr23-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-23-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr23');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr23-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 23- slow sound 
function hr23Slow(){
    document.getElementById('hr23-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-23-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr23');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr23-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 24 - real sound 
function hr24TimeReveal(){
    document.getElementById('hr24-img').classList.remove('hide');

    var audio = document.getElementById("audio-24");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr24');
    children = parent.children[0];
    children.style.color = "red";
  
    function showTime () {
        document.getElementById("time").innerHTML = "24:00";
    }
    setTimeout(showTime, 3000);

    function nextHour () {
        document.getElementById('hr24').classList.add('hide');
        document.getElementById('hr25').classList.remove('hide');
        audio.pause();
        document.getElementById("time").innerHTML = "";
    }
    setTimeout(nextHour, 8000);
}

// hour 24 - fast sound 
function hr24Fast(){
    document.getElementById('hr24-img-fast').classList.remove('hide');

    var audio = document.getElementById("audio-24-fast");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr24');
    children = parent.children[1];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr24-img-fast').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 24- slow sound 
function hr24Slow(){
    document.getElementById('hr24-img-slow').classList.remove('hide');

    var audio = document.getElementById("audio-24-slow");
    audio.play();
    audio.loop = true; 

    parent = document.getElementById('hr24');
    children = parent.children[2];
    children.style.color = "red";
  
    function back () {
        document.getElementById('hr24-img-slow').classList.add('hide');
        audio.pause();
        children.style.color = "#FFF500";
    }
    setTimeout(back, 3000);
}

// hour 25 audio
var audio0 = document.getElementById("audio-0");
var audio1 = document.getElementById("audio-1");
var audio2 = document.getElementById("audio-2");
var audio3 = document.getElementById("audio-3");
var audio4 = document.getElementById("audio-4");
var audio5 = document.getElementById("audio-5");
var audio6 = document.getElementById("audio-6");
var audio7 = document.getElementById("audio-7");
var audio8 = document.getElementById("audio-8");
var audio9 = document.getElementById("audio-9");
var audio10 = document.getElementById("audio-10");
var audio11 = document.getElementById("audio-11");
var audio12 = document.getElementById("audio-12");
var audio13 = document.getElementById("audio-13");
var audio14 = document.getElementById("audio-14");
var audio15 = document.getElementById("audio-15");
var audio16 = document.getElementById("audio-16");
var audio17 = document.getElementById("audio-17");
var audio18 = document.getElementById("audio-18");
var audio19 = document.getElementById("audio-19");
var audio20 = document.getElementById("audio-20");
var audio21 = document.getElementById("audio-21");
var audio22 = document.getElementById("audio-22");
var audio23 = document.getElementById("audio-23");
var audio24 = document.getElementById("audio-24");


// hour 25 move around 
function pan(){
    const number = Math.random();
    transformX = number * 30;
    transformY = number * -100;
    document.getElementById('hr25').style.transform="translate("+transformX+"%,"+transformY+"%)";

    function showTime () {
        document.getElementById("time").innerHTML = "25:00";
        document.getElementById("time-travel").classList.remove('hide');
    }
    setTimeout(showTime, 3000);


    audio0.play();
    audio0.loop = true;
    audio1.play();
    audio1.loop = true;
    audio2.play();
    audio2.loop = true;audio3.play();
    audio3.loop = true;
    audio4.play();
    audio4.loop = true;
    audio5.play();
    audio5.loop = true;
    audio6.play();
    audio6.loop = true;
    audio7.play();
    audio7.loop = true;
    audio8.play();
    audio8.loop = true;
    audio9.play();
    audio9.loop = true;
    audio10.play();
    audio10.loop = true;
    audio11.play();
    audio11.loop = true;
    audio12.play();
    audio12.loop = true;
    audio13.play();
    audio13.loop = true;
    audio14.play();
    audio14.loop = true;
    audio15.play();
    audio15.loop = true;
    audio16.play();
    audio16.loop = true;
    audio17.play();
    audio17.loop = true;
    audio18.play();
    audio18.loop = true;
    audio19.play();
    audio19.loop = true;
    audio20.play();
    audio20.loop = true;
    audio21.play();
    audio21.loop = true;
    audio22.play();
    audio22.loop = true;
    audio23.play();
    audio23.loop = true;
    audio24.play();
    audio24.loop = true;
    
}    

// input time
var timeInput = document.getElementById("selected-time");
timeInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

// display div based on input
function controlTime(){

    document.getElementById('hr25').classList.add('hide');
    document.getElementById('time-travel').classList.add('hide');
    document.getElementById("time").innerHTML = "";

    var selectedTime = timeInput.value;
    document.getElementById('hr'+selectedTime).classList.remove('hide');

    audio0.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
    audio12.pause();
    audio13.pause();
    audio14.pause();
    audio15.pause();
    audio16.pause();
    audio17.pause();
    audio18.pause();
    audio19.pause();
    audio20.pause();
    audio21.pause();
    audio22.pause();
    audio23.pause();
    audio24.pause();
}