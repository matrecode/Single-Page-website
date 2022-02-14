if ($(".text-slider").length == 1) { 
              
    var typed_strings =  
        $(".text-slider-items").text(); 

    var typed = new Typed(".text-slider", { 
        strings: typed_strings.split(", "), 
        typeSpeed: 60, 
        loop: true, 
        backDelay: 900, 
        backSpeed: 60, 
    }); 
}