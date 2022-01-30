import{ toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const CartReducer = (state,action) => {
   
    const{shoppingCart,totalPrice, totalQty} =state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type)
    {
        case 'ADD_TO_CART':
           const check = shoppingCart.find(product=>product.ProductID===action.id);
           if(check)
           {
            toast.info('Bu ürün zaten sepetinizde mevcut', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
               return state;
              
           }
           else{
            
               product=action.product;
               product['qty']=1;
               product['TotalProductPrice']=product.ProductPrice * product.qty;
               updatedQty=totalQty+1;
               updatedPrice=totalPrice + product.ProductPrice;
               
               return{
                   
                   shoppingCart: [product, ...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty
                   
               }
           }
           break;
    }
};
