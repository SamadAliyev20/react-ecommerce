import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/slices/categorySlice';

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state =>state.categories)
    
    useEffect(() => {
      dispatch(getCategories())
    }, [dispatch])
    
  return (
    <div className='bg-gray-100 w-1/6 p-4'>
        <div className='border-b pb-1 text-xl font-bold px-2'>
            Category
        </div>
        {
            categories?.map((category,i) =>{
               return <div onClick={()=>setCategory(category)} className='text-lg  cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>  
            })
        }
    </div>
  )
}

export default Category