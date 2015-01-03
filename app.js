(function(){
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true
	}
	var app = angular.module('store', [ ]);


	app.controller('StoreController', function(){
		this.product = gem;
	});
})();