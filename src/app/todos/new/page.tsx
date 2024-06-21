import { Metadata } from "next"
import { Suspense } from "react"
import { New__ModelName } from "../components/NewTodo"

export const metadata: Metadata = {
  title: "New Project",
  description: "Create a new project",
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
      <h1>Create Task</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <New__ModelName />
      </Suspense>
    </div>
  )
}
