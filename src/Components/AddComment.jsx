import Stars from '../Components/reusable/Stars'
// import MyComponent from '../Components/Rating'

const addcomment = () => {
    return (
   
<div className="border-2 p-5 w-full">
            <Stars numberOfStarts='5'/>
         
            <form className="flex justify-between">

                <input type="text" placeholder="Add Comment" className="p-3 border-0 w-full" />
                <button className='border border-gray-500 rounded-md px-4 py-2 hover:bg-gray-100  whitespace-nowrap ml-5'>Add comment</button>
            </form>
        </div>
    
   
        
    )
}

export default addcomment;