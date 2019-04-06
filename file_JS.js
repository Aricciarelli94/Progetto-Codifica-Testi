function gestoreCartolina1(){
	try{
		nodoContenuto2.style.display='none';
		nodoContenuto3.style.display='none';
		nodoContenuto1.style.display='inline';
		//alert("sintassi corretta");
		} catch (e){
		alert ("gestoreCartolina1 "+e);
	}
}
function gestoreCartolina2(){
	try{
		nodoContenuto1.style.display='none';
		nodoContenuto3.style.display='none';
		nodoContenuto2.style.display='inline';
		//alert("sintassi corretta");
		} catch (e){
		alert ("gestoreCartolina2 "+e);
	}
}
function gestoreCartolina3(){
	try{
		nodoContenuto1.style.display='none';
		nodoContenuto2.style.display='none';
		nodoContenuto3.style.display='inline';
		//alert("sintassi corretta");
		} catch (e){
		alert ("gestoreCartolina3 "+e);
	}
}

var nodoContenuto1;
var nodoContenuto2;
var nodoContenuto3;
var nodoUnderline;

function gestoreLoad(){                                                              
	try {
		nodoCartolina1=document.getElementById("c1");
		nodoContenuto1=document.getElementById("cart1");
		nodoCartolina1.onclick = gestoreCartolina1;

		nodoCartolina2=document.getElementById("c2");
		nodoContenuto2=document.getElementById("cart2");
		nodoCartolina2.onclick = gestoreCartolina2;

		nodoCartolina3=document.getElementById("c3");
		nodoContenuto3=document.getElementById("cart3");
		nodoCartolina3.onclick = gestoreCartolina3;

		

		//alert("sintassi corretta");
	} catch (e){
		alert ("gestoreLoad "+e);
	}
}
window.onload=gestoreLoad;
