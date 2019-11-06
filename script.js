var signs = ["Aquarius","Pisces","Aries","Taurus", "Gemini","Cancer", "Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"]
var messages = [
    ", being a strong communicator and holding that charm, new relationships may be coming your way. It's up to you whether they benefit or destroy you.",
    ", your heart may be too good for your own good! But not this week, don't hesitate to help others, good karma will come your way.",
    ", feeling overwhelmed? Perhaps try to get some time alone, you are incredibly independent! You don't need others to thrive and be great.",
    ", don't hold back and chase your desires this week, follow your ambitions and a great fortune will come!",
    ", despite your quick temper changes, be yourself and act freely. You will remain the gem in every eye!",
    ", your known as the emotional one, don't let others take advantage of that. Watch out this week for some traitors.",
    ", is math and science getting on your last nerve? Try relaxing with some arts, you may surprise yourself and find your inner leo creativity.",
    ", think you're overthinking it? Nope, you are so close to reaching the conclusion, your analytical virgo mind will never fail you.",
    ", stay on your own path and much harmony will be coming your way. Go be great!",
    ", congratulations on being born as a Scorpio, the SUPERIOR sign! You hold so much power and the universe is in your hands.",
    ", let your curiosity take you to wherever it leads, you may be surprised.",
    ", this week may be busy busy, but don't let it get to you! Your Capricorn determination will help you push it through and rise to success!",
    "Invalid, please try again"
];
var images= ["img/aquarius.jpg", "img/pisces.jpg", "img/aries.jpg", "img/taurus.jpg", "img/gemini.jpg", "img/cancer.jpg", "img/leo.jpg", "img/virgo.jpg", "img/libra.jpg", "img/scorpio.jpg", "img/sagittarius.jpg",  "img/capricorn.jpg"];
function findSign(month,day){
    if(month==1){
        if(day<=19){
            return 11
        }else{
            return 0
        }
    }
    if(month==2){
        if(day > 29){
            return 12
        }
        if(day<=18){
            return 0
        }else{
            return 1
        }
    }
    if(month==3){
        if(day<=20){
            return 1
        }else{
            return 2
        }
    }
    if(month==4){
        if(day > 30){
            return 12
        }
        if(day<=19){
            return 2
        }else{
            return 3
        }
    }
    if(month==5){
        if(day<=20){
            return 3
        }else{
            return 4
        }
    }
    if(month==6){
        if(day > 30){
            return 12
        }
        if(day<=20){
            return 4
        }else{
            return 5
        }
    }
    if(month==7){
        if(day<=22){
            return 5
        }else{
            return 6
        }
    }
    if(month==8){
        if(day<=22){
            return 6
        }else{
            return 7
        }
    }
    if(month==9){
        if(day > 30){
            return 12
        }
        if(day<=22){
            return 7
        }else{
            return 8
        }
    }
    if(month==10){
        if(day<=22){
            return 8
        }else{
            return 9
        }
    }
    if(month==11){
        if(day > 30){
            return 12
        }
        if(day<=21){
            return 9
        }else{
            return 10
        }
    }
    if(month==12){
        if(day<=21){
            return 10
        }else{
            return 11
        }
    }
}

function onSubmit(){
    var currentDate= new Date()
    var currentMonth = currentDate.getMonth()+1;
    var currentDay = currentDate.getDate();
    //Gets current month and day

    document.getElementById("sign").innerHTML = "";
    document.getElementById("image").src = "";
    //resets the image and sign

    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var theirSign = findSign(month, day);
    //Used user data to find the sign

    if(month==currentMonth&&day==currentDay){
        name= "Happy Birthday "+ name;
    } //adds Happy Birthday to message if its their birthday

    if(name == ""|| theirSign == 12){
        document.getElementById("message").innerHTML = messages[12];
        //returns invalid if they entered invalid info

    }else{
        document.getElementById("sign").innerHTML = signs[theirSign];
        document.getElementById("message").innerHTML = name + messages[theirSign];
        document.getElementById("image").src = images[theirSign];
        document.getElementById("image").height = 150;
        //returns a sign, an image, and a message corresponding to their birthday
    }
}
