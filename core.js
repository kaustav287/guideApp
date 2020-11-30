let UIelements = (function(){

    var tags = {

        up : "up",
        low : "low",
        mid : "mid",
        bottom : "bottom",
        sidebar : "sidebar",
        searchbar : "search",
        navigation : "nav"
    }

    return {

        get_input : function(){

        },

        get_tags : function(){

            return tags
        }
    }
})();



let ControlModule = (function(ui){

    var setupEvents = function(){

     DOM =  UIelements.get_tags;
     INPUT = UIelements.get_input();

    }

    return {

        init : function(){
            setupEvents();
            console.log("Application is running");
        }
    }
})(UIelements);