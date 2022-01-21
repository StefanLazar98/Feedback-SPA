import React from 'react'
import { Route } from 'react-router-dom'
import Intro from './Pages/Intro.page'
import ProfessorPage from './Pages/Professor.page'
import StudentPage from './Pages/Student.page'
import ProtectedRoute from './auth/protected-route'

class App extends React.Component {

  render() {
    return (
      <div >
        <Route exact path='/' component={Intro} />
        <ProtectedRoute exact path='/profesor' component={ProfessorPage} />
        <Route exact path='/student' component={StudentPage} />
      </div>
    );
  }

}

export default App;
