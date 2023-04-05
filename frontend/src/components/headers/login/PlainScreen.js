import React from 'react'
import './PlainScreen.css'
function loadScript(src){
  return new Promise((resolve)=>{
    const script=document.createElement('script')
  script.src=src
  script.onload=()=>{
    resolve(true)
  }
  script.onerror=()=>{
    resolve(false)
  }
  document.body.appendChild(script)
})
}
function PlainScreen() {
   async function displayRazorPay(){
    const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
      alert('RazorPay SDK failed to load; are you online? ')
      return
    }
    const data= await fetch('https://myworld12.onrender.com/razorpay',{method:'POST'}).then((t)=>t.json())
    console.log(data)
    const options = {
      "key": 'rzp_test_AhMoTIp09GbOPh', 
      "amount": data.amount.toString(),
      "currency": data.currency,
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "name": "Anshuman mishra", 
      "description": "Test Transaction",
      "image": "https://myworld12.onrender.com/logo.svg",
      // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
      
      "prefill": {
          "name": "mishra", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const paymentObject = new window.Razorpay(options); 
  paymentObject.open();
}




// const checkoutHandler = async () => {

//   // const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")
//   const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
      
//   })

//   const options = {
//       key:"rzp_test_AhMoTIp09GbOPh",
//       // amount: order.amount,
//       amount: 5000,
//       currency: "INR",
//       name: "6 Pack Programmer",
//       description: "Tutorial of RazorPay",
//       image: "https://avatars.githubusercontent.com/u/25058652?v=4",
//       order_id: order.id,
//       callback_url: "http://localhost:4000/api/paymentverification",
//       prefill: {
//           name: "Gaurav Kumar",
//           email: "gaurav.kumar@example.com",
//           contact: "9999999999"
//       },
//       notes: {
//           "address": "Razorpay Corporate Office"
//       },
//       theme: {
//           "color": "#121212"
//       }
//   };
//   const razor = new window.Razorpay(options);
//   razor.open();
// }
// // const Card=({amount,checkoutHandler})=>{



  return (
    <div className='plainscreen'>
     <div className='plans'>
      <div className='plans_name'>Gold<br/> 4K HDR</div>
      <div><button className='plans_button'
        
       onClick={displayRazorPay}
      //  onClick={()=>checkoutHandler()}
      >Subscribe</button></div>
     </div>
     <div className='plans'>
      <div className='plans_name'>Platinum<br/> 720p</div>
      <div  ><button className='plans_button'>Subscribe</button></div>
     </div>
     <div className='plans'>
      <div className='plans_name'>Basic<br/>480p</div>
      <div><button className='plans_button'>Enjoy Free</button></div>
     </div>
    
    </div>
  )
}
// }

export default PlainScreen