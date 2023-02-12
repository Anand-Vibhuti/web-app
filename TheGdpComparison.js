//the global variables.
var xvalues;
var xcounting=0;
var xselect="Aruba";
var xalternateselect="Aruba";
var xalternatevalues;
var mapped1=[];
var mapped2=[];
//the constructor function.
function Theworld(){
    this.id='Theworld';
    this.name='The Gdp Comparison';
    
    // Property to represent whether data has been loaded.
    this.loaded = false;
    // Preload the data. This function is called automatically by the
    // gallery when a visualisation is added.
    this.preload=function(){
    //loading the table.
    this.table=loadTable('zx.csv','csv','header',
    // Callback function to set the value
    // this.loaded to true.
    function(table) {
    self.loaded = true;
      });
       }
    
    //the setup function for creating the DOM elements, and defining the values.
    
    this.setup=function(){
        //creating the select.
        this.select=createSelect();
        this.select.position(350,26);
        //variable x stores the column locally.
        var x=this.table.getColumn('Country Name');
        textSize(26);
        fill(0);
        //creating the second select.
        this.selectanother=createSelect();
        this.selectanother.position(650,26);
        //filling and loading the countries' names in the select option.
         for(let i=0;i<x.length;i++){
         this.selectanother.option(x[i]);
             this.select.option(x[i]);
        }
        //creating the button element.
        
        this.button=createButton('compare');
        this.button.position(950,26);
        //the value of the selected element is loaded.
        this.xcountry=this.select.value();
        //creating the public arrays for loading the GDP data and loading the data.
        
        this.year=this.table.findRow(this.xcountry,'Country Name');
        
        this.gdp=this.year.obj;
        
        this.zyear=[];
        this.zalternateyear=[];
        this.xalternateyear=[];
        this.alternateyear;
        this.xyear=this.year.arr;
        this.xgdp=this.gdp;
        self=this;
   //creating the function for executing when mouse is pressed.     
        
        
        this.xbtn=function(){
           //filling the global variable with selected value.
            
             xselect=self.select.value();
           //filling the public properties.
            this.year=self.table.findRow(xselect,'Country Name');
             this.alternateyear=self.table.findRow(xalternateselect,'Country Name');
        //filling the global variable with selected value.
            
            xvalues=this.year.arr;
            xalternatevalues=this.alternateyear.arr;
           //mapping the values to the canvas minimum and maximum.
            
            for(let i=5;i<xvalues.length;i++){
                mapped1[i]=map(xvalues[i],0,100000,0,1000);
                mapped2[i]=map(xalternatevalues[i],0,100000,0,1000);
               
            }
            
            //removing the NaN values.
            mapped1.splice(0,5);
            mapped2.splice(0,5); 
        };
        //the "this.xbtn" function will be executed when mouse is pressed on the button.
        this.button.mousePressed(this.xbtn);
    }
    
    //removing the DOM elements, when the extension is unselected.
    this.destroy=function(){
    this.select.remove();
        this.selectanother.remove();
        this.button.remove();
    }
    
    
    //the draw function.
    
    this.draw=function(){
        
        //creating the axis.
        line(59,135,59,575);
        line(59,575,850,575);
        text("Compare the gdp of two countries PPP(Per Capita)",50,100);
        fill(5,5,102);
        rect(50,0,19,19);
        //text(""+xselect,100,19);
        fill(5,171,247);
        rect(350,0,19,19);
        //text(""+xalternateselect,375,19);
        fill(0);
        textSize(14);
        text("YEAR ------->",850,565);
        text("GDP PPP",0,114);
        textSize(5+8);
        var year=1990;
        var gdp=100000;
        for(let i=1;i<=30;i=i+2){
            
        text(year,26+i*26,585);
            
            year=year+2;
        }
        for(let i=0;i<=400;i=i+50){
            text(gdp,19,135+i);
            gdp=gdp-10000;
        }
        
        //updating the global variable per frame.
        xselect=this.select.value();
        xalternateselect=this.selectanother.value();
      


        
        //creating the bar graph and the filling the empty graph.
        for(let i=0;i<mapped1.length;i++){
        fill(5,5,102);
        if(mapped1[i]!=0){    
        rect(59+i*26,575-(mapped1[i]),5,575-(575-mapped1[i]));
        line(59+i*26,575-(mapped1[i]),59+(i+1)*26,(575-mapped1[i+1]));
           }
           }
        
        
        for(let i=0;i<mapped2.length;i++){
        fill(5,171,247);
        if(mapped2[i]!=0){
        rect(59+i*26,575-(mapped2[i]),5,575-(575-mapped2[i]));
        line(59+i*26,575-(mapped2[i]),59+(i+1)*26,(575-mapped2[i+1]));
            
        }
        }    
        }
        }