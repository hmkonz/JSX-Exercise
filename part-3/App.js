const App = () => {
    return (
        <div>
            <Person
                name= "Alexandra"
                age= {11}
                hobbies = {["skiing", "hiking", "running"]}
            />

            <Person
                name= "Violet"
                age= {30}
                hobbies = {["skiing", "hiking", "running"]}
            />

            <Person
                name= "Percy"
                age= {18}
                hobbies = {["skiing", "hiking", "running"]}
            />

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))