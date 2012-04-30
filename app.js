(function($) {
    $(document).ready(function() {
        //Module initialization
        MyModule.init({
            intFade : 2000,
            //Custom event 1
            onEvent1: function() {
                $('body').append('<p>Custom event 1</p>');
            },
            //Custom event 2
            onEvent2: function() {
                $('body').append('<p>Custom event 2</p>');
            }
        });
        
        //Public method call
        var message = MyModule.publicMethod('jQuery', 'cool');
        $('body').append('<p>'+message+'</p>');
        
        //Public parameter call
        message += MyModule.publicOptions.option1;
        $('body').append('<p>'+message+'</p>');
    });
})(jQuery);