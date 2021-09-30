function tab_selected(li_id){
    if(li_id=="personal-information"){
        document.getElementById(li_id).className = "client-registration__nav--active";
        document.getElementById("payment-information").className = "";
        document.getElementById("financial-goals").className = "";
        document.querySelector(".client-registration__form__personal-information").style.display = "flex";
        document.querySelector(".client-registration__form__payment-information").style.display = "none";
        document.querySelector(".client-registration__form__financial-goals").style.display = "none";
    }
    if(li_id=="payment-information"){
        document.getElementById("personal-information").className = "";
        document.getElementById(li_id).className = "client-registration__nav--active";
        document.getElementById("financial-goals").className = "";
        document.querySelector(".client-registration__form__personal-information").style.display = "none";
        document.querySelector(".client-registration__form__payment-information").style.display = "flex";
        document.querySelector(".client-registration__form__financial-goals").style.display = "none";
    }
    if(li_id=="financial-goals"){
        document.getElementById("personal-information").className = "";
        document.getElementById("payment-information").className = "";
        document.getElementById(li_id).className = "client-registration__nav--active";
        document.querySelector(".client-registration__form__personal-information").style.display = "none";
        document.querySelector(".client-registration__form__payment-information").style.display = "none";
        document.querySelector(".client-registration__form__financial-goals").style.display = "flex";
    }
    
}