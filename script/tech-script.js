class Tech {
    constructor(techName, techPrp, techImg) {
        this.techName = techName;
        this.techPrp = techPrp;
        this.techImg = techImg;
    }
}

var tech1 = new Tech("Launch vehicle",
                     "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a " +
                     "payload from Earth's surface to space, usually to Earth orbit or beyond. Our " +
                     "WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, " +
                     "it's quite an awe-inspiring sight on the launch pad!",
                     "./assets/technology/image-launch-vehicle-portrait.jpg"
                     );

var tech2 = new Tech("Spaceport",
                     "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, " + 
                     "by analogy to the seaport for ships or airport for aircraft. Based in the " +
                     "famous Cape Canaveral, our spaceport is ideally situated to take advantage " +
                     "of the Earth’s rotation for launch.",
                     "./assets/technology/image-spaceport-portrait.jpg"
                     );

var tech3 = new Tech("Space capsule",
                     "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry " +
                     "capsule to reenter the Earth's atmosphere without wings. Our capsule is where " +
                     "you'll spend your time during the flight. It includes a space gym, cinema, " +
                     "and plenty of other activities to keep you entertained.",
                     "./assets/technology/image-space-capsule-portrait.jpg"
                     );

const vehiclePage = document.getElementById("vehicle-btn");
vehiclePage.addEventListener("click", function(){
    document.getElementById("tech-name").innerHTML = tech1.techName;
    document.getElementById("tech-prp").innerHTML = tech1.techPrp;
    document.getElementById("tech-img").src = tech1.techImg;
});

const spaceportPage = document.getElementById("spaceport-btn");
spaceportPage.addEventListener("click", function(){
    document.getElementById("tech-name").innerHTML = tech2.techName;
    document.getElementById("tech-prp").innerHTML = tech2.techPrp;
    document.getElementById("tech-img").src = tech2.techImg;
});

const launchPage = document.getElementById("launch-btn");
launchPage.addEventListener("click", function(){
    document.getElementById("tech-name").innerHTML = tech3.techName;
    document.getElementById("tech-prp").innerHTML = tech3.techPrp;
    document.getElementById("tech-img").src = tech3.techImg;
});