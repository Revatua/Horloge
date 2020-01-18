var localTime = new Date(); /*new Date() est dans local time.*/
/* Pour chaque délais les préfixes utiles*/
document.getElementById('secondes').style.webkitAnimationDelay = -(localTime.getSeconds()) + 's';
document.getElementById('minutes').style.webkitAnimationDelay = -(localTime.getMinutes() * 60 + localTime.getSeconds()) + 's';
document.getElementById('heure').style.webkitAnimationDelay = -((localTime.getHours() % 12) * 3600 + localTime.getMinutes() * 60 + localTime.getSeconds())+ 's';
    

console.log(localTime);

