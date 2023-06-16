const root = document.documentElement
var colorhunt = document.getElementById("colorhunt");
var realtimecolors = document.getElementById("realtimecolors");
var textInput = document.getElementById("text");
var backgroundInput = document.getElementById("background");
var mainInput = document.getElementById("main");
var secondaryInput = document.getElementById("secondary");
var accentInput = document.getElementById("accent");
function setInputs()
{
    textInput.value = getComputedStyle(root).getPropertyValue('--txt-color');
    backgroundInput.value = getComputedStyle(root).getPropertyValue('--bg-color');
    mainInput.value = getComputedStyle(root).getPropertyValue('--main-color');
    secondaryInput.value = getComputedStyle(root).getPropertyValue('--second-color');
    accentInput.value = getComputedStyle(root).getPropertyValue('--acc-color');
}

colorhunt.onclick = function()
{
    input = colorhunt.parentNode.getElementsByTagName('input')[0];
    url_array = input.value.split("/");
    var hex_list = url_array[url_array.length - 1];
    console.log(hex_list);
    root.style.setProperty('--txt-color', "#"+hex_list.substring(0, 6));
    root.style.setProperty('--main-color', "#"+hex_list.substring(6, 12));
    root.style.setProperty('--second-color', "#"+hex_list.substring(12, 18));
    root.style.setProperty('--acc-color', "#"+hex_list.substring(18, 24));
    if(hex_list[0] >= "7")
    {
        root.style.setProperty('--bg-color', "#"+"000000");
    }
    else{
        root.style.setProperty('--bg-color', "#"+"ffffff");
    }
    setInputs();
}
realtimecolors.onclick = function()
{
    input = realtimecolors.parentNode.getElementsByTagName('input')[0];
    url_array = input.value.split("/");
    var hex_list = url_array[url_array.length - 1];
    hex_list = hex_list.slice(8);
    hex_array = hex_list.split("-");
    root.style.setProperty('--txt-color', "#"+hex_array[0]);
    root.style.setProperty('--bg-color', "#"+hex_array[1]);
    root.style.setProperty('--main-color', "#"+hex_array[2]);
    root.style.setProperty('--second-color', "#"+hex_array[3]);
    root.style.setProperty('--acc-color', "#"+hex_array[4]);
    setInputs();
}