import "./App.css";
import { Header } from "./components/Header";
import ToDoItem from "./components/ToDoItem";

const TODOS = [
	{
		id: 1,
		header: "Vyvencit psa",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi!",
		isDone: true,
	},
	{
		id: 2,
		header: "`~Napsat ukol",
		desc: undefined,
		isDone: true,
	},
	{
		id: 3,
		header: "TODO 3",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi! 3",
		isDone: false,
	},
	{
		id: 4,
		header: "TODO 4",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi! 4",
		isDone: true,
	},
];

function App() {
	return (
		<>
			<Header />
			{TODOS.map((item) => (
				<ToDoItem
					// {...item}
					key={item.id}
					header={item.header}
					desc={item.desc}
					isDone={item.isDone}
				/>
			))}
		</>
	);
}

export default App;
