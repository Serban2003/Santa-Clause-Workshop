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

var line = 0;
var line_pr = 0;
var toggled_mute = 1;
var toggled_snow = 1;
var pr_clicked = 0;

window.onload = function (){
    line = 0;
    line_pr = 0;
    toggled_mute = 1;
    toggled_snow = 1;
    pr_clicked = 0;
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

function startRudolf(){
    let audio = document.getElementById("deer_sound");
    audio.play();
}

function startTalkWork(){
    line++;
    let page = document.getElementById("main_content_workshop");

    if(document.getElementById("bubblePr1") != null) page.removeChild(document.getElementById("bubblePr1"));
    if(document.getElementById("bubblePr2") != null) page.removeChild(document.getElementById("bubblePr2"));
    if(document.getElementById("bubblePr3") != null) page.removeChild(document.getElementById("bubblePr3"));

    if(line == 1){
        if(document.getElementById("bubble0") != null) page.removeChild(document.getElementById("bubble0"));
        let audio = document.getElementById("hohoho");
        let bubble = document.createElement("div");
        bubble.id = "bubble1";
        bubble.className = "bubble_work";
        bubble.innerHTML = "HoHoHo!<br>This is<br>my workshop!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "80px";

        page.appendChild(bubble);
        audio.play();
    }
    else if(line == 2){
        if(document.getElementById("bubble1") != null) page.removeChild(document.getElementById("bubble1"));
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
        if(document.getElementById("bubble2") != null) page.removeChild(document.getElementById("bubble2"));
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

function startPresents(){
    line_pr++;

    let page = document.getElementById("main_content_workshop");
    let audio = document.getElementById("hohoho");

    if(document.getElementById("bubble0") != null) page.removeChild(document.getElementById("bubble0"));
    if(document.getElementById("bubble1") != null) page.removeChild(document.getElementById("bubble1"));
    if(document.getElementById("bubble2") != null) page.removeChild(document.getElementById("bubble2"));
    if(document.getElementById("bubble3") != null) page.removeChild(document.getElementById("bubble3"));

    if(line_pr == 1){
        let bubble = document.createElement("div");
        bubble.id = "bubblePr1";
        bubble.className = "bubble_work";
        bubble.innerHTML = "HoHoHo!<br>So you want to<br>open some presents?";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "-10px";

        page.appendChild(bubble);
        audio.play();
    }
    else if(line_pr == 2){
        if(document.getElementById("bubblePr1") != null) page.removeChild(document.getElementById("bubblePr1"));
        let bubble = document.createElement("div");
        bubble.id = "bubblePr2";
        bubble.className = "bubble_work";
        bubble.innerHTML = "I don't think<br>it's a good ideea...<br>It's not Christmas yet!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "-55px";

        page.appendChild(bubble);
        audio.play();
    }
    else if(line_pr == 3){
        if(document.getElementById("bubblePr2") != null) page.removeChild(document.getElementById("bubblePr2"));
        let bubble = document.createElement("div");
        bubble.id = "bubblePr3";
        bubble.className = "bubble_work";
        bubble.innerHTML = "Hey, stop!<br>You are on the<br>naughty list now!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "15px";

        page.appendChild(bubble);
        audio.play();
    }
    else{
        if(document.getElementById("bubblePr3") != null) page.removeChild(document.getElementById("bubblePr3"));

        let audio = document.getElementById("wow");
        let audio2 = document.getElementById("tnt");

        let overlay = document.createElement("div");
        overlay.id = "present_overlay";
        overlay.className = "back_submit";

        let present = document.createElement("img");
        present.src = "images/present.png";
        present.className = "present";
        present.addEventListener("click", function(){
        pr_clicked++;

            if(pr_clicked >= 5){
                audio2.play();
                present.removeEventListener("click", this);
                let explosion = document.createElement("img");
                explosion.src = "images/explosion.gif";
                explosion.className = "explosion";
                overlay.appendChild(explosion);
                
                let open_present = document.createElement("img");
                open_present.src = "images/present_open.png";
                open_present.className = "open_present";
                overlay.appendChild(open_present);
                
                setTimeout(function(){
                    overlay.removeChild(explosion);
                    overlay.removeChild(present);

                    let toy = document.createElement("img");
                    toy.className = "toy";

                    var number = getRandom(1, 4);
                    var path = "";
     
                    switch(number){
                        case 1:{
                            path = "images/toy1.gif"
                            break;
                        }
                        case 2:{
                            path = "images/toy2.png"
                            break;
                        }
                        case 3:{
                            path = "images/toy3.png"
                            break;
                        }
                        default:{
                            path = "images/toy4.png"
                            break;
                        }
                    }
                    toy.src = path;
                    toy.classList.add("slide_in");
                    
                    overlay.appendChild(toy);
                    audio.play();
                    setTimeout(function(){
                        document.body.removeChild(overlay);
                        pr_clicked = 0;
                    }, 7000);
                }, 700);

            }
            else{
                present.classList.add("shake_animation");
                setTimeout(function(){
                    present.classList.remove("shake_animation");
                }, 1000);
            }
        });
        overlay.appendChild(present);
        document.body.appendChild(overlay);
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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