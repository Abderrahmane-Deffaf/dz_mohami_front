import Stars from "../Components/reusable/Stars";


const comment = ({numberOfStarts,name,publicationDate,comment}) => {
    return (
        <div className="mb-5">
              <p className="flex items-center text-yellow-400 font-bold">
              <Stars numberOfStarts={numberOfStarts} />{numberOfStarts}</p>
              <p className="text-sm">posté par {name} Le {publicationDate}</p>
              <p>{comment}</p>
              
        </div>
    )
}

export default comment