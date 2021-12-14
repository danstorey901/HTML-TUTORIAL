
$().ready(() => {
    console.log("jquery is ready!");
    $("input").css("border-radius", "7px");
    $("#remove").on("click", () => {
    });
    getProductByPk();
});


const getProductByPk = () => {
    let id = getUrlId();
    $.getJSON(`${baseurl}/api/products/${id}`)
    .done(res => {
            display(res);
        }
    )
    .fail(
        err => console.error(err)
    );
}

const display = (product) => {
    let url = getUrlId();

    document.getElementById("xid").value = product.id;
    document.getElementById("xpartNbr").value = product.partNbr;
    document.getElementById("xname").value = product.name;
    document.getElementById("xprice").value = product.price;
    document.getElementById("xunit").value = product.unit;
    document.getElementById("xphotopath").value = product.photopath;
    document.getElementById("xvendor").value = product.vendor;
}

