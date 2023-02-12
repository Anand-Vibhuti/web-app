
var table;


var selectedvalue=[]
function Covid() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'covid-vaccination';
    

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'covid-vaccination';
    

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      'xvac.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });
  };
 

  this.setup = function() {
  if (!this.loaded) {
    console.log('Data not yet loaded');
    return ;
    }

    // Create a select DOM element.
    this.select = createSelect();
    this.select.position(350, 500);

    // Fill the options with all country names.
      this.data.columns;
    var countries = this.data.getColumn(0);
 
    
  
    
    // First entry is empty.
    for (let i = 1; i < countries.length; i++) {
      this.select.option(countries[i]);}
      
    
        
 //row = this.data.findRow(selectedvalue[0],'COUNTRY');
  }; 
   
    
    
    this.destroy = function() {
    this.select.remove();
  };
   
    

//function to draw the map of the continent and the data, if statement is used to select the continent and the relevent row is selected and data regarding to the selected country is shown.     

    this.draw=function(){
        push();
        textSize(14);
     var selectedvalue=this.select.value(); 
        var row=this.data.findRow(selectedvalue,"COUNTRY")
       
    if(row.arr[1]=='asia'){
        image(asiamap,0,0);
        asiamap.resize(500,500)
    }
        else if(row.arr[1]=='africa'){
            image(africamap,0,0);
            africamap.resize(500,500);
        }
       else if(row.arr[1]=='southamerica'){
        image(southamericamap,0,0);
        southamericamap.resize(500,500)
    }
        else if(row.arr[1]=='oceania'){
            image(oceaniamap,0,0);
            oceaniamap.resize(500,500); }
        else if(row.arr[1]=='northamerica'){
            image(northamericamap,0,0);
            northamericamap.resize(500,500);
        }
        else if (row.arr[1]=='europe'){
            image(europemap,0,0);
            europemap.resize(500,500);
        }
        else{
            image(worldmap,0,0);
            worldmap.resize(500,500);
        }
        text("Select the Country",350,535);
        fill('red');
       rect(590,300,5,row.arr[5]);
        text('Total Vaccination per 100 - '+row.arr[5],590,90);
        rect(580,85,5,5);
        fill('blue');
        rect(680,300,5,row.arr[6]);
        text("Persons vaccinated with 1 dose per 100 - "+row.arr[6],590,113);
        rect(580,109,5,5);
        fill('green');
        rect(770,300,5,row.arr[8]);
        text('persons fully vaccinated per 100 - '+row.arr[8],590,140);
        rect(580,135,5,5);
        fill(0);
        text('Total Vaccinations - '+row.arr[3],590,175);
        rect(580,165,5,5);
        text('Persons Vaccinated with 1 dose - '+row.arr[4],590,195);
        rect(580,185,5,5);
        text('Persons Fully Vaccinated - '+row.arr[7],590,214);
        rect(580,209,5,5);
        text('Vaccinations Used - '+row.arr[9],590,235);
        rect(580,230,5,5);
        text('Number Of Types Of Vaccinations - '+row.arr[10],590,265.5);
        rect(580,260.5,5,5);
        text('Data Source - '+row.arr[2],590,250.5);
        rect(580,240.9,5,5);
        rect(580,240.9,5,5);
        //rect(580,248.5,5,5);
        
        return 1;
        pop();
        }
   
        
        
        }
   

