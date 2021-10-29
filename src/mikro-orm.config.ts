import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

console.log(__dirname);
export default {
    migrations: {
        migrations:{
            path: path.join(__dirname,'./migrations'),
            pattern: /^[\w-]+\d+\.[tj]s$/,
        },
        entities: [Post],
        dbName:'lireddit',
        type: 'postgresql',
        debug : true
    }
} as Parameters<typeof MikroORM.init>[0];