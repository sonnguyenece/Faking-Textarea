let i = 0;
let temp = "You are so stupid!!!";
let myText = [];
myText = temp.split("");
let x = document.getElementById('input');
let display = '';
function fakeTyping() {
    x.value = '';
    display += myText[i];
    x.value = display;
    i++;
    if (i > myText.length) {
        i = 0;
        x.value = '';
        display = '';
    }
}
