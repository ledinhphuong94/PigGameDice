 
var tempScore;
var finalScore;
var active;
var flag;
var flag2;
var dicePast = 0;
var setScore;


khoiTao();

console.log(flag);

document.querySelector('.buttonSubmit').addEventListener('click',function(){
	if(flag2){
		setScore = document.querySelector('.nhapSoX').value;
		
		if(setScore){
			flag =true;
			document.getElementById('noti').style.display = 'none';
	
		}else{
			flag = false;
		}

		console.log(flag);
		
	}
		
	
})


document.querySelector('.btn-roll').addEventListener('click',function(){

	if(flag){
		var dice = Math.floor(Math.random()*6+1);
		var dice2 = Math.floor(Math.random()*6+1);

		document.querySelector('.dice').style.display = 'block';
		document.querySelector('.dice').src = "dice-"+dice+".png";
		
		document.querySelector('.dice2').style.display = 'block';
		document.querySelector('.dice2').src = "dice-"+ dice2 + ".png";

		tempScore += (dice + dice2);
		document.getElementById('score-'+active).textContent = tempScore;
		if(dice == 1 || dice2 == 1){
			chuyenNguoiChoi();
		}

		/*
		if(dicePast == dice && dicePast==6){
			finalScore[active] = 0;
			document.querySelector('#current-'+active).textContent = finalScore[active];
			chuyenNguoiChoi();

		};
		dicePast = dice;
		*/

		if(dice == dice2 && dice == 6){
			finalScore[active] = 0;
			document.querySelector('#current-'+active).textContent = finalScore[active];
			chuyenNguoiChoi();
		}

	}
	
});


document.querySelector('.btn-hold').addEventListener('click',function(){
	console.log(flag);
	if(flag){
		finalScore[active] += tempScore;
	document.getElementById('current-'+active).textContent = finalScore[active];
	
	


	if(finalScore[active] >= setScore){
		document.querySelector('.player-'+active+'-panel').classList.add('winner');
		document.querySelector('.player-'+active+'-panel').classList.remove('active');	
		document.querySelector('#name-'+active).textContent ='Winner!';
		flag =false;
		flag2 = false;
	}else{
		chuyenNguoiChoi();		
	}
	tempScore = 0;
	document.getElementById('score-'+active).textContent = tempScore;
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
	}

	

});

document.querySelector('.btn-new').addEventListener('click',function(){
	document.querySelector('#name-0').textContent = 'PLAYER 1';
	document.querySelector('#name-1').textContent = 'PLAYER 2';
	document.querySelector('.player-'+active+'-panel').classList.remove('winner');	
	document.querySelector('.player-'+active+'-panel').classList.remove('active');	
	document.querySelector('.player-0-panel').classList.add('active');

	khoiTao();
})

function chuyenNguoiChoi(){
	tempScore = 0;
	document.getElementById('score-'+active).textContent = tempScore;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');		
	active == 0?active =1: active =0;
}

function khoiTao(){
	setScore = 0;
	document.querySelector('.nhapSoX').value = '';
	flag = false;
	flag2 = true;
	tempScore = 0;
	finalScore = [0,0];
	active = 0;
	document.getElementById('noti').style.display = 'block';
	

	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
}