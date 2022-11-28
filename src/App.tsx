import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FormCreateUser from './components/FormCreateUser/FormCreateUser'
import NavBar from './components/NavBar'

import Step1 from './components/CreateUser/Step1/Step1'
import Step2 from './components/CreateUser/Step2/Step2'

import styles from './styles/App.module.scss'
import Step3 from './components/CreateUser/Step3/Step3'

const App: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <NavBar />
      </div>

      {/* Basic content */}
      <div className={styles.content}>
        <Routes>
          {/* Form for create user*/}
          <Route
            path='/'
            element={
              <div className={styles.form}>
                <FormCreateUser />
              </div>
            }
          />

          {/* Step 1 */}
          <Route
            path='/step1'
            element={
              <div className={styles.form}>
                <Step1 />
              </div>
            }
          />

          {/* Step 2 */}
          <Route
            path='/step2'
            element={
              <div className={styles.form}>
                <Step2 />
              </div>
            }
          />

          {/* Step 3 */}
          <Route
            path='/step3'
            element={
              <div className={styles.form}>
                <Step3 />
              </div>
            }
          />
          {/* Result */}
          <Route
            path='/result'
            element={<div className={styles.result}></div>}
          />
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
