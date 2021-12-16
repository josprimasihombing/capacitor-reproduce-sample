function App() {
  return (
    <div className="App">
      <h2>Example form with action to external url and post method</h2>
      <form action="https://www.google.com" method="post">
        <input type="text" name="example" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
