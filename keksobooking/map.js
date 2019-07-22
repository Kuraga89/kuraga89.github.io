


var showAddressValue = function(width, height) {
	var address = noticeForm.querySelector('#address');
	var top = Math.round(getCoords(mapPinMain).top + width/2);
	if(height) {
		var left = Math.round(getCoords(mapPinMain).left + height/2);
	}
	else {
		var left = Math.round(getCoords(mapPinMain).left + width/2);
	}	
	address.value = top + ', '+ left;
}





