import TodoCard from "./TodoCard";


const TodoContainer = () => {
    return (
        <section>

            <div>
                <div>Add Todo</div>
                <div>Filter</div>
            </div>



            <div className="bg-red-400 w-full rounded-xl p-5 space-y-4">
           {/* <p className="flex justify-center items-center text-2xl font-bold bg-white rounded-md">There is no task pending</p> */}
           <TodoCard></TodoCard>
            </div>
        </section>

    );
};

export default TodoContainer;