const currentPage = "personal-information";

function tabSelected(li_id){

    document.getElementById("personal-information").className = "";
    document.getElementById("payment-information").className = "";
    document.getElementById("financial-goals").className = "";
    document.querySelector(".client-registration__form__personal-information").style.display = "none";
    document.querySelector(".client-registration__form__payment-information").style.display = "none";
    document.querySelector(".client-registration__form__financial-goals").style.display = "none";

    document.getElementById(li_id).className = "client-registration__nav--active";

    if(li_id=="personal-information"){
        document.querySelector(".client-registration__form__personal-information").style.display = "flex";
        currentPage = li_id;
    }
    else if(li_id=="payment-information"){
        document.querySelector(".client-registration__form__payment-information").style.display = "flex";
        currentPage = li_id;
    }
    else if(li_id=="financial-goals"){
        document.querySelector(".client-registration__form__financial-goals").style.display = "flex";
        currentPage = li_id;
    }

}

function nextPage(e){
    e.preventDefault();
    if(currentPage == "personal-information"){

        tabSelected("payment-information");
        console.log("next");
    }
    else if(currentPage == "payment"){
        tabSelected("financial-goals");
    }
}