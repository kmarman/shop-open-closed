
const demoId = document.querySelector('#demo');
const notice = document.querySelector('#notice');
const p = document.querySelector('p');


function display(){

    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let format = ".AM";

        m = formatTime(m);
        s = formatTime(s);
    
    if(h>12){
        format = ".PM";
        h = h-12;
        h = "0" + h;
    }
    if(m>0 && m<11 || m>20 && m<31 || m>40 && m<51){
        notice.src = "image/closed.gif";
        p.innerHTML = " It will be open " + " 10" + " munites later."
    }else{
        notice.src = "image/open.gif";
        p.innerHTML = " It will be close " + " 10" + " munites later."
    }

    demoId.innerHTML =  h +':' + m +':' + s + format;
    
}
setInterval(display, 1000);

function formatTime(value){
    if(value <10 ){
        value = "0" + value;
    }
    return value;
}