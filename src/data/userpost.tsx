import { Post } from '@/types/post';
import Imageone from '@/components/Img/Imageone.png'
import Imagetwo from '@/components/Img/Imagetwo.png'
import Imagethree from '@/components/Img/Imagethree.png'
import Imagefour from '@/components/Img/Imagefour.png'
import Imagefive from '@/components/Img/Imagefive.png'

const posts: Post[] = [
  {
    id: 'Wisdom  Ndata',
    image: Imagetwo.src,
    email: 'Wisdomndata@gmail.com',
    price: "+2349065678193",
    totalSold: 25,
    status: 'Draft',
    createdAt: ['2023-01-01', '10:36AM']
  },
  {
    id: 'Adetunji Oluwaseun',
    image: Imageone.src,
    email: 'Adetunjioluwaseun@gmail.com',
    price: "+2349046739827",
    totalSold: 25,
    status: 'Active',
    createdAt: ['2023-01-01', '10:36AM']
  },
  {
    id: 'Ifunanya Adedapo',
    image: Imagethree.src,
    email: 'Ifunayaadedapo@gmail.com',
    price: "+2348198374769",
    totalSold: 25,
    status: 'Active',
    createdAt: ['2023-01-01', '10:36AM']
  },
  {
    id: 'Busola Igwe',
    image: Imagefour.src,
    email: 'Busolaigwen@gmail.com',
    price: "+2348036528151",
    totalSold: 25,
    status: 'Draft',
    createdAt: ['2023-01-01','10:36AM']
  },
  {
    id: 'Moshood Adedayo',
    image: Imagefive.src,
    email: 'Moshoodadedayo@gmail.com',
    price: "+23481084678612",
    totalSold: 25,
    status: 'Draft',
    createdAt: ['2023-01-01','10:36AM']
  },
];

export default posts;





// import { Post } from '@/types/post';

// const posts: Post[] = [
//   {
//     id: '1',
//     name: 'Hypernova Headphones',
//     price: 129.99,
//     totalSold: 25,
//     status: 'Draft',
//     createdAt: ['2023-01-01', '2023-02-01']
//   },
//   {
//     id: '2',
//     name: 'Laser Lemonade Machine',
//     price: 129.99,
//     totalSold: 25,
//     status: 'Active',
//     createdAt: ['2023-01-01', '2023-02-01']
//   },
//   {
//     id: '3',
//     name: 'AeroGlow Desk Lamp',
//     price: 129.99,
//     totalSold: 25,
//     status: 'Active',
//     createdAt: ['2023-01-01', '2023-02-01']
//   },
//   {
//     id: '4',
//     name: 'TechTonic Energy Drink',
//     price: 129.99,
//     totalSold: 25,
//     status: 'Draft',
//     createdAt: ['2023-01-01', '2023-02-01']
//   },
// ];

// export default posts;