/*var draw = document.getElementById('drawing-board');
var str = '$ echo welcome to zhiqing.info\n'+
			'$ cat about.me\n'+
			'$ I am a student.\n'+
			'$ My major is computer science.\n'+
			'$ I am study in SUSE.\n'+
			'$ I like movies,music and reading.\n'+
			'$ If you want to contact me,\n'+
			'$ You can send email to i@zhiqing.info\n'+
			'$ echo Thanks!\n'+
			'$ exit';

var index = 0;
var result = '';

var t = false;
var curEle;

cur();
type(str, draw, 50);
function type(str, obj, sd){
	if(index==str.length){
		clearTimeout(curTimer);
		curEle = document.getElementById('cur');
		chcur();
		return;
	}
	if(str.charAt(index) == '\n'){
		result += '<br>';
		index++;
		obj.innerHTML = result;
		zsd = 5 * sd;
	}else{
		result += str.charAt(index++);
		obj.innerHTML = result;
		zsd = sd;
	}
	setTimeout(function(){type(str, obj, sd);}, zsd);
}

function cur(){
	draw.innerHTML += '<span id="cur" style="font-weight: bold;">_</span>';
	curTimer = setTimeout(function(){cur()}, 100);
}

function chcur(){
	if(t){
		curEle.innerHTML = ' ';
		t = false;
		setTimeout(function(){chcur()}, 500);
	}else{
		curEle.innerHTML = '\u007c';
		t = true;
		setTimeout(function(){chcur()}, 500);
	}
}
*/

printer.str = '$ echo welcome to zhiqing.info\n'+
			'$ cat about.me\n'+
			'$ I am a student.\n'+
			'$ My major is computer science.\n'+
			'$ I am study in SUSE.\n'+
			'$ I like movies,music and reading.\n'+
			'$ If you want to contact me,\n'+
			'$ You can send email to i@zhiqing.info\n'+
			'$ echo Thanks!\n'+
			'$ exit';
printer.toId = 'drawing-board';
printer.start();
