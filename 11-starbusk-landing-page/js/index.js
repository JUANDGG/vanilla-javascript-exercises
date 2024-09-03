import buttonsHandlecoffee from './btnsHandleCoffee.js';
import coffeeInformation from './coffeeCp.js';


const coffeeNavigationButtons = document.getElementById("coffeeNavigationButtons");
const coffeeInformationContainer = document.getElementById("coffeeInformationContainer");



const requestData = async (uri) => {
    try {
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error('There was an error loading the data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const handleNavigationClick = (e, response) => {
    const targetElement = e.target.closest(".cm-main-ul-li");
    if (!targetElement) return; 
    const position = response[targetElement.getAttribute("dataPosition")];
    coffeeInformationContainer.innerHTML = coffeeInformation(position["title"], position["description"], position["image"]);
};

const setupEvents = (response) => {
    coffeeNavigationButtons.addEventListener("click", (e) => {
        handleNavigationClick(e, response);
    });
};

const init = async (uri) => {
    const response = await requestData(uri);
    
    if (response) {
        const navigationButton = buttonsHandlecoffee(response);
        coffeeNavigationButtons.appendChild(navigationButton);

        //initialization first coffee
        coffeeInformationContainer.innerHTML = coffeeInformation(response[0]["title"], response[0]["description"], response[0]["image"]);
        setupEvents(response);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    init("data.json");
});


