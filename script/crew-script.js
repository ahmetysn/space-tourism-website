class Crew {
    constructor(crewHead, crewName, crewPrp, crewImg) {
        this.crewHead = crewHead;
        this.crewName = crewName;
        this.crewPrp = crewPrp;
        this.crewImg = crewImg;
    }
}

var crew1 = new Crew("Commander",
                     "Douglas Hurley",
                     "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot " +
                     "and former NASA astronaut. He launched into space for the third time as " +
                     "commander of Crew Dragon Demo-2.",
                     "./assets/crew/image-douglas-hurley.png"
                     );
var crew2 = new Crew("Mission Specialist",
                     "Mark Shuttleworth",
                     "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind " + 
                     "the Linux-based Ubuntu operating system. Shuttleworth became the first South " +
                     "African to travel to space as a space tourist.",
                     "./assets/crew/image-mark-shuttleworth.png"
                     );
var crew3 = new Crew("pilot",
                     "victor glover",
                     "Pilot on the first operational flight of the SpaceX Crew Dragon to the " +
                     "International Space Station. Glover is a commander in the U.S. Navy where " + 
                     "he pilots an F/A-18.He was a crew member of Expedition 64, and served as a " + 
                     "station systems flight engineer." ,
                     "./assets/crew/image-victor-glover.png"
                     );
var crew4 = new Crew("Flight Engineer",
                     "Anousheh Ansari",
                     "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. " +
                     "Ansari was the fourth self-funded space tourist, the first self-funded woman to " +
                     "fly to the ISS, and the first Iranian in space.",
                     "./assets/crew/image-anousheh-ansari.png"
                     );        

const commanderPage = document.getElementById("commander-btn");
commanderPage.addEventListener("click", function(){
    document.getElementById("crew-head").innerHTML = crew1.crewHead;
    document.getElementById("crew-name").innerHTML = crew1.crewName;
    document.getElementById("crew-prp").innerHTML = crew1.crewPrp;
    document.getElementById("crew-img").src = crew1.crewImg;
});

const specialistPage = document.getElementById("specialist-btn");
specialistPage.addEventListener("click", function(){
    document.getElementById("crew-head").innerHTML = crew2.crewHead;
    document.getElementById("crew-name").innerHTML = crew2.crewName;
    document.getElementById("crew-prp").innerHTML = crew2.crewPrp;
    document.getElementById("crew-img").src = crew2.crewImg;
});

const pilotPage = document.getElementById("pilot-btn");
pilotPage.addEventListener("click", function(){
    document.getElementById("crew-head").innerHTML = crew3.crewHead;
    document.getElementById("crew-name").innerHTML = crew3.crewName;
    document.getElementById("crew-prp").innerHTML = crew3.crewPrp;
    document.getElementById("crew-img").src = crew3.crewImg;
});

const engineerPage = document.getElementById("engineer-btn");
engineerPage.addEventListener("click", function(){
    document.getElementById("crew-head").innerHTML = crew4.crewHead;
    document.getElementById("crew-name").innerHTML = crew4.crewName;
    document.getElementById("crew-prp").innerHTML = crew4.crewPrp;
    document.getElementById("crew-img").src = crew4.crewImg;
});