$(document).ready(function(){
        var header = $('body');

        var backgrounds = new Array(
            'url(fotos/DSC_1237.jpg)', 
            'url(fotos/DSC_1283.jpg)', 
            'url(fotos/DSC_1358.jpg)', 
            'url(fotos/DSC_1393.jpg)',
            'url(fotos/DSC_1396.jpg)'
        );

        var current = 0;

        function nextBackground() {
            current++;
            current = current % backgrounds.length;
            body.css('background-image', backgrounds[current]);
        }
        setInterval(nextBackground, 1000);

        header.css('background-image', backgrounds[0]);
});