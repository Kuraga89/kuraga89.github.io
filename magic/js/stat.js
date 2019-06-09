<<<<<<< HEAD

=======
>>>>>>> 472374be10974b4bd927e066e3530bb822acb15f
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_GAP = 50;
var TEXT_GAP = 50;
var FRONT_GAP = 15;
var BAR_WIDTH = 40;
var barHeight = 150;
var GAP = 10;

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
	var maxElement = arr[0];	

	for(var i = 1; i < arr.length; i++){
		if(arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};


var renderStatistics = function(ctx, players, times) {
	renderCloud(ctx, CLOUD_X+GAP, CLOUD_Y+GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

	ctx.fillStyle = '#000';

	ctx.font = '16px PT Mono';
	ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, TEXT_GAP);
	ctx.fillText('Список результатов:', CLOUD_X + GAP, TEXT_GAP + FRONT_GAP);

	var maxTime = getMaxElement(times);

	for(var i = 0; i < players.length; i++) {
	ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP+BAR_WIDTH)*i, CLOUD_HEIGHT - (GAP+FRONT_GAP+ GAP+GAP) - ((barHeight * times[i])/maxTime));

	ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_GAP+BAR_WIDTH)*i, CLOUD_HEIGHT - GAP);
		if(players[i] == 'Вы') {
			ctx.fillStyle  = 'rgba(255, 0, 0, 1)';
			ctx.fillRect(CLOUD_X + BAR_WIDTH +(BAR_GAP+BAR_WIDTH) * i, CLOUD_HEIGHT-(GAP+FRONT_GAP+ GAP), BAR_WIDTH, -(barHeight * times[i])/maxTime);
			ctx.fillStyle  = '#000';
		}
		else {
		ctx.fillStyle  = 'rgba(0, 0, 255,' + Math.round(Math.random()*10)/10 +')';
		ctx.fillRect(CLOUD_X + BAR_WIDTH +(BAR_GAP+BAR_WIDTH) * i, CLOUD_HEIGHT-(GAP+FRONT_GAP+ GAP), BAR_WIDTH, -(barHeight * times[i])/maxTime);
			ctx.fillStyle  = '#000';
		}

	
	}
}