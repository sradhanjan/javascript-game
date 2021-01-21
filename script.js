score = 0;
cross = true;
document.onkeydown = function(e){
	console.log("key code is: ", e.keyCode)
	if(e.keyCode == 38){
		shaggy = document.querySelector('.shaggy');
		shaggy.classList.add('animateShaggy');
		setTimeout(()=>{
			shaggy.classList.remove('animateShaggy')
		},700);
	}
	if(e.keyCode == 39){
		shaggy = document.querySelector('.shaggy');
		shaggyX = parseInt(window.getComputedStyle(shaggy,null).getPropertyValue('left'));
		shaggy.style.left = shaggyX + 112 + "px";
	}
	if(e.keyCode == 37){
		shaggy = document.querySelector('.shaggy');
		shaggyX = parseInt(window.getComputedStyle(shaggy,null).getPropertyValue('left'));
		shaggy.style.left = (shaggyX - 112) + "px";
	}
}

setInterval(()=>{
	shaggy = document.querySelector('.shaggy');
	gameOver = document.querySelector('.gameOver');
	obstacle = document.querySelector('.obstacle');

	sx = parseInt(window.getComputedStyle(shaggy,null).getPropertyValue('left'));
	sy = parseInt(window.getComputedStyle(shaggy,null).getPropertyValue('top'));
	
	ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
	oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

	offSetX = Math.abs(sx-ox);
	offSetY = Math.abs(sy-oy);
	console.log(offSetX,offSetY)
	if(offSetX<73 && offSetY<52){
		gameOver.style.visiblity = 'visible';
		obstacle.classList.remove('obstacleAni');
	}
	else if(offSetX<145 && cross)
	{
		score+=1;
		updateScore(score);
		cross = false;
		setTimeout(()=>{
			cross = true;
		},1000);

		setTimeout(()=>{
		aniDur =  parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
		newDur = aniDur-0.05;
		obstacle.style.animationDuration = newDur + 's';

		},500)

	}
},10)

function updateScore(score)
{
    scoreCont.innerHTML = "YOUR SCORE: " + score;
}