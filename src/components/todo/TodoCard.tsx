
import { useDeleteTodosMutation, useToggleTodosMutation } from "@/redux/api/api";
import { Button } from "../ui/button";
import UpdateTodoModal from "./updateTodoModal";

export type TTodoCardProps = {
    _id?:string;
    id?: string;
    title: string;
    description: string;
    isCompleted?: boolean,
    priority?: "high" | "medium" | "low"
}
const TodoCard = ({ _id, title, description, isCompleted, priority }: TTodoCardProps) => {

    const [toggleTodos]=useToggleTodosMutation()
    const [deleteTodos]=useDeleteTodosMutation()
    const toggleState = () => {
    
       const taskData = {isCompleted:!isCompleted}
    //    console.log(id,taskData);
       toggleTodos({id:_id,data:taskData})
    }

const handleDelete = (id:string|undefined)=>{
    deleteTodos(id)
}


    return (
        <div className="bg-white border rounded-md flex justify-around items-center p-3">
            <input defaultChecked={isCompleted} className="mr-12 size-4" onClick={toggleState} type="checkbox" name="complete" id="complete" />
            <div className="flex-[0.3] mr-9">
                {isCompleted ? (
                    <p className="bg-green-500 rounded-md px-3">Done</p>
                ) : (
                    <p className="bg-yellow-500 rounded-md px-3">Pending</p>
                )}
            </div>


            <p className="font-semibold flex-1 text-center">{title}</p>

            <p className="flex-[2] ml-3 text-center">{description}</p>

            <div className={`w-20 flex justify-start items-center`}>
                <div className={`size-3 rounded-full ${priority === "high" ? "bg-red-500" : null}
            ${priority === "medium" ? "bg-yellow-500" : null}
            ${priority === "low" ? "bg-green-500" : null}`}>   
            </div>
                {priority}

            </div>

            <div className="flex flex-1 gap-3 justify-center  items-center">
                <Button onClick={()=>handleDelete(_id)}  className="bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </Button>
                <UpdateTodoModal key={_id} title={title} _id={_id} description={description} priority={priority}></UpdateTodoModal>
            </div>

        </div>
    );
};

export default TodoCard;