const user = {
    username: "brook",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
    }
}

//user.welcomeMessage()

const chill = function(){
    let username = "jimbei"
    console.log(this.username);
}

chill()

//skip for today