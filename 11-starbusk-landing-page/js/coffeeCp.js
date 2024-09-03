const coffeeInformation=(title,description,uriImg)=>{
    return `
        <div class="cm-main-div-divChild1">
            <h1 class="cm-main-div-divChild1-h1">${title}</h1>
            <p class="cm-main-div-divChild1-p">${description}</p>
        </div>
        
        <div class="cm-main-div-divChild2">
            <img class="cm-main-div-divChild2-img" src=${uriImg} />
        </div>
        
    `
}


export default coffeeInformation;