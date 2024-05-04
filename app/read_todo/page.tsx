"use server";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"  


import { createClient } from "@/utils/supabase/server";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export default async function read_todo(){
    const supabase = createClient();
    let { data: TODO } = await supabase.from('TODO').select('*')
    // return <div>{JSON.stringify(TODO)}</div>
    return (
        <> 
        <h1 className="title">TODO List</h1>
        <Button className = "btn-add"variant="secondary">ADD</Button>

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
                        {Object.values(todoItem).map((value, index) => (
                            <TableCell key={index}>{value as ReactNode}</TableCell>
                        ))}
                        <TableCell>
                            <Button className = "btn-update"variant="ghost">Update</Button>
                            <Button className = "btn-delete"variant="destructive">Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
        </>
    )
}
