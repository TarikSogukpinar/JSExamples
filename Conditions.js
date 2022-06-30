let date = new Date();

let hour = date.getHours();

if (hour >= 5 && hour <= 11) {
    console.log('Good morning')
} else {
    console.log('Go to sleep')
}

let language = prompt("What is your language?")

switch (language) {
    case "fr":
        console.log('French')
        break;
    case "tr":
        console.log('Turkish')
        break;

    default:
        console.log('English')
        break;
}