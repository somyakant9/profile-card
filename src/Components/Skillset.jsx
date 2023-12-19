import '../index.css';

function Skillset() {
    const data =[
        "HTML🙌","CSS💪","JAVASCRIPT😊","MERN 💪","BASICS OF JAVA","REDUX🙌","MONGOOSE"
    ]
    return (
        <div className='skill-list'>
            {data.map((el)=>(
                <div key={el} className='skill'>
                      <p>{el} </p>
                </div>
            ))}
        </div>
    )
}

export default Skillset
