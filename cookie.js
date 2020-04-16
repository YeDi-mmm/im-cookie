
function getCookie(key) {
    var arr = document.cookie.split("; ");
    for (let i = 0; i < arr.length; i++) {
        let arrTemp = arr[i].split("=");
        if (arrTemp[0] == key) {
            return arrTemp[1];
        }
    }
}

function setCookie(key, value, day) {
    if (day) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + "=" + value + ";expires=" + date;
    } else {
        document.cookie = key + "=" + value;
    }
}

function removeCookie(key) {
    setCookie(key, "", -1);
}

function getKeysCookie() {
    var arr = document.cookie.split("; ");
    var keys = [];
    for (let i = 0; i < arr.length; i++) {
        let arrTemp = arr[i].split("=");
        keys.push(arrTemp[0]);
    }
    return keys;
}

function clearCookie() {
    var keys = getKeysCookie();
    keys.forEach(element => {
        setCookie(element, "", -1);
    });
}

export {
    getCookie,
    setCookie,
    removeCookie,
    getKeysCookie,
    clearCookie
} 