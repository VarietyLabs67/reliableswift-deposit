async function payNow() {

    const amount = document.getElementById("amount").value;
    const phone = document.getElementById("phone").value;
    const operator = document.getElementById("operator").value;

    const serviceKey = "NyoavGYNbAkZ8TkF8iQqa9rqPhcM4Mby";

    const formData = new FormData();

    formData.append("amount", amount);
    formData.append("phone", phone);
    formData.append("operator", operator);
    formData.append("country", "CM");
    formData.append("currency", "XAF");
    formData.append("locale", "en");

    try {

        const response = await fetch(
            "https://api.monetbil.com/widget/v2.1/" + serviceKey,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        console.log(data);

        if (data.success === true && data.payment_url) {

            window.location.href = data.payment_url;

        } else {

            alert("Payment initialization failed");

            console.log(data);

        }

    } catch (error) {

        console.log(error);

        alert("Network error");

    }
}
