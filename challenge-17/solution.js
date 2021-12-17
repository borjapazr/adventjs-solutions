const countPackages = (carriers, carrierID) => {
  const carrier = carriers.find(c => c[0] === carrierID);
  return carrier[2].reduce((acc, p) => acc + countPackages(carriers, p), carrier[1]);
};

export { countPackages };
