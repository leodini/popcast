export function parseTime(time) {
  //checks if the time is a number
  if (!isNaN(time)) {
    //convert the time from seconds into minutes already formated
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  return "00:00";
}
