// Write your JavaScript code here!
let statusOfLaunch = null;

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let statusOfLaunch = document.querySelector("h2");
      let statusOfFuel = document.getElementById("fuelStatus");
      let statusOfPilot = document.getElementById("pilotStatus");
      let pilot = document.getElementById("copilotStatus");
      let statusOfCargo = document.getElementById("cargoStatus");
if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
           }
      else if (!isNaN(pilotNameInput.value)) {
         alert ("A name is required for Pilot!");
         event.preventDefault();
      }   
      else if (!isNaN(copilotNameInput.value)) {
         alert ("A name is required for Copilot!");
         event.preventDefault();
      }
      else if (isNaN(fuelLevelInput.value)) {
         alert ("A number is required for FuelLevel!");
         event.preventDefault();
      }  
      else if (isNaN(cargoMassInput.value)) {
         alert ("A number is required for cargoMass!");
         event.preventDefault();
      } 
      else if (Number(fuelLevelInput.value) < 10000) {
         statusOfLaunch.innerHTML = ("Shuttle not ready for launch");
         statusOfLaunch.style.color = "red";
         event.preventDefault();
         document.getElementById("faultyItems").style.visibility = 'visible';
         statusOfFuel.innerHTML = ("There is not enough fuel for the journey");
         statusOfPilot.innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch`);
         pilot.innerHTML = (`Pilot ${copilotNameInput.value} is ready for launch`);
         }
      else if (Number(cargoMassInput.value) > 10000) {
         statusOfLaunch.innerHTML = ("Shuttle not ready for launch");
         statusOfLaunch.style.color = "red";
         event.preventDefault();
         document.getElementById("faultyItems").style.visibility = 'visible';
         statusOfCargo.innerHTML = ("There is too much mass for the shuttle to take off");
         statusOfPilot.innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch`);
         pilot.innerHTML = (`Pilot ${copilotNameInput.value} is ready for launch`);
            }
else {
         statusOfLaunch.innerHTML = ("Shuttle is ready for launch");
         statusOfLaunch.style.color = "green";
         event.preventDefault();
            }
         });   
   });


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
