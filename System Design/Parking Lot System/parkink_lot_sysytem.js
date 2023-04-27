class ParkingSlot {
  constructor(parkingSlotNumber, vehicleType) {
    this.type = vehicleType;
    this.slotNumber = parkingSlotNumber;
    this.occupied = false;
  }

  isOccupied() {
    return this.occupied;
  }
}

class ParkingFloor {
  constructor(floorNumber, occupancy) {
    this.floorNumber = floorNumber;
    this.occupancy = occupancy;
    this.slots = new Array(occupancy).fill(undefined);
    this.slots = this.slots.map((_, index) => {
      if (index === 0) {
        return new ParkingSlot(index, 'truck');
      } else if (index === 1 || index === 2) {
        return new ParkingSlot(index, 'motorcycle');
      } else {
        return new ParkingSlot(index, 'car');
      }
    });
    console.log(this.slots);
  }

  isSpaceAvailable(vehicleType) {
    let is_available = false;
    this.slots.forEach((slot) => {
      if (slot.type === vehicleType) {
        is_available = true;
      }
    });
    return is_available;
  }

  displayVacantSLots() {}
}

class ParkingLot {
  constructor(parking_floors, occupancy_each_floor) {
    this.floors = new Array(parking_floors).fill(undefined);
    this.floors = this.floors.map((_, index) => {
      console.log(index);
      return new ParkingFloor(index, occupancy_each_floor);
    });
    console.log(this.floors);
  }

  isSpaceAvailable(vehicleType) {
    let is_available = false;
    this.floors.forEach((floor) => {
      if (floor.isSpaceAvailable(vehicleType)) {
        is_available = true;
      }
    });
    return is_available;
  }

  getAvailableFloor(vehicleType) {
    let available_floor;
    for (let i = 0; i < this.floors.length; i++) {
      let floor = this.floors[i];
      if (floor.isSpaceAvailable(vehicleType)) {
        available_floor = floor;
        break;
      }
    }
    return available_floor;
  }

  bookSlot(vehicleType) {
    if (this.isSpaceAvailable(vehicleType)) {
      let available_floor = this.getAvailableFloor(vehicleType);
      console.log(available_floor);
    } else {
      console.log(`Sorry! No slots are available at this moment for ${vehicleType}`);
    }
  }
}

let parkingLot = new ParkingLot(1, 5);
parkingLot.bookSlot('car');
parkingLot.bookSlot('airplane');
