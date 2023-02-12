
// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var gallery;
var worldmap;var oceaniamap;
var asiamap;
var europemap;
var northamericamap;
var southamericamap;
var africamap;
var flags;



function setup() {
  // Create a canvas to fill the content div from index.html.
  canvasContainer = select('#app');
  var c = createCanvas(1024,595);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
    gallery.addVisual(new Covid());
    gallery.addVisual(new World());
     gallery.addVisual(new Theworld());
    gallery.addVisual(new TechDiversityRace());
    gallery.addVisual(new TechDiversityGender());
    gallery.addVisual(new PayGapTimeSeries());
    gallery.addVisual(new UKFoodAttitudes());
    gallery.addVisual(new Nutrients());
    
    
    
  
   
    
    
}
//preloading the necessary files.
function preload(){
    worldmap=loadImage('maps/world.jpg');
    asiamap=loadImage('maps/asia.jpg');
    africamap=loadImage('maps/africa.jpg');
    oceaniamap=loadImage('maps/oceania.jpg');
    southamericamap=loadImage('maps/southamerica.jpg');
    northamericamap=loadImage('maps/northamerica.jpg');
    europemap=loadImage('maps/europe.jpg');

}

function draw() {
    
  background(255);
    
  if (gallery.selectedVisual != null ) {
      push();
      
    gallery.selectedVisual.draw();
      pop();
     
    
}
 
  
    
     
  }

    
   

