import { Post } from '@/types/producttype'
import Imageone from '@/components/Img/Imageone.png'
import Imagetwo from '@/components/Img/Imagetwo.png'
import Imagethree from '@/components/Img/Imagethree.png'
import Imagefour from '@/components/Img/Imagefour.png'
import Imagefive from '@/components/Img/Imagefive.png'


const products: Post[] = [
    {
        id: 'iPhone 16 Pro Max',
        image: Imagetwo.src,
        userdetails: 'Wisdom Ndata',
        quantity: '20,000',
        createdAt: ['2023-01-01', '10:36AM'],
        status: 'Out of Stock',
      },
      {
        id: 'iPhone 16 Pro',
        image: Imageone.src,
        userdetails: 'Jane Cooper',
        quantity: '9,500',
        createdAt: ['2023-01-01', '10:36AM'],
        status: 'Out of Stock',
      },
      {
        id: 'iPhone 16',
        image: Imagethree.src,
        userdetails: 'Savannah Nguyen',
        quantity: '13,000',
        createdAt: ['2023-01-01', '10:36AM'],
        status: 'Out of Stock',
      },
      {
        id: 'iPhone 15 Pro Max',
        image: Imagefour.src,
        userdetails: 'Jerome Bell',
        quantity: '9,000',
        createdAt: ['2023-01-01', '10:36AM'],
        status: 'Out of Stock',
      },
      {
        id: 'iPhone 15',
        image: Imagefive.src,
        userdetails: 'Ralph Edwards',
        quantity: '10,000',
        createdAt: ['2023-01-01', '10:36AM'],
        status: 'Out of Stock',
      },
      // {
      //   id: 'Savannah Nguyen',
      //     image: Imagefive.src,
      //   userdetails: 'HR Manager',
      //   quantity: '9,000',
      //   createdAt: ['2023-01-01', '10:36AM'],
      //   status: 'Out of Stock',
      // }
]
export default products