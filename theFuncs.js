let makeInvisible = () =>
{
    document.getElementById("uglyBoy").className = "hidden"; //esta funcion hace que el elemento con el id "uglyBoy" se desaparesca por medio de CSS
}

let reappear = () =>
{
    document.getElementById("uglyBoy").className = "reappear";
}

let swapPic = (eId, newPic) =>// parametros que ayudan cambiar la imagen.
{
  
    document.getElementById(eId).src = newPic; // "eId" es el Id de la imagen, y "newPic" seria la nueva imagen que queremos.
}

