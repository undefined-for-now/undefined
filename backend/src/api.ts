function getUser<T>(accessToken:any): Promise<T> {
    console.info("Requesting user information...");
    return fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
        headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response: any) => {
        if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        return response.json();
    }).then(userInfo => {
        console.log(userInfo);
        return userInfo;
    }).catch((error: Error) => {
        console.log("Unable to retrieve user information", { error });
    })
}

export { getUser };