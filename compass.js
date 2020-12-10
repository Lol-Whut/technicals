/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1345
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)

*/

"use strict";

const counts = [
  "900,google.com", // google.com
  "60,mail.yahoo.com", // mail.yahoo.com and yahoo.com and com
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk",
];

//function
// create holder object which will be our output at the end of the function
// loop through counts array
// slice string at comma to issolate number, then intparse
// set number as value to string
// slice domain string from each "." to retreive subdomains
// for in loop through obj to check if slice again needed

// const adCounts = (arr) => {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let number = parseInt(arr[i].slice(0, arr[i].indexOf(",")));
//     //     console.log(number);
//     let domain = arr[i].slice(arr[i].indexOf(",") + 1);
//     //     console.log(domain);
//     obj[domain] = number;
//     // if (domain.includes(".")) {
//     //   subdomain(domain);
//     // }
//   }
//   //   const subdomain = (string) => {
//   //     let short = string.slice(string.indexOf(".") + 1);
//   //     if (obj[short]) {
//   //       obj[shorter] += obj[string];
//   //       return subdomain(short);
//   //     } else {
//   //       obj[short] = obj[string];
//   //     }
//   //   };

//   for (let prop in obj) {
//     if (prop.includes(".")) {
//       let shortDom = prop.slice(prop.indexOf(".") + 1);
//       if (obj[shortDom]) {
//         obj[shortDom] += obj[prop];
//       } else {
//         obj[shortDom] = obj[prop];
//         if (shortDom.includes(".")) {
//           let shorter = shortDom.slice(shortDom.indexOf(".") + 1);
//           console.log("shorter = ", shorter);
//           console.log("object = ", obj);
//           if (obj[shorter]) {
//             console.log("TRUE");
//             obj[shorter] += obj[shortDom];
//             console.log("object info", obj[shorter], obj[shortDom]);
//           } else {
//             obj[shorter] = obj[shortDom];
//             //                 console.log(obj[shortDom])
//           }
//         }
//       }
//     }
//   }

//   return obj;
// };

const adCounts = (arr) => {
  const obj = {};
  const recursive = (string, num) => {
    if (obj[string]) obj[string] += num;
    else obj[string] = num;
    if (string.includes(".")) {
      let sliced = string.slice(string.indexOf(".") + 1);
      return recursive(sliced, num);
    }
  };

  for (let i = 0; i < arr.length; i++) {
    let number = parseInt(arr[i].slice(0, arr[i].indexOf(",")));
    //     console.log(number);
    let domain = arr[i].slice(arr[i].indexOf(",") + 1);
    //     console.log(domain);
    recursive(domain, number);
  }

  return obj;
};

console.log(adCounts(counts));
