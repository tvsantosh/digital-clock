let hrs= document.getElementById("hrs");
let min= document.getElementById("min");
let sec= document.getElementById("sec");


setInterval(() => {
    let currenttime = new Date();

    let hours = currenttime.getHours();
    let formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
    formattedHours = formattedHours < 10 ? "0" + formattedHours : formattedHours;
    
    hrs.innerHTML = formattedHours;


min.innerHTML = (currenttime.getMinutes()<10 ? "0" : "") + currenttime.getMinutes();
sec.innerHTML = currenttime.getSeconds() <10 ? "0" : currenttime.getSeconds();

},1000)



