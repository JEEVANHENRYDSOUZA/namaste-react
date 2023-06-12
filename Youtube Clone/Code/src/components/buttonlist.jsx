import React from 'react'
import Button from './button'

const Buttonlist = () => {
    const options = [
      {
        id: 1,
        name: 'Live ',
      },
      {

        id:2,
        name:'Cricket'
      },
      {
        id:3,
        name:'Tech'

      },
      {
        id:4,
        name:'News'

      },
      {
         id:5,
         name:'Entertainment' 

      },
      {
        id:6,
        name:'Most Liked '
      } ,

      {

        id:10,
        name:'Popular'

      },
      {

        id:9,
        name:'Your Recomendation'
      },
      {
        id:7,
        name:'Comedy'
      },
      {
        id:8,
        name:'MHJ'
      }

    ];



  return (
    <div className='flex'>
    {options.map((item) => (

      <Button names={item.name}  key={item.id}/>
    ))}
    </div>
  )
}

export default Buttonlist
