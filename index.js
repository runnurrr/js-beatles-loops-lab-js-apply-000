// add solution here

function theBeatlesPlay(musicians, instruments) {
  let musicianInstArr = [];
  for (let i = 0; i < musicians.length; i++) {
    musiciansInstArr.push(`$musicians[i] plays $instruments[i]`);
  }
  return musicianInstArr;
}

function johnLennonFacts(factsArr) {
  for (let i = 0; i < factsArr.length; i++){
    factsArr[i] = factsArr[i] + "!!!";
  }
  return factsArr;
}