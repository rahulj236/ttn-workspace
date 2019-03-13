window.addEventListener("load", clock);

function clock() {
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sc = date.getSeconds();
    var currentTime = hr + ":" + mn + ":" + sc;
    var dd = date.getDate();
    var mm = date.toDateString().split(" ")[1];
    var yyyy = date.getFullYear();
    var meridian = "PM";
    var greet;

    if (hr >= 00 && hr < 12) {
        meridian = 'AM';
        greet = "Good Morning"
    }
    else
        if (hr >= 12 && hr <= 16) {
            meridian = "PM";
            greet = "Good Afternoon";
        }
    else {
            greet = "Good Evening";
    }

    if (hr > 12) {
        hr -= 12;
        meridian = "PM";
    }

    dd = checkZero(dd);
    hr = checkZero(hr)
    mn = checkZero(mn);
    sc = checkZero(sc);

    print(currentTime, meridian, greet, dd, mm, yyyy);

}

function print(currentTime, meridian, greet, dd, mm, yyyy) {
    document.querySelector(".title").innerHTML = currentTime + " " + meridian;
    document.querySelector(".msg").innerHTML = greet;
    document.querySelector(".time").innerHTML = currentTime + " " + meridian;
    document.querySelector(".date").innerHTML = dd + " " + mm + " " + yyyy;
}

function checkZero(i) {
    return (i < 10) ? "0" + i : i;
}

setInterval(clock, 1000);

