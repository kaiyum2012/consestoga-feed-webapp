var document = window.document;
console.log("app.js lodded");

var users =[
{
    username : "user1",
    pwd      : "pwd1",
    userId   : 1
},
{     
    username : "user2",
    pwd      : "pwd2",
    userId   : 2
}
];

var userFeeds = [
    {
        userId : 1,
        feeds : [
           {
               feedId : 1,
               feed : "there is something i Don't know"
            },
            {
                feedId : 2,
                feed : "One more feed here"
            }
        ]
    },
    {
        userId : 2,
        feeds : [
           {
               feedId : 3,
               feed : "its boring to type"
            },
            {
                feedId : 4,
                feed : "what should i write !"
            }
        ]
    }
];



function getFeedForUser(){
    console.log("asking for feeds, hummmm");

   let username = prompt("Enter username");
   let password = prompt("And password please")

    console.log(username + "   "  + password);
    
    AuthenticateUser(username,password);
}

var AuthenticateUser = function(username,password) {
    // console.log(username + "   "  + password); 
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if(user.username == username && 
            user.pwd == password){
                DisplayFeeds(user.userId);
                break;
            }
        else{
            let errorMsg = "Sorry you are not allow to have it";
            alert(errorMsg)
            // console.log(errorMsg);
        }
    }
};

var DisplayFeeds = function(userId){
    console.log("Displaying feeds of " + userId);

    userFeeds.forEach(feed => {
        if(feed.userId == userId){
            feed.feeds.forEach(feed => {
                console.log(feed.feed + "\n");
                let p = "<p>" + feed.feed + "</p>";
            
                // document.getElementById("body").innerHTML("<p>" + feed.feed + "</p>"); 
                console.log(document.getElementById("body").innerHTML("dsa"));            
            });
        }
    });
}