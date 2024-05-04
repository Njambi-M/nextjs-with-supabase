// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"  
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// import { ReactNode, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { readTodo, createTodo, updateTodo, deleteTodo} from "../../context/actions";


// export default async function ReadTodo(){
//    const TODO =await readTodo();
//     // return <div>{JSON.stringify(TODO)}</div>
//     const [task_name, setTaskName] = useState<string>("");
//     const [progress, setProgress] = useState<string>("");
//     const [done, setDone] = useState<string>("");
//     const [priority, setPriority] = useState<number>(0);

//     const handleCreateTodo = async (task_name: string, progress: string, done: string, priority: number) => {
//         // await createTodo({task_name, progress, done, priority});
//     }

//     return (
//         <> 
//         <h1 className="title">TODO List</h1>
//         <Dialog>
//         <DialogTrigger asChild>
//         <Button className = "btn-add" variant="secondary">ADD</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px] dialog">
//             <DialogHeader className="dialog-title">
//             <DialogTitle>Add TODO</DialogTitle>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="task_name" className="text-right">
//                 Task Name
//                 </Label>
//                 <Input
//                 id="task_name"
//                 className="col-span-3"
//                 value={task_name}
//                 />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="progress" className="text-right">
//                 In Progress
//                 </Label>
//                 <Input
//                 id="progress"
//                 defaultValue="TRUE"
//                 value={progress}
//                 className="col-span-3"
//                 />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="done" className="text-right">
//                 Done
//                 </Label>
//                 <Input
//                 id="done"
//                 defaultValue="FALSE"
//                 value={done}
//                 className="col-span-3"
//                 />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="priority" className="text-right">
//                 Priority
//                 </Label>
//                 <Input
//                 type="number"
//                 id="progress"
//                 defaultValue='0'
//                 value={priority}
//                 className="col-span-3"
//                 />
//             </div>
//             </div>
//             <DialogFooter>
//             <Button type="submit" variant="secondary" onClick={() => handleCreateTodo(task_name, progress, done, priority)}>Add</Button>
//             </DialogFooter>
//         </DialogContent>
//         </Dialog>

//         <Table>
//             <TableHeader>
//                 <TableRow>
//                     <TableHead>ID</TableHead>
//                     <TableHead>Task Name</TableHead>
//                     <TableHead>Time Created</TableHead>
//                     <TableHead>In Progress</TableHead>
//                     <TableHead>Done</TableHead>
//                     <TableHead>Priority</TableHead>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {TODO && TODO.map((todoItem, index) => (
//                     <TableRow key={index}>
//                         {Object.values(todoItem).map((value, index) => (
//                             <TableCell key={index}>{value as ReactNode}</TableCell>
//                         ))}
//                         <TableCell>
//                         <Dialog>
//                             <DialogTrigger asChild>
//                             <Button className = "btn-update"variant="ghost">Update</Button>
//                             </DialogTrigger>
//                             <DialogContent className="sm:max-w-[425px] dialog">
//                                 <DialogHeader className="dialog-title">
//                                 <DialogTitle>Edit TODO</DialogTitle>
//                                 </DialogHeader>
//                                 <div className="grid gap-4 py-4">
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="task_name" className="text-right">
//                                     Task Name
//                                     </Label>
//                                     <Input
//                                     id="task_name"
//                                     className="col-span-3"
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="progress" className="text-right">
//                                     In Progress
//                                     </Label>
//                                     <Input
//                                     id="progress"
//                                     defaultValue="TRUE"
//                                     className="col-span-3"
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="done" className="text-right">
//                                     Done
//                                     </Label>
//                                     <Input
//                                     id="done"
//                                     defaultValue="FALSE"
//                                     className="col-span-3"
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="priority" className="text-right">
//                                     Priority
//                                     </Label>
//                                     <Input
//                                     type="number"
//                                     id="progress"
//                                     defaultValue='0'
//                                     className="col-span-3"
//                                     />
//                                 </div>
//                                 </div>
//                                 <DialogFooter>
//                                 <Button type="submit">Save changes</Button>
//                                 </DialogFooter>
//                             </DialogContent>
//                             </Dialog>
//                             <Button className = "btn-delete" variant="destructive">Delete</Button>
//                         </TableCell>
//                     </TableRow>
//                 ))}

//             </TableBody>
//         </Table>
//         </>
//     )
// }
