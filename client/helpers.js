Template.leaderboard.helpers({
    'player' : function () {
        return PlayersList.find({}, {sort: {score: -1, name: 1}});
    },
    'selectedClass': function() {
        var playerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if(playerId == selectedPlayer){
            return "selected";
        }
    },
    'showSelectedPlayer': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        return PlayersList.findOne(selectedPlayer);
    }
});