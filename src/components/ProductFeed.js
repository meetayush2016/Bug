import Image from 'next/image'
import React from 'react'
import Product from './Product'

function ProductFeed({ products}) {
  return (
    <div className=" grid grid-flow-row-dense object-fill grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">

      {products.slice(0,4).map(({ id, title, price, description, category, image }) => (
        <Product 
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
        ))}
        

        <div className="">
          {products.slice(4,5).map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
        </div>
        {products.slice(5,products.length).map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
    </div>
  )
}

export default ProductFeed
