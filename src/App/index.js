import { AppLayout } from "../Components/Layout";
import { Routers } from "../Router";

const App = () => {
  return (
    <div>
      <AppLayout>
        <Routers />
      </AppLayout>
    </div>
  );
};

export default App;
