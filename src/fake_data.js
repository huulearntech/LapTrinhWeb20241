
import hanoiImage from './assets/images/hanoi.webp';
import hoianImage from './assets/images/hoian.jpg';
import dalatImage from './assets/images/dalat.jpg';
import saigonImage from './assets/images/saigon.jpg';
import danangImage from './assets/images/danang.webp';

export const slides = [
    {
      id: 1,
      name: 'Ha Noi',
      image: hanoiImage,
      link: '/products/hanoi'
    },
    {
      id: 2,
      name: 'Hoi An',
      image: hoianImage,
      link: '/products/hanoi'
    },
    {
      id: 3,
      name: 'Da Lat',
      image: dalatImage,
      link: '/products/hanoi'
    },
    {
      id: 4,
      name: 'Sai Gon',
      image: saigonImage,
      link: '/products/hanoi'
    },
    {
      id: 5,
      name: 'Da Nang',
      image: danangImage,
      link: '/products/hanoi'
    },
    // Add more products as needed
];



export const fake_products = [
  {
    name: "Dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "This product is good",
    amenities: ["Wifi", "Parking", "Pool"],
    price: 129.99
  },
  {
    name: "Another dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "Bla bla bla",
    amenities: ["Wifi", "Parking", "Pool", "Gym", "Spa"],
    price: 129.99
  },
  {
    name: "Dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "This product is good",
    amenities: ["Wifi", "Parking", "Pool", "Bar", "Restaurant"],
    price: 129.99
  },
  {
    name: "Another dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "Bla bla bla",
    amenities: ["Wifi", "Parking", "Pool", "Casino"],
    price: 129.99
  },
];

export const fake_user = {
  fullName: "Nguyen Van Muoi",
  email: "muoi.nguyenvan@gmail.com",
  phone: "0987654321",
  address: "123 Nguyen Van Linh, Da Nang",
};
