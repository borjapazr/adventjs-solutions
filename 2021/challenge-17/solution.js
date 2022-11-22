const countPackages = (carriers, carrierID) => {
  const [, carrierPackages, carrierSubordinates] = carriers.find(([id]) => id === carrierID);
  return carrierSubordinates.reduce(
    (totalPackages, subordinateCarrierId) => totalPackages + countPackages(carriers, subordinateCarrierId),
    carrierPackages
  );
};

export { countPackages };
