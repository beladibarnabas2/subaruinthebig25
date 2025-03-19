function hatja()
{
    let futasteljesitmeny = document.getElementById("futasteljesitmeny").value;
    let fogyasztas = document.getElementById("fogyasztas").value;
    let uzemanyag = document.cigany.uzemanyag.value
    let coKibocsatas = futasteljesitmeny * (fogyasztas/100)
    if (uzemanyag == "benzin")
    {
        coKibocsatas * 2.31;
    }
    else if (uzemanyag == "dizel")
    {
        coKibocsatas * 2.68;
    }
    document.getElementById("co").innerHTML = coKibocsatas + ` kg kibocsátás`
    
}

function jahat()
{
    document.getElementById("visszajelzes").innerHTML = `<span>Köszönjük a visszajelzését!</span>`
}