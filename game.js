window.alert("game is starting")
score = 0;
cross = true;
document.onkeydown = function(e){
	console.log("key code is :", e.keyCode)
	if (e.keyCode==38) {
		dino = document.querySelector('.dino');
		dino.classList.add('animateDino');
		setTimeout(() => {
			
			dino.classList.remove('animateDino')
		},700);
	}

	if (e.keyCode==39) {
		dino = document.querySelector('.dino');
		dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		dino.style.left = dinoX + 112 + "px";
	}
	if (e.keyCode==37) {
		dino = document.querySelector('.dino');
		dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		dino.style.left = (dinoX - 112) + "px";
	}
}


setInterval(() => {
	dino = document.querySelector('.dino');
	gameover = document.querySelector('.gameover');
	obstacle = document.querySelector('.obstacle');
	dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
	dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
	ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
	oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);


if (offsetX< 73 && offsetY< 52) {
	gameover.innerHTML = "gameover - reload to play again";
	obstacle.classList.remove('obstacleAni','animateDino')
	dino.classList.remove('dino')

}
else if (offsetX<145 && cross){
	score+=1;
	updateScore(score);
	cross = false;
	setTimeout(() => {
		cross = true;

	},1000);
	setTimeout(() => {
	aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
	newDur = aniDur - 0.01;
	obstacle.style.animationDuration = newDur + 's';
	},500);
}
},10);
function updateScore(score){

	scorecount.innerHTML = "Your score: " + score
}