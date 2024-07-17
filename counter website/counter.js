(function(){
    const buttons  = document.querySelectorAll(".btn-group button");
    let count = 0;

    const countvalue = document.querySelector(".countvalue");
    const countcontainer = document.querySelector(".card");

    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            if(button.classList.contains("decrease-button")){
                count--;
            }else if(button.classList.contains("increase-button")){
                count++;
            }
            countvalue.textContent = count;

            if(count > 0){
                countcontainer.classList.remove("negative");
                countcontainer.classList.add("positive");
            }else if(count <0){
                countcontainer.classList.remove("positive");
                countcontainer.classList.add("negative");
            }else{
                countcontainer.classList.remove("positive","negative");
            }
        });
    });

})();