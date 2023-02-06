function traverseArray(arr){
  let direction = [[0,1],[1,0],[0,-1],[-1,0]];
  let visitedIndexes = [];
  let xIndex = 0;
	let yIndex = 0;
	let pathDirection = 0;
  let i=0;
	while(i<arr.length*arr[0].length){
		console.log(arr[xIndex][yIndex]);
		visitedIndexes.push(`${xIndex}${yIndex}`);
		nextValue = arr[xIndex+direction[pathDirection][0]] && arr[xIndex+direction[pathDirection][0]][yIndex+direction[pathDirection][1]]; 
		if(nextValue && !visitedIndexes.includes(`${xIndex+direction[pathDirection][0]}${yIndex+direction[pathDirection][1]}`)){
			xIndex =	xIndex+direction[pathDirection][0];
			yIndex = yIndex+direction[pathDirection][1];
		}else{
    	if(pathDirection === 3){
				pathDirection = 0;
			}else{
				pathDirection++;
			}
			
      xIndex =	xIndex+direction[pathDirection][0];
			yIndex = yIndex+direction[pathDirection][1];
		}
  	i++;
  }
}


traverseArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]);

