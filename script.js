

function test(x) {

    
    
    


    if ( x == 0){
        y = "dessin"
        z = "buttonDessin"
        buttonValue = document.getElementById("buttonDessin").value

    }

    if ( x == 1){
        y = "objet"
        z = "buttonObjet"
        buttonValue = document.getElementById("buttonObjet").value
    }

    if ( x == 2){
        y = "fiction"
        z = "buttonFiction"
        buttonValue = document.getElementById("buttonFiction").value
    }
    
    if ( x == 3){
        y = "memoire"
        z = "buttonMemoire"
        buttonValue = document.getElementById("buttonMemoire").value
    }
    

        if (buttonValue == "off") {

            const reset = document.getElementsByClassName("button");
            for (let i = 0; i < reset.length; i++) {
                reset[i].value = "off"
                reset[i].style.backgroundColor = "rgba(194, 194, 194, 0.486)"
                reset[i].style.color = "black"
            }


            document.getElementById(z).value = "on"
            document.getElementById(z).style.backgroundColor = "black"
            document.getElementById(z).style.color = "white"

            const icons = document.getElementsByClassName("icons");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.display = "none";
            }

            const selection = document.getElementsByClassName(y);
            for (let i = 0; i < selection.length; i++) {
                selection[i].style.display = "inline";
            
            }       
        } 

        if (buttonValue == "on") {



            document.getElementById(z).value = "off"
            document.getElementById(z).style.backgroundColor = "rgba(194, 194, 194, 0.486)"
            document.getElementById(z).style.color = "black"

            const icons = document.getElementsByClassName("icons");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.display = "inline";
            }


        
        }
    


}


