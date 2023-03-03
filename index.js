function superbowlWin(record) {
  const winningRecords = record.find(record => record.result === "W")
  return winningRecords ? winningRecords.year : undefined
}


