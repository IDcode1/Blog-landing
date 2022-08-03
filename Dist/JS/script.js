
function togglemenu(){
    document.getElementById('menu-items').classList.toggle("hidden");
    document.getElementById('menu-open').classList.toggle("hidden");
    document.getElementById('menu-close').classList.toggle("hidden");
}
document.getElementById('menu-open').addEventListener('click', () => {
    togglemenu();
})
document.getElementById('menu-close').addEventListener('click', () => {
    togglemenu();
})












