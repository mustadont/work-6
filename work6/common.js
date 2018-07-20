function fun1(){
	var rtl = document.getElementById('rtl').value;
	var ttl = document.getElementById('ttl');

	var rtr = document.getElementById('rtr').value;
	var ttr = document.getElementById('ttr');

	var rbr = document.getElementById('rbr').value;
	var tbr = document.getElementById('tbr');

	var rbl = document.getElementById('rbl').value;
	var tbl = document.getElementById('tbl');
	

	ttl.value = rtl;
	ttr.value = rtr;
	tbr.value = rbr;
	tbl.value = rbl;
	var block = document.getElementById('block');
	block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px '
}