var title,main,target,target1,target2,target3;
title = document.getElementById("title_icon");
main = document.getElementById("main_icon1");
main2 = document.getElementById("main_icon2");
main3 = document.getElementById("main_icon3");
target1 = document.getElementById("broom");
target2 = document.getElementById("products");
target3 = document.getElementById("occasions");

target1.addEventListener("click",function() {
		title.innerHTML = "Cleaning Services";
		main.style.display="block"
		main2.style.display="none"
		main3.style.display="none"
},false);

target2.addEventListener("click",function() {
		title.innerHTML = "Products Used";
		main.style.display="none"
		main2.style.display="block"
		main3.style.display="none"
},false);

target3.addEventListener("click",function() {
		title.innerHTML = "Various Occasions";
		main.style.display="none"
		main2.style.display="none"
		main3.style.display="block"
},false);

