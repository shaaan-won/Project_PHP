class Countdown{initCountDown(){var m,i;document.getElementById("days")&&(m=new Date("Jan 17, 2026 12:00:01").getTime(),i=setInterval(function(){var e=(new Date).getTime(),n=m-e,t=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),d=Math.floor(n%36e5/6e4),e=Math.floor(n%6e4/1e3);document.getElementById("days").innerHTML=t,document.getElementById("hours").innerHTML=o,document.getElementById("minutes").innerHTML=d,document.getElementById("seconds").innerHTML=e,n<0&&(clearInterval(i),document.getElementById("days").innerHTML="",document.getElementById("hours").innerHTML="",document.getElementById("minutes").innerHTML="",document.getElementById("seconds").innerHTML="",document.getElementById("end").innerHTML="00:00:00:00")},1e3))}init(){this.initCountDown()}}(new Countdown).init();