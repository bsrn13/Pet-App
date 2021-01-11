
class Animal {
  constructor(name) {
    this.name = name;
  }

  getImage() {
    document.getElementById("animalImage").src = this.url;

  }
  
action(e) {
  e.stopPropagation();
  document.getElementById(this.actionSoundName).play();

}

putInTheDocument () {
  var petsTable = document.getElementById("petsTable");
  var petTR = document.createElement("tr");

  var petNameTD = document.createElement("td");
  petNameTD.textContent = this.name;
  petTR.appendChild(petNameTD);

  var petLegsTD = document.createElement("td");
  petLegsTD.textContent = this.legs;
  petTR.appendChild(petLegsTD);

  var petActionTD = document.createElement("td");
  var petActionTDButton = document.createElement("button");
  petActionTDButton.textContent = this.actionText;
  petActionTD.appendChild(petActionTDButton);
  petTR.appendChild(petActionTD);

  petActionTDButton.onclick = this.action.bind(this);
  petTR.onclick = this.getImage.bind(this);
  petsTable.querySelector("tbody").appendChild(petTR)
}


}




class Cat extends Animal {
  constructor (name) {
    super (name);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
    this.url = "https://i.pinimg.com/originals/c8/27/78/c827782e12851cd2cf4c5161c4f5445a.jpg"
     }
    }
  


class Monkey extends Animal {
  constructor (name) {
    super (name); 
    this.legs =2 ;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
    this.url = "https://i.pinimg.com/originals/df/dc/10/dfdc10bd8fb49199740109be2207dc7f.jpg"
     }
    }




var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
