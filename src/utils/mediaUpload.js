import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoaWlydmJ3eXd1cWFwbmZ4cGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjgyNjAsImV4cCI6MjA3MDk0NDI2MH0.8c6aVM1SOHaAsZFcSINA4f8whEufFJb4vXac91Q6SPM`;

const url = "https://fhiirvbwywuqapnfxpiv.supabase.co";

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("File not added");
    }
    let fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1];

    const supabase = createClient(url, key);

    const timestamp = new Date().getTime();

    fileName = timestamp +file.name+ "." + extension;

    supabase.storage.from("images").upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    }).then(()=>{
      const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
      resolve(publicUrl);
    }).catch((err)=>{
      reject(err);
    });
  });
}