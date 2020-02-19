const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueList = []
  for (let journey of this.journeys) {
    if (!uniqueList.includes(journey.transport)){
      uniqueList.push(journey.transport);
    }
    return uniqueList;
  }
};
// return this.journeys.map((journey) => {
//    if(!uniqueList.includes(journey.transport)) {
//      return uniqueList.push(journey.transport)
//    };
//    return uniqueList;
// });
//
module.exports = Traveller;
