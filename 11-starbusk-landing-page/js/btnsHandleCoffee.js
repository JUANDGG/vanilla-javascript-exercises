const buttonsHandlecoffee  = (data)=>{
    const fragment = document.createDocumentFragment();
    data.forEach((element,index) => {
        const li =document.createElement("LI");
        li.setAttribute("class","cm-main-ul-li")
        li.setAttribute("dataPosition",index)
        const img =document.createElement("IMG");
        img.setAttribute("src",element["thumb"])
        img.setAttribute("class","cm-main-ul-li-img")
        li.appendChild(img);
        fragment.appendChild(li);
    });
    return fragment
}
export default buttonsHandlecoffee;