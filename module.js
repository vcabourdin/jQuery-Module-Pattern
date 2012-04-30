/**
 * MyModule
 * Module Pattern example with jQuery
 * 
 * @property object self The module itself
 * @property object $ The jQuery object
 */
(function(self, $) {
    //Private parameters
    var options = {
        option1 : true,
        option2 : 100,
        onEvent1 : function(){},
        onEvent2 : function(){}
    }
    
    //Public parameters
    self.publicOptions = {
        option1 : ' !'
    }
    
    /** 
     * Private privateMethod
     *
     * Private function with 2 parameters
     * 
     * @param ... param1 The 1st parameter
     * @param ... param2 The 2nd parameter
     * 
     * @return ...
     */
    function privateMethod(param1, param2) {
        //Custom event call
        options.onEvent2();
        
        return param1 + ' is ' + param2;
    }
    
    /** 
     * Public init
     *
     * Public function used for initialize the module
     * 
     * @param object params The module parameters
     * 
     */
    self.init = function(params){
        
        
        //jQuery helper for overriding options
        options = $.extend(options, params);
        
        options.container.hide();
        
        //Custom event call
        options.onEvent1();
        
        options.container.fadeIn(options.intFade);
    }
    
    /** 
     * Public publicMethod
     *
     * Public function with 2 parameters
     * 
     * @param ... param1 The 1st parameter
     * @param ... param2 The 2nd parameter
     * 
     * @return ...
     */
    self.publicMethod = function(param1, param2) {
        return privateMethod(param1, param2);
    };
    
//Module auto exectution
//Add namespace for the module
})(window.MyModule = window.MyModule || {}, jQuery);