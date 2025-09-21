function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  let newDriveSize = convertSize(driveSize, driveUnit, videoUnit);

  const totalNumOfVideo = newDriveSize / videoSize;
  console.log(totalNumOfVideo);

  return totalNumOfVideo;
}

function convertSize(amount, fromUnit, toUnit) {
  // Conversion rates to bytes
  const units = {
    B: 1,
    KB: 1000,
    MB: 1000 ** 2,
    GB: 1000 ** 3,
    TB: 1000 ** 4,
  };

  fromUnit = fromUnit.toUpperCase();
  toUnit = toUnit.toUpperCase();

  if (!units[fromUnit] || !units[toUnit]) {
    throw new Error("Invalid unit. Use B, KB, MB, GB, or TB.");
  }

  // Step 1: convert input to bytes
  const bytes = amount * units[fromUnit];

  // Step 2: convert bytes to target unit
  const result = bytes / units[toUnit];

  return result;
}

const value = numberOfVideos(2000, "B", 1, "TB");
