document.addEventListener("DOMContentLoaded",function(){
    var i = 0;
    var text = "Pesto Green is a ESG tech company that strives to create a better world.";
    var speed = 100;
    function type(){
            document.getElementById("type").innerHTML += text.charAt(i);
            i++;
            setTimeout(type,speed);
    }

    type();
});