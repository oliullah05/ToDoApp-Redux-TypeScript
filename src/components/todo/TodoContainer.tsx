import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";


const TodoContainer = () => {
    //from local state
    // const {todos} = useAppSelector((state)=>state.todos)

    //from server
    const { data: todos, isLoading } = useGetTodosQuery(undefined)
    if (isLoading) {
        return <div>Lodding....</div>
    }

    return (
        <section>

            <div className="flex justify-between my-2">
                <AddTodoModal />
                <TodoFilter></TodoFilter>
            </div>

            {/* bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 */}

            <div className="border-[5px] border-purple-600 w-full h-full rounded-xl p-5 space-y-4">

                {todos ?
                    todos?.map(item => <TodoCard key={item.id} {...item}></TodoCard>
                    ) : <p className="flex justify-center items-center text-2xl font-bold bg-white rounded-md">There is no task pending</p>
                }
            </div>
        </section>

    );
};

export default TodoContainer;