
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const comparingTwoArrays = (array1, array2) => {
    const comparison = array1.filter((element) => array2.includes(element));
    console.log(comparison);

};

comparingTwoArrays(student1Courses, student2Courses);
