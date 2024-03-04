document.querySelector("#header").style.backgroundColor = "#e7f5ff";
document.querySelector("#header").style.display="flex";
document.querySelector("#header").style.justifyContent = "space-between";
document.querySelector("#header").style.paddingRight="2rem";
document.querySelector("#header").style.paddingLeft="2rem";
document.querySelector("#header").style.paddingTop="1rem";
document.querySelector("#header").style.paddingBottom="1rem";


var image = document.getElementById("picture");
image.setAttribute("src", "LOGO.png");

document.getElementById("bar").style.display="flex";
document.getElementById("bar").style.gap="20px";
document.getElementById("bar").style.listStyle="none";

 var under = document.getElementById("home");
 under.style.coursor="pointer";

document.querySelector("#main").style.gap="20px";
document.querySelector("#main").style.display="flex";

document.getElementById("search").style.height="40px";
document.getElementById("search").style.paddingInlineStart="10px";
document.getElementById("search").style.border="1px solid brown";


document.getElementById("button").style.height="40px";
document.getElementById("button").style.width="5rem";
document.getElementById("button").style.border="1px solid brown";



document.getElementById("icon").style.display="flex";
document.getElementById("icon").style.alignItems="center";
document.getElementById("icon").style.display="none";

document.getElementById("menu").style.fontSize="40px";

function toggleHide(){
    let icon = document.getElementById("icon");
    let bar = document.getElementById("bar");
    let main = document.getElementById("main");

    if(bar.style.display != "none"){
    bar.style.display = "none";
    }
    else{
        bar.style.display = "block";
        bar.style.display = "flex";

    }

    if(main.style.display != "none"){
        main.style.display = "none";
        }
        else{
            main.style.display = "block";
        }


    main.style.display = "none";

}


function checkMediaQuery() {
    if (window.matchMedia ("(max-width: 992px)").matches ){
    document.getElementById("icon").style.display="flex";
    document.getElementById("icon").style.alignItems="center";
    document.getElementById("icon").style.display="block";


    document.getElementById("bar").style.display="none";

document.querySelector("#main").style.display="none";
    }
    else{
        document.getElementById("icon").style.display="flex";
        document.getElementById("icon").style.alignItems="center";
        document.getElementById("icon").style.display="none";


        document.getElementById("bar").style.display="block";
        document.getElementById("bar").style.display="flex";
        document.getElementById("bar").style.gap="20px";
        document.getElementById("bar").style.listStyle="none";

        document.querySelector("#main").style.gap="20px";
        document.querySelector("#main").style.display="block";
    }
}
checkMediaQuery();
window.addEventListener('resize', checkMediaQuery);


