import { selectFilter, selectTaks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTaks);
  const filter = useAppSelector(selectFilter);

  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <h1>Tasks component</h1>
    </div>
  );
};

export default Tasks;
