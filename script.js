/* PUT YOUR CODE HERE */
$(document).ready(function () {
    var players, stats, items = [];
    $.getJSON("data/players.json", function (data) {
        $.each(data, function (key, players) {
            $.getJSON("data/stats.json", function (data) {
                $.each(data, function (key, stats) {
                    //check stats available for players:
                    for (var i = 0; i < players.length; i++) {
                        for (var j = 0; j < stats.length; j++) {
                            var exists = items.some(function (item) {
                                return (item.player === players[i].full_name)
                            })
                            if (players[i].id === stats[j].id && !exists) {
                                items.push({
                                    player: players[i].full_name,
                                    matches: stats[j].matches,
                                    tries: stats[j].tries,
                                })
                            }
                        }
                    }
                    var tbl = $("<table/>").attr("id", "mytable");
                    $(".json-module .module-content").append(tbl);

                    var tr = "<tr>";
                    var td1 = "<th>Players</th>";
                    var td2 = "<th>Matches</th>";
                    var td3 = "<th>Tries</th></tr>";

                    $("#mytable").append(tr + td1 + td2 + td3);

                    for (var i = 0; i < items.length; i++) {
                        var tr = "<tr>";
                        var td1 = "<td>" + items[i]["player"] + "</td>";
                        var td2 = "<td>" + items[i]["matches"] + "</td>";
                        var td3 = "<td>" + items[i]["tries"] + "</td></tr>";

                        $("#mytable").append(tr + td1 + td2 + td3);
                    }


                });

            });
        });

    });
});