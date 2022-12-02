import './Subscriptions.scss'

export default function Subsciptions() {
  return (
    <div id="subscriptions" className='text-center'>
      <div className="subscriptions-option">
        <h1>Basic</h1>
        <ul>
          <li className="accpeted">Weekly once</li>
          <li className="accepted">Food waste</li>
          <li className="accepted">Plastic waste</li>
          <li className="accepted">Paper waste</li>
          <li className="not-accepted">E Waste</li>
        </ul>
        <p>Rs. 150/month</p>
        <button className="btn btn-primary">Subscribe</button>
      </div>
      <div className="subscriptions-option">
        <h1>Ultimate</h1>
        <ul>
          <li className="accpeted">Weekly twice</li>
          <li className="accepted">Food waste</li>
          <li className="accepted">Plastic waste</li>
          <li className="accepted">Paper waste</li>
          <li className="accepted">E Waste</li>
        </ul>
        <p>Rs. 150/month</p>
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  )
}
