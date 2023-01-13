const projectTitle = 'Most Expensive Players in IPL Auction in INR (2008-2023)';
const sourceTitle =
  'Source: Mankadmeister YouTube';
// Data needs to be a hashmap of {year1:{a:aval1, b:bval1}, year2:{a:aval2, b:bval2}}
// Aadhar is just a file that contains direct name wise mapping of entitites to a group
// So that would be like {a:{name:'Pikachu'},{'b':'Charmander'}}
const dataSource = 'auction-data-top25.json';

const speed = 0.001;
const numBarsToShow = 20;
const toShowWatermark = true;

// How far from 0 should the bars begin
const zeroBarOffset = 0.2;

//What percentage of width should be the max
const fullMaxVal = 0.64;

const shouldAssignIdentity = false;
let keyInAadhaarObject = null;
if (shouldAssignIdentity) {
  //This mapping should exist in aadhaar.
  //{Sachin Tendulkar : {country: 'India'}}
  shouldShowIdentity = true;
  keyInAadhaarObject = 'country';
  shouldUseEmoji = true;
}

let lines = [
  {
    v: 10,
    l: 'Bhutan',
  },
  {
    v: 20,
    l: 'Bhutan',
  },
  {
    v: 50,
    l: 'Bhutan',
  },
  {
    v: 100,
    l: 'Bhutan',
  },
  {
    v: 200,
    l: 'Bhutan',
  },
  {
    v: 500,
    l: 'Bhutan',
  },
];
