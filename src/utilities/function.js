import Person from "../components/person/Person"

const displayAll = (contacts)=>{
    return contacts.map(contact=> <Person contact={contact} key={contact.id}></Person>)
}
const addLocalStorage=(id)=>{
    // console.log(id);
    let shoppingCart={};
    
    const storedCart=localStorage.getItem('shoping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    const quantity=shoppingCart[id];
    if(quantity){
        const newquantity=quantity+1;
        shoppingCart[id]=newquantity;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shoping-cart',JSON.stringify(shoppingCart)); 
    // let cart =localStorage.getItem("shoping-cart");
    // if(!cart){
    //     localStorage.setItem('shoping-cart',JSON.stringify(shoppingCart));
    // }
    // cart=JSON.parse(localStorage.getItem("shoping-cart"));
    // // console.log(cart);
    // if(cart[id]){
    //     let val=cart[id];
    //     cart[id]=val+1;
    // }
    // else{
    //     cart[id]=1;
    // }
    // localStorage.setItem('shoping-cart',JSON.stringify(cart));
    
}
const removeLocalStorage=(id)=>{
    let cart =JSON.parse(localStorage.getItem('shoping-cart'));
    if( cart && id in cart){
        delete cart[id];
        localStorage.setItem('shoping-cart',JSON.stringify(cart));
    }
}
export {displayAll,addLocalStorage, removeLocalStorage}