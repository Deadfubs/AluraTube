import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eyidydknggfbnfduhprc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5aWR5ZGtuZ2dmYm5mZHVocHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0MDAxODMsImV4cCI6MTk5ODk3NjE4M30.A2b1notb0N7RVIEeWarCs1N1mRDnUA0-t-6V-a0bATU";
const supabase = createClient(supabaseUrl, supabaseKey);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}