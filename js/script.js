function toggleInfo(infoId) {
    var infoContent = document.getElementById(infoId);
    if (infoContent.style.display === "none" || infoContent.style.display === "") {
        infoContent.style.display = "block";
    } else {
        infoContent.style.display = "none";
    }
}