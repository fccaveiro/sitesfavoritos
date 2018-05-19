function add() {
    localStorage.setItem("myList", localStorage.getItem("myList") + "|" + Math.floor(Math.random() * 9999999) + ";" + document.getElementById("name").value + ";http://" + document.getElementById("url").value);
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
}
setInterval(function () {
    var lis = document.getElementById("list");
    if (localStorage.getItem("myList")) {
        lis.innerHTML = "";
        var myList = localStorage.getItem("myList");
        myList.split('|').forEach(function (tmp) {
            if (tmp != "null") {
                var tmp1 = tmp.split(';');
                lis.innerHTML += "<div id='" + tmp1[0] + "'>" + tmp1[1] + "<a style='position:absolute;right:60px;' target='_blank' href='" + tmp1[2] + "'>Abrir</a></div>";
            }
        });
    }
}, 300);