console.log("script run...");
// document.querySelector('.back').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    // if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
    //     document.querySelector('.ham').style.display='inline';
    //     // document.querySelector('.back').style.display='none';;
    // }
    // else{
    //     document.querySelector('.ham').style.display='inline';
    //     // setTimeout(()=>{
    //     // document.querySelector('.back').style.display='inline'},300
    //     // )
    // }
})