import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/slices/categorySlice';

const Category = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state =>state.categories)

    
    useEffect(() => {
      dispatch(getCategories())
    }, [dispatch])
    
  return (
    <div className='bg-gray-100 w-1/6'>Category</div>
  )
}

export default Category