const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const averageScore = students.reduce((acc, cur) => {
    return acc + cur.score / students.length;
  }, 0);

  return averageScore;
}

const averageScore = getAverageStudentScore(students); // Output: 87.5

console.log(averageScore);
