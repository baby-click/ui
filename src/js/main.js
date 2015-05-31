function updateProfile() {

    /*
     * lets assume that your browser can handle "local storage" for the sake of simplicity.
     * You should have saves the token to local storage prior to this.
     * 
     * localStorage.token=myApiResult.token
     * 
     * myApiResult would be the JSON we received after the login
     * 
     **/
    var tokenString = localStorage.getItem("token");

    //simple ajax call to our API
    $.ajax({
        url: "http://www.webstreaming.com.ar/api/user/",
        method: "PUT",
        headers: {
            Authorization: tokenString
        },
        data: JSON.stringify({
            skills: "Turn sand into gold",
            nickname: "God of War"
        }),
        statusCode: {
            404: function () {
                //If the endpoint is not found, we'll end up in here
                alert("endpoint not found");
            },
            200: function () {
                //Ok, everything worked as expected
                alert("worked like a charm");
            },
            401: function () {
                //Our token is either expired, invalid or doesn't exist
                alert("token not valid or expired");
            }
        }
    });
}