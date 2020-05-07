var mowGrass = function() {
	for (var y = 0; y < map.size.y; y++) {
	    for (var x = 0; x < map.size.x; x++) {
	        var tile = map.getTile(x, y);
	        for (var i = 0; i < tile.numElements; i++) {
	            var element = tile.getElement(i);
	            element.grassLength = 8;
	        }
	    }
	}
}
var main = function() {
    var daySubscription = context.subscribe('interval.day', function() {
		mowGrass();
    });
};
registerPlugin({
    name: 'Mow Grass Every Day',
    version: '1.0',
    authors: ['OpenRCT2'],
    type: 'remote',
    main: main
});
