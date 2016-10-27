// // console.log("playground is up and running");

// //day7 morning challenge 
// var num=100;
// while (num>0){
// 	if (num%7===0){
// 		console.log("Lucky me!");
// 	}
// 	else {
// 		console.log(num);
// 	}
// 	num--;
// }

// console.log("*****next problem*****");
// //day7 shot 2

// for (var i=0; i<=100; i++){
// 	if (i%9===0){
// 		console.log("damn Lucky");
// 	}
// 	else {
// 		console.log(i);
// 	}
// }

function upArr(arr){
	var myArr=[];

	for(var i=0; i<arr.length; i++){
		myArr.push(arr[i].toUpperCase());
	}


	alert(myArr);
	return myArr;
}
upArr(['a','b','c']);


//document.getElementById('output').innerHTML=