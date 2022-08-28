// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const testDna1 = mockUpStrand();
const testDna2 = mockUpStrand();

function pAequorFactory(specimenNum, dna) {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
      const mutateIndex = Math.floor(Math.random() * 15);
      newBase = returnRandBase();
      if (newBase !== this._dna[mutateIndex]) {
        this._dna[mutateIndex] = newBase;
      } else {
        newBase = returnRandBase();
        this._dna[mutateIndex] = newBase;
      }
      // console log for testing
      // console.log(mutateIndex);
      // console.log(this._dna);
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < pAequor._dna.length; i++) {
        if (pAequor._dna[i] === this._dna[i]){
          count++;
        };
      };

      let percentSame = Math.floor(((count / pAequor._dna.length) * 100));
      console.log(`specimen #1 and specimen #2 have ${percentSame}% DNA in common`);
      
      // console log for testing
      // console.log(count);
      // console.log(pAequor._dna[0]);
      // console.log(this._dna[0]);
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {
          count++;
        };
      };
      const survivalbility = Math.floor(((count / this._dna.length) * 100));

      // console log for testing
      // console.log(survivalbility);

      if (survivalbility >= 60) {
        return true;
      } else {
        return false;
      };
    },
  }
};


const newSample1 = (pAequorFactory(1234, testDna1));
const newSample2 = (pAequorFactory(1234, testDna2));

console.log(newSample1);
console.log(newSample2);

console.log(newSample1.willLikelySurvive());





