import React from 'react'
import { TableProps } from './Courses'

const Table = ({
  sortByParameter,
  options,
  currency,
  exchangeRate,
  isLoading,
  userCourses,
}:TableProps) => {

  const hasProps = exchangeRate.hasOwnProperty(currency)
  console.log('userCourses', userCourses)
  if (hasProps) {
    return (
      <table key={1} className="w-3/4 border-collapse font-sans">
        <thead>
          <tr>
            <th className='border border-gray-300 text-left p-2'>
              Name{' '}
              <span onClick={() => sortByParameter('name','asc')}>
                &#x25b4;
              </span>
              <span onClick={() => sortByParameter('name','desc')}>
                &#x25be;
              </span>
            </th>
            <th className='border border-gray-300 text-left p-2'>
              Phone{' '}
              <span onClick={() => sortByParameter('phone', 'asc')}>
                &#x25b4;
              </span>
              <span onClick={() => sortByParameter('phone', 'desc')}>
                &#x25be;
              </span>
            </th>
            <th className='border border-gray-300 text-left p-2'>
              Email{' '}
              <span onClick={() => sortByParameter('email', 'asc')}>
                &#x25b4;
              </span>
              <span onClick={() => sortByParameter('email', 'desc')}>
                &#x25be;
              </span>
            </th>
            <th className='border border-gray-300 text-left p-2'>Course Name</th>
            <th className='border border-gray-300 text-left p-2'>Course Selection</th>
            <th className='border border-gray-300 text-left p-2'>Semester</th>
            <th className='border border-gray-300 text-left p-2'>Semester Fee</th>
          </tr>
        </thead>
        <tbody>
        {userCourses.length > 0 && userCourses.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td className="border border-gray-300 p-2 text-center" rowSpan={user.courses.length + 1}>{user.name}</td>
              <td className="border border-gray-300 p-2 text-center" rowSpan={user.courses.length + 1}>{user.phone}</td>
              <td className="border border-gray-300 p-2 text-center" rowSpan={user.courses.length + 1}>{user.email}</td>
            </tr>
            {user.courses.map((course) => {
              const convertCurrency = exchangeRate[currency];
              return (
                <tr key={course.id} className="even:bg-gray-200">
                  <td className="border border-gray-300 p-2 text-center">{course.course_name}</td>
                  <td className="border border-gray-300 p-2 text-center">{course.course_selection}</td>
                  <td className="border border-gray-300 p-2 text-center">{course.semester}</td>
                  <td className="border border-gray-300 p-2 text-center">{`${options[currency].symbol} ${(
                    course.semester_fee * convertCurrency
                  ).toFixed(options[currency].decimal_digits)}`}</td>
                </tr>
              );
            })}
          </React.Fragment>
        ))}
        </tbody>
      </table>
    )
  } else if (isLoading) {
    return <div className="w-3/4 border-collapse font-sans">...Loading</div>
  } else {
    return <div className="w-3/4 border-collapse font-sans">"Unsupported currency type"</div>
  }
}

export default Table