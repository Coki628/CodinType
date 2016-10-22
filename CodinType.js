var codePhrase = document.getElementById("codePhrase");
var typePhrase = document.getElementById("typePhrase");
var result = document.getElementById("result");
var combo = document.getElementById("combo");
var comboCount = 0;

//文字列を配列に格納
var phrases = new Array();
phrases.push("public");
phrases.push("static");
phrases.push("final int");
phrases.push("system.out.println");
phrases.push("void main");

window.onload = function(){
	init();
}

//初期化処理
function init() {
	result.innerHTML = "Type and Enter to Start";
	codePhrase.innerHTML = getCodePhrase();
}

function getCodePhrase() {

	//0～phrases配列の長さ-1のランダムな整数
	var temp = Math.floor(Math.random() * phrases.length);		

	return phrases[temp];
}

//キーが押された時やる処理
document.onkeydown = function(e) {
	if(e.keyCode == 13){								//Enter押されたら
		if(codePhrase.innerHTML == typePhrase.value) {	//文字列比べて合否
			result.innerHTML = "GOOD!!";

			//コンボ数表示処理
			comboCount += 1;
			if(comboCount >= 2){
				combo.innerHTML = comboCount +" COMBO!";
			}
		} else {
			result.innerHTML = "POOR..";
			comboCount = 0;
			combo.innerHTML ="";
		}
		typePhrase.value = "";						//入力んとこカラにする
		codePhrase.innerHTML = getCodePhrase();		//次の文字列を取得
	}
}