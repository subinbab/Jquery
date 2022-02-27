

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });

    $("button.continue").html("next step");
    $("button").click(function () { 
        $("p").hide();
     })
    

    $(".doubleClick").dblclick(function(){
        $(this).hide();
    })

    $("#mouseentered").mouseenter(function(){
        $("p").html("<h1>mouse enter</h1>")
    })
    $("#mouseentered").mouseleave(function(){
        $("p").html("<h1>leaved</h1>")
    })
    $("#mouseentered").mousedown(function(){
        $("h5").html("<h1>mouse down </h1>")
        // alert("mouse down");
    })

    $("#mouseentered").mouseup(function(){
        $("h5").html("<h1>mouse up </h5>")
    })

    $("#mouseentered").hover(function () { 
        $("#mouse-prop").css("background-color","red")
     },
     function(){
         $("#mouse-prop").css("background-color","yellow")
     })

     $("input").focus(function(){
         $("input").css("background-color","green")
     })

     $("input").blur(function(){
         $("input").css("background-color","yellow")
     })

     $("#on-function").on({
         mouseenter:function(){
             $("#on-function").css("background-color","black");
         },
         mouseleave:function(){
             $("#on-function").css("background-color","white");
         },
         click:function(){
             $("#on-function").html("<h1>hello</h1>")
         }
     })

    $("#hide").click(function(){
        $("#hide-show").hide(1000);
    })

    $("#show").click(function(){
        $("#hide-show").show(1000)
    })

    $("#toggle").click(function(){
        $("#hide-show").toggle()
    })

    $("#fade").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
  });
    $("#fade-out").click(function () { 
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
     })

    $("#fade-toggle").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    })

    var root = "https://jsonplaceholder.typicode.com/posts/1";
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:"GET",
        datatype:"json",
        success:function(result){
            $("#weather-content").html("<span>"+result["userId"]+"</span>")
        }
    })

});