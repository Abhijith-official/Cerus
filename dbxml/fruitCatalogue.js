
// fruit db containing all the info pertaining to each fruit

const data = [
  {
      id: 1,
      fruit_name: "Mangoes",
      picture:
        "img/fruitCatalogue/mangoes.jpg", //an image of the fruit
      fruit_descrip: "They have succulent sweet flesh and a unique mango flavour", //fruit description
      fruit_cert: "Organic",
      fruit_par1: "The mangoes are from Tamarak Mango Estate. It is a first generation farm, started by co-owners Bernie van den Heever and Dirk Visser. The estate is located between Citrusdal and Clanwilliam.", //paragraph 1
      fruit_par2: "The co-owner Bernie says the mangoes are cultivated through biological farming methods. The estate prepares its own compostand refrains from spraying harsh chemicals on fruits or trees. They use natural predators as a pest fighting mechanism.", //paragraph 2
      //fruit_par3: "Medium", //paragraph 3
      //fruit_par4: "Medium", //paragraph 4
      origin: "Tamarak Mango Estate", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 2,
      fruit_name: "Cara Cara Oranges",
      picture:
        "img/fruitCatalogue/caracaraoranges.jpg", //an image of the fruit
      fruit_descrip: "A medium sized navel that is seedless, sweet and low in acidity. It is characterised by little to no pith and easy clean separation from the rind", //fruit description
      fruit_cert: "Conventional",
      fruit_par1: "This medium sized navel is seedless, sweet and low in acid and characterised by little to no pith and easy, clean separation from the rind. The flavour is more complex than most navel varieties and has been described as evoking notes of cherry, rose petal, and blackberry.", //paragraph 1
      fruit_par2: "How citrus arrived on the shores of Africa from the tropical rainforests of Southern China and the Malay Archipelago and ended up on the Olifants River Valley is a historical tale. The arrival of the sweet orange to the shores of Southern Africa is clearly recorded. On 11 June 1654, the ship Tulp brought the first sweet orange trees to Cape Town from St Helena where the Portuguese had planted them to aid sick sailors.", //paragraph 2
      fruit_par3: "The first trees in South Africa were planted in the Company???s Garden. On the 26th July 1661, the first fruits were picked by Jan Van Riebeeck and were recorded as being ???very good???. By the time that the St Helena oranges bore their first fruit, Jan Van Riebeeck had 1162 citrus fruit trees growing in his garden, making it the first South African orchard. ", //paragraph 3
      // fruit_par4: "", //paragraph 4
      origin: "Bergsoom Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 3,
      fruit_name: "Beetroot",
      picture:
        "img/fruitCatalogue/beetroot.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Organic Certified",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Naturally Organic Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 4,
      fruit_name: "English Spinach",
      picture:
        "img/fruitCatalogue/spinachenglish.jpeg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Organic Non-certified",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Pedi (Phillipi)", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 5,
      fruit_name: "Mange Tout Peas",
      picture:
        "img/fruitCatalogue/mangetoutpeas.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Organic Non-ceritifed",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Sababa Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 6,
      fruit_name: "Crown Prince Pumpkin",
      picture:
        "img/fruitCatalogue/crownprincepumpkin.jpg", //an image of the fruit
      fruit_descrip: "Organic Non-certified", //fruit description
      fruit_cert: "Conventional",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Nuy Valley", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 7,
      fruit_name: "Ruby Grapefruit",
      picture:
        "img/fruitCatalogue/grapefruit.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Bergsoom Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 8,
      fruit_name: "Naartjies Nardocott",
      picture:
        "img/fruitCatalogue/naartjies_nardocott.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Conventional",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Bergsoom Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 9,
      fruit_name: "Apple Pink Lady",
      picture:
        "img/fruitCatalogue/pinklady2.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Conventional Pesticide residue free",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Elgin", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 10,
      fruit_name: "Yellow Tomatoes",
      picture:
        "img/fruitCatalogue/yellowtomatoes.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Organic",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Rosenhof Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
    {
      id: 11,
      fruit_name: "Sicilian Tarocco Scire Blood Orange",
      picture:
        "img/fruitCatalogue/scirebloodorange.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Conventional",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Bergsoom Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
      cert: "organic", //certification is organic or conventional
    },
    {
      id: 12,
      fruit_name: "Nules Naartjies",
      picture:
        "img/fruitCatalogue/nulesnaartjies.jpg", //an image of the fruit
      fruit_descrip: "", //fruit description
      fruit_cert: "Conventional",
      fruit_par1: "Medium", //paragraph 1
      fruit_par2: "Medium", //paragraph 2
      fruit_par3: "Medium", //paragraph 3
      fruit_par4: "Medium", //paragraph 4
      origin: "Bergsoom Farm", //farm of origin
      origin_dist: "23km", //distance travelled
      harvest_ts: "23:00", //harvest timestamp
      market_ts: "23:00", //market timestamp
    },
  ];

  // const firstFruit= data[0];
  //
  // document.getElementById("fruitOneName").innerHTML = firstFruit.fruit_name; //assign name of fruitOne to first fruit name object value
  // document.getElementById("fruitOneImg").src = firstFruit.picture; //change image source
  // document.getElementById("fruitOneCert").innerHTML = firstFruit.fruit_cert;
  //
  // const secondFruit= data[1];
  //
  // document.getElementById("fruitTwoName").innerHTML = secondFruit.fruit_name; //assign name of fruitOne to first fruit name object value
  // document.getElementById("fruitTwoImg").src = secondFruit.picture; //change image source
  // document.getElementById("fruitTwoCert").innerHTML = secondFruit.fruit_cert;
  //
  // const thirdFruit= data[2];
  //
  // document.getElementById("fruitThreeName").innerHTML = thirdFruit.fruit_name; //assign name of fruitOne to first fruit name object value
  // document.getElementById("fruitThreeImg").src = thirdFruit.picture; //change image source
  // document.getElementById("fruitThreeCert").innerHTML = thirdFruit.fruit_cert;
  //
  // const fourthFruit= data[3];
  //
  // document.getElementById("fruitFourName").innerHTML = fourthFruit.fruit_name; //assign name of fruitOne to first fruit name object value
  // document.getElementById("fruitFourImg").src = fourthFruit.picture; //change image source
  // document.getElementById("fruitFourCert").innerHTML = fourthFruit.fruit_cert;
  //
  // const fifthFruit= data[4];
  //
  // document.getElementById("fruitFiveName").innerHTML = fifthFruit.fruit_name; //assign name of fruitOne to first fruit name object value
  // document.getElementById("fruitFiveImg").src = fifthFruit.picture; //change image source
  // document.getElementById("fruitFiveCert").innerHTML = fifthFruit.fruit_cert;
  //
  // const sixthFruit= data[5];
  //
  // document.getElementById("fruitSixName").innerHTML = sixthFruit.fruit_name; //assign name of fruitOne to first fruit name object value
  // document.getElementById("fruitSixImg").src = sixthFruit.picture; //change image source
  // document.getElementById("fruitSixCert").innerHTML = sixthFruit.fruit_cert;

  export default data;