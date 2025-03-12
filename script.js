function hatja()
{
    let futasteljesitmeny = document.getElementById("futasteljesitmeny").value;
    let fogyasztas = document.getElementById("fogyasztas").value;
    let uzemanyag = document.cigany.uzemanyag.value

    if (uzemanyag == "benzin")
    {
        let coKibocsatas = futasteljesitmeny * (fogyasztas/100) * 2.31;
    }
    else if (uzemanyag == "dizel")
    {
        let coKibocsatas = futasteljesitmeny * (fogyasztas/100) * 2.68;
    }

    
}