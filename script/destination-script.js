class Planet {
  constructor(Prp, Head, Distance, DistanceTime, PlanetImg) {
    this.Prp = Prp;
    this.Head = Head;
    this.Distance = Distance;
    this.DistanceTime = DistanceTime;
    this.PlanetImg = PlanetImg;
  }
}

var planet1 = new Planet("See our planet as you’ve never seen it before. A perfect relaxing trip away to help " +
                         "regain perspective and come back refreshed. While you’re there, take in some history "+
                         "by visiting the Luna 2 and Apollo 11 landing sites.",
                         "MOON",
                         "384,400 km",
                         "3 days",
                         "./assets/destination/image-moon.png");
var planet2 = new Planet("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, " + 
                         "the tallest planetary mountain in our solar system. It’s two and a half times " +
                         "the size of Everest!",
                         "MARS",
                         "225 mil. km",
                         "9 months",
                         "./assets/destination/image-mars.png"
                         );
var planet3 = new Planet("The smallest of the four Galilean moons orbiting Jupiter, " +
                         "Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of " +
                         "ice skating, curling, hockey, or simple relaxation in your snug " +
                         "wintery cabin.",
                         "europa",
                         "628 mil. km",
                         "3 years",
                         "./assets/destination/image-europa.png"
                         );
var planet4 = new Planet("The only moon known to have a dense atmosphere other than Earth, Titan" + 
                         "is a home away from home (just a few hundred degrees colder!). As a " +
                         "bonus, you get striking views of the Rings of Saturn.",
                         "tıtan",
                         "1.6 bil. km",
                         "7 years",
                         "./assets/destination/image-titan.png"
                         );

const moonPage = document.getElementById("moon-btn");
moonPage.addEventListener("click", function(){
  document.getElementById("planet-prp").innerHTML = planet1.Prp;
  document.getElementById("planet-head").innerHTML = planet1.Head;
  document.getElementById("planet-distance").innerHTML = planet1.Distance;
  document.getElementById("planet-distance-time").innerHTML = planet1.DistanceTime;
  document.getElementById("planet-img").src = planet1.PlanetImg;
});

const marsPage = document.getElementById("mars-btn");
marsPage.addEventListener("click", function(){
  document.getElementById("planet-prp").innerHTML = planet2.Prp;
  document.getElementById("planet-head").innerHTML = planet2.Head;
  document.getElementById("planet-distance").innerHTML = planet2.Distance;
  document.getElementById("planet-distance-time").innerHTML = planet2.DistanceTime;
  document.getElementById("planet-img").src = planet2.PlanetImg;
});

const europaPage = document.getElementById("europa-btn");
europaPage.addEventListener("click", function(){
  document.getElementById("planet-prp").innerHTML = planet3.Prp;
  document.getElementById("planet-head").innerHTML = planet3.Head;
  document.getElementById("planet-distance").innerHTML = planet3.Distance;
  document.getElementById("planet-distance-time").innerHTML = planet3.DistanceTime;
  document.getElementById("planet-img").src = planet3.PlanetImg;
});

const titanPage = document.getElementById("titan-btn");
titanPage.addEventListener("click", function(){
  document.getElementById("planet-prp").innerHTML = planet4.Prp;
  document.getElementById("planet-head").innerHTML = planet4.Head;
  document.getElementById("planet-distance").innerHTML = planet4.Distance;
  document.getElementById("planet-distance-time").innerHTML = planet4.DistanceTime;
  document.getElementById("planet-img").src = planet4.PlanetImg;
});

