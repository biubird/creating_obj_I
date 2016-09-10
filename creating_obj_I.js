// We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and number of passengers. Then complete the following tasks:
//  Each vehicle should have a makeNoise method
//  Using the constructor, create a Bike
//  Redefine the Bike’s makeNoise method to print “ring ring!”
//  Create a Sedan
//  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
//  Using the constructor, create a Bus
//  Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, num_wheels, num_passengers){
  var vehicle = {
    name: name,
    num_wheels: num_wheels,
    num_passengers: num_passengers,

    make_noise: function(){
      if (vehicle.name === 'bike'){
        console.log(vehicle.name + " goes " + "RING RING");
        }
        else {
          if (vehicle.name === 'sedan'){
            console.log(vehicle.name + " goes " + "HONK HONK");
          }
          else {
      console.log(vehicle.name + " goes " + "BEEP BEEP");
        }
      }
    },
    passenger_pickup: function(num){
      if (vehicle.name === 'bus'){
        bus.num_passengers += num;
          return num;
        }
      }
    }
    return vehicle;
  }


var buick = VehicleConstructor('buick', '4', '1');
console.log(buick);
buick.make_noise();

var bike = VehicleConstructor('bike', '2', '1');
console.log(bike);
bike.make_noise();

var sedan = VehicleConstructor('sedan', '4', '4');
console.log(sedan);
sedan.make_noise();

var bus = VehicleConstructor('bus', '6', '12');
console.log(bus);
bus.make_noise();
bus.passenger_pickup(3);
console.log(bus.num_passengers);
