
import './likes.scss'


export default function Likes({setLikes}) {
    console.log("LIKES");
    //ici je crée mon state
    // Ce que je met en () => const like2 = 0;

    // const [likes, setLikes] = useState(0);
    // const [disLikes, setDislikes] = useState(0);



// Tu recuperes le state d'avant (async) et ensuite quand je l'ai recup, je prend le state et je le rajoute 1

//Soit en function
    /* const handleClick = () => {
        // setLikes(10); pour l'exemple
        setLikes((prevState) => prevState + 1);
        console.log(likes);
    };
 */

    //soit à l'intérieur
    return (
        <div>
            {/* //INPUT CONTROLLé */}
            {/* <input type="number" placeholder="nb likes here" onChange= {(e) =>setLikes(e.target.value)} value= {likes} />
            <p>Nombre de likes : {likes} </p> */}



    <button onClick={() => setLikes((prevState) => prevState + 1)} className="likes">
    Ajouter un like
    </button>
            <p>Nombre de likes : </p>

{/*             <button onClick={() => setDislikes((prevState) => prevState + 1)} className="likes"> Ajouter un dislike </button>
            <p>Nombre de dislikes : {disLikes} </p> */}
        </div>
    )
}

