// Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

// The image you get is known to have potentially many distinct rectangles of 0s on a background of 1's. Write a function that takes in the image and returns the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

// image1 = [
//   [0, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 0, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 1],
//   [1, 0, 1, 1, 1, 1, 1],
//   [1, 0, 1, 0, 0, 1, 1],
//   [1, 1, 1, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1, 1, 0],
// ]

// Sample output variations (only one is necessary):

// findRectangles(image1) =>
//   // (using top-left-row-column and bottom-right):
//   [
//     [[0,0],[0,0]],
//     [[2,0],[2,0]],
//     [[2,3],[3,5]],
//     [[3,1],[5,1]],
//     [[5,3],[6,4]],
//     [[7,6],[7,6]],
//   ]
//   // (using top-left-x-y and width/height):
//   [
//     [[0,0],[1,1]],
//     [[0,2],[1,1]],
//     [[3,2],[3,2]],
//     [[1,3],[1,3]],
//     [[3,5],[2,2]],
//     [[6,7],[1,1]],
//   ]

// Other test cases:

// image2 = [
//   [0],
// ]

// findRectangles(image2) =>
//   // (using top-left-row-column and bottom-right):
//   [
//     [[0,0],[0,0]],
//   ]

//   // (using top-left-x-y and width/height):
//   [
//     [[0,0],[1,1]],
//   ]

// image3 = [
//   [1],
// ]

// findRectangles(image3) => []

// image4 = [
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 1],
//   [1, 0, 0, 0, 1],
//   [1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1],
// ]

// findRectangles(image4) =>
//   // (using top-left-row-column and bottom-right or top-left-x-y and width/height):
//   [
//     [[1,1],[3,3]],
//   ]

// n: number of rows in the input image
// m: number of columns in the input image

const image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

const image2 = [[0]];

const image3 = [[1]];

const image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

// input = array
//output = x, y, width, height
const island = (array) => {
  let islands = [];
  let seen = [];
  // all j coodinates array
  // all i coordinates array
  // use closure
  //   const checkIslands = (input) => {
  //     if (!xArr)
  //   }
  let xArr = [];
  let yArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        //inner fucntion here
        // check size
        while (array[i][j + 1] === 0 || array[i + 1][j] === 0) {
          if (!xArr.includes(j)) {
            xArr.push(j);
            //psuh to seen
          }
        }
        // and if !jCoor.includes(j)
        //         console.log(xArr)
        if (!yArr.includes(i)) yArr.push(i);
      }
    }
    //   }
    //   console.log("xArr=", xArr);
    let width = xArr.length;

    //   console.log(xArr);
    let height = yArr.length;
    //   console.log('yArr', yArr)
    let x = xArr[0];
    let y = yArr[0];
  }

  console.log({ x: x, y: y, width: width, height: height });
  return { x: x, y: y, width: width, height: height };
};
// declare height and width values set to 0
// loop through outer array - index will be y coordinate - i
// loop through inner array - index will be x coordinate - j
// upon encountering 0 increase width and height to 1
// conditional if array[i][j+1] increase width +=1
// if array[i+1][j] is 0 increase height by 1
island(image1);
island(image2);
island(image3);
island(image4);
island(image5);
