function takeANumber(katzDeliLine,name){
  line position = katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${lineposition} in line.`;
}

var ticket = 0
function takeANumber(current) {
  ticket++
  current.push(ticket);
  return `Welcome, you are number ${ticket}`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
  var name;
  name = katzDeliLine.shift(name);
  return "Currently serving "+ name +".";
}

var line = [];
function currentLine(katzDeliLine) {
let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}