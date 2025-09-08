import { boolean } from "drizzle-orm/gel-core";
import { varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const User = pgTable( 'users',{

    id:serial('id').primaryKey(),
    name:varchar('name',{length:100}).notNull(),
    email:varchar('email',{length:100}).notNull().unique(),
    image:varchar('image',{length:100}),
    subscription:boolean('subscription').default(false).notNull(),
    createdAt:timestamp('created_at').defaultNow().notNull(),
    updatedAt:timestamp('updated_at').defaultNow().notNull(),
})