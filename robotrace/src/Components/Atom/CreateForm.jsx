import React from 'react'

const CreateForm = () => {
  return (
   <>
    <h3> Create new Service</h3>
      <form action="">
        <input
          type="text"
          placeholder="Service Name"
          name="serviceTitle"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Discription"
          name="discription"
          onChange={handleChange}
        />
        <input
          type="Number"
          placeholder="Service Cost"
          name="serviceCost"
          onChange={handleChange}
        />
        <input
          type="Number"
          placeholder="Discount"
          name="discount"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Time of Complete"
          name="timeOfComplete"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Region Of Serices"
          name="region"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Hash Tag"
          name="category"
          onChange={handleChange}
        />
      </form>
   </>
  )
}

export default CreateForm