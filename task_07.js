
function DLR(){
	var root = document.getElementById('root');
	var arrQuery = [];
	arrQuery.push(root);
	var arrStack = [];
//  alert(arrQuery);
	while(!arrStack||root){
		if(root.children.length == 2){
			arrQuery.push(root.children[0]);
			arrStack.push(root.children[1]);
			root = root.children[0];
		}
		if(root.children.length == 1){
			arrQuery.push(root.children[0]);
			root = root.children[0];
		}
		if(root.children.length == 0){
			var del = arrStack.pop();
			arrQuery.push(del);
			root = del;
		}
	}
	for (var i=0; i<arrQuery.length; i++){
		(function(i){
			setTimeout(function(){
				arrQuery[i].style.backgroundColor="green";
			},i*1000);
		})(i);
	}
}
//中序
function LDR(){
	var root = document.getElementById('root');
	var arrQuery = [];
	var arrStack = [];
	while(!arrStack||root){
		if(root.children.length==2){
			if(arrQuery.indexOf(root.children[0])==-1){
				arrStack.push(root);
				root = root.children[0];			
			}else if(arrQuery.indexOf(root.children[1])==-1){
				arrQuery.push(root);
				root = root.children[1];
			}
			else{				
				arrStack.pop();
				var del = arrStack.pop();
				arrStack.push(del);
				root = del;
			}

		}
		if(root.children.length == 0){
			arrQuery.push(root);
			var del = arrStack.pop();
			root = del;
		}
		for (var i=0; i<arrQuery.length; i++){
			(function(i){
			setTimeout(function(){
				arrQuery[i].style.backgroundColor="green";
			},i*1000);
			})(i);
	}
}
}
//后序

function LRD(){
	var root = document.getElementById('root');
	var arrQuery = [];
	var arrStack = [];
	while(!arrStack||root){
		if(root.children.length == 2){//两个孩子
			if (arrQuery.indexOf(root.children[0])==-1){//如果左孩子没遍历 根节点设为左孩子
				arrStack.push(root);
				root = root.children[0];
			}else if (arrQuery.indexOf(root.children[1])==-1){//如果右孩子没遍历 根节点设为右孩子
				root = root.children[1];
			}else{
				arrQuery.push(root);//否则孩子都遍历了 根节点指向上一层
				arrStack.pop();
				root = arrStack.pop();
				arrStack.push(root);	
			}
		if(root.children.length == 0){//叶子节点
			arrQuery.push(root);//该根节点遍历
			var del = arrStack.pop();
			arrStack.push(del);
			if(arrQuery.indexOf(del.children[1])>-1){ //判断右子树是否已经遍历
				root = arrStack.pop();//若已经遍历 弹栈 即返回父节点
				arrQuery.push(root); //父节点遍历到
			}
			else{
				arrQuery.push(del.children[1]);
				root =  del; //否则 返回父节点
			}
		}
	}
	for (var i=0; i<arrQuery.length; i++){
	(function(i){
		setTimeout(function(){
		arrQuery[i].style.backgroundColor="green";
		},i*1000);
		})(i);
	}
}
}

function CLEAR(){
		var allDiv = document.getElementsByTagName('div');
		for (var i = 0; i < allDiv.length; i++) {
			allDiv[i].style.backgroundColor="white";
		}
}