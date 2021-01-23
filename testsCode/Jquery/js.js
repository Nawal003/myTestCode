//en Javascript

// document.getElementById('test').onclick = function(){
//     alert('clicked');
//     // document.getElementById(this).style.display = 'none';   
//    }


//en Jquery

$(document).ready(function (){
    $('#test').on('click',function () {
      $(this).hide();
    });
    $('#p1').on('mouseover', function(){
        $(this).hide();
    });
    $('#p2').on('click', function(){
        $(this).hide();
    });
    $('#p3').on('dblclick', function(){
        $(this).hide();
    })
    $('#p4').on('mouseout', function(){
        $(this).hide();
    })

});