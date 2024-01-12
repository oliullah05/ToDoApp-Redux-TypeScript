
const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-around items-center p-3">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">todo tittle</p>
        <p>time</p>
        <p>description</p>
        <div className="space-x-4">
            <button>delete</button>
            <button>edit</button>
        </div>
    </div>
    );
};

export default TodoCard;