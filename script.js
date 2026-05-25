function payNow() {

    const amount = document.getElementById("amount").value;
    const phone = document.getElementById("phone").value;
    const operator = document.getElementById("operator").value;

    const serviceKey = "NyoavGYNbAkZ8TkF8iQqa9rqPhcM4Mby";

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://api.monetbil.com/widget/v2.1/" + serviceKey;

    const fields = {
        amount: amount,
        phone: phone,
        operator: operator,
        country: "CM",
        currency: "XAF",
        locale: "en"
    };

    for (const key in fields) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}
