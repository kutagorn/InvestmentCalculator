export default function UserInput({title, number = 0,}){
return(
    <div id="user-input" >
        <ul>
            <label htmlFor="Initial Investment">{title}</label>
            <input type="number" placeholder={number}/>
        </ul>
    </div>

)


}