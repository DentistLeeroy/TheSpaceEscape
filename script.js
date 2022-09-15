
function fStep(){
    event.preventDefault();

    let story1 = document.getElementById("story");
    let action1 = document.getElementById("action").value;

    if (action1 == "look around"){
        story1.innerHTML = "Your turn around by 190 degrees and find what seems to be the remainings of the space ship.";
        document.getElementById("action").value = "";
    } else if (action1 == "go to space ship") {
        story1.innerHTML = "\"This is what I need\", you think ,\"I will find food and oxygen there.\" You gather all your strength and start moving. You quickly realize that you will be dead by the time you reach that ship, so you reconsider your options.";
        document.getElementById("action").value = "";
    } else if (action1 == "check space suit") {
        story1.innerHTML = "You check the inventory of the space suit and it looks quite dreadful. No resources, no energy, if only you had an option to fly like iron man...Wait, what?...";
        document.getElementById("action").value = "";
    } else if (action1 == "puncture space suit") {
        story1.innerHTML = "Without realizing what is going on, you start looking for sharp debris to make a hole in the suit. Why? Your consciousness tells you that you've seen that in some movie. You found it, and now there is a hole in your palm. You started.....ehm....flying...";
        document.getElementById("action").value = "";
    } else if (action1 == "fly to space ship") {
        story1.innerHTML = "The speed, the epic feeling, it's all there. In a matter of minutes you're next to the entrance of ship capsule. But wait, what is this feeling of suffocation? Oh, you forgot that flying comes at a price. You look around and see a red button inside the capsule.";
        document.getElementById("action").value = "";
    } else if (action1 == "press red button") {
        story1.innerHTML = "Every curious man wants to know what the red button does. In your case it starts the decontamination and door locking procedure. In a few seconds fresh oxygen starts flowing. You're safe for now.";
        document.getElementById("action").value = "";
    } else if (action1 == "enter space ship") {
        story1.innerHTML = "You enter the space ship...Well, in this condition it can only be called space capsule. In there you see some vacuum sealed food, the energy levels on the screen are optimal and the driver's panel destion is set to earth.";
        document.getElementById("action").value = "";
    } else if (action1 == "eat food") {
        story1.innerHTML = "You realize that you're both dehydrated and starving. To make this trip home you open some of the sealed food and you find...nutritious mass, it hardly can be called food, but it's filling. Now you're ready to take that trip.";
        document.getElementById("action").value = "";
    } else if (action1 == "start engine") {
        story1.innerHTML = "You press the button to intialize the flight procedure. In a matter of hours you succesfully land in North Korea. No one seems to notice your presence, it looks like a God forgotten land. You start wondering if it would be a better decision to remain in space and die from starvation. But now you mentally prepare yourself for what is called \"an eventfull life in the authoritarian land of Kim Jong-un\"";
        document.getElementById("action").value = "THE END, refresh the page";
    } 
    else {
        story1.innerHTML = "You realize that you don't understand your own thougts, but nevertheless you try to think harder. Or maybe, just maybe, the author didn't think of your response option. Please don't break the game (>'-'<)";
        document.getElementById("action").value = "";
    }
}

function displayCommands() {
    let element = document.getElementById("help");
    element.classList.remove("commands-hidden");
    element.classList.add("commands-visible");
    document.getElementById("myButton").style.display = "none";
  }
