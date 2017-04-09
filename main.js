var board=new Array();
var score=0;
var times=new Array();

$(document).ready(function(e){
	 newgame();

});

function newgame(){
	//初始化
	init();
	//在随机的两个格子里生成数字
	generateNumber();
	generateNumber();
}

function init(){
	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		  {
		  	var cell=$('#cell-'+i+'-'+j);
		  	cell.css("top",gettop(i,j));
		  	cell.css("left",getleft(i,j));
		  }

	}

	for(var i=0;i<4;i++)
	{
	      board[i]=new Array();
	      times[i]=new Array();
          for(var j=0;j<4;j++){
    	  board[i][j]=0;
    	  times[i][j]=0;}
    } 

    updateboard();
    score=0;
    
}


function updateboard(){
	$(".number-cell").remove();
	for(var i = 0;i<4;i++){
	   for ( var j = 0; j < 4; j++) {
	    	$("#container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');

	    	
	    	var theNumberCell=$('#number-cell-'+i+'-'+j);
 
	    	
            if(board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',gettop(i,j));
                theNumberCell.css('left',getleft(i,j));
            }else{
                theNumberCell.css('width','100px');
                theNumberCell.css('hegiht','100px');
                theNumberCell.css('top',gettop(i,j));
                theNumberCell.css('left',getleft(i,j));
                //NumberCell覆盖
                theNumberCell.css('background-color',getNumberBKcolor(board[i][j]));//返回背景色
                theNumberCell.css('color',getNumbercolor(board[i][j]));//返回前景色
                theNumberCell.text(board[i][j]);
            }
	    		
	    		

	    	

	    }
	}
}




function generateNumber(){
  if (nospace(board))
    return false;

	//确定位置
  for(var times=0;times<100;times++){
	var x=parseInt(Math.floor(Math.random()*4));
	var y=parseInt(Math.floor(Math.random()*4));
	if(board[x][y]==0){
		break;
	}
	else if(times==40){

		for(var i=0;i<4;i++ )
			for(var j=0;j<4;j++ )
				if(board[i][j]==0){
					x=i;
					y=j;
				}

	}
  }

	//确定数字
	var Rnumber=Math.random()<0.5?2:4;
	
	//显示数字
	board[x][y]=Rnumber;
	showNumber(x,y,Rnumber);


    return true;
	
}


//用户操作
$(document).keydown(function(event){
	switch (event.keyCode){
		case 37://left
		  if(moveleft()){
			generateNumber();
			whethergameover();
		  }
		break;

		case 38://up
          if(moveup()){
          	generateNumber();
          	whethergameover();
          }
        break;

        case 39://right
          if (moveright()){
          	generateNumber();
          	whethergameover();
          }
        break;

        case 40://down
          if(movedown()){
          	generateNumber();
          	whethergameover();
          }
        break;


	}
});


function whethergameover(){
	if(nospace(board)&&nomove(board))
		gameover();
}

function gameover(){
	alert("gameover~!");
}


function moveleft(){
	if(!canmoveleft(board))
		return false;

	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			times[i][j]=0;}
	}

	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]==0)
				board[i][j]=0;
			if(board[i][j]!=0)//非零方块移动
				for(var k=0;k<j;k++)
				{
                  if(board[i][k]==0&&midempty(i,j,k,board))//判断是否为空
                  	   {showmove(i,j,i,k);
                  		board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue;
                        }
                  else if(board[i][j]==board[i][k]&&midempty(i,j,k,board)&&times[i][k]==0)//判断是否相等
                  		{showmove(i,j,i,k);
                  	    board[i][k]=board[i][k]+board[i][j];
                        board[i][j]=0;
                        times[i][k]=1;
                        score+=board[i][k];
                        updateScore(score);
                        continue;}
                  
                 
                } 

		}
	}


      setTimeout("updateboard()",200);
    return true;

}

function moveup(){
	if(!canmoveup(board))
		return false;

	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			times[i][j]=0;}
	}


	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]==0)
				board[i][j]=0;
			if(board[i][j]!=0)//非零方块移动
				for(var k=0;k<i;k++){
                  if(board[k][j]==0&&midempty2(i,k,j,board))//判断相邻块是否为空
                  	   {showmove(i,j,k,j);
                  	   board[k][j]=board[i][j];
                       board[i][j]=0;
                       continue;}
                  if(board[k][j]==board[i][j]&&midempty2(i,k,j,board)&&times[k][j]==0)//判断是否相等
                  	{   showmove(i,j,k,j);
                  		board[k][j]=board[i][j]+board[k][j];
                        board[i][j]=0;
                        times[k][j]=1;
                        score+=board[k][j];
                        updateScore(score);
                        continue;}
                  

				}
		}
	}

    setTimeout("updateboard()",200);
    return true;

}


function moveright(){
	if(!canmoveright(board))
		return false;

	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			times[i][j]=0;}
	}


	for(var i=3;i>=0;i--){
		for(var j=2;j>=0;j--){
			if(board[i][j]==0)
				board[i][j]=0;
			if(board[i][j]!=0)//非零方块移动
				for(k=3;k>j;k--){
                  if(board[i][k]==0&&midempty3(i,j,k,board))//判断相邻块是否为空
                  	{ showmove(i,j,i,k);
                  		board[i][k]=board[i][j];
                    board[i][j]=0;continue;}
                  if(board[i][k]==board[i][j]&&midempty3(i,j,k,board)&&times[i][k]==0)//判断是否相等
                  	{   showmove(i,j,i,k);
                  		board[i][k]=board[i][k]+board[i][j];
                        board[i][j]=0;
                        times[i][k]=1;
                        score+=board[i][k];
                        updateScore(score);
                        continue;}
                 
                  	

				}
		}
	}
    setTimeout("updateboard()",200);
    return true;
}


function movedown(){
	if(!canmovedown(board))
		return false;

	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			times[i][j]=0;}
	}


	for(var i=2;i>=0;i--){
		for(var j=3;j>=0;j--){
			if(board[i][j]==0)
				board[i][j]=0;
			if(board[i][j]!=0)//非零方块移动
				for(k=3;k>i;k--){
                  if(board[k][j]==0&&midempty4(i,j,k,board))//判断相邻块是否为空
                  	{ showmove(i,j,k,j);
                  		board[k][j]=board[i][j];
                    board[i][j]=0;continue;}
                  if(board[k][j]==board[i][j]&&midempty4(i,j,k,board)&&times[k][j]==0)//判断是否相等
                  	{   showmove(i,j,k,j);
                  		board[k][j]=board[k][j]+board[i][j];
                        board[i][j]=0;
                        times[k][j]=1;
                        score+=board[k][j];
                        updateScore(score);
                        continue;}
                  


				}
		}
	}
    setTimeout("updateboard()",200);
    return true;
}
