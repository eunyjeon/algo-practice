// Make a tower constructor to hold the disks
class Tower {
  constructor(numOfDisks) {
    this.stack = [];
    for (let i = numOfDisks; i > 0; i--) {
      this.stack.push(i);
    }
  }
}

Tower.prototype.moveDisks = function (numOfDisks, buffer, destination) {
  if (numOfDisks > 0) {
    // Move all the disks from the start (this) to the buffer
    this.moveDisks(numOfDisks - 1, destination, buffer);
    // Once we get to the bottom disk, move that to the end stack
    destination.stack.push(this.stack.pop());
    // Take all the disks from the buffer and put them on top in the destination Tower
    buffer.moveDisks(numOfDisks - 1, this, destination);
  }
  return destination;
};

function towerOfHanoi(numOfDisks) {
  let towers = [];
  towers.push(new Tower(numOfDisks));
  towers.push(new Tower(0));
  towers.push(new Tower(0));

  return towers[0].moveDisks(numOfDisks, towers[1], towers[2]);
}

console.log(towerOfHanoi(9));
