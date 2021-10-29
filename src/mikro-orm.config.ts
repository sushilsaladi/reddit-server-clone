import { Post } from "./enitites/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: './migrations',
        pattern: /^[\w-]+\d+\.[tj]s$/,
    entities: [Post],
    dbName:'lireddit',
    type: 'postgresql',
    debug : true
} as Parameters<typeof MikroORM.init>[0];