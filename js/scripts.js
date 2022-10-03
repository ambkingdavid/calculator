// function for final evaluation
function equate(num1, num2) {
    sign = num1[num1.length-1]
    uNum = num1.slice(0, -1);
    if (sign == "+") {
        addition = parseFloat(uNum) + parseFloat(num2) ;
    }
}


//function to add numbers
function add(num1, num2) {
    uNum = num1.slice(0, -1);
    addition = parseFloat(uNum) + parseFloat(num2) ;
    return addition + " " ;
}
   

//function to subtract numbers
function sub(num1, num2) {
    uNum = num1.slice(0, -1);
    subtraction = parseFloat(uNum) - parseFloat(num2) ;
    return subtraction + " " ;
}

//function to multiply numbers
function multi(num1, num2) {
    uNum = num1.slice(0, -1);
    multiplication = parseFloat(uNum) * parseFloat(num2) ;
    return multiplication + " " ;
}


//function to divide numbers
function divide(num1, num2) {
    uNum = num1.slice(0, -1);
    division = parseFloat(uNum) / parseFloat(num2) ;
    return division + " " ;
}


function deleteNumber(num) {
    uNum = num.slice(0, -1);
    return uNum;
}
//function to check if a number is a decimal number
function numberTest(m) {
    let result = (m - Math.floor(m)) !== 0;

    if (result)
        return "true";
    else
        return "false";
}




$(document).ready(function () {
    //number buttons

    // number zero
    $(".zero").click(function () {
        const Btn = $(".zero").val();
        const disp = $(".current-display").val()
        if(disp[0] == "0") {
            if(disp.length < 2) {
                $(".current-display").val(disp)
            }
            else{
                $(".current-display").val(disp + Btn)
            }
           
        }
        else{
            $(".current-display").val(disp + Btn)
        }
        
    })

    // number one
    $(".one").click(function () {
        const Btn = $(".one").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

     // number two
     $(".two").click(function () {
        const Btn = $(".two").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

     // number three
     $(".three").click(function () {
        const Btn = $(".three").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

     // number four
     $(".four").click(function () {
        const Btn = $(".four").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

     // number five
     $(".five").click(function () {
        const Btn = $(".five").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

    // number six
    $(".six").click(function () {
        const Btn = $(".six").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

    // number seven
    $(".seven").click(function () {
        const Btn = $(".seven").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

    // number eight
    $(".eight").click(function () {
        const Btn = $(".eight").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })

    // number nine
    $(".nine").click(function () {
        const Btn = $(".nine").val();
        const disp = $(".current-display").val()
        $(".current-display").val(disp + Btn)
    })






    //special buttons

    // negative integer button
    $(".int-minus").click(function () {
        const numBtn = $(".int-minus").val(); // -
        const disp = $(".current-display").val();
        if (disp[0] == numBtn || disp == numBtn) {
            $(".current-display").val(disp)
        }

        else if (disp[disp.length - 1] >= 0 || disp[disp.length - 1] == ".") {
            $(".current-display").val(disp)
        }
        else {
            $(".current-display").val(disp + numBtn)
        }
    })

    // decimal point

    $(".decimal").click(function () {
        const numBtn = $(".decimal").val(); 
        const disp = $(".current-display").val();
        let decimal = numberTest(disp);

        // setting conditions for inputing a decimal point
        if (disp != "") {
            if (decimal === "false" && disp[disp.length - 1] != 0 && disp[disp.length - 1] != numBtn) {
                $(".current-display").val(disp + numBtn);
            }
            else {
                if (disp == "0") {
                    $(".current-display").val(disp + numBtn);
                }
            }
        }
        else {
            $(".current-display").val(disp);
        }
    })

    //delete button
    $(".delete").click(function () {
        const disp = $(".current-display").val();
        newDisp = deleteNumber(disp);
        $(".current-display").val(newDisp);
    })

    //equate button
    $(".equate").click(function () {
        const disp = $(".current-display").val()
        const pDisp = $(".previous-display").val()
        con
    })



    //operators

    //addition settings
    $(".plus").click(function () {
        const numBtn = $(".plus").val();
        const disp = $(".current-display").val()
        let pDisp = $(".previous-display").val()

        //previous display is empty and current display is not empty
        if (pDisp == "" && disp != "") {
            //checking if current display is positive or negative number
            if (disp >= 0 || disp < 0) {
                pDisp = $(".previous-display").val(disp);
                $(".previous-display").val(disp + numBtn);
                $(".current-display").val("");
            }
        }

        // both display have values
        else if (pDisp != "" && disp != "") {
            if (disp > 0 || disp < 0) {
                pDisp;
                update = add(pDisp, disp);

                $(".previous-display").val(update + numBtn);
                $(".current-display").val("");

            }
            else {
                $(".current-display").val("");
            }
        }

    })

     //subtraction settings
     $(".minus").click(function () {
        const numBtn = $(".minus").val();
        const disp = $(".current-display").val()
        let pDisp = $(".previous-display").val()

        //previous display is empty and current display is not empty
        if (pDisp == "" && disp != "") {
            //checking if current display is positive or negative number
            if (disp >= 0 || disp < 0) {
                pDisp = $(".previous-display").val(disp);
                $(".previous-display").val(disp + numBtn);
                $(".current-display").val("");
            }
        }

        // both display have values
        else if (pDisp != "" && disp != "") {
            if (disp > 0 || disp < 0) {
                pDisp;
                update = sub(pDisp, disp);

                $(".previous-display").val(update + numBtn);
                $(".current-display").val("");

            }
            else {
                $(".current-display").val("");
            }
        }

    })


     //multiplication settings
     $(".multiply").click(function () {
        const numBtn = $(".multiply").val();
        const disp = $(".current-display").val()
        let pDisp = $(".previous-display").val()

        //previous display is empty and current display is not empty
        if (pDisp == "" && disp != "") {
            //checking if current display is positive or negative number
            if (disp >= 0 || disp < 0) {
                pDisp = $(".previous-display").val(disp);
                $(".previous-display").val(disp + numBtn);
                $(".current-display").val("");
            }
        }

        // both display have values
        else if (pDisp != "" && disp != "") {
            if (disp > 0 || disp < 0) {
                pDisp;
                update = multi(pDisp, disp);

                $(".previous-display").val(update + numBtn);
                $(".current-display").val("");

            }
            else {
                $(".current-display").val("");
            }
        }

    })

     //division settings
     $(".division").click(function () {
        const numBtn = $(".division").val();
        const disp = $(".current-display").val()
        let pDisp = $(".previous-display").val()

        //previous display is empty and current display is not empty
        if (pDisp == "" && disp != "") {
            //checking if current display is positive or negative number
            if (disp >= 0 || disp < 0) {
                pDisp = $(".previous-display").val(disp);
                $(".previous-display").val(disp + numBtn);
                $(".current-display").val("");
            }
        }

        // both display have values
        else if (pDisp != "" && disp != "") {
            if (disp > 0 || disp < 0) {
                pDisp;
                update = divide(pDisp, disp);

                $(".previous-display").val(update + numBtn);
                $(".current-display").val("");

            }
            else {
                $(".current-display").val("");
            }
        }

    })





})


