window.addEventListener("load", clock);

function clock() {
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sc = date.getSeconds();
    var meridian = "AM";
    var state;

    if (hr > 12) {
        hr -= 12;
        meridian = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    mn = (mn < 10) ? "0" + mn : mn;
    sc = (sc < 10) ? "0" + sc : sc;

    if (hr >= 00 && hr < 12 && (meridian == "AM")) {
        state = "Good Morning"
    }
    else
        if (hr >= 12 && hr < 05 && (meridian == "PM")) {
            state = "Good Afternoon";
        }
    else {
        state = "Good Evening";
    }

    document.querySelector(".title").innerHTML = hr + ":" + mn + ":" + sc + " " + meridian;    
    
    document.querySelector(".msg").innerHTML = state;

    document.querySelector(".time").innerHTML = hr + ":" + mn + ":" + sc + " " + meridian;

    document.querySelector(".date").innerHTML = date.getDate() + " " + date.toDateString().split(" ")[1] + " " + date.getFullYear()

}

setInterval(clock, 1000);

