import React, {createContext} from 'react';
import database from '../../firebase';

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
 
    //defining an innitial state with empty array of products
    state=
    {
      computers : [],
      tvies:[],
      accessories:[],
      phones:[]
    }

    
    componentDidMount()
    {
     const prevProducts= this.state.computers;
     database.collection('Computers').onSnapshot(snapshot=>{
         let changes = snapshot.docChanges();
         changes.forEach(change=>
            {
                if(change.type==='added')
                {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductDescription : change.doc.data().ProductDescription,
                        ProductImg:change.doc.data().ProductImg,
                    })
                }
                this.setState({
                    computers:prevProducts
                })
            })
     })

     const prevTvies= this.state.tvies;
     database.collection('Tvies').onSnapshot(snapshot=>{
         let changes = snapshot.docChanges();
         changes.forEach(change1=>
            {
                if(change1.type==='added')
                {
                    prevTvies.push({
                        ProductID: change1.doc.id,
                        ProductName: change1.doc.data().ProductName,
                        ProductPrice: change1.doc.data().ProductPrice,
                        ProductDescription : change1.doc.data().ProductDescription,
                        ProductImg:change1.doc.data().ProductImg,
                    })
                }
                this.setState({
                    tvies:prevTvies
                })
            })
     })

     const prevAccessories=this.state.accessories;
     database.collection('Accessories').onSnapshot(snapshot=>
        {
            let changes=snapshot.docChanges();
            changes.forEach(change2=>
                {
                    if(change2.type==='added')
                    {
                        prevAccessories.push(
                            {
                                ProductID: change2.doc.id,
                                ProductName: change2.doc.data().ProductName,
                                ProductPrice: change2.doc.data().ProductPrice,
                                ProductDescription:change2.doc.data().ProductDescription,
                                ProductImg: change2.doc.data().ProductImg,
                            }
                        )
                    }
                    this.setState({
                        accessories:prevAccessories
                    })
                })
        })

        const prevPhones=this.state.phones;
        database.collection('Phones').onSnapshot(snapshot=>
            {
                let changes = snapshot.docChanges();
                changes.forEach(change3=>
                    {
                        if(change3.type==='added')
                        {
                            prevPhones.push(
                                {
                                    ProductID:change3.doc.id,
                                    ProductName:change3.doc.data().ProductName,
                                    ProductDescription:change3.doc.data().ProductDescription,
                                    ProductPrice:change3.doc.data().ProductPrice,
                                    ProductImg:change3.doc.data().ProductImg,
                                }
                            )
                        }

                        this.setState(
                            {
                                phones:prevPhones
                            }
                        )
                    })
            })
    }



    /*
                --SQL SORGUSU İLE--
     db.collection("cities").where("state", "==", "CA")
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });


    */
    render()
    {
        return(
          <ProductsContext.Provider 
           value={{computers:[...this.state.computers],
                    tvies:[...this.state.tvies],
                    accessories:[...this.state.accessories],
                    phones: [...this.state.phones]
                  }}>
              {this.props.children}
          </ProductsContext.Provider>
        )
    }
};
