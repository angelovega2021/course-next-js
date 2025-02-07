export type TableProps  = {
    sortByParameter?: any,
    options: any,
    currency: any,
    exchangeRate: any,
    isLoading: any,
    userCourses: UserWithCourses[],
  }
  
  export type UserProps = {
      id: number,
      name: string,
      phone: string,
      email: string
  }
  
  export type CourseProps = {
          id: number
          user_id: number,
          semester_fee: number,
          course_name: string,
          course_selection: string,
          semester: string
  }

export type UserWithCourses = UserProps & { courses: CourseProps[] };


export type SearchProps = {
    searchQuery: string,
    handleOnchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export type DropdownProps = {
    options: any,
    setOptions: any,
    setExchangeRate: any,
    currency: any,
    handleCurrency: any,
    setLoading: any,
}