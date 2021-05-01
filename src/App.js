import React from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <InputForm />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
