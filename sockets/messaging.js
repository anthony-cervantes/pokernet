
function Messaging() { };

// Message everyone in the player list
Messaging.prototype.sendAll(event, message, io, players, player) {
    for(var i = 0; i < player.length; i++) {
        io.sockets.socket(player[i].id).emit(event, message);
    }
}

// Message everyone in the player list but a specified player
Messaging.prototype.sendAllBut(event, message, io, players, player) {
    for(var i = 0; i < players.length; i++) {
        if (players[i].id == player.id) continue;
        io.sockets.socket(player[i].id).emit(event, message);
    }
}

// Message just one player
Messaging.prototype.sendOne(event, message, io, players, player) {
    for (var i = 0; i < players.length; i++) {
        if (player.id == players[i].id) {
            io.sockets.socket(player.id).emit(event, message);
        }
    }
}

module.exports = Messaging;
