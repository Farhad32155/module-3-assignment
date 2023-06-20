function sendPostRequest() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.example.com/submit";
    var payload = JSON.stringify({ "name": "John Doe", "email": "johndoe@example.com" });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            var responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Request failed");
    };

    xhr.send(payload);
}
