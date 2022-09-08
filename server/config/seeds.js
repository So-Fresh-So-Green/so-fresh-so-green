const db = require('./connection');
const { User, Product, Category, Plant, Post } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      body: "This is a sample post",
      username: "user",
      createdAt: "lalala"
    },
    {
      body: "Another lovely post",
      username: "user2",
      createdAt: "woohoo"
    }
  ]); 

  await Plant.deleteMany();

  
  const plants = await Plant.insertMany([
    {
      name: 'bamboo',
      waterSched: '2x/day',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Pamela'
    },
    {
      name: 'grass',
      waterSched: '2x/day',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Pamela'
    },
    {
      name: 'fern',
      waterSched: '1x/week',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Elijah'
    },
    {
      name: 'monstera',
      waterSched: '2x/week',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Jimbo'
    },
    {
      name: 'tree',
      waterSched: '2x/year',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Jimbo'
    },
    {
      name: 'moss',
      waterSched: '1x/week',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Niki'
    },
    {
      name: 'melon',
      waterSched: '1x/week',
      image: 'placeholder-plant.jpg',
      description: 'blah blah blah blah blah',
      user: 'Grego'
    },
  ])

  console.log('plants seeded')

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Plant 1',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'placeholder-plant.jpg',
      price: 2.99,
      quantity: 500,
      plant: plants[0]._id,
      category: categories[0]._id,
    },
    {
      name: 'Plant 2',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'placeholder-plant.jpg',
      price: 1.99,
      quantity: 500,
      plant: plants[1]._id,
      category: categories[0]._id
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  const users = await User.insertMany([
      {
      username: 'Pamela',
      email: 'pamela@testmail.com',
      password: 'password12345',
      profPic: 'profile.jpg',
      plants: [
        plants[0]._id,
        plants[1]._id
      ],
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id]
        }
      ]
    },
    {
      username: 'Elijah',
      email: 'eholt@testmail.com',
      password: 'password12345',
      profPic: 'profile.jpg',
      plants: [
        plants[2]._id
      ]
    },
    {
      username: 'Jimbo',
      email: 'jim@testmail.com',
      password: 'password12345',
      profPic: 'profile.jpg',
      plants: [
        plants[3]._id,
        plants[4]._id
      ],
      orders: [
        {
          products: [products[2]._id, products[2]._id, products[3]._id]
        }
      ]
    },
    {
      username: 'Niki',
      email: 'niki@testmail.com',
      password: 'password12345',
      profPic: 'profile.jpg',
      plants: [
        plants[5]._id
      ],
      followers: '6318c9ef717cf979455c9b68'
    },
  ]);

  const grego = await User.create({
      username: 'Grego',
      email: 'greggg@testmail.com',
      password: 'password12345',
      profPic: 'profile.jpg',
      plants: [
        plants[6]._id
      ],
      orders: [
        {
          products: [products[2]._id, products[2]._id, products[3]._id]
        }
      ],
      followers: [
        users[0]._id,
        users[1]._id
      ],
      following: [users[0]._id]
    })

  const syd = await User.create({
    username: 'Syd',
    email: 'sydo@testmail.com',
    password: 'password12345',
    profPic: 'profile.jpg',
    plants: [
      plants[6]._id
    ],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id]
      }
    ],
    followers: [
      users[2]._id,
      users[3]._id
    ],
    following: [users[0]._id]
  })

  await User.create({
    username: 'Blah',
    email: 'blah@testmail.com',
    password: 'password12345',
    profPic: 'profile.jpg',
    plants: [
      plants[6]._id
    ],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id]
      }
    ],
    followers: [
      syd._id,
      grego._id
    ],
    following: [users[0]._id, users[2]._id, syd._id]
  })

  console.log('users seeded');

  process.exit();
});
