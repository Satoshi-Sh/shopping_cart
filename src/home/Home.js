import '../App.css';


function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }


   


const Home =(props)=>{
    const images = importAll(require.context('../images/items', false, /\.(png|jpe?g|svg|webp)$/));
    
    
    const cards = () =>{
        const itemNames = Object.keys(props.order)
        function increment(e){
            
           let newArray = {}
           Object.keys(props.order).forEach((key)=>{
            let ls;
            
            if (e.target.id==key){
                ls=[props.order[key][0],props.order[key][1]+1]
                props.setTotal(props.total + parseInt(props.order[key][0]))
            }
            else {
                ls=props.order[key]
            }
            newArray[key]=ls
           })
           props.setOrder(newArray)
           props.setAmount(props.amount+1)
        }
        function decrement(e){
            
            let newArray = {}
            Object.keys(props.order).forEach((key)=>{
             let ls;
             if (e.target.id==key){
                 ls=[props.order[key][0],props.order[key][1]-1]
                 props.setTotal(props.total - parseInt(props.order[key][0]))
             }
             else {
                 ls=props.order[key]
             }
             newArray[key]=ls
            })
            props.setOrder(newArray)
            props.setAmount(props.amount-1)
            
         }

        const content = itemNames.map((name,i)=>
          {
            const link = images[`${name.replace(' ','_')}.jpg`]
            let buttons;
            if (props.order[name][1]>0){
                buttons =<div className='buttons'>
                    <button id={name} className='plus' onClick={(e)=>increment(e)}>+</button>
                        <p className='amount'>{props.order[name][1]}</p>
                    <button id={name} className='minus' onClick={(e)=>decrement(e)}>-</button>
                </div>
            }
            else {
                buttons=
                <div className='buttons'>
                <button id={name} onClick={(e)=>increment(e)}>Add</button>
                </div>
            }
          return <div key={i} className='card'>
            <h3>{name}</h3>
                 <img className='item' src={link} alt={name}/>
                 <h2>{"$" + props.order[name][0].toString()}</h2>
                 {buttons}
          </div>
          }
        )
       
         return (<div className='cards'>
                   {content}
                </div>)    
    }
    return (
        <div className='home'>
           <h1>Menu</h1>
           {cards(images)}

        </div>
    )
}

export default Home;