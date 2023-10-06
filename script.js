
   
    
function glow(){
    var bars=document.getElementById("bar");
    var mark=document.getElementById("xmark");
    var uls=document.getElementById("ul")


    if (bars.style.display!=="none" && mark.style.display=="none" ) {

        bars.style.display="none"
        uls.style.display="block"
        mark.style.display="block"
        }
        else{
            bars.style.display="block"
            uls.style.display="none"
            mark.style.display="none"
    
        }
    }