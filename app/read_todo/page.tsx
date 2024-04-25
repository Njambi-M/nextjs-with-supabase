"use server";

import { createClient } from "@/utils/supabase/server";

export default async function read_todo(){
    const supabase = createClient();
    let { data: TODO } = await supabase.from('TODO').select('*')
    return <div>{JSON.stringify(TODO)}</div>
}
