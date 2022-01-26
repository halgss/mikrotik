function button_admin(){
    var Myelement1 = document.getElementById("user");
    var Myelement2 = document.getElementById("pass");
    var Myelement3 = document.getElementById("boton-visit");
    var Myelement4 = document.getElementById("boton-submit");
    var Myelement5 = document.getElementById("boton-option");

    Myelement1.style = 'display:block';
    Myelement2.style = 'display:block';
    Myelement4.style = 'display:block';
    Myelement5.style = 'display:block';
    Myelement3.style = 'display:none';

}

function button_visit(){
    var Myelement1 = document.getElementById("user");
    var Myelement2 = document.getElementById("pass");

    console.log(Myelement1.value);
    Myelement1.value = "visitante";
    console.log(Myelement1.value);

    console.log(Myelement2.value);
    Myelement2.value = "";
    console.log(Myelement2.value);
}

function button_option(){
    var Myelement1 = document.getElementById("user");
    var Myelement2 = document.getElementById("pass");
    var Myelement3 = document.getElementById("boton-visit");
    var Myelement4 = document.getElementById("boton-submit");
    var Myelement5 = document.getElementById("boton-option");

    Myelement1.style = 'display:none';
    Myelement2.style = 'display:none';
    Myelement4.style = 'display:none';
    Myelement5.style = 'display:none';
    Myelement3.style = 'display:block';
    
}


