function showNumber(i,j,Rnumber){
	var Numbercell=$('#number-cell-'+i+'-'+j);

	Numbercell.css("background-color",getNumberBKcolor(Rnumber));
	Numbercell.css("color",getNumbercolor(Rnumber));
	Numbercell.text(Rnumber);

	Numbercell.animate({
		width:"100px",
	    height:"100px",
	    left:getleft(i,j),
	    top:gettop(i,j)
	},50);

}

function showmove(fx,fy,tx,ty){
	var Numbercell=$('#number-cell-'+fx+'-'+fy);
	Numbercell.animate({
		top:gettop(tx,ty),
		left:getleft(tx,ty)
	},200)
}

function updateScore(score){
	$('#score').text(score);
}