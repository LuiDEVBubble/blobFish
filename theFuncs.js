let makeInvisible = () =>
{
    document.getElementById("uglyBoy").className = "hidden"; //esta funcion hace que el elemento con el id "uglyBoy" se desaparesca por medio de CSS
}

let reappear = () =>
{
    document.getElementById("uglyBoy").className = "reappear";
}

function swapPic()
{
   // alert(document.blobBefore.src);
   
    if(document.blobBefore.src === "blobfish/blobFish.jpg" )
    {
        document.blobBefore.src = "blobfish/built.jpg";
    }
    else if (document.blobBefore.src === "blobfish/built.jpg")
    {

        document.blobBefore.src = "blobfish/blobFish.jpg;"
    }

    
}