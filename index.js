import express from "express";
import bodyParser from "body-parser"
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
    var word = req.body["name"];
    function getFirstName(fullName) {
        // Split the full name by spaces
        const nameParts = fullName.trim().split(" ");
        // Return the first part as the first name
        return nameParts[0];
    }
const firstName = getFirstName(word);
console.log(firstName);
    res.render("partials/catogery.ejs",{FirstName : firstName});
});
app.get("/books", (req, res)=>{
    res.render("index2.ejs");
});
app.post("/book", (req, res) => {
    const phone = req.body.phone;
    const date = req.body.date;
    const timeSlot = req.body.timeSlot;

    // Check that required fields are present
    if (!phone || !date || !timeSlot) {
        return res.status(400).send("All fields are required.");
    }

    console.log(`Phone: ${phone}, Date: ${date}, Time Slot: ${timeSlot}`);

    // Perform booking logic here (e.g., save to a database, send a confirmation message)

    // Render a response (for example, a confirmation page)
    res.render("confirmation.ejs", {
        phone: phone,
        date: date,
        timeSlot: timeSlot
    });
});

app.listen(port, ()=>{
    console.log(`sever starts on the port ${port}`);
});