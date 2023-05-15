import express from "express";
import {OAuth2Client} from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();
const index = express();

index.get("/login", (req, res) => {
    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URIS
    );
    const authorizeUrl = oAuth2Client.generateAuthUrl({
        scope: "https://www.googleapis.com/auth/userinfo.profile",
    });
    res.redirect(authorizeUrl)
});

index.get("/callback", (req, res) => {
    res.json({ message: "redirect to the browser with code as a query string!" });
});

const port = 4000;
index.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})