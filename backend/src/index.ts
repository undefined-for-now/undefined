import express from "express";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import url from "url";
const cookieParser = require('cookie-parser')
import { getUser } from "./api";

dotenv.config();
const index = express();
index.use(cookieParser());

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
    const state = Math.random().toString(36).substring(3,9); // generate a random string everytime
    const authorizeUrl:string = oAuth2Client.generateAuthUrl({
        scope: "https://www.googleapis.com/auth/userinfo.profile",
        state,
    });
    res.cookie('state', state, { httpOnly: true });
    res.redirect(authorizeUrl)
});

index.get("/callback", async (req, res) => {
    // check that state query string from url matches req.cookies.state
    const stateFromQS = req.query['state'];
    if(req.cookies.state === stateFromQS) {
        const queryString = new url.URL(req.url, 'http://localhost:3000')
            .searchParams;
        const code: string = queryString.get('code') || "";
        const tokenRes = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokenRes.tokens);
        console.info({token: tokenRes.tokens});
        console.info("Authentication successful!");
        const accessToken: any = tokenRes.tokens.access_token;
        const userInfo: any = await getUser(accessToken);
        res.json(userInfo);
    } else throw new Error('401 - state cookie does not match');
});

const port:number = 4000;
index.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})