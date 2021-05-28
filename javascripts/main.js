const expand_more = () => {
    if(document.querySelector(".things-we-do").classList.contains("inactive")){
        document.querySelector(".things-we-do").classList.remove("inactive");
    }
    else{
        document.querySelector(".things-we-do").classList.add("inactive");
    }    
}