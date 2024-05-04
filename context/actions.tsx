// import { createClient } from "@/utils/supabase/server";
// import exp from "constants";

// const supabase = createClient();

// export const createTodo = async (data: { task_name: string, progress: string, done: string, priority: number }) => {
//     const { data: newTodo, error } = await supabase
//     .from('TODO')
//     .insert([data])
//     .select()

//     if (error) {
//         throw new Error(error.message);
//       }
    
//       return newTodo;
// }

// export async function readTodo() {
//     let { data: TODO } = await supabase.from('TODO').select('*')
//     return TODO;
// }

// export const updateTodo= async (id: number, data: { task_name: string, progress: string, done: string, priority: number }) =>  {
//     const { data:updatedTodo, error } = await supabase
//     .from('TODO')
//     .update(data)
//     .eq('id', 'id')
//     .select()

//     if (error) {
//         throw new Error(error.message);
//       }
    
//       return updatedTodo;
// }
// export const deleteTodo = async (id: number) => {
//     const { error } = await supabase
//     .from('TODO')
//     .delete()
//     .eq('id', 'id')   

//     if (error) {
//         throw new Error(error.message);
//       }
// }