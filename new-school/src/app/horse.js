function Horse(name, age, imageUrl, accelerationMetersPerSec, maximumSpeedMetersPerSec) {
  
  // properties of this horse
  this.name = name;
  this.age = age;
  this.imageUrl = imageUrl;
  this.accelerationMetersPerSec = accelerationMetersPerSec;
  this.maximumSpeedMetersPerSec = maximumSpeedMetersPerSec;

  this.id = NEXT_ID++;

  // private data
  var distance = 0;
  var speed = 0;

  // get the html for this horse
  this.getHtml = function() {
    var template =
      '<div id="idRacer{{ID}}" class="racer horse">' +
      '  <h1>{{NAME}}</h1>' + 
      '  <img src="{{IMAGE_URL}}">' + 
      '</div>';

    return template
    .replace('{{ID}}', this.id)
    .replace('{{NAME}}', this.name)
    .replace('{{IMAGE_URL}}', this.imageUrl);
  }

  // get the id
  this.getId = function() {
    return 'idRacer' + this.id;
  }

  // reset position & speed
  this.reset = function() {
    distance = speed = 0;
  }

  // race for a certain number of seconds
  this.race = function(seconds) {
    // increase the speed
    speed = Math.min(this.maximumSpeedMetersPerSec, speed + this.accelerationMetersPerSec * seconds);
    distance += speed * seconds;
  }

  // get the current distance
  this.getDistance = function() {
    return distance;
  }
}

var NEXT_ID = 1;
