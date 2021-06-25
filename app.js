const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn"); // these ar not varible sthey re elements 
const sidebar = document.querySelector(".sidebar");// queryselectopr returns the first instance of the selector 


toggleBtn.addEventListener("click", function(){
    console.log(sidebar.classList);
//     if (sidebar.classList.contains("show-sidebar")){
//         sidebar.classList.remove("show-sidebar")}
//         else{
//             sidebar.classList.add("show-sidebar")
//     }
 });
    sidebar.classList.toggle("show-sidebar");

    closeBtn.addEventListener("click", function(){
        sidebar.classList.remove("show-sidebar")
    })
