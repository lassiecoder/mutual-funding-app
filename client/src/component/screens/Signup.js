import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Materialize from 'materialize-css'

const Signup =() => {

    const histosy = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const PostData = () => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
            Materialize.toast({html: "Invalid Email", classes:'#e53935 red darken-1'})
            return
        }

        fetch('/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error) {
                Materialize.toast({html: data.error, classes:'#e53935 red darken-1'})
            } else {
                Materialize.toast({html: data.message, classes:'#43a047 green darken-1'})
                histosy.push('/signin')
            }
        })
    }

    return(
        // <h1> Signin </h1>
        <div className="signUpCard">
            <div className="card">
                <h1> Sign Up </h1>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}                
                />
                <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button className="waves-effect waves-light btn" onClick={() => PostData()}>
                    Sign Up
                </button>
                <h6 className="alreadyHaveAnAccount"> <Link to='/signin'> Already have an account? </Link> </h6>
            </div>
        </div>
    )
}
export default Signup