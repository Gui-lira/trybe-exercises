const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    return `olá ${Object.values(Object.values(Object.values(order)[3])[2])[0]}, entrega para ${Object.values(order)[0]}, telefone ${Object.values(order)[1]}
    R, ${Object.values(Object.values(order)[2])[0]}, N° ${Object.values(Object.values(order)[2])[1]} AP: ${Object.values(Object.values(order)[2])[2]}`
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
   order.name = 'Luiz Silva';
   order.payment['total'] = 50;
   let mussarela = {amount: 1, price: 20};
   let calabresa = {amount: 1, price: 20};
   let pizzas = {mussarela, calabresa};
   order.order['pizza'] = Object.assign({}, pizzas)
   console.log(order)
   return `Olá ${order.name} seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é ${order.payment.total}`   
  }
  
  console.log(orderModifier(order));

 // console.log(customerInfo(order));