ig.module( 
	'plugins.symbols.symbols' 
)
.requires(
	'impact.impact'
)
.defines(function(){

ig.Symbols = ig.Class.extend({

    instance: null,

    staticInstantiate: function( ignore ) {
        if( ig.Symbols.instance == null ) {
            return null;
        }
        else {
            throw("Error: ig.Symbols has already been instantiated. It can only be instantiated once.");
            return ig.Symbols.instance;
        }
    },

    init: function(names, classes) {
        //If no ig classes have been specified (i.e. ig.Game, ig.Image, etc)
        //then default to ig.Entity being the only class to which the
        //symbols are appended.
        if (typeof classes == "undefined") 
            classes = [ig.Entity];
            
        var nameArray = names.split(" ");

        for(var i = 0; i < classes.length; i++){
            var currentClass = classes[i];
            for(var j = 0; j < nameArray.length; j++){
                nameArray[j].replace(/^\s+|\s+$/g,"");
                if (nameArray[j] != "")
                    currentClass[nameArray[j]] = 0x1 << j;
            }
        }
        ig.Symbols.instance = this;
    }


});

});


