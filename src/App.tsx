import React from 'react'
import FormCreateTask from './components/FormCreateUser/FormCreateUser'
import NavBar from './components/NavBar'

import styles from './styles/App.module.scss'

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <NavBar />
      </div>

      {/* Wrapper for form and result */}
      <div className={styles.wrapper}>
        {/* Form for create user*/}
        <div className={styles.form}>
          <FormCreateTask />
        </div>

        {/* Result */}
        <div className={styles.result}></div>
      </div>
    </>
  )
}

export default App
