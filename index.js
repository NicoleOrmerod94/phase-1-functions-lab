// Define the distanceFromHqInBlocks function
function distanceFromHqInBlocks(block) {
    const hqLocation = 42; // Headquarters location
    return Math.abs(block - hqLocation); // Calculate the distance in blocks
  }
  
  // Export the function if needed in the context of a module system
  module.exports = { distanceFromHqInBlocks };
  
  function distanceFromHqInFeet(block) {
    const feetInBlock = 264; // There are 264 feet in a block in Manhattan
    return distanceFromHqInBlocks(block) * feetInBlock; // Calculate distance in feet
  }
  
  module.exports = { distanceFromHqInFeet }; 

  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264; // 1 block = 264 feet
    return distanceInBlocks * feetPerBlock;
}

  module.exports = { distanceTraveledInFeet }; // Export the function if needed
  

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start); // Calculate the distance
    const distanceInFeet = distance * 264;
    // Check if the distance exceeds 2500 feet
    if (distance * 264 > 2500) {
        return 'cannot travel that far';
    }

    // Calculate fare based on distance
    if (distanceInFeet <= 400) {
        // First 400 feet are free
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        // Calculate fare for distance between 400 and 2000 feet (2 cents per foot)
        return (distanceInFeet - 400) * 0.02;
    } else {
        // Charge $25 for distance over 2000 feet
        return 25;
    }
}
module.exports = { calculatesFarePrice};
