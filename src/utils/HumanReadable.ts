function parseMillisecondsIntoReadableTime(milliseconds: number) {
  //Get hours from milliseconds
  var hours = milliseconds / (1000 * 60 * 60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

  //Get remainder from minutes and convert to seconds
  var seconds = (minutes - absoluteMinutes) * 60;
  var absoluteSeconds = Math.floor(seconds);
  var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

  return h + ':' + m + ':' + s;
}

function secondsToMs(seconds: number) {
  return seconds * 1000;
}
function hourToMs(hour: number) {
  return secondsToMs(hour * (60 * 60));
}

const THREE_MONTHS = hourToMs(2190);

export { parseMillisecondsIntoReadableTime, THREE_MONTHS };
