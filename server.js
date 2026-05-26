const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/pay", async (req, res) => {

    const response = await fetch(
        "https://api.monetbil.com/payment/v1/placePayment",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                service: "YOUR_SERVICE_KEY",
                phonenumber: req.body.phonenumber,
                amount: req.body.amount,
                notify_url: "https://yourwebsite.com/notify"
            })
        }
    );

    const data = await response.json();

    res.json(data);

});

app.listen(3000, () => {
    console.log("Server running");
});
