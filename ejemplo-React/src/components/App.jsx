import Calculator from "./Calculator";
import Grid from "./course/Grid";
import Header from "./header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>My first component</h1>
        <Calculator name="Add form" />
        <Grid />
      </main>
    </>
  );
}

export default App;
