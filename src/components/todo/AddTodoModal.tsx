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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodosMutation } from "@/redux/api/api";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";


const AddTodoModal = () => {
  //for local state
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  // const dispatch = useAppDispatch()

  //for server

  const [addTodo] = useAddTodosMutation();
  // console.log({ data, isError, isLoading, isSuccess });
  const onSubmit = () => {
    const randomString = Math.random().toString().substring(2,4)
    const taskDetails = {
      id: randomString,
      isCompleted: false,
      title: task,
      description,
      priority
    }
    // console.log(taskDetails);
    addTodo(taskDetails)
  }
  return (

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add Your Task That You Want To Finished.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Title
            </Label>
            <Input onBlur={(e) => setTask(e.target.value)} id="task" placeholder="Pedro Duarte" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input onBlur={(e) => setDescription(e.target.value)} id="description" placeholder="@peduarte" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Priority

            </Label>
            <Select onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Priority</SelectLabel> */}
                  <SelectItem value="high">high</SelectItem>
                  <SelectItem value="medium">medium</SelectItem>
                  <SelectItem value="low">low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

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