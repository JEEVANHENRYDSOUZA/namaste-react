import React from 'react'

function Button({names}) {
  return (
    <div>
      <button className="px-5 py-2 m-5 bg-gray-200 rounded-lg hover:bg-black hover:text-white ">{names}</button>
    </div>
  );
}

export default Button
