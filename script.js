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
var toggled_mute = 1;
var toggled_snow = 1;

window.onload = function (){
    line = 0;
    toggled_mute = 1;
    toggled_snow = 1;
}

function startTalk(){
    line++;
    let page = document.getElementById("main_content");

    if(line == 1){
        page.removeChild(document.getElementById("bubble0"));
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
        
        bubble.id = "bubble2";
        bubble.className = "bubble";
        bubble.innerHTML = "Hmm...<br>So you want to<br>visit my workshop?";
        bubble.style.top = "500px";
    
        page.appendChild(bubble);
        audio.play();
    }
    else if(line == 3){
        page.removeChild(document.getElementById("bubble2"));
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        
        bubble.id = "bubble3";
        bubble.className = "bubble";
        bubble.innerHTML = "Ok!<br>Let's go!<br>HoHoHo!<br>(Click me again if<br>not redirected)";
        bubble.style.top = "500px";
    
        page.appendChild(bubble);
        audio.play();

        setTimeout(function(){
            window.location.replace("workshop.html");
        }, 5000);
    }
    else if(line == 4){
        window.location.replace("workshop.html");
    }
}

function startTalkWork(){
    line++;
    let page = document.getElementById("main_content_workshop");

    if(line == 1){
        page.removeChild(document.getElementById("bubble0"));
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        bubble.id = "bubble1";
        bubble.className = "bubble_work";
        bubble.innerHTML = "HoHoHo!<br>So this is<br>my workshop!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "80px";

        page.appendChild(bubble);
        audio.play();
    }
    else if(line == 2){
        page.removeChild(document.getElementById("bubble1"));
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        
        bubble.id = "bubble2";
        bubble.className = "bubble_work";
        bubble.innerHTML = "It ain't much,<br>but it's honest work";
        bubble.style.top = "580px";
        bubble.style.marginLeft = "-10px";
        page.appendChild(bubble);
        audio.play();
    }
    else if(line == 3){
        page.removeChild(document.getElementById("bubble2"));
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        
        bubble.id = "bubble3";
        bubble.className = "bubble_work";
        bubble.innerHTML = "Hey!<br>You should write me<br>a letter to know<br>what to give you<br>for Christmas!";
        bubble.style.top = "500px";
        bubble.style.marginLeft = "-5px";
        page.appendChild(bubble);
        audio.play();
    }
    else if(line == 4){
        window.location.replace("contact.html");
    }
}

function toggleMute(){
    let audio = document.getElementById("jingle");
    let button = document.getElementById("mute");
    if(toggled_mute == 1){
        button.classList.remove("not_active");
        audio.loop = "true";
        audio.play();
        toggled_mute = 0;
    }
    else if(toggled_mute == 0){
        button.classList.add("not_active");
        audio.pause();
        toggled_mute = 1;
    }
}

function toggleSnow(){
    let snow_layer = document.getElementById("overlay");
    let button = document.getElementById("snow");
    if(toggled_snow == 1){
        snow_layer.style.background = "none";
        button.classList.add("not_active");
        toggled_snow = 0;
    }
    else if(toggled_snow == 0){
        snow_layer.style.backgroundImage = "url(images/snow-falling-transparent-gif-6.gif)";
        button.classList.remove("not_active");
        toggled_snow = 1;
    }
    
}