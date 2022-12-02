import './SignUp.scss'

export default function Register() {
  return (
    <form id="signup">
      <div className="">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" placeholder="First Name" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" placeholder="Last Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  )
}
