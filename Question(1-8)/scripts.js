//Question-1(a,b)
function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    return dayOfWeek;
}

const date = "2023-06-20";
const dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek);

document.getElementById("dayOfWeekDisplay").innerHTML = "Today is " + dayOfWeek;

//Question-2(a,b)
function calculateSquareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((accumulator, currentValue) => {
        return accumulator + Math.pow(currentValue, 2);
    }, 0);

    const squareRoot = Math.sqrt(sumOfSquares);

    return squareRoot;
}

const numbers = [10, 20, 30, 55, 50];
const result = calculateSquareRootOfSumOfSquares(numbers);
document.getElementById("resultDisplay").innerHTML = "Square root of the sum of squares: " + result;

//Question-3(a,b)
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const inputNumber = 17;
const isPrimeResult = isPrime(inputNumber);
document.getElementById("resultShow").innerHTML = `${inputNumber} is prime number and it is--> " + ${isPrimeResult}`

//Question-4(a,b)
function openWindowWithDimensions(url, width, height) {
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(url, "", `width=${width}, height=${height}, left=${left}, top=${top}`);
}

const url = "https://www.example.com";
const width = 800;
const height = 600;

openWindowWithDimensions(url, width, height);

//Question-5(a,b)
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;

    // Check for Edge
    if (userAgent.indexOf("Edg") !== -1) {
        browserName = "Microsoft Edge";
        browserVersion = userAgent.substring(userAgent.indexOf("Edg") + 4).split(" ")[0];
    }
    // Check for Chrome
    else if (userAgent.indexOf("Chrome") !== -1) {
        browserName = "Google Chrome";
        browserVersion = userAgent.substring(userAgent.indexOf("Chrome") + 7).split(" ")[0];
    }
    // Check for Firefox
    else if (userAgent.indexOf("Firefox") !== -1) {
        browserName = "Mozilla Firefox";
        browserVersion = userAgent.substring(userAgent.indexOf("Firefox") + 8).split(" ")[0];
    }
    // Check for Safari
    else if (userAgent.indexOf("Safari") !== -1) {
        browserName = "Apple Safari";
        browserVersion = userAgent.substring(userAgent.indexOf("Version") + 8).split(" ")[0];
    }
    // Check for Opera
    else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
        browserName = "Opera";
        browserVersion = userAgent.indexOf("Opera") !== -1 ? userAgent.substring(userAgent.indexOf("Opera") + 6).split(" ")[0] : userAgent.substring(userAgent.indexOf("OPR") + 4).split(" ")[0];
    }
    // Check for Internet Explorer
    else if (userAgent.indexOf("Trident") !== -1) {
        browserName = "Internet Explorer";
        browserVersion = userAgent.substring(userAgent.indexOf("rv") + 3).split(")")[0];
    }
    // Other browsers
    else {
        browserName = "Unknown";
        browserVersion = "Unknown";
    }

    return {
        name: browserName,
        version: browserVersion
    };
}

const browserInfo = getBrowserInfo();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);

//Question-6(a)
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error("Geolocation is not supported by your browser."));
        }
    });
}

getCurrentLocation()
    .then((location) => {
        console.log("Latitude:", location.latitude);
        console.log("Longitude:", location.longitude);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });


//Question-7(a,b,c)

// Function to display alert with click coordinates
function handleClick(event) {
    const x = event.clientX;
    const y = event.clientY;
    alert("Clicked at coordinates (x, y): " + x + ", " + y);
}

// Function to display alert with key code
function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    alert("Key pressed with code: " + keyCode);
}

// Function to change image source on mouseover
function changeImageSource(event) {
    const image = event.target;
    image.src = "https://cdn.rabbil.com/photos/images/2022/11/05/rabbil.jpg";
}

//Question-8(a,b)
function handleChangeContent() {
    const paragraph = document.getElementById("content-change");
    paragraph.textContent = "Button Clicked!";
}

