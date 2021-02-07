

$(document).ready(function () {
    $(".carousel").carousel({
        interval: 2000,
        
    });
});


//loading//

$(window).on('load', function () {

    $(".sk-cube-grid").fadeOut(500,
        function () {
            $(this).parent().fadeOut(1000,
                function () {
                    $(this).remove();
                });
        });

});
var scrollButton = $("#scroll-top");
$(window).scroll(function () {
    $(this).scrollTop() >= 700 ?  scrollButton.show(): scrollButton.hide();});
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 },0)

});
    
/*
let options ={
    root: null,
    rootMargin: '100px',
    threshold:0.25 
};
let callback = (entries, observer)=>{
    entries.array.forEach(element => {
        if(entry.isIntersecting
           && entry.target.className ==='all-img'){
               let imageUrl = entry.target.getAttribute('data-img');
               if(imageUrl){
                   entry.target.src = imageUrl;
                   observer.unobserver(entry.target);
               }
           }
    });
}
let observer = new IntersectionObserver(callback, Options);
observer.observe(document.querySelector('#f1-img'));
observer.observe(document.querySelector('#f2-img'));
observer.observe(document.querySelector('#f3-img'));
observer.observe(document.querySelector('#f4-img'));
*/