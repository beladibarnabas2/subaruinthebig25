function hatja()
{
    let futasteljesitmeny = document.getElementById("futasteljesitmeny").value;
    let fogyasztas = document.getElementById("fogyasztas").value;
    let uzemanyag = document.cigany.uzemanyag.value
    coKibocsatas = futasteljesitmeny * (fogyasztas/100)
    if (uzemanyag == "benzin")
    {
        coKibocsatas * 2.31;
    }
    else if (uzemanyag == "dizel")
    {
        coKibocsatas * 2.68;
    }
    document.getElementById("co").innerHTML = ``
    
}