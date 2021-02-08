
//let bruto = 2000
let soc = 10.5

//let neapl = 0

let neapl1 = document.getElementById("myNeap")
let bruto1 = document.getElementById("myBruto");
let result = document.getElementById("result");
let sub = document.getElementById("submitId");
sub.addEventListener("click", getResult);


//let socNod1 = bruto / 100 * soc


console.log(bruto1)


function getResult() {
    let netoAlga = 0;
    let neapl = parseInt(neapl1.value)
    let bruto = parseInt(bruto1.value)
    let socNod1 = bruto / 100 * soc
    let socNod = parseInt(socNod1)
    let iin = ((bruto - socNod1) - neapl) / 100 * 20
    netoAlga = bruto - socNod - iin

 console.log ( "Bruto: " + bruto, " - socNod: " + socNod, " - Iin " + iin , " Neto alga: " + netoAlga)

    
  result.innerHTML = "bruto: " + bruto + "<br>" + "Socialais nodoklis: " + socNod+ "<br>" + "Iedzivotaju ienakuma nodoklis: " + iin + "<br>" + "Neto Alga: " + netoAlga  ;
}


//let socNod = brutro / 100 * 10.5

//let iedz = bruto - socNod - neapl



