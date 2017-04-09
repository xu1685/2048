function gettop(i,j){
	return 20+i*120;
}

function getleft(i,j){
	return 20+j*120;
}

function getNumberBKcolor(number){
	switch(number){
		case 2: return"#FFCCCC";break;
		case 4: return"#FFFF99";break;//FFFF99
		case 8: return"#CC9966";break;
		case 16: return"#FFCC66";break;

		case 32: return"#FF99FF";break;
		case 64: return"#FF99CC";break;
		case 128: return"#FF9999";break;
		case 256: return"#FF6633";break;

		case 512: return"#FF66FF";break;
		case 1024: return"#FF66CC";break;
		case 2048: return"#FF6699";break;
		case 4096: return"#FF6666";break;
	
	}
	return "black";

}

function getNumbercolor(number){
	if(number<=4)
		return "##505050 ";
	else return "white";

}

function nospace(board){

	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]==0)
				return false;

		}

	}
	return true;
		
}

function nomove(board){

    if(canmoveleft(board)|| canmoveright(board)||canmoveup(board)||canmovedown(board))
        return false;
    return true;

}




function canmoveleft(board){
	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++)
			if(board[i][j]!=0)
				if(board[i][j-1]==0||board[i][j-1]==board[i][j])
					return true;
	return false;		
}


function canmoveup(board){
	for(var i=1;i<4;i++)
		for(var j=0;j<4;j++)
			if(board[i][j]!=0)
				if(board[i-1][j]==0||board[i-1][j]==board[i][j])
					return true;
	return false;		
}

function canmoveright(board){
	for(var i=3;i>=0;i--)
		for(var j=2;j>=0;j--)
			if(board[i][j]!=0)
				if(board[i][j+1]==0||board[i][j+1]==board[i][j])
					return true;
	return false;		
}


function canmovedown(board){
	for(var i=2;i>=0;i--)
		for(var j=3;j>=0;j--)
			if(board[i][j]!=0)
				if(board[i+1][j]==0||board[i+1][j]==board[i][j])
					return true;
	return false;		
}


function midempty(fx,fy,ty,board){
	if(fy-ty==1){return true;}
	else
	{
	  for(j=fy-1;j>ty;j--){
	  	if(board[fx][j]!=0)
	  		return false;
	  }
	  return true;
    }

}


function midempty2(mi,mk,mj,board){
	if(mi-mk==1){return true;}
	else{
		for(i=mi-1;i>mk;i--){
			if(board[i][mj]!=0)
				return false;
		}
		return true;
	}
}

function midempty3(mi,mj,mk,board){
	if(mk-mj==1){return true;}
	else
	{
	  for(j=mk-1;j>mj;j--){
	  	if(board[mi][j]!=0)
	  		return false;
	  }
	  return true;
    }

}


function midempty4(mi,mj,mk,board){
	if(mk-mj==1){return true;}
	else
	{
	  for(i=mk-1;i>mi;i--){
	  	if(board[i][mj]!=0)
	  		return false;
	  }
	  return true;
    }

}


