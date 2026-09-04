import { createRoot } from "react-dom/client"
import reactLogo from './assets/react.svg'
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
    <Page/>
)

function Page() {
  return (
    <div>
      <img src={reactLogo} alt="React logo" />
      <h1>Why React is exciting</h1>
      <ul>
        <li>super easy</li>
        <li>super fast</li>
        <li>super fun</li>
      </ul>
    </div>
  )
}
