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


const UpdateTodoModal = ({_id,title, description:descriptionData, priority:priorityData }) => {
  //for local state
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  // const dispatch = useAppDispatch()

  //for server

  const [addTodo, { data, isError, isLoading, isSuccess }] = useAddTodosMutation();
  // console.log({ data, isError, isLoading, isSuccess });
  const onSubmit = () => {
    const randomString = Number(Math.random().toString().substring(2,4))
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

    <Dialog >
      <DialogTrigger asChild>
      <Button className="bg-[#5C53FE]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
          <DialogDescription>
            Add Your Task That You Want To Finished.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Title
            </Label>
            <Input onBlur={(e) => setTask(e.target.value)} id="task" placeholder="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input onBlur={(e) => setDescription(e.target.value)} id="description" placeholder="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Priority

            </Label>
            <Select defaultValue={priorityData} onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Priority" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup >
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

export default UpdateTodoModal;