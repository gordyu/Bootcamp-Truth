const sampleReviews = [
  {
    "id": 1,
    "employed": "Yes",
    "title": "React Dev",
    "employer": "iMatch",
    "name": "Nick Adams",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/ntadams/"
  },
  {
    "id": 2,
    "employed": "Yes",
    "title": "SWE",
    "employer": "VPGAME",
    "name": "Spencer Kwok",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/spencerkwok8/"
  },
  {
    "id": 3,
    "employed": "Yes",
    "title": "Dev",
    "employer": "TopDevz",
    "name": "Nicholas Martin",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/nicholas-martin14/"
  },
  {
    "id": 4,
    "employed": "No",
    "title": "None",
    "employer": "Unemployed",
    "name": "Marc Tiosejo",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/mtiosejo/"
  },
  {
    "id": 5,
    "employed": "Yes",
    "title": "SWE",
    "employer": "Microsoft",
    "name": "Begona Guereca",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/begonaguereca/"
  },
  {
    "id": 6,
    "employed": "Yes",
    "title": "SWE",
    "employer": "GaawkBox",
    "name": "Chase Lee",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/chasekaylee/"
  },
  {
    "id": 7,
    "employed": "Yes",
    "title": "Apprentice SWE",
    "employer": "AWS",
    "name": "Jhia Turner",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/jhiaturner/"
  },
  {
    "id": 8,
    "employed": "Yes",
    "title": "SWE",
    "employer": "American Well",
    "name": "Jehwa Shin",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/jehwa/"
  },
  {
    "id": 9,
    "employed": "Yes",
    "title": "\"Technical Apprentice\"",
    "employer": "AWS",
    "name": "Nicholas Turner",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/nicolasrturner/"
  },
  {
    "id": 10,
    "employed": "Yes",
    "title": "SWE",
    "employer": "HBO",
    "name": "Santiago Iraola",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/santiago-iraola/"
  },
  {
    "id": 11,
    "employed": "Unk",
    "title": "SEIR",
    "employer": "Galvanize",
    "name": "Fredrick Lou",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/fredricklou/"
  },
  {
    "id": 12,
    "employed": "No",
    "title": "None",
    "employer": "Unemployed",
    "name": "Hao-Han Pan",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/hao-han-pan-061a17164/"
  },
  {
    "id": 13,
    "employed": "Yes",
    "title": "Web Dev",
    "employer": "Working Systems",
    "name": "Mathhew Anderson",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/matt-anderson91/"
  },
  {
    "id": 14,
    "employed": "Yes",
    "title": "SWE",
    "employer": "Kongsberg Maritime",
    "name": "Justin Bui",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/justin-y-bui/"
  },
  {
    "id": 15,
    "employed": "Yes",
    "title": "SWE",
    "employer": "Grab",
    "name": "Chris Poole",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/chris-poole-a71ba3159/"
  },
  {
    "id": 16,
    "employed": "Yes",
    "title": "IT Spec & Analyst",
    "employer": "Bellevue School Dist.",
    "name": "Faris Habib",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/farishabib/"
  },
  {
    "id": 17,
    "employed": "Unk",
    "title": "Can't tell",
    "employer": "\"Self-Employed\"",
    "name": "Bret A.",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/bretja/"
  },
  {
    "id": 18,
    "employed": "Yes",
    "title": "Interactive Art Director",
    "employer": "Metia",
    "name": "Jonathan Owns",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/jondionowens/"
  },
  {
    "id": 19,
    "employed": "Yes",
    "title": "SWE",
    "employer": "NotarCam",
    "name": "Jack Li",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/jack-li-01051/"
  },
  {
    "id": 20,
    "employed": "Yes",
    "title": "SWE",
    "employer": "Boeing",
    "name": "James Lee",
    "year": 2018,
    "bootcamp": "Hack Reactor",
    "area": "Seattle",
    "linkedin": "https://www.linkedin.com/in/james-lee-85ab333b/"
  }
 ];

 module.exports = sampleReviews;