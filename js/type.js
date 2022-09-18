//hero section 

document.addEventListener("DOMContentLoaded",function(){
    var i = 0;
    var text = "Pesto Green is an ESG tech company that strives to create a more sustainable world.";
    var speed = 100;
    function type(){
            document.getElementById("type").innerHTML += text.charAt(i);
            i++;
            setTimeout(type,speed);
    }

    type();
});