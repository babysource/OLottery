function isInBall(elem, arr){
	try{
		for(var i=0,len=arr.length; i<len; i++){
			if(arr[i] === elem){
				return true;
			}
		}
		return false;
	}catch(e){return false;}
}

function sortBall(arr){
	try{
		var asc = function(x,y){
			return x == y ? 0 : (x > y ? 1 : -1);
		};
		return arr.sort(asc);
	}catch(e){return arr;}
}

function initSysBall(totalNum,selectedBall){
	var oBallArr = [];
	var randNum = 0;
  for(var i=1,len=totalNum-selectedBall.length; i<=len; i++){
		while(1 == 1){
			randNum = Math.floor(Math.random()*totalNum) + 1;
			if(!isInBall(randNum,selectedBall) && !isInBall(randNum,oBallArr)){
					oBallArr.push(randNum);
					break;
			}
		}
	}
	return oBallArr;
}