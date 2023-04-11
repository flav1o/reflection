import { AppNavigation } from "@/AppNavigation";
import { Header } from "@/components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Header />
      <AppNavigation />
    </div>
  );
}

export default App;
