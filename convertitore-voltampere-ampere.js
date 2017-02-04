// powered by: Igor Redaelli - www.igorredaelli.com - me@igorredaelli.com

function resettatutto() {
	document.convertitorevaa.x.focus();
}
function calc() {
	x = document.convertitorevaa.x.value;
	valoreyfinale = convert(x);
 	valoreyfinale = roundresult(valoreyfinale);
 	document.convertitorevaa.valoreyfinale.value = valoreyfinale;
}
function calctest() {
	x = document.convertitorevaa.x.value;
	//valoreyfinale = roundresult(valoreyfinale);
	valoreyfinale = convert(x);
 	valoreyfinale = roundresult1(valoreyfinale);
 	document.convertitorevaa.valoreyfinale.value = valoreyfinale;
}
function calcolofinale() {
	valorex1 = document.convertitorevaa.valorex1.value;
	valorex2 = document.convertitorevaa.valorex2.value;
	valoreyfinale  = convert(valorex1,valorex2);
 	valoreyfinale  = roundresult(valoreyfinale);
 	document.convertitorevaa.valoreyfinale.value = valoreyfinale;
}
function calc4() {
	valorex1 = document.convertitorevaa.valorex1.value;
	valorex2 = document.convertitorevaa.valorex2.value;
	x3 = document.convertitorevaa.x3.value;
	valoreyfinale  = convert(valorex1,valorex2,x3);
 	valoreyfinale  = roundresult(valoreyfinale);
 	//valoreyfinalevaloreyfinale = valoreyfinale.toString();
 	//if( valoreyfinalevaloreyfinale.length>12 ) {
 	//	valoreyfinale = parseFloat(valoreyfinale);
 	//	valoreyfinale = valoreyfinale.toPrecision(10);
 	//}
 	document.convertitorevaa.valoreyfinale.value = valoreyfinale;
}
function calc5() {
	x = document.convertitorevaa.x.value;
	valoreyfinale  = convert1(x);
 	valoreyfinale  = roundresult(valoreyfinale);
 	document.convertitorevaa.valoreyfinale1.value = valoreyfinale;
	valoreyfinale  = convert2(x);
 	valoreyfinale  = roundresult(valoreyfinale);
 	document.convertitorevaa.valoreyfinale2.value = valoreyfinale;
}
function calcbase(b1,b2) {
	x = document.convertitorevaa.x.value;
 	document.convertitorevaa.valoreyfinale.value = convertbase(x,b1,b2);
}
function calcbase2() {
	x = document.convertitorevaa.x.value;
	valoreyfinale = convert(x);
 	document.convertitorevaa.valoreyfinale.value = valoreyfinale;
}

function roundresult(x) {
 	valoreyfinale = parseFloat(x);
 	valoreyfinale = roundnum(valoreyfinale,10);
 	return valoreyfinale;
}
function roundnum(x,p) {
	var i;
 	var n=parseFloat(x);
	var m=n.toPrecision(p+1);
	var valoreyfinale=String(m);
	i=valoreyfinale.indexOf('e');
	if( i==-1 )	i=valoreyfinale.length;
	j=valoreyfinale.indexOf('.');
	if( i>j && j!=-1 )
	{
		while(i>0)
		{
			if(valoreyfinale.charAt(--i)=='0')
				valoreyfinale = removeAt(valoreyfinale,i);
			else
				break;
		}
		if(valoreyfinale.charAt(i)=='.')
			valoreyfinale = removeAt(valoreyfinale,i);
	}
	return valoreyfinale;
}
function removeAt(s,i) {
	s = s.substring(0,i)+s.substring(i+1,s.length);
	return s;
}



			function convert(valorex1,valorex2) {
				var iphase = document.convertitorevaa.monotrifase.selectedIndex;
				var amps = valorex1/valorex2;
				if( iphase==1 )
			 		amps/=Math.sqrt(3);
			 	return amps ;
			}
