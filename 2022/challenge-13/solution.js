const getFilesToBackup = (lastBackup, changes) => {
  const fileIds = changes.filter(change => change[1] > lastBackup).map(change => change[0]);

  const filesToBackup = new Set(fileIds);

  return [...filesToBackup].sort((fileA, fileB) => fileA - fileB);
};

export { getFilesToBackup };
