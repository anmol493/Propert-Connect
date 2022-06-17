import React from 'react'
import styles from '../styles/login.module.css'
import Header from '../components/header'
const Register = () => {
  return (
    <>
        <Header/>
        <div className={styles.container}>
            <form>
                <table className={styles.table}>
                <tr>
                        <td>
                            <label>User Email</label>
                        </td>
                        <td>
                            <input type="text" placeholder='User Email'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Mobile Number</label>
                        </td>
                        <td>
                            <input type="number" placeholder='Mobile'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>User Name</label>
                        </td>
                        <td>
                            <input type="text" placeholder='User Name'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password</label>
                        </td>
                        <td>
                            <input type="password" placeholder='Password'/>
                        </td>
                    </tr>
                </table>
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Register