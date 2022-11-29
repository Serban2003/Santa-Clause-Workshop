function sendLetter(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let alert_message = "";


    if(firstname === "") alert_message = "firstname";
    else if(lastname === "") alert_message = "lastname";
    else if(email === "") alert_message = "email";
    else if(message === "") alert_message = "message";

    if(alert_message !== "") alert("Please type your " + alert_message + "!");
    else{
        //code to save input to database

        let back = document.createElement("div");
        back.className = "back_submit";

        let panel = document.createElement("div");
        panel.className = "submit_panel";
        back.appendChild(panel);

        let title = document.createElement("h1");
        title.innerHTML = "Letter Sent!"
        panel.appendChild(title);

        let text = document.createElement("span");
        text.innerHTML = "Hey " + firstname + " " + lastname + "!<br>Your letter has been sent to Santa!<br><br>"
        text.className = "custom_text";
        panel.appendChild(text);

        let alt_text = document.createElement("span");
        alt_text.innerHTML = "Page will reload automatically...";
        alt_text.className = "custom_text";
        alt_text.style.fontSize = "15px";
        panel.appendChild(alt_text)

        document.body.appendChild(back);

        setTimeout(function(){
            location.reload();
        }, 5000);
    } 
}

var line = 1;
window.onload = function (){
    line = 0;
}

function startTalk(){
    line++;
    let page = document.getElementById("main_content");

    if(line == 1){
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        bubble.id = "bubble1";
        bubble.className = "bubble";
        bubble.innerHTML = "HoHoHo!<br>What are you doing here?<br>Are you lost?";
        bubble.style.top = "500px";
    
        page.appendChild(bubble);
        audio.play();
    }
    else if(line == 2){
        page.removeChild(document.getElementById("bubble1"));
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        
        bubble.className = "bubble";
        bubble.innerHTML = "Hmm...<br>So you want to visit my house?";
        bubble.style.top = "500px";
    
        page.appendChild(bubble);
        audio.play();
    }
}
