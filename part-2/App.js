const App = () => {
    return (
        <div>
            <Tweet 
                username= "blossom"
                name= "Blossom"
                date={new Date().toDateString()}
                message= "This is my first tweet!"
            />

            <Tweet
                username= "percperc"
                name= "Percy"
                date={new Date().toDateString()}
                message= "This is my first tweet!"
            />

            <Tweet
                username= "violet"
                name= "Violet"
                date={new Date().toDateString()}
                message= "This is my first tweet!"
            />
           
        </div>
)  
}


ReactDOM.render(<App />, document.getElementById("root"))