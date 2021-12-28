$(function() {

    let images = [
        'img/rx7_fc.jpg',  // index = 0
        'img/rx7_fd.jpg',  // index = 1
        'img/s13.jpg',     // index = 2
        'img/supra.jpg',   // index = 3
    ];

    function make_the_main_image(id){
        $('.main_img').css('background-image', 'url(' + images[id] + ')');
    }

    function highlight(content){

        for(i = 0; i < 4; i++){
            $('#' + String(i)).removeClass('active');
        }

        content.addClass('active');
    }

   let j = 1;
    let timerId = setInterval(() => {
        if(j == 4){
            j = 0;
        }
        console.log(j);
        make_the_main_image(j);
        highlight($('#' + String(j)));
        j++;
    }, 2000);

    $(".photo").click(function() {

        let conteiner = $($(this));
        let id_img = this.id;
    
        clearInterval(timerId);

        highlight(conteiner);
        make_the_main_image(id_img);
    });
});
