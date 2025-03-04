import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <div className="max-w-2xl mx-auto flex bg-white border border-gray-300 rounded-lg shadow-sm flex-col content-center mt-2 p-2">
      <h1 className="text-2xl font-bold ml-1 border-b-2 border-blue-500">
        {" "}
        Task List
      </h1>
      <div className="mt-2 p-2">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <p> Empty, Try Adding Task </p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
