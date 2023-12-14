const Button=()=>{
    return <div className="btn-flex">
        <div>
            <button className="btn-items">All</button>
        </div>
        <div>
            <button className="btn-items">Telugu Entertainment</button>
        </div><div>
            <button className="btn-items">Dhee</button>
        </div><div>
            <button className="btn-items">Jabardast</button>
        </div><div>
            <button className="btn-items">Sudigali Sudheer</button>
        </div><div>
            <button className="btn-items">Rashmi Gautham</button>
        </div><div>
            <button className="btn-items">Mixes</button>
        </div><div>
            <button className="btn-items">Shmamma Kasim</button>
        </div>
    </div>
}
const ButtonContainer=()=>{
    return <div className="btn-container">
      <Button/>
    </div>
  }

  export default ButtonContainer;