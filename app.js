const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/restaurantMenu", async (req, res) => {
  const resId = req.query.resId;
  try {
    const MENU_URL = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`;
    console.log(MENU_URL);

    const response = await axios.get(
      MENU_URL,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Accept: "application/json",
          "Accept-Encoding": "gzip, deflate, br",
        },
      },
      { withCredentials: true }
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error occurred! " + error.message);
  }
});
app.listen(1000, "0.0.0.0", () => {
  console.log("Listening to port 1000");
});
