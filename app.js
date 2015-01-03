(function(){
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: false
	}
	var app = angular.module('store', [ ]);


	app.controller('StoreController', function(){
		this.product = gem;
	});
})();