class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    console.log(this);
    this.printTime();
    this._tick = this._tick.bind(this);
    setInterval(this._tick, 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
  
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
    
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }
   
  


  _tick() {
    this.seconds += 1;
    // 1. Increment the time by one second.
    // 2. Call printTime.
    console.log(this);
    this.printTime();
  }
}

const clock = new Clock();