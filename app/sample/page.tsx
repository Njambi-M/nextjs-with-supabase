"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"  
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { readTodo, createTodo, updateTodo, deleteTodo} from "./actions";


export default  function ReadTodo(){
    useEffect(() => { 
            const fetchData = async () => { 
                    const readItems = await readTodo(); 
                    setTODO(readItems as any[]); 
            }
            fetchData();
            console.log(TODO)

        })
    // return <div>{JSON.stringify(TODO)}</div>
    const [TODO, setTODO] = useState<any[]>([]);
    const [task_name, setTaskName] = useState<string>("");
    const [progress, setProgress] = useState<boolean>(false);
    const [done, setDone] = useState<boolean>(false);
    const [priority, setPriority] = useState<number>(0);

    const handleCreateTodo = async (task_name: string, progress: boolean, done: boolean, priority: number) => {
        await createTodo({task_name, progress, done, priority});
    }

    return (
        <> 
        <h1 className="title">TODO List</h1>
        <Dialog>
        <DialogTrigger asChild>
        <Button className = "btn-add" variant="secondary">ADD</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] dialog">
            <DialogHeader className="dialog-title">
            <DialogTitle>Add TODO</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <form onSubmit = {(e) => {e.preventDefault();handleCreateTodo(task_name, progress, done, priority)}}>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task_name" className="text-right">
                Task Name
                </Label>
                <Input
                id="task_name"
                className="col-span-3"
                value={task_name}
                onChange={(e)=>setTaskName(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="progress" className="text-right">
                In Progress
                </Label>
                <Input
                id="progress"
                type="checkbox"
                defaultValue="TRUE"
                checked={progress}
                onChange ={(e) => setProgress(e.target.checked)}
                className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="done" className="text-right">
                Done
                </Label>
                <Input
                id="done"
                defaultValue="FALSE"
                type="checkbox"
                checked={done}
                onChange ={(e) => setDone(e.target.checked)}
                className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priority" className="text-right">
                Priority
                </Label>
                <Input
                type="number"
                id="progress"
                defaultValue='0'
                className="col-span-3"
                value={priority}
                onChange={(e)=>setPriority(parseInt(e.target.value))}
                />
            </div>
            <DialogFooter>
            <Button type="submit" variant="secondary" >Add</Button>
            </DialogFooter>
            </form>
            </div>
            
        </DialogContent>
        </Dialog>

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Task Name</TableHead>
                    <TableHead>Time Created</TableHead>
                    <TableHead>In Progress</TableHead>
                    <TableHead>Done</TableHead>
                    <TableHead>Priority</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TODO && TODO.map((todoItem, index) => (
                    <TableRow key={index}>
                        {/* {Object.values(todoItem).map((value, index) => (
                            <TableCell key={index}>{value as ReactNode}</TableCell>
                        ))} */}
                        <TableCell>{todoItem.id}</TableCell>
                        <TableCell>{todoItem.task_name}</TableCell>
                        <TableCell>{todoItem.created_at}</TableCell>
                        <TableCell>{todoItem.in_progress?'TRUE':'FALSE'}</TableCell>
                        <TableCell>{todoItem.done?'TRUE':'FALSE'}</TableCell>
                        <TableCell>{todoItem.priority}</TableCell>
                        <TableCell>
                        <Dialog>
                            <DialogTrigger asChild>
                            <Button className = "btn-update"variant="ghost">Update</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] dialog">
                                <DialogHeader className="dialog-title">
                                <DialogTitle>Edit TODO</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="task_name" className="text-right">
                                    Task Name
                                    </Label>
                                    <Input
                                    id="task_name"
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="progress" className="text-right">
                                    In Progress
                                    </Label>
                                    <Input
                                    id="progress"
                                    type="checkbox"
                                    defaultValue="FALSE"
                                    checked={progress}
                                    onChange={(e) => setProgress(e.target.checked)}
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="done" className="text-right">
                                    Done
                                    </Label>
                                    <Input
                                    id="done"
                                    type="checkbox"
                                    defaultValue="FALSE"
                                    checked={done}
                                    onChange={(e)=> setDone(e.target.checked)}
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="priority" className="text-right">
                                    Priority
                                    </Label>
                                    <Input
                                    type="number"
                                    id="progress"
                                    defaultValue='0'
                                    className="col-span-3"
                                    />
                                </div>
                                </div>
                                <DialogFooter>
                                <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                            </Dialog>
                            <Button className = "btn-delete" variant="destructive">Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
        </>
    )
}
// 'use client';   
// import React,{useEffect, useState} from 'react'
// import { readTodo } from './actions'

// export default function page() {
//     const [todoItems, setTodoItems] = useState<any[]>([]) 
//     useEffect(() => {
//         const fetchData = async () => {
//             const readItems = await readTodo();
//             setTodoItems(readItems as any[]);
//         }
//         fetchData();    
//     })   
//   return (
//     <div>page is really showing</div>
//   )
// }
