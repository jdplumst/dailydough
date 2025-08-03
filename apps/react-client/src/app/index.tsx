import "./styles.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <Button>Click me</Button>
      <p className="description">
        Built With{" "}
        <a href="https://turborepo.com" target="_blank">
          Turborepo
        </a>
        {" & "}
        <a href="https://vitejs.dev/" target="_blank">
          Vite
        </a>
      </p>
    </div>
  );
}

export default App;
