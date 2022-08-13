setInterval(() => {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    let vietnam = document.getElementById('vn')
    vietnam.onclick = function(){
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        hours.innerHTML = h + "<br><span>Hours</span>";
        minutes.innerHTML = m + "<br><span>Minutes</span>";
        seconds.innerHTML = s + "<br><span>Seconds</span>";
        
    }
    let london = document.getElementById('ld');
    london.onclick = function() {        
        h = h - 6;                                  
        h = h < 10 ? "0" + h : h; 
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        
        hours.innerHTML = h + "<br><span>Hours</span>";
        minutes.innerHTML = m + "<br><span>Minutes</span>";
        seconds.innerHTML = s + "<br><span>Seconds</span>";
    }

    let newyork = document.getElementById('ny');
    newyork.onclick = function() {   
        h = h < 11 ? (24 - (11 - h)) : h -11;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        
        hours.innerHTML = h + "<br><span>Hours</span>";
        minutes.innerHTML = m + "<br><span>Minutes</span>";
        seconds.innerHTML = s + "<br><span>Seconds</span>";
    }

    let france = document.getElementById('fr');
    france.onclick = function() {
        h = h - 5;  

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s; 

        hours.innerHTML = h + "<br><span>Hours</span>";
        minutes.innerHTML = m + "<br><span>Minutes</span>";
        seconds.innerHTML = s + "<br><span>Seconds</span>";
    }


    // h = h < 10 ? "0" + h : h;
    // m = m < 10 ? "0" + m : m;
    // s = s < 10 ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>"; 

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;    
})



