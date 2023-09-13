import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Startpage() {
    const navigate = useNavigate()

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm text-center'>
                <h2>Login</h2>
                <div class="d-grid gap-2">
                  <button class="btn btn-success" type="button" onClick={e => navigate('/createadmin')}>Admin</button>
                </div>
            </div>
        </div>
  )
}