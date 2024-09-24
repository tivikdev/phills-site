window.onload = function () {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById("compare").style.display = "none";
        document.getElementById("mobile-message").style.display = "block";
    }
};