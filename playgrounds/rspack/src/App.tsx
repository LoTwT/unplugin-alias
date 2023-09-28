import A from "~/src/components/A"
import { b } from "@/store/b"

function App() {
  return (
    <div>
      <div>rspack</div>
      <A />
      <div>b: {b}</div>
    </div>
  )
}

export default App
