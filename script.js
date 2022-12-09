var elementsName = [ "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium" ];
var elementsSymbol = [ "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt" ];
var elementsWeight = ["1.008","4.003","6.941","9.012","10.81","12.01","14.01","16","19","20.18","22.99","24.31","26.98","28.09","30.97","32.07","35.45","39.95","39.1","40.08","44.96","47.88","50.94","52","54.94","55.85","58.93","58.69","63.55","65.38","69.72","72.59","74.92","78.96","79.9","83.8","85.47","87.62","88.91","91.22","92.91","95.94","98","101.1","102.9","106.4","107.9","112.4","114.8","118.7","121.8","127.6","126.9","131.3","132.9055", "137.327", "138.9055", "140.116", "140.9077", "144.24", "145", "150.36", "151.964", "157.25", "158.9253", "162.5", "164.9303", "167.259", "168.9342", "173.04", "174.967", "178.49", "180.9479", "183.84", "186.207", "190.23", "192.217", "195.078", "196.9665", "200.59", "204.3833", "207.2", "208.9804", "209", "210", "222", "223", "226", "227", "232.0381", "231.0359", "238.0289", "237", "244", "243", "247", "247", "251", "252", "257", "258", "259", "262", "261", "262", "266", "264", "277", "268" ]

function search(){
    var filter = document.getElementById("Text").value;
    Search(filter);
}

function Search(filter){
    NameAnswers = [];
    SymbolAnswers = [];
    WeightAnswers = [];
    for(i=0; i < elementsName.length; i++){
        if (elementsName[i].toLowerCase().includes(filter.toLowerCase())){
            NameAnswers.push(elementsName[i])
            SymbolAnswers.push(elementsSymbol[i])
            WeightAnswers.push(elementsWeight[i])
       }
       if (elementsSymbol[i].toLowerCase().includes(filter.toLowerCase())){
        NameAnswers.push(elementsName[i])
        SymbolAnswers.push(elementsSymbol[i])
        WeightAnswers.push(elementsWeight[i])

   }
    }
    PutToDiv(NameAnswers,SymbolAnswers,WeightAnswers);
}

function PutToDiv(NameAnswers,SymbolAnswers,WeightAnswers){
    if (NameAnswers == ""){
        var Aswers = document.getElementById("Aswers");
        Aswers.innerHTML = "None Found";
    }
    else{
        var Aswers = document.getElementById("Aswers");
        Aswers.innerHTML = ""
        console.log(NameAnswers);
        var Aswers = document.getElementById("Aswers");
        for(i=0; i < NameAnswers.length; i++){
            p = document.createElement("a");
            p.id = SymbolAnswers[i]
            console.log(p);
            Aswers.appendChild(p);
            p = document.getElementById(SymbolAnswers[i])
            p.innerHTML = 
            `
            <a href="https://en.wikipedia.org/wiki/`+NameAnswers[i]+`">
            <button class="button width-100 block lh-1 color:" data-action="element-info-open" data-label="Element Info Popup Open">
                <div class="f-base block p-xsm-top p-xsm-bottom no-hover-underline box-shadow-inset " style="background: linear-gradient(170deg, rgba(8, 212, 170, 0.004), rgba(8, 212, 170, 0.004));">
                    <div class="f-lh-15 f-0875">`+i+`</div>
                    <div class="f-10625 f-bold p-xsm-bottom">`+SymbolAnswers[i]+`</div>
                    <div class="sr-only">`+NameAnswers[i]+`</div>
                    <div>`+WeightAnswers[i]+`</div>
                </div>
            </button>
            </a>
            `
        }
    }
}

