import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";


const AddTodoModal = () => {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useAppDispatch()

  const onSubmit = () => {
    const randomString = Math.random().toString(36).substring(2, 10)
    dispatch(addTodo({ id: randomString, tittle: task, description: description }))
  }
  return (

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add Your Task That You Want To Finished.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input onBlur={(e) => setTask(e.target.value)} id="task" placeholder="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input onBlur={(e) => setDescription(e.target.value)} id="description" placeholder="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onSubmit} type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;