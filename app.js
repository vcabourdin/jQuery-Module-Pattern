(function($) {
    $(document).ready(function() {
        
        var $container = $('#demo');
        
        //Module initialization
        MyModule.init({
            intFade : 2000,
            //Custom event 1
            onEvent1: function() {
                $container.append('<p>Custom event 1</p>');
            },
            //Custom event 2
            onEvent2: function() {
                $container.append('<p>Custom event 2</p>');
            }
        });
        
        //Public method call
        var message = MyModule.publicMethod('jQuery', 'cool');
        $container.append('<p>'+message+'</p>');
        
        //Public parameter call
        message += MyModule.publicOptions.option1;
        $container.append('<p>'+message+'</p>');
    });
})(jQuery);