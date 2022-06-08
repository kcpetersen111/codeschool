let char = document.querySelector('.character');

// let moveLeft = 0;
// let moveTop = 0;
let appleX = 100;
let appleY = 100;
let trail = [];
trail.push({pos:char,x:0,y:0,dx:0,dy:0});

document.addEventListener('keypress', (e)=>{
    if (e.code === 'KeyA') {
        trail[0].dx = -20;
        trail[0].dy = 0;
        // moveLeft = -20;
        // moveTop = 0;
    } else if (e.code === 'KeyD') {
        trail[0].dx = 20;
        trail[0].dy = 0;
        // moveLeft = 20;
        // moveTop = 0;
    } else if (e.code === 'KeyW') {
        trail[0].dx = 0;
        trail[0].dy = -20;
        // moveTop = -20;
        // moveLeft = 0;
    } else if (e.code === 'KeyS') {
        trail[0].dx = 0;
        trail[0].dy = 20;
        // moveTop = 20;
        // moveLeft = 0;
    }

});



function grow(){
    let newBody = document.createElement('div');
    newBody.style.left = appleX;
    newBody.style.top = appleY;
    document.querySelector("#tail").appendChild(newBody);
    newBody.classList.add('body');
    // newBody.style.left = xPos + 'px';
    
    console.log("snake Grew");

    trail.push({pos: newBody, x: trail[trail.length-1].x-trail[trail.length-1].dx, y: trail[trail.length-1].y-trail[trail.length-1].dy, dx:trail[0].dx,dy:trail[0].dy});
    appleX = Math.floor(Math.random() * 25)*20;
    appleY = Math.floor(Math.random() * 25)*20;
    document.querySelector('.apple').style.left = appleX + 'px';
    document.querySelector('.apple').style.top = appleY + 'px';
    // debugger;

}


function main(){

    
    
    for (let i = 0; i < trail.length; i++) {
        let trailX = trail[i].x ;
        let trailY = trail[i].y ; 
        if (trail[0].x === trailX && trail[0].y === trailY && i !== 0) {
            console.log("Game Over");
            alert("Game Over");
            // trail = [];
            // trail.push({pos:char,x:0,y:0});

            // xPos = 0;
            // yPos = 0;
            // trail[0].pos.style.left = 0 + 'px';
            // trail[0].pos.style.top = 0 + 'px';
        } else {
            if(trail[0].x===appleX && trail[0].y===appleY){
                grow();
            }
            trail[i].x += trail[i].dx;
            trail[i].y += trail[i].dy;
            if (trail[i].x >= 25*20) {
                trail[i].x = 0;
            } else if (trail[i].x < 0) {
                trail[i].x = 25*20;
            } else if (trail[i].y >= 25*20) {
                trail[i].y = 0;
            } else if (trail[i].y < 0) {
                trail[i].y = 25*20;
            }
            trail[i].pos.style.left = trail[i].x + 'px';
            trail[i].pos.style.top = trail[i].y + 'px';
            // debugger;
        }
        if (i!=0){
            trail[i].dx = trail[i-1].dx
            trail[i].dy = trail[i-1].dy
        }
    }   

   
    // xPos += moveLeft;
    // yPos += moveTop;
    // char.style.left = xPos + 'px';
    // char.style.top = yPos + 'px';
    // setTimeout(main, 1000/3);
    //wait for 1 second

    
    
}

setInterval(main,1000/5);
// ();
