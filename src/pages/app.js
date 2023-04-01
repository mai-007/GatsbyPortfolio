import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import PrivateRoute from "../components/privateRoute"
import Works from "./works"
import Login from "../components/login"

const App = () => (
      <Router>
        <PrivateRoute path="/app/works" component={Works} />
        <Login path="/app/login" />
      </Router>
)

export default App
