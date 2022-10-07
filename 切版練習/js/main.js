// 導覽列
$(document).ready(function () {
    $(".sidebar").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});





$( "#login" ).click(function() {
    $("#login1").click();
  });


  $("#fdtext").click(function() {
    document.getElementById("fdtext1").scrollIntoView( {behavior: "smooth" })
  })


  $("#home").click(function() {
    scrollIntoView( {behavior: "smooth" })
  })

// 回到頂部
// Get the button:
// let mybutton = document.getElementsByID("#backtotop");
// // When the user scrolls down 20px from the top of the document, show the button
// function scrollFunction() {
//     if (document.documentElement.scrollTop > 10) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.documentElement.scrollTop = 0;
// }
$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('#backtotop').click(function(){
        $('html, body').animate({scrollTop : 0},100);
        return false;
    });
    
});


// search menu  

function myFunction() {
  
// JavaScript code

    let input = document.getElementById('myinput').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    
}
}
 // click menu

 window.addEventListener('DOMContentLoaded', function () {

    
    $(".card").attr("data-toggle", "card");  
    
    $(document).on('click', '[data-toggle="card"]', function (event) {   
   
      $('#imagepreview').attr('src', $(this).find('img').attr('src'));
      $('.modal').css('display', 'block');
    });
  
    $('.close').click(function() {
        $('.modal').css('display', 'none');
    });
    
  });



