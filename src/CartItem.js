 import React from 'react';
 class CartItems extends React.Component{
     constructor(){
         super();
         this.state={
             price:999,
             title:'Phone',
             qty:1,
             img:''

         }
     }
     increaseQuantity=()=>{
         console.log(this.state);
         //setstate
         this.setState({
             qty:this.state.qty+1

         })
    }
    decreaseQuantity=()=>{
        console.log(this.state);
        //setstate
        this.setState({
            qty:this.state.qty-1

        })
    }
     render(){
         return (
             <div className="cart-item">
                 <div className="left-block">
                     <img style={styles.image}/>

                 </div>
                 <div className="right-block">
                     <div style={{frontSize:25}}>{this.state.title}</div>
                     <div style={{color:'#777'}}>Rs {this.state.price}</div>
                     <div style={{color:'#777'}}>Qty: {this.state.qty}</div>
                     <div className="cart-item-actions">
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/1828/1828919.svg"
                        onClick={this.increaseQuantity}
                        />
                        <img
                         alt="decrease" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/static/icons/svg/1828/1828899.svg"
                         onClick={this.decreaseQuantity}
                         />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/565/565491.svg"/>

                     </div>
                 </div>
             </div>
         );
     }
 }
 const styles={
     image :{
         height:110,
         width:110,
         borderRadius:4,
         background: '#ccc'
     }
 }
 export default CartItems;