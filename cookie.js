
function getCookie(key) {
    var arr = document.cookie.split("; ");
    for (let i = 0; i < arr.length; i++) {
        let arrTemp = arr[i].split("=");
        if (arrTemp[0] == key) {
            return arrTemp[1];
        }
    }
}

function setCookie(key, value, hour) {
    if (hour) {
        let date = new Date(new Date().getTime() + hour * 60 * 60 * 1000)
        document.cookie = key + "=" + value + ";expires=" + date;
    } else {
        document.cookie = key + "=" + value;
    }
}

function removeCookie(key) {
    setCookie(key, "", -24);
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
        setCookie(element, "", -24);
    });
}

export {
    getCookie,
    setCookie,
    removeCookie,
    getKeysCookie,
    clearCookie
} 