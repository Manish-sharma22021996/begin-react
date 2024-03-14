 function rendereElement(reactElment, container){
    const newElement = document.createElement(reactElment.type);
    newElement.innerHTML = reactElment.children;
    newElement.setAttribute("href", reactElment.props.href)
    newElement.setAttribute("target", reactElment.props.target )
    container.appendChild(newElement);

 }



const reactElment= {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "goto Google"
}

const container = document.querySelector("#root");


rendereElement(reactElment, container);