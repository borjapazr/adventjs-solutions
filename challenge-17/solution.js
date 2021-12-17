const countPackages = (carriers, carrierID) => {
  const carrierData = carriers.find(carrier => carrier[0] === carrierID);
  const carrierPackagesNumber = carrierData[1];
  const carrieSubordinates = carrierData[2];
  return carrieSubordinates.reduce(
    (packagesNumber, subordinateCarrierId) => packagesNumber + countPackages(carriers, subordinateCarrierId),
    carrierPackagesNumber
  );
};

export { countPackages };
