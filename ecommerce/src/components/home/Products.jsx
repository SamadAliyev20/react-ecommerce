import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProducts, getsortByProduct } from '../../redux/slices/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({category,sort}) => {
  const dispatch = useDispatch();
  const {products,productStatus} = useSelector(state =>state.products)

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };



  useEffect(() =>{
    if(category){
      dispatch(getCategoryProduct(category))
    }
    if(sort){
      dispatch(getsortByProduct(sort))
    }
    else{
      dispatch(getProducts())
    }
  },[dispatch,category,sort])
  return (
    <div>
      {
        productStatus == "LOADING" ? <Loading/> : 
        <>
        <div className='flex flex-wrap'>
          {
            currentItems?.map((product,i) =>{
            return <Product key={i} product={product}/>
            })
          }
        </div>
        <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
        </>
      }
    </div>
  )
}

export default Products