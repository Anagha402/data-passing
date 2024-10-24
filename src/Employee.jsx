import React from 'react'

function Employee() {

    const employee=[
        {empID:100,empName:"vyom",empDesg:"tester"},
        {empID:101,empName:"lisa",empDesg:"developer"},
        {empID:102,empName:"jhon",empDesg:"HR"},
        {empID:103,empName:"viz",empDesg:"tester"},
        {empID:104,empName:"george",empDesg:"developer"}
    ]
  return (
    <div>

      {
        employee.map(item=>(
            <div>
                Employee Id:{item.empID},
                Employee Name : {item.empName},
                Employee Designation : {item.empDesg}
                
            </div>
        ))
      }
    </div>
  )
}

export default Employee
