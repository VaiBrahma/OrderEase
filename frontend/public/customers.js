const customers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      mobile_no: '9876543210',
      address: {
        street: '456 Mango Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        postal_code: '400002',
        country: 'India'
      },
      favorite_dishes: ['Butter Chicken', 'Paneer Tikka'],
      orders: [
        {
          order_id: 101,
          date: '2024-06-10',
          items: [
            { name: 'Butter Chicken', quantity: 1, price: 300 },
            { name: 'Biryani', quantity: 1, price: 250 }
          ],
          total_amount: 550,
          status: 'Delivered'
        },
        {
          order_id: 102,
          date: '2024-06-15',
          items: [
            { name: 'Paneer Tikka', quantity: 2, price: 150 },
            { name: 'Gulab Jamun', quantity: 2, price: 100 }
          ],
          total_amount: 400,
          status: 'Delivered'
        }
      ],
      reviews: [
        {
          restaurant_id: 1,
          rating: 4.5,
          comment: 'Great food and ambiance!'
        }
      ]
    }
  ];
  