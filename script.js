/* PUT YOUR CODE HERE */
$(document).ready(function () {
    var items = [];
    $.getJSON("data/players.json", function (data) {
        for (var i = 0; i < data.players.length; i++) {
            // console.log(data.players[i].full_name);
            items.push(
                {
                    player: data.players[i].full_name,
                    matches: data.players[i].matches,
                    tries: data.players[i].tries
                }
            );
        }
    });

    var tbl = $("<table/>").attr("id", "mytable");
    $(".json-module .module-content").append(tbl);
    for (var i = 0; i < items.length; i++) {
        var tr = "<tr>";
        var td1 = "<td>" + items[i]["player"] + "</td>";
        var td2 = "<td>" + items[i]["matches"] + "</td>";
        var td3 = "<td>" + items[i]["tries"] + "</td></tr>";

        $("#mytable").append(tr + td1 + td2 + td3);
    }
    console.log('hello');
})
;