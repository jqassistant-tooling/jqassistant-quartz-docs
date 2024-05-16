import fs from "fs"

export const jqaConfig = JSON.parse(fs.readFileSync("jqa.quartz.config.json", 'utf-8'));