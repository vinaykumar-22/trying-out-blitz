"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteTodo from "../mutations/deleteTodo"
import getTodo from "../queries/getTodo"

export const Todo = ({ todoId }: { todoId: number }) => {
  const router = useRouter()
  const [deleteTodoMutation] = useMutation(deleteTodo)
  const [todo] = useQuery(getTodo, { id: todoId })

  return (
    <>
      <div>
        <h1>Task {todo.id}</h1>
        <p
          style={{
            fontSize: "20px",
            padding: "10px",
          }}
        >
          {todo.name}
        </p>

        <Link href={`/todos/${todo.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              router.refresh()
              router.push("/todos")
              await deleteTodoMutation({ id: todo.id })
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}
