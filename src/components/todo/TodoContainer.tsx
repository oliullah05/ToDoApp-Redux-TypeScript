import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";


const TodoContainer = () => {
    return (
        <section>

            <div className="flex justify-between my-2">
            <AddTodoModal/>
                <Button>Filter</Button>
            </div>

            {/* bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 */}

            <div className="border-[5px] border-purple-600 w-full h-full rounded-xl p-5 space-y-4">
           {/* <p className="flex justify-center items-center text-2xl font-bold bg-white rounded-md">There is no task pending</p> */}
           <TodoCard></TodoCard>
           <TodoCard></TodoCard>
           <TodoCard></TodoCard>
           <TodoCard></TodoCard>
            </div>
        </section>

    );
};

export default TodoContainer;