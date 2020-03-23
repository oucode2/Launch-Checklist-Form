// Write your JavaScript code here!
let statusOfLaunch = null;
let randomInt = Math.floor(Math.random() * 6)

window.addEventListener("load", function() {
            fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            // Add HTML that includes the JSON data

            div.innerHTML = `
            <h2> Mission Destination </h2>   
            <ol>
               <li>Name: ${json[randomInt].name}</li>
               <li>Diameter: ${json[randomInt].diameter}</li>
               <li>Star: ${json[randomInt].star}</li>
               <li>Distance from Earth: ${json[randomInt].distance}</li>
               <li>Number of Moons: ${json[randomInt].moons}</li>
            </ol>
            <img src="${json[randomInt].image}">
            `;
            });
      });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let statusOfLaunch = document.getElementById("launchStatus");
      let statusOfFuel = document.getElementById("fuelStatus");
      let statusOfPilot = document.getElementById("pilotStatus");
      let copilot = document.getElementById("copilotStatus");
      let statusOfCargo = document.getElementById("cargoStatus");
if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
           }
      else if (!isNaN(pilotNameInput.value)) {
         alert ("Make sure to enter valid information for each field!");
         event.preventDefault();
      }   
      else if (!isNaN(copilotNameInput.value)) {
         alert ("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      else if (isNaN(fuelLevelInput.value)) {
         alert ("Make sure to enter valid information for each field!");
         event.preventDefault();
      }  
      else if (isNaN(cargoMassInput.value)) {
         alert ("Make sure to enter valid information for each field!");
         event.preventDefault();
      } 
      else if (Number(fuelLevelInput.value) < 10000) {
         statusOfLaunch.innerHTML = ("Shuttle not ready for launch");
         statusOfLaunch.style.color = "red";
         event.preventDefault();
         document.getElementById("faultyItems").style.visibility = 'visible';
         statusOfFuel.innerHTML = ("There is not enough fuel for the journey");
         statusOfPilot.innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch`);
         copilot.innerHTML = (`Pilot ${copilotNameInput.value} is ready for launch`);
         }
      else if (Number(cargoMassInput.value) > 10000) {
         statusOfLaunch.innerHTML = ("Shuttle not ready for launch");
         statusOfLaunch.style.color = "red";
         event.preventDefault();
         document.getElementById("faultyItems").style.visibility = 'visible';
         statusOfCargo.innerHTML = ("There is too much mass for the shuttle to take off");
         statusOfPilot.innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch`);
         copilot.innerHTML = (`Pilot ${copilotNameInput.value} is ready for launch`);
            }
else {
         statusOfLaunch.innerHTML = ("Shuttle is ready for launch");
         statusOfLaunch.style.color = "green";
         event.preventDefault();
         statusOfPilot.innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch`);
         copilot.innerHTML = (`Pilot ${copilotNameInput.value} is ready for launch`);
         statusOfFuel.innerHTML = ("Fuel level high enough for launch");
         statusOfCargo.innerHTML = ("Cargo mass low enough for launch")
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
