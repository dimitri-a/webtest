/* PUT YOUR CODE HERE */
$(document).ready(function () {
    var players, stats, items = [];
    $.getJSON("data/players.json", function (data) {
        $.each(data, function (key, players) {
            // console.log('players=', players);
            $.getJSON("data/stats.json", function (data) {
                $.each(data, function (key, stats) {
                    console.log('stats=', stats);
                    console.log('players=', players);

                    //check stats available for players:
                    for (var i = 0; i < players.length; i++) {
                        for (var j = 0; j < stats.length; j++) {

                            var exists = items.some(function (item) {
                                return (item.player === players[i].full_name)
                            })
                            console.log('exists=', exists);
                            if (players[i].id === stats[j].id && !exists) {
                                console.log('bingo');
                                items.push({
                                    player: players[i].full_name,
                                    matches: stats[j].matches,
                                    tries: stats[j].tries,

                                })
                                console.log('items=', items);



                            }
                        }
                    }
                    var tbl = $("<table/>").attr("id", "mytable");
                    $(".json-module .module-content").append(tbl);
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