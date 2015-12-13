Template.leaderboard.events({
    'click .player': function() {
        var playerId = this._id;
        Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore', selectedPlayer, 5);
    },
    'click .decrement': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore', selectedPlayer, -5);
    },
    'click .remove': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('removePlayerData',selectedPlayer);
    }
});

Template.addPlayerForm.events({
    'submit form': function(event){
        event.preventDefault();
        var playerNameVar = event.target.playerName.value;
        Meteor.call('insertPlayerData',playerNameVar);

    }
});