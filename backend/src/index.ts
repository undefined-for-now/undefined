import express from "express";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import url from "url";
import { getUser } from "./api";

dotenv.config();
const index = express();

const oAuth2Client:OAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URIS
);

index.get("/", (req, res) => {
   res.send({message: "Welcome to mini-games website!"});
});

index.get("/favicon.ico", (req, res) => {
});

index.get("/login", (req, res) => {
    const authorizeUrl:string = oAuth2Client.generateAuthUrl({
        scope: "https://www.googleapis.com/auth/userinfo.profile",
    });
    res.redirect(authorizeUrl)
});

index.get("/callback", async (req, res) => {
    const queryString = new url.URL(req.url, 'http://localhost:3000')
        .searchParams;
    const code: string = queryString.get('code') || "";
    const tokenRes = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokenRes.tokens);
    console.info({token: tokenRes.tokens});
    console.info("Authentication successful!");
    const accessToken: any = tokenRes.tokens.access_token;
    const userInfo:any = await getUser(accessToken);
    res.json(userInfo);
});

const port:number = 4000;
index.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})