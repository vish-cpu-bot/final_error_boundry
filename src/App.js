// import City from "./city";
import Counter from "./counter";
// import Country from "./country";
import ErrorHandler from "./ErrorHandler";

function App() {
  return (
    <>
      {/* <City name={"Chandigarh"}/>
   <Country/> */}

      <div style={{ marginLeft: "30px", marginTop: "50px" }}>
        {/* <div style={{ textAlign: "center" }}>
        <h1>
          <strong>To see the working of Error boundaries
           click on the Counters to increase the value
          </strong>
        </h1>
         
         
<p>
          Program is made such a way that as soon as the counter
          reaches the value of 3, Error boundaries will throw an
          error.
        </p>
 
 
      </div> */}
        <hr style={{ width: "500px" }} />
        <ErrorHandler>
          <p>
            These two counters are inside the same error boundary. If one
            crashes, then the effect will be done on both as the error boundary
            will replace both of them.
          </p>

          <Counter />
          <Counter />
        </ErrorHandler>
        <hr style={{ width: "500px" }} />

        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>

        <ErrorHandler>
          <Counter />
        </ErrorHandler>
        <ErrorHandler>
          <Counter />
        </ErrorHandler>
      </div>
    </>
  );
}

export default App;
