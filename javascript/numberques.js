let nowques = document.querySelectorAll('.nowques');
let numOfLastQues = document.querySelectorAll('.num');
let types = ["islam","cul","programmation","arabic","sport","history","geo","science","animals"];

for(let i = 0; i<types.length; i++){
	nowques[i].innerHTML = localStorage.getItem(types[i]);
};

numOfLastQues[0].innerHTML = islamQues.length;
numOfLastQues[1].innerHTML = culQues.length;
numOfLastQues[2].innerHTML = programmationQues.length;
numOfLastQues[3].innerHTML = arabicQues.length;
numOfLastQues[4].innerHTML = sportQues.length;
numOfLastQues[5].innerHTML = historyQues.length;
numOfLastQues[6].innerHTML = geoQues.length;
numOfLastQues[7].innerHTML = scienceQues.length;
numOfLastQues[8].innerHTML = animalsQues.length;