'use client';

import React, { useEffect, useState } from 'react'
import Table from './Table'
import Search from './Search'
import Dropdown from './Dropdown'
import { getFecthUsers, getFecthCourses } from './api'
import { UserProps, CourseProps, UserWithCourses } from './Courses'

const Home = () =>  {

  const [users, setUsers] = useState<UserProps[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [userCourses, setUserCourses] = useState<UserWithCourses[]>([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const [options, setOptions] = useState({})
  const [exchangeRate, setExchangeRate] = useState({})
  const [currency, setCurrency] = useState('USD')
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    getFecthUsers().then((result) => {
      setUsers(result)
    })
  }, [])

  useEffect(() => {
    getFecthCourses().then((result) => {
      const clean = removeCourseDuplicate(result)
      setCourses(clean)
    })
  }, [])

  useEffect(() => {
    if (users.length > 0 && courses.length > 0) {
      const combinedData = users.map((user) => {
        const userCourses = courses.filter((course) => course.user_id === user.id);
        return { ...user, courses: userCourses };
      });
      setUserCourses(combinedData);
    }
  }, [users, courses]);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (!event.target.value) {
      setUserCourses(users.map((user) => {
        const userCourses = courses.filter((course) => course.user_id === user.id);
        return { ...user, courses: userCourses };
      }));
    } else {
      let term = new RegExp(event.target.value, 'i');
      const filteredUsers = users.filter(
        ({ name, phone, email }) =>
          name.match(term) || phone.match(term) || email.match(term)
      );
      const filteredUserCourses = filteredUsers.map((user) => {
        const userCourses = courses.filter((course) => course.user_id === user.id);
        return { ...user, courses: userCourses };
      });
      setUserCourses(filteredUserCourses);
    }
  };

  const handleCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }

  const removeCourseDuplicate = (courses: any) => {
    let result = courses.filter((course, index, self) => {
      return (
        index ===
        self.findIndex(
          ({ course_name, course_selection, semester }: CourseProps) =>
            course_name === course.course_name &&
            course_selection === course.course_selection &&
            semester === course.semester
        )
      )
    })
    return result
  }

  const sortByParameter = (key: string, direction: string) => {
    setSortDirection(direction);
    const sortedData = [...userCourses].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setUserCourses(sortedData);
  };

  return (
    <div className="grid">
      <div className='App'>
      <Search {...{ searchQuery, handleOnchange }} />
      <Dropdown
        {...{
          options,
          setOptions,
          setExchangeRate,
          handleCurrency,
          currency,
          setLoading,
        }}
      />
      <Table
        {...{
          searchQuery,
          sortByParameter,
          options,
          currency,
          exchangeRate,
          isLoading,
          userCourses
        }}
      />
      </div>
    </div>
  );
}

export default Home
