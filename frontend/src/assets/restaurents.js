const restaurents = [
    {
        id: 1,
        title: 'Desi Tadka',
        admin: 'Vinod Bhai',
        admin_handle: 'vinod@gmail.com',
        admin_mobile_no: '9849823932',
        no_of_tables: 100,
        address: {
          street: '123 Spice Lane',
          city: 'Mumbai',
          state: 'Maharashtra',
          postal_code: '400001',
          country: 'India'
        },
        restaurant_img: 'https://example.com/restaurant-image.jpg',
        opening_hours: {
          monday: '9:00 AM - 10:00 PM',
          tuesday: '9:00 AM - 10:00 PM',
          wednesday: '9:00 AM - 10:00 PM',
          thursday: '9:00 AM - 10:00 PM',
          friday: '9:00 AM - 11:00 PM',
          saturday: '9:00 AM - 11:00 PM',
          sunday: '10:00 AM - 9:00 PM'
        },
        contact_info: {
          phone: '022-12345678',
          email: 'info@desitadka.com',
          website: 'www.desitadka.com'
        },
        menu: [
          {
            title: "starters",
            items: [
              { name: 'Paneer Tikka', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-tikka.jpg' },
              { name: 'Chicken Tikka', price: 200, vegetarian: false, isAvailable: false, image_src: 'https://example.com/chicken-tikka.jpg' },
              { name: 'Hara Bhara Kabab', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hara-bhara-kabab.jpg' },
              { name: 'Fish Amritsari', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/fish-amritsari.jpg' },
              { name: 'Aloo Tikki', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/aloo-tikki.jpg' }
            ]
          },
          {
            title: "soups",
            items: [
              { name: 'Tomato Soup', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/tomato-soup.jpg' },
              { name: 'Chicken Soup', price: 120, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-soup.jpg' },
              { name: 'Manchow Soup', price: 110, vegetarian: true, isAvailable: true, image_src: 'https://example.com/manchow-soup.jpg' },
              { name: 'Sweet Corn Soup', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/sweet-corn-soup.jpg' },
              { name: 'Hot and Sour Soup', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hot-and-sour-soup.jpg' }
            ]
          },
          {
            title: "main",
            items:[
              { name: 'Butter Chicken', price: 300, vegetarian: false, isAvailable: true, image_src: 'https://example.com/butter-chicken.jpg' },
              { name: 'Paneer Butter Masala', price: 250, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-butter-masala.jpg' },
              { name: 'Dal Makhani', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/dal-makhani.jpg' },
              { name: 'Rogan Josh', price: 350, vegetarian: false, isAvailable: true, image_src: 'https://example.com/rogan-josh.jpg' },
              { name: 'Chana Masala', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/chana-masala.jpg' }
            ]
          },
          {
            title: "dishes",
            items: [
              { name: 'Biryani', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/biryani.jpg' },
              { name: 'Veg Pulao', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/veg-pulao.jpg' },
              { name: 'Jeera Rice', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jeera-rice.jpg' },
              { name: 'Fried Rice', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/fried-rice.jpg' },
              { name: 'Steam Rice', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/steam-rice.jpg' }
            ]
          },
          {
            title: "desserts",
            items: [
              { name: 'Gulab Jamun', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/gulab-jamun.jpg' },
              { name: 'Rasgulla', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/rasgulla.jpg' },
              { name: 'Kheer', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/kheer.jpg' },
              { name: 'Ice Cream', price: 70, vegetarian: true, isAvailable: true, image_src: 'https://example.com/ice-cream.jpg' },
              { name: 'Jalebi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jalebi.jpg' }
            ]
          },
          {
            title: "drinks",
            items:[
              { name: 'Masala Chai', price: 50, vegetarian: true, isAvailable: true, image_src: 'https://example.com/masala-chai.jpg' },
              { name: 'Lassi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/lassi.jpg' },
              { name: 'Coffee', price: 60, vegetarian: true, isAvailable: true, image_src: 'https://example.com/coffee.jpg' },
              { name: 'Mango Shake', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/mango-shake.jpg' },
              { name: 'Soft Drink', price: 40, vegetarian: true, isAvailable: true, image_src: 'https://example.com/soft-drink.jpg' }
            ]
          },
          {
            title: "snacks",
            items:[
              { name: 'Samosa', price: 30, vegetarian: true, isAvailable: true, image_src: 'https://example.com/samosa.jpg' },
              { name: 'Pakora', price: 40, vegetarian: true, isAvailable: false, image_src: 'https://example.com/pakora.jpg' },
              { name: 'Paneer Roll', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-roll.jpg' },
              { name: 'Chicken Roll', price: 100, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-roll.jpg' },
              { name: 'Vada Pav', price: 25, vegetarian: true, isAvailable: true, image_src: 'https://example.com/vada-pav.jpg' }
            ]
          }
        ],
        reviews: [
          {
            user: 'Rahul',
            rating: 4.5,
            comment: 'Great food and ambiance!'
          },
          {
            user: 'Sita',
            rating: 4.0,
            comment: 'Loved the paneer tikka!'
          },
          {
            user: 'Amit',
            rating: 3.5,
            comment: 'Good variety, but some items were not available.'
          }
        ],
        services: [
          'Dine-in',
          'Takeaway',
          'Home Delivery'
        ]
    },
    {
        id: 2,
        title: 'Desi Tadk2',
        admin: 'Vinod Bhai',
        admin_handle: 'vinod@gmail.com',
        admin_mobile_no: '9849823932',
        no_of_tables: 100,
        address: {
          street: '123 Spice Lane',
          city: 'Mumbai',
          state: 'Maharashtra',
          postal_code: '400001',
          country: 'India'
        },
        restaurant_img: 'https://example.com/restaurant-image.jpg',
        opening_hours: {
          monday: '9:00 AM - 10:00 PM',
          tuesday: '9:00 AM - 10:00 PM',
          wednesday: '9:00 AM - 10:00 PM',
          thursday: '9:00 AM - 10:00 PM',
          friday: '9:00 AM - 11:00 PM',
          saturday: '9:00 AM - 11:00 PM',
          sunday: '10:00 AM - 9:00 PM'
        },
        contact_info: {
          phone: '022-12345678',
          email: 'info@desitadka.com',
          website: 'www.desitadka.com'
        },
        menu: [
          {
            title: "starters",
            items: [
              { name: 'Paneer Tikka', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-tikka.jpg' },
              { name: 'Chicken Tikka', price: 200, vegetarian: false, isAvailable: false, image_src: 'https://example.com/chicken-tikka.jpg' },
              { name: 'Hara Bhara Kabab', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hara-bhara-kabab.jpg' },
              { name: 'Fish Amritsari', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/fish-amritsari.jpg' },
              { name: 'Aloo Tikki', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/aloo-tikki.jpg' }
            ]
          },
          {
            title: "soups",
            items: [
              { name: 'Tomato Soup', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/tomato-soup.jpg' },
              { name: 'Chicken Soup', price: 120, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-soup.jpg' },
              { name: 'Manchow Soup', price: 110, vegetarian: true, isAvailable: true, image_src: 'https://example.com/manchow-soup.jpg' },
              { name: 'Sweet Corn Soup', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/sweet-corn-soup.jpg' },
              { name: 'Hot and Sour Soup', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hot-and-sour-soup.jpg' }
            ]
          },
          {
            title: "main",
            items:[
              { name: 'Butter Chicken', price: 300, vegetarian: false, isAvailable: true, image_src: 'https://example.com/butter-chicken.jpg' },
              { name: 'Paneer Butter Masala', price: 250, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-butter-masala.jpg' },
              { name: 'Dal Makhani', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/dal-makhani.jpg' },
              { name: 'Rogan Josh', price: 350, vegetarian: false, isAvailable: true, image_src: 'https://example.com/rogan-josh.jpg' },
              { name: 'Chana Masala', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/chana-masala.jpg' }
            ]
          },
          {
            title: "dishes",
            items: [
              { name: 'Biryani', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/biryani.jpg' },
              { name: 'Veg Pulao', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/veg-pulao.jpg' },
              { name: 'Jeera Rice', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jeera-rice.jpg' },
              { name: 'Fried Rice', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/fried-rice.jpg' },
              { name: 'Steam Rice', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/steam-rice.jpg' }
            ]
          },
          {
            title: "desserts",
            items: [
              { name: 'Gulab Jamun', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/gulab-jamun.jpg' },
              { name: 'Rasgulla', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/rasgulla.jpg' },
              { name: 'Kheer', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/kheer.jpg' },
              { name: 'Ice Cream', price: 70, vegetarian: true, isAvailable: true, image_src: 'https://example.com/ice-cream.jpg' },
              { name: 'Jalebi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jalebi.jpg' }
            ]
          },
          {
            title: "drinks",
            items:[
              { name: 'Masala Chai', price: 50, vegetarian: true, isAvailable: true, image_src: 'https://example.com/masala-chai.jpg' },
              { name: 'Lassi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/lassi.jpg' },
              { name: 'Coffee', price: 60, vegetarian: true, isAvailable: true, image_src: 'https://example.com/coffee.jpg' },
              { name: 'Mango Shake', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/mango-shake.jpg' },
              { name: 'Soft Drink', price: 40, vegetarian: true, isAvailable: true, image_src: 'https://example.com/soft-drink.jpg' }
            ]
          },
          {
            title: "snacks",
            items:[
              { name: 'Samosa', price: 30, vegetarian: true, isAvailable: true, image_src: 'https://example.com/samosa.jpg' },
              { name: 'Pakora', price: 40, vegetarian: true, isAvailable: false, image_src: 'https://example.com/pakora.jpg' },
              { name: 'Paneer Roll', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-roll.jpg' },
              { name: 'Chicken Roll', price: 100, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-roll.jpg' },
              { name: 'Vada Pav', price: 25, vegetarian: true, isAvailable: true, image_src: 'https://example.com/vada-pav.jpg' }
            ]
          }
        ],
        reviews: [
          {
            user: 'Rahul',
            rating: 4.5,
            comment: 'Great food and ambiance!'
          },
          {
            user: 'Sita',
            rating: 4.0,
            comment: 'Loved the paneer tikka!'
          },
          {
            user: 'Amit',
            rating: 3.5,
            comment: 'Good variety, but some items were not available.'
          }
        ],
        services: [
          'Dine-in',
          'Takeaway',
          'Home Delivery'
        ]
    },
    {
        id: 3,
        title: 'Desi Tadk3',
        admin: 'Vinod Bhai',
        admin_handle: 'vinod@gmail.com',
        admin_mobile_no: '9849823932',
        no_of_tables: 100,
        address: {
          street: '123 Spice Lane',
          city: 'Mumbai',
          state: 'Maharashtra',
          postal_code: '400001',
          country: 'India'
        },
        restaurant_img: 'https://example.com/restaurant-image.jpg',
        opening_hours: {
          monday: '9:00 AM - 10:00 PM',
          tuesday: '9:00 AM - 10:00 PM',
          wednesday: '9:00 AM - 10:00 PM',
          thursday: '9:00 AM - 10:00 PM',
          friday: '9:00 AM - 11:00 PM',
          saturday: '9:00 AM - 11:00 PM',
          sunday: '10:00 AM - 9:00 PM'
        },
        contact_info: {
          phone: '022-12345678',
          email: 'info@desitadka.com',
          website: 'www.desitadka.com'
        },
        menu: [
          {
            title: "starters",
            items: [
              { name: 'Paneer Tikka', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-tikka.jpg' },
              { name: 'Chicken Tikka', price: 200, vegetarian: false, isAvailable: false, image_src: 'https://example.com/chicken-tikka.jpg' },
              { name: 'Hara Bhara Kabab', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hara-bhara-kabab.jpg' },
              { name: 'Fish Amritsari', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/fish-amritsari.jpg' },
              { name: 'Aloo Tikki', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/aloo-tikki.jpg' }
            ]
          },
          {
            title: "soups",
            items: [
              { name: 'Tomato Soup', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/tomato-soup.jpg' },
              { name: 'Chicken Soup', price: 120, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-soup.jpg' },
              { name: 'Manchow Soup', price: 110, vegetarian: true, isAvailable: true, image_src: 'https://example.com/manchow-soup.jpg' },
              { name: 'Sweet Corn Soup', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/sweet-corn-soup.jpg' },
              { name: 'Hot and Sour Soup', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hot-and-sour-soup.jpg' }
            ]
          },
          {
            title: "main",
            items:[
              { name: 'Butter Chicken', price: 300, vegetarian: false, isAvailable: true, image_src: 'https://example.com/butter-chicken.jpg' },
              { name: 'Paneer Butter Masala', price: 250, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-butter-masala.jpg' },
              { name: 'Dal Makhani', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/dal-makhani.jpg' },
              { name: 'Rogan Josh', price: 350, vegetarian: false, isAvailable: true, image_src: 'https://example.com/rogan-josh.jpg' },
              { name: 'Chana Masala', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/chana-masala.jpg' }
            ]
          },
          {
            title: "dishes",
            items: [
              { name: 'Biryani', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/biryani.jpg' },
              { name: 'Veg Pulao', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/veg-pulao.jpg' },
              { name: 'Jeera Rice', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jeera-rice.jpg' },
              { name: 'Fried Rice', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/fried-rice.jpg' },
              { name: 'Steam Rice', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/steam-rice.jpg' }
            ]
          },
          {
            title: "desserts",
            items: [
              { name: 'Gulab Jamun', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/gulab-jamun.jpg' },
              { name: 'Rasgulla', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/rasgulla.jpg' },
              { name: 'Kheer', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/kheer.jpg' },
              { name: 'Ice Cream', price: 70, vegetarian: true, isAvailable: true, image_src: 'https://example.com/ice-cream.jpg' },
              { name: 'Jalebi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jalebi.jpg' }
            ]
          },
          {
            title: "drinks",
            items:[
              { name: 'Masala Chai', price: 50, vegetarian: true, isAvailable: true, image_src: 'https://example.com/masala-chai.jpg' },
              { name: 'Lassi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/lassi.jpg' },
              { name: 'Coffee', price: 60, vegetarian: true, isAvailable: true, image_src: 'https://example.com/coffee.jpg' },
              { name: 'Mango Shake', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/mango-shake.jpg' },
              { name: 'Soft Drink', price: 40, vegetarian: true, isAvailable: true, image_src: 'https://example.com/soft-drink.jpg' }
            ]
          },
          {
            title: "snacks",
            items:[
              { name: 'Samosa', price: 30, vegetarian: true, isAvailable: true, image_src: 'https://example.com/samosa.jpg' },
              { name: 'Pakora', price: 40, vegetarian: true, isAvailable: false, image_src: 'https://example.com/pakora.jpg' },
              { name: 'Paneer Roll', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-roll.jpg' },
              { name: 'Chicken Roll', price: 100, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-roll.jpg' },
              { name: 'Vada Pav', price: 25, vegetarian: true, isAvailable: true, image_src: 'https://example.com/vada-pav.jpg' }
            ]
          }
        ],
        reviews: [
          {
            user: 'Rahul',
            rating: 4.5,
            comment: 'Great food and ambiance!'
          },
          {
            user: 'Sita',
            rating: 4.0,
            comment: 'Loved the paneer tikka!'
          },
          {
            user: 'Amit',
            rating: 3.5,
            comment: 'Good variety, but some items were not available.'
          }
        ],
        services: [
          'Dine-in',
          'Takeaway',
          'Home Delivery'
        ]
    },
    {
        id: 4,
        title: 'Desi Tadka4',
        admin: 'Vinod Bhai',
        admin_handle: 'vinod@gmail.com',
        admin_mobile_no: '9849823932',
        no_of_tables: 100,
        address: {
          street: '123 Spice Lane',
          city: 'Mumbai',
          state: 'Maharashtra',
          postal_code: '400001',
          country: 'India'
        },
        restaurant_img: 'https://example.com/restaurant-image.jpg',
        opening_hours: {
          monday: '9:00 AM - 10:00 PM',
          tuesday: '9:00 AM - 10:00 PM',
          wednesday: '9:00 AM - 10:00 PM',
          thursday: '9:00 AM - 10:00 PM',
          friday: '9:00 AM - 11:00 PM',
          saturday: '9:00 AM - 11:00 PM',
          sunday: '10:00 AM - 9:00 PM'
        },
        contact_info: {
          phone: '022-12345678',
          email: 'info@desitadka.com',
          website: 'www.desitadka.com'
        },
        menu: [
          {
            title: "starters",
            items: [
              { name: 'Paneer Tikka', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-tikka.jpg' },
              { name: 'Chicken Tikka', price: 200, vegetarian: false, isAvailable: false, image_src: 'https://example.com/chicken-tikka.jpg' },
              { name: 'Hara Bhara Kabab', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hara-bhara-kabab.jpg' },
              { name: 'Fish Amritsari', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/fish-amritsari.jpg' },
              { name: 'Aloo Tikki', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/aloo-tikki.jpg' }
            ]
          },
          {
            title: "soups",
            items: [
              { name: 'Tomato Soup', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/tomato-soup.jpg' },
              { name: 'Chicken Soup', price: 120, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-soup.jpg' },
              { name: 'Manchow Soup', price: 110, vegetarian: true, isAvailable: true, image_src: 'https://example.com/manchow-soup.jpg' },
              { name: 'Sweet Corn Soup', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/sweet-corn-soup.jpg' },
              { name: 'Hot and Sour Soup', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hot-and-sour-soup.jpg' }
            ]
          },
          {
            title: "main",
            items:[
              { name: 'Butter Chicken', price: 300, vegetarian: false, isAvailable: true, image_src: 'https://example.com/butter-chicken.jpg' },
              { name: 'Paneer Butter Masala', price: 250, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-butter-masala.jpg' },
              { name: 'Dal Makhani', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/dal-makhani.jpg' },
              { name: 'Rogan Josh', price: 350, vegetarian: false, isAvailable: true, image_src: 'https://example.com/rogan-josh.jpg' },
              { name: 'Chana Masala', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/chana-masala.jpg' }
            ]
          },
          {
            title: "dishes",
            items: [
              { name: 'Biryani', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/biryani.jpg' },
              { name: 'Veg Pulao', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/veg-pulao.jpg' },
              { name: 'Jeera Rice', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jeera-rice.jpg' },
              { name: 'Fried Rice', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/fried-rice.jpg' },
              { name: 'Steam Rice', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/steam-rice.jpg' }
            ]
          },
          {
            title: "desserts",
            items: [
              { name: 'Gulab Jamun', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/gulab-jamun.jpg' },
              { name: 'Rasgulla', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/rasgulla.jpg' },
              { name: 'Kheer', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/kheer.jpg' },
              { name: 'Ice Cream', price: 70, vegetarian: true, isAvailable: true, image_src: 'https://example.com/ice-cream.jpg' },
              { name: 'Jalebi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jalebi.jpg' }
            ]
          },
          {
            title: "drinks",
            items:[
              { name: 'Masala Chai', price: 50, vegetarian: true, isAvailable: true, image_src: 'https://example.com/masala-chai.jpg' },
              { name: 'Lassi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/lassi.jpg' },
              { name: 'Coffee', price: 60, vegetarian: true, isAvailable: true, image_src: 'https://example.com/coffee.jpg' },
              { name: 'Mango Shake', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/mango-shake.jpg' },
              { name: 'Soft Drink', price: 40, vegetarian: true, isAvailable: true, image_src: 'https://example.com/soft-drink.jpg' }
            ]
          },
          {
            title: "snacks",
            items:[
              { name: 'Samosa', price: 30, vegetarian: true, isAvailable: true, image_src: 'https://example.com/samosa.jpg' },
              { name: 'Pakora', price: 40, vegetarian: true, isAvailable: false, image_src: 'https://example.com/pakora.jpg' },
              { name: 'Paneer Roll', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-roll.jpg' },
              { name: 'Chicken Roll', price: 100, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-roll.jpg' },
              { name: 'Vada Pav', price: 25, vegetarian: true, isAvailable: true, image_src: 'https://example.com/vada-pav.jpg' }
            ]
          }
        ],
        reviews: [
          {
            user: 'Rahul',
            rating: 4.5,
            comment: 'Great food and ambiance!'
          },
          {
            user: 'Sita',
            rating: 4.0,
            comment: 'Loved the paneer tikka!'
          },
          {
            user: 'Amit',
            rating: 3.5,
            comment: 'Good variety, but some items were not available.'
          }
        ],
        services: [
          'Dine-in',
          'Takeaway',
          'Home Delivery'
        ]
    },
    {
        id: 5,
        title: 'Desi Tadka5',
        admin: 'Vinod Bhai',
        admin_handle: 'vinod@gmail.com',
        admin_mobile_no: '9849823932',
        no_of_tables: 100,
        address: {
          street: '123 Spice Lane',
          city: 'Mumbai',
          state: 'Maharashtra',
          postal_code: '400001',
          country: 'India'
        },
        restaurant_img: 'https://example.com/restaurant-image.jpg',
        opening_hours: {
          monday: '9:00 AM - 10:00 PM',
          tuesday: '9:00 AM - 10:00 PM',
          wednesday: '9:00 AM - 10:00 PM',
          thursday: '9:00 AM - 10:00 PM',
          friday: '9:00 AM - 11:00 PM',
          saturday: '9:00 AM - 11:00 PM',
          sunday: '10:00 AM - 9:00 PM'
        },
        contact_info: {
          phone: '022-12345678',
          email: 'info@desitadka.com',
          website: 'www.desitadka.com'
        },
        menu: [
          {
            title: "starters",
            items: [
              { name: 'Paneer Tikka', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-tikka.jpg' },
              { name: 'Chicken Tikka', price: 200, vegetarian: false, isAvailable: false, image_src: 'https://example.com/chicken-tikka.jpg' },
              { name: 'Hara Bhara Kabab', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hara-bhara-kabab.jpg' },
              { name: 'Fish Amritsari', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/fish-amritsari.jpg' },
              { name: 'Aloo Tikki', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/aloo-tikki.jpg' }
            ]
          },
          {
            title: "soups",
            items: [
              { name: 'Tomato Soup', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/tomato-soup.jpg' },
              { name: 'Chicken Soup', price: 120, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-soup.jpg' },
              { name: 'Manchow Soup', price: 110, vegetarian: true, isAvailable: true, image_src: 'https://example.com/manchow-soup.jpg' },
              { name: 'Sweet Corn Soup', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/sweet-corn-soup.jpg' },
              { name: 'Hot and Sour Soup', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/hot-and-sour-soup.jpg' }
            ]
          },
          {
            title: "main",
            items:[
              { name: 'Butter Chicken', price: 300, vegetarian: false, isAvailable: true, image_src: 'https://example.com/butter-chicken.jpg' },
              { name: 'Paneer Butter Masala', price: 250, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-butter-masala.jpg' },
              { name: 'Dal Makhani', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/dal-makhani.jpg' },
              { name: 'Rogan Josh', price: 350, vegetarian: false, isAvailable: true, image_src: 'https://example.com/rogan-josh.jpg' },
              { name: 'Chana Masala', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/chana-masala.jpg' }
            ]
          },
          {
            title: "dishes",
            items: [
              { name: 'Biryani', price: 250, vegetarian: false, isAvailable: true, image_src: 'https://example.com/biryani.jpg' },
              { name: 'Veg Pulao', price: 200, vegetarian: true, isAvailable: true, image_src: 'https://example.com/veg-pulao.jpg' },
              { name: 'Jeera Rice', price: 150, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jeera-rice.jpg' },
              { name: 'Fried Rice', price: 180, vegetarian: true, isAvailable: true, image_src: 'https://example.com/fried-rice.jpg' },
              { name: 'Steam Rice', price: 120, vegetarian: true, isAvailable: true, image_src: 'https://example.com/steam-rice.jpg' }
            ]
          },
          {
            title: "desserts",
            items: [
              { name: 'Gulab Jamun', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/gulab-jamun.jpg' },
              { name: 'Rasgulla', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/rasgulla.jpg' },
              { name: 'Kheer', price: 90, vegetarian: true, isAvailable: true, image_src: 'https://example.com/kheer.jpg' },
              { name: 'Ice Cream', price: 70, vegetarian: true, isAvailable: true, image_src: 'https://example.com/ice-cream.jpg' },
              { name: 'Jalebi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/jalebi.jpg' }
            ]
          },
          {
            title: "drinks",
            items:[
              { name: 'Masala Chai', price: 50, vegetarian: true, isAvailable: true, image_src: 'https://example.com/masala-chai.jpg' },
              { name: 'Lassi', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/lassi.jpg' },
              { name: 'Coffee', price: 60, vegetarian: true, isAvailable: true, image_src: 'https://example.com/coffee.jpg' },
              { name: 'Mango Shake', price: 100, vegetarian: true, isAvailable: true, image_src: 'https://example.com/mango-shake.jpg' },
              { name: 'Soft Drink', price: 40, vegetarian: true, isAvailable: true, image_src: 'https://example.com/soft-drink.jpg' }
            ]
          },
          {
            title: "snacks",
            items:[
              { name: 'Samosa', price: 30, vegetarian: true, isAvailable: true, image_src: 'https://example.com/samosa.jpg' },
              { name: 'Pakora', price: 40, vegetarian: true, isAvailable: false, image_src: 'https://example.com/pakora.jpg' },
              { name: 'Paneer Roll', price: 80, vegetarian: true, isAvailable: true, image_src: 'https://example.com/paneer-roll.jpg' },
              { name: 'Chicken Roll', price: 100, vegetarian: false, isAvailable: true, image_src: 'https://example.com/chicken-roll.jpg' },
              { name: 'Vada Pav', price: 25, vegetarian: true, isAvailable: true, image_src: 'https://example.com/vada-pav.jpg' }
            ]
          }
        ],
        reviews: [
          {
            user: 'Rahul',
            rating: 4.5,
            comment: 'Great food and ambiance!'
          },
          {
            user: 'Sita',
            rating: 4.0,
            comment: 'Loved the paneer tikka!'
          },
          {
            user: 'Amit',
            rating: 3.5,
            comment: 'Good variety, but some items were not available.'
          }
        ],
        services: [
          'Dine-in',
          'Takeaway',
          'Home Delivery'
        ]
    }
]

export default restaurents;