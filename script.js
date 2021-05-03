// potential user names that work: 
// "Spider Man", "Iron Man", "Black Widow", "Thor", "Black Panther"

// WHAT I WANT TO ACHIEVE:
// Correct username? 
// -- Yes: show them the password field
// -- No: show them an alert 
// Correct password?
// -- Yes: show them a welcome message
// -- No: show them an alert

let correctPassword = "Open Sesame";
$(".password").hide();
$(".welcome-message").hide();

$(".button").click(function() {
    const userName = $(".username").val();
    
    const isValidUserName = ["Spider Man", "Iron Man", "Black Widow", "Thor", "Black Panther"].includes(userName);

    if (isValidUserName) {
        $(".password").show();
    } else {
        alert("Not a valid Marvel hero; get out of here!");
    }

    let password = $(".password").val();
    if (password === correctPassword) {
        $("img").css("width", "500px");
        $("img").attr("src", "https://wallpaperaccess.com/full/1312528.jpg");
        $(".username").hide();
        $(".password").hide();
        $(".button").hide();
        $(".welcome-message").text("Welcome back, " + userName + "!");
        $(".welcome-message").show();
    } else {
        alert("Not a valid Marvel hero password; get out of here!");
    }
});
