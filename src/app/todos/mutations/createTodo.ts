import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateTodoSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateTodoSchema),
  resolver.authorize(),
  async (input) => {
    const name = input.name
    const todo = await db.todo.create({ data: { name } })

    return todo
  }
)
