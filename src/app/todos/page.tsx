import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { TodosList } from "./components/TodosList"
import { LogoutButton } from "../(auth)/components/LogoutButton"
export const metadata: Metadata = {
  title: "Todos",
  description: "List of todos",
}

export default function Page() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: " translate(-50%, -50%)",
        // padding: 10px;
      }}
    >
      <h1>TO-DO APP</h1>

      <p
        style={{
          fontWeight: "bold",
        }}
      >
        List of Tasks
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <TodosList />
      </Suspense>
      <Link href={"/todos/new"}>
        <div
          style={{
            backgroundColor: "rgb(0, 204, 255)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Add new tasks
          </p>
        </div>
      </Link>
      <LogoutButton />
    </div>
  )
}
