export function CalcDates(departdate, returndate){

  let today = new Date();
  let departing = new Date(departdate);
  let returning = new Date(returndate);
  let infuture = false;

  // calculate days for countdown and duration
  const countdown = Math.round((departing.getTime()-today.getTime())/(1000 * 60 * 60 * 24));
  const duration = Math.round((returning.getTime()-departing.getTime())/(1000 * 60 * 60 * 24));

  // if countdown equal 15 or more then this trip is on future
  if(countdown >= 15) {
    infuture = true;
  }

  return { departing: departdate, duration: duration, countdown: countdown+1, infuture: infuture};

}