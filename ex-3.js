const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  // Start coding here
  //   for (let i = 0; i < todos.length; i++) {
  //     todos[i] = todos[i].topic;
  //   }
  return todos.map((value) => value.topic);
}
// console.log(todos.topic);

console.log(getTodoTopics(todos));

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
