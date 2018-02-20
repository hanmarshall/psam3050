var didScroll = false;

window.onscroll = changeColor;

function changeColor() {
    didScroll = true;
    $("span").addClass("punctuation");
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
        $("span").removeClass("punctuation");
    }
}, 100);

