$(document).ready(function(){
        var header = $('body');

        var backgrounds = new Array(
            'url(fotos/1.jpg)', 
            'url(fotos/2.jpg)', 
            'url(fotos/3.jpg)', 
            'url(fotos/4.jpg)',
            'url(fotos/5.jpg)'
        );

        var current = 0;

        function nextBackground() {
            current++;
            current = current % backgrounds.length;
            body.css('background-image', backgrounds[current]);
        };
        setInterval(nextBackground, 100);

        header.css('background-image', backgrounds[0]);
    nextBackground();
});