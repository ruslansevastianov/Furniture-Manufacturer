const listHeadersTypesProducts = document.body.querySelectorAll(".projects__categories-item");
const listTypesBlocksProducts = document.body.querySelectorAll(".projects__container-images-column");



for(let i = 0; i < listHeadersTypesProducts.length; i++){

    listHeadersTypesProducts[i].addEventListener("click", () => {

        const count = i;

        for(let j = 0; j < listTypesBlocksProducts.length; j++){

            if(listTypesBlocksProducts[j] === count){
                if(listTypesBlocksProducts[j].classList.contains("not-visible")){
                    listTypesBlocksProducts[j].classList.remove("not-visible")
                
                    for(let k = 0; k < listTypesBlocksProducts.length; k++){
                        if(listTypesBlocksProducts[k] !== count){
                            if(!listTypesBlocksProducts[k].classList.contains("not-visible")){
                                    listTypesBlocksProducts[k].classList.add("not-visible")
                            }
                            listTypesBlocksProducts[k].classList.add("not-visible")
                        }
                    }
                }   
                break;
            } else{
                for(let l = 0; l < listTypesBlocksProducts.length; l++){
                    if(!listTypesBlocksProducts[l].classList.contains("not-visible")){
                        listTypesBlocksProducts[l].classList.add("not-visible");
                    } 
                }
            }
        }
    });  
}





