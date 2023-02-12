//the global variables.
var countriesContainer;
var buttoncontainer;
var selectedvalue;
var self;

//the constructor function.
function World(){
    this.name="World-Analysis";
    this.id="World";
    this.loaded=false;
    this.preload=function(){
    var self = this;
    this.data = loadTable(
      'xvac.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });     
       }
    
    
    this.setup = function() {
    if (!this.loaded) {
    console.log('Data not yet loaded');
    return ;
      }
      // Create a select DOM element.
        this.input=createInput("");
        this.input.position(350,35);
        this.button=createButton('Search');
        this.button.position(350,100);
        this.button.addClass("xbtn");
        // Fill the options with all country names.
        this.data.columns;
        var countries = this.data.getColumn(0);
 
    
  
        //fetching the data from the restcountry api.
        //creating the DOM elements to show the fetched data.
        
        this.countrydata= async function(country="united kingdom"){
        var res= await fetch(`https://restcountries.com/v2/name/${country}`)
        if (!res.ok) throw new Error('Problem getting country');
        const [data] = await res.json();
        
        // console.log(data);
        //filling the DOM elements with the data fetched from the restcountries //api.
        this.div=createDiv("");
        this.div.style.fontSize="2rem";
        this.div.style.opacity=0;
        this.div.style.backgroundColor="red";
        countriesContainer = this.div;
        this.image=createImg(`${data.flags.png}`);
        this.image.position(350,200);
        this.image.addClass('country__img');
        this.insidediv=createDiv('');
        this.insidediv.addClass("country");
        this.insidediv.position(850,50);
        this.divcountrydata=createDiv("");
        this.divcountrydata.position(850,50);
        this.divcountrydata.addClass("country__data");
        //console.log(this.button)
        self=this;
        //creating the HTML elements for the data.
        var html = `<link rel="stylesheet" href="world.css">
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        
         ` ;
         this.insidediv.html(html,true);
         this.image.style.width="80rem";
         this.image.style.margin="4rem";
         selectedvalue=this.input.value();
     
           };
        //this function will assign the local variable x with the selected value.
        this.xbtnx=function (){
        //console.log(selectedvalue)
        var x =selectedvalue;
        //console.log(x)
        //the x will be returned.    
        return x;
           
           }
        
        //the function which will be executed when the mouse is pressed.
  
        this.xbtnprx=async function(){
       
        var x=selectAll('.country__img');
        var y = selectAll('.country__data');
        var xz=selectAll('.country');
        //the previous images and other DOM elements will be removed.   
        for(let i=0;i<x.length;i++){
        x[i].remove();
             }
        for(let z=0;z<y.length;z++){
            y[z].remove();
             }
        for(let i=0;i<xz.length;i++){
            xz[i].remove();
             }
        //console.log(selectedvalue);
        //the selectedvalue data is used and the restcountries data is fetched //using this selected value.
        await self.countrydata(selectedvalue)
             }
        //mousepressed function is executed, and "this.xbtnprx" is provided as 
        //attribute/argument.
        this.button.mousePressed(this.xbtnprx)
        //"this.countrydata" is executed.
        this.countrydata()
             };
    
  
    
    
    
         // the DOM elements will be removed the the extension is unselected.
         this.destroy = function() {
         this.button.remove();
         this.image.remove();
         this.div.remove();
         this.insidediv.remove();
         this.input.remove();
         this.divcountrydata.remove();
            };
  
    
    

         
          this.draw=function(){
          //the selectedvalue is updated with "this.input.value()" every frame.
          selectedvalue=this.input.value();
              textSize(14);
              text("Search a country",50,19);
            }
            }
       
  
    
    














