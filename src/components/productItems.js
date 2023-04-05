const ProductItem = (props) => {
    console.log(props)
    return ( 
        <div>
            <img src={props.imageURL} alt="#" />
            <p>{props.productName}</p>
            <p>{props.price}</p>
            <a href="#">{props.button}</a>
        </div>
    );
}

export default ProductItem;