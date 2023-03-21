// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
//   let pronoun = ['the','our'];
//   let adj = ['great', 'big' ];
//   let noun = ['jogger','racoon'];
//   let extensions = ['.com','.net','.org', '.io','.us'];

// };

let pronoun = ["the", "our"];
let adj = ["great", "big", "last"];
let noun = ["jogger", "racoon", "OfUs"];
let extensions = [".com", ".er", ".us"];
let ListToPrint;

function DomainList() {
  let vDomList = [];
  let vDomain = "";
  pronoun.forEach((itemPronoun) => {
    adj.forEach((itemAdj) => {
      noun.forEach((itemNoun) => {
        extensions.forEach((itemExt) => {
          vDomain = itemPronoun + itemAdj + itemNoun + itemExt;
          vDomList.push(vDomain);

          if (
            itemNoun.slice(itemExt.slice(1).length * -1).toLowerCase() ==
            itemExt.slice(1).toLowerCase()
          ) {
            //#region Primer Intento usando Replace
            // let NounWithoutExtension = itemNoun
            //   .toLowerCase()
            //   .replace(
            //     itemNoun.slice(itemExt.slice(1).length * -1).toLowerCase(),
            //     ""
            //   );
            // console.log(NounWithoutExtension);
            //#endregion
            let NounWithoutExtension = itemNoun.slice(
              0,
              itemNoun.length - itemExt.slice(1).length
            );
            vDomain = itemPronoun + itemAdj + NounWithoutExtension + itemExt;
          }
          vDomList.push(vDomain);
        });
      });
    });
  });
  return vDomList;
}

ListToPrint = DomainList();
console.log(ListToPrint);
