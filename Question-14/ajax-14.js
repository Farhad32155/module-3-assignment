function sendGetRequest() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.example.com/data", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var responseData = JSON.parse(xhr.responseText);
            document.getElementById("result").textContent = JSON.stringify(responseData);
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Request failed");
    };

    xhr.send();
}
