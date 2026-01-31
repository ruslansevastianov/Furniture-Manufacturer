const listHeadersTypesProducts = document.body.querySelectorAll(".projects__categories-item");
const listTypesBlocksProducts = document.body.querySelectorAll(".projects__container-images-column");


for(let i = 0; i < listHeadersTypesProducts.length; i++){

    listHeadersTypesProducts[i].addEventListener("click", () => {

        const count = i;

        for(let j = 0; j < listTypesBlocksProducts.length; j++){

            if(j === count){
                if(listTypesBlocksProducts[j].classList.contains("not-visible")){
                    listTypesBlocksProducts[j].classList.remove("not-visible");
                    if(!listHeadersTypesProducts[j].classList.contains("active")){
                        listHeadersTypesProducts[j].classList.add("active");
                    }
                } else{
                        listTypesBlocksProducts[j].classList.remove("not-visible");
                        // listHeadersTypesProducts[j].classList.add("active");
                }  
            } else {
                    if(!listTypesBlocksProducts[j].classList.contains("not-visible")){
                        listTypesBlocksProducts[j].classList.add("not-visible");
                      
                        if(listHeadersTypesProducts[j].classList.contains("active")){
                            listHeadersTypesProducts[j].classList.remove("active");
                        }
                    } else{
                        listTypesBlocksProducts[j].classList.add("not-visible");

                        if(listHeadersTypesProducts[j].classList.contains("active")){
                            listHeadersTypesProducts[j].classList.remove("active");
                        }
                    }
                }
            }
        
    
    });

}





