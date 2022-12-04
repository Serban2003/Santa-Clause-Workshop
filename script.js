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
var line_elf1 = 0;
var line_elf2 = 0;
var line_elf3 = 0;
var toggled_mute = 1;
var toggled_snow = 1;
var pr_clicked = 0;

window.onload = function (){
    line = 0;
    line_pr = 0;
    line_elf1 = 0;
    line_elf2 = 0;
    line_elf3 = 0;
    toggled_mute = 1;
    toggled_snow = 1;
    pr_clicked = 0;
}

function startTalk(){
    line++;
    let audio = document.getElementById("hohoho");
    let bubble = document.getElementById("bubble0");
    bubble.className = "bubble";
    bubble.innerHTML = "";

    if(line == 1){
        bubble.style.display = "inline";
        bubble.style.top = "500px";
        bubble.innerHTML = "HoHoHo!<br>What are you doing here?<br>Are you lost?";

        audio.play();
    }
    else if(line == 2){
        bubble.style.display = "inline";
        bubble.style.top = "500px";
        bubble.innerHTML = "This is my house<br>Do you like it?";

        audio.play();
    }
    else if(line == 3){
        bubble.style.display = "inline";
        bubble.style.top = "500px";
        bubble.innerHTML = "Hmm...<br>So you want to<br>visit my workshop?";

        audio.play();
    }
    else if(line == 4){
        bubble.style.display = "inline";
        bubble.style.top = "400px";
        bubble.innerHTML = "Ok!<br>Let's go!<br>HoHoHo!<br>(Click me again if<br>not redirected)<br>5...";

        audio.play();
        
        setTimeout(function(){
            bubble.innerHTML = "Ok!<br>Let's go!<br>HoHoHo!<br>(Click me again if<br>not redirected)<br>4...";
            setTimeout(function(){
                bubble.innerHTML = "Ok!<br>Let's go!<br>HoHoHo!<br>(Click me again if<br>not redirected)<br>3...";
                setTimeout(function(){
                    bubble.innerHTML = "Ok!<br>Let's go!<br>HoHoHo!<br>(Click me again if<br>not redirected)<br>2...";
                    setTimeout(function(){
                        bubble.innerHTML = "Ok!<br>Let's go!<br>HoHoHo!<br>(Click me again if<br>not redirected)<br>1...";
                        setTimeout(function(){
                            window.location.replace("workshop.html");
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    else if(line == 5){
        window.location.replace("workshop.html");
    }
}

function startRudolf(){
    let audio = document.getElementById("deer_sound");
    audio.play();
}

function startElf(){
    line_elf1++;
    let audio = document.getElementById("elf1");

    let bubble = document.getElementById("bubbleElf0");
    bubble.className = "bubble_elf";
    bubble.style.display = "inline";
    bubble.innerHTML = "";

    if(line_elf1 == 1){
        bubble.style.marginLeft = "-350px";
        bubble.style.top = "120px";
        bubble.innerHTML = "Hey!<br>We are some of<br>Santa's Elves!";
        audio.play();
    }
    else if(line_elf1 == 2){
        bubble.style.marginLeft = "-350px";
        bubble.style.top = "70px";
        bubble.innerHTML = "I'm Mike!<br>And this is<br>where we train<br>for our skating<br>competition!";
        audio.play();
    }
    else if(line_elf1 == 3){
        bubble.style.marginLeft = "-350px";
        bubble.style.top = "70px";
        bubble.innerHTML = "All the elves<br>from every<br>planet compete<br>to win 'The<br>Golden Elf'!";
        audio.play();
    }
    else if(line_elf1 == 4){
        bubble.style.marginLeft = "-335px";
        bubble.style.top = "110px";
        bubble.innerHTML = "So please<br>let us train<br>in peace!";
        audio.play();
    }
    else{
        bubble.style.display = "none";
    }
}

function startElf2(){
    line_elf2++;
    let audio = document.getElementById("elf2");

    let bubble = document.getElementById("bubbleElf0");
    bubble.className = "bubble_elf";
    bubble.style.display = "inline";
    bubble.innerHTML = "";

    if(line_elf2 == 1){
        bubble.style.marginLeft = "-330px";
        bubble.style.top = "140px";
        bubble.innerHTML = "Hi!<br>I'm Zababe!";
        audio.play();
    }
    else if(line_elf2 == 2){
        bubble.style.marginLeft = "-350px";
        bubble.style.top = "140px";
        bubble.innerHTML = "Don't let Mike<br>disturb you!";
        audio.play();
    }
    else if(line_elf2 == 3){
        bubble.style.marginLeft = "-325px";
        bubble.style.top = "100px";
        bubble.innerHTML = "That's who<br>he is...<br>But we<br>love him";
        audio.play();
    }
    else if(line_elf2 == 4){
        bubble.style.marginLeft = "-335px";
        bubble.style.top = "120px";
        bubble.innerHTML = "Thank you<br>for stopping<br>by!";
        audio.play();
    }
    else{
        bubble.style.display = "none";
    }
}

function startElf3(){
    line_elf3++;
    let audio = document.getElementById("elf3");

    let bubble = document.getElementById("bubbleElf0");
    bubble.className = "bubble_elf";
    bubble.style.display = "inline";
    bubble.innerHTML = "";

    if(line_elf3 == 1){
        bubble.style.marginLeft = "-340px";
        bubble.style.top = "140px";
        bubble.innerHTML = "Hey!<br>I'm Gilbert!";
        audio.play();
    }
    else if(line_elf3 == 2){
        bubble.style.marginLeft = "-340px";
        bubble.style.top = "140px";
        bubble.innerHTML = "I really<br>like globes!";
        audio.play();
    }
    else if(line_elf3 == 3){
        bubble.style.marginLeft = "-310px";
        bubble.style.top = "150px";
        bubble.innerHTML = "See ya!";
        audio.play();
    }
    else{
        bubble.style.display = "none";
    }
}

function startTalkWork(){
    line++;
    
    let audio = document.getElementById("hohoho");
    let bubble = document.getElementById("bubble0");
    bubble.className = "bubble_work";
    bubble.style.display = "inline";
    bubble.innerHTML = "";
    
    if(line == 1){
        bubble.innerHTML = "HoHoHo!<br>This is<br>my workshop!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "80px";

        audio.play();
    }
    else if(line == 2){
        bubble.innerHTML = "HoHoHo!<br>This is<br>my workshop!";
        bubble.innerHTML = "It ain't much,<br>but it's honest work";
        bubble.style.top = "580px";
        bubble.style.marginLeft = "-10px";

        audio.play();
    }
    else if(line == 3){
        bubble.innerHTML = "Hey!<br>You should write me<br>a letter to know<br>what to give you<br>for Christmas!<br>(Click me again if<br>not redirected)<br>5...";
        bubble.style.top = "500px";
        bubble.style.marginLeft = "-5px";

        audio.play();

        setTimeout(function(){
            bubble.innerHTML = "Hey!<br>You should write me<br>a letter to know<br>what to give you<br>for Christmas!<br>(Click me again if<br>not redirected)<br>4...";
            setTimeout(function(){
                bubble.innerHTML = "Hey!<br>You should write me<br>a letter to know<br>what to give you<br>for Christmas!<br>(Click me again if<br>not redirected)<br>3...";
                setTimeout(function(){
                    bubble.innerHTML = "Hey!<br>You should write me<br>a letter to know<br>what to give you<br>for Christmas!<br>(Click me again if<br>not redirected)<br>2...";
                    setTimeout(function(){
                        bubble.innerHTML = "Hey!<br>You should write me<br>a letter to know<br>what to give you<br>for Christmas!<br>(Click me again if<br>not redirected)<br>1...";
                        setTimeout(function(){
                            window.location.replace("contact.html");
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    else if(line == 4){
        window.location.replace("contact.html");
    }
}

function startPresents(){
    line_pr++;

    let audio = document.getElementById("hohoho");
    let bubble = document.getElementById("bubble0");
    bubble.className = "bubble_work";
    bubble.style.display = "inline";
    bubble.innerHTML = "";

    if(line_pr == 1){
        bubble.innerHTML = "HoHoHo!<br>So you want to<br>open some presents?";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "-10px";

        audio.play();
    }
    else if(line_pr == 2){
        bubble.innerHTML = "I don't think<br>it's a good ideea...<br>It's not Christmas yet!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "-55px";

        audio.play();
    }
    else if(line_pr == 3){
        bubble.innerHTML = "Hey, stop!<br>You are on the<br>naughty list now!";
        bubble.style.top = "550px";
        bubble.style.marginLeft = "15px";

        audio.play();
    }
    else{
        bubble.style.display = "none";

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