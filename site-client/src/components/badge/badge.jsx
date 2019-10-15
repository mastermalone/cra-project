import React from 'react';

const Badge = ({data}) => {
  console.log('data', data);
  return(
    <div>
      {data && data.map(({ employee_name, employee_age, employee_salary, id, profile_image }, idx) => (
        <div className="badge-images" key={`employee_${idx}`}>
          <div className="profile-image">
            <div><img src={profile_image} alt=""/></div>
            <div><span>{id}</span></div>
          </div>
          <div>
            <h1>{employee_name}</h1>
            <div>{employee_age}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Badge;
