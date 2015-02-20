
var doOperations =  function(){
arguments=([1,9,2,8,5]);
window.alert('Los numeros ingresados son:'+arguments);

	window.alert('MIN value is: ' + getMin(arguments));
	console.log('MIN value is: ' + getMin(arguments));
	window.alert('MAX value is: ' + getMax(arguments));
	console.log('MAX value is: ' + getMax(arguments));
	window.alert('AVERAGE value is: ' + getAvg(arguments));
	console.log('AVERAGE value is: ' + getAvg(arguments));
	window.alert('Sum value is: ' + sum(arguments));
	console.log('Sum value is: ' + sum(arguments));

};
var sum =  function(nums, pos){
	
	if (pos == undefined)
		pos = nums.length - 1
		
	if (pos == 0)
		return nums[0];
	
	return nums[pos] + sum(nums, pos - 1);
};
var getMax=  function(nums,currMax,pos){
   if (pos == undefined)
  pos = nums.length - 1;
  
  if (currMax == undefined)
  currMax=nums[pos-1];

  if (pos==-1)
  return currMax;
  
   if (nums[pos]>currMax)
		currMax=nums[pos];
  return  getMax(nums,currMax,pos - 1); 


};

var getMin=  function(nums,currMin,pos){
  if (pos == undefined)
  pos = nums.length - 1;
  
  if (currMin == undefined)
  currMin=nums[pos-1];
  
  if (pos==-1)
  return currMin;
  
   if (nums[pos]<currMin)
		currMin=nums[pos];
  return  getMin(nums,currMin,pos - 1); 
};

var getAvg =  function(nums, pos){
if (pos == undefined)
		pos = nums.length - 1
		posavg=nums.length
	if (pos == 0)
		return nums[0];
	
	return sum(nums)/posavg;
}
	
doOperations();