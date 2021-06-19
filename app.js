document.getElementById('stopButton').onclick = red;
document.getElementById('slowButton').onclick = yellow;
document.getElementById('goButton').onclick = green;


function red() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function yellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}
function green() {
    clearLights();
    document.getElementById('goLight').style.backgroundColor = "green";
  }


function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}