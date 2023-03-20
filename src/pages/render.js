const render = function(){
    const homepage = document.querySelector('#homepage')
    homepage.style="";
    while(homepage.children.length > 1){
        homepage.children[1].remove();
    }
}


export default render