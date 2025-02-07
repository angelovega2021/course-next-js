# course-next-js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


// User Courses Table View

// Create a table view of the users list and their selected course

// PHASE 1: Table structure
// Display a table view of users and their respective course selection
// Use the below APIs to get the list of users and the list of users courses
// List of users: https://gist.githubusercontent.com/JCGonzaga01/36a8af85464d998221c71ea3eaa57225/raw/6fe851e029ee98e9ec85ceb87433ed5ed0f06e36/users.json
// List of Users' Courses: https://gist.githubusercontent.com/JCGonzaga01/9c9e3590fb23274263678b6c4bcf9963/raw/600c8281f9db7eaba959a732912eba350bf7387d/user-course-selection.json
// Kindly refer to the below table structure sample
// for "Semester Fee" column, default currency type is USD.

//Table Structure sample
// Search:________
// Name   | Phone | Email | Course Name  | Course Selection | Semester | Semester Fee
// User1  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
// User2  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
// User12 | 333...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
//...

// PHASE 2: Fuzzy Search
// Add fuzzy searching for anything listed in the table.
// State needs to be organized in a way to allow searching.
// Fuzzy searching against name, phone or email.
// if no result, show "No data found"
// Note: Case Insensitive && Don't use third party library

//Table Structure sample1  for Fuzzy Search Result
// Search: User1
// Name   | Phone | Email | Course Name  | Course Selection | Semester | Semester Fee
// User1  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
// User12 | 333...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
//...

//Table Structure sample2  for Fuzzy Search Result
// Search: 111
// Name   | Phone | Email | Course Name  | Course Selection | Semester | Semester Fee
// User1  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
// User2  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
//...

//Table Structure sample3  for Fuzzy Search Result
// Search: 1
// Name   | Phone | Email | Course Name  | Course Selection | Semester | Semester Fee
// User1  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
// User2  | 111...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
// User12 | 333...|user@..|
//        |       |       | course1      | selection        | fall...  | $ 123.00
//        |       |       | course2      | selection        | spring...| $ 123.00
//...

// PHASE 3: Table Sorting (Ascending/Descending)
// Sorting against name, phone and email.
// No default sorting. Show the data based on the arrangment from the users.json.
// If same phone/email, second sorting is by name (ascending).

//Table Structure sample1  for Sorting Phone Ascending
// Search:________
// Name   | Phone ^| Email | Course Name  | Course Selection | Semester | Semester Fee
// User1  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User2  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User12 | 333... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
//...

//Table Structure sample2  for Sorting Phone Descending
// Search:________
// Name   | Phone v| Email | Course Name  | Course Selection | Semester | Semester Fee
// User12 | 333... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User1  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User2  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
//...

// PHASE 4: Clean data
// Make sure to remove duplicate data. If same user, course name, course selection and semester
// If user has no course selected, show "No data found".

//Table Structure if no course selected
// Search:________
// Name   | Phone  | Email | Course Name  | Course Selection | Semester | Semester Fee
// User12 | 333... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User2  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User1  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User123| 444... |user@..|
//                       "No data found"
//...

// PHASE 5: Convert currency data
// Implement a drop down of currency type using this API: https://gist.githubusercontent.com/JCGonzaga01/9f93162c5fb799b7c084bb28fc69a2f1/raw/94c55f89dc4c1e2e7ca49de5658c3441a2b348af/Updated-Common-Currency.json
// Default value (base currency type) is USD.
// When selected new currency type,  "Semester Fee" must update the value based on the curren exchange rate.
// Use this API docs to determine the current exchange rate: https://www.exchangerate-api.com/docs/pair-conversion-requests
// API_KEY: 679aae77947f03c9abd287ec OR 3d609826d7238787d81cfc47
// (if both API_KEY reach it's limit, kindly register and get your personal API_KEY here: https://www.exchangerate-api.com/)
// Note:
// If exchangerate-api throws an error, show an error message.

//Table Structure sample1
// Search:________
// Currency Type: USD
// Name   | Phone v| Email | Course Name  | Course Selection | Semester | Semester Fee
// User12 | 333... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User1  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
// User2  | 111... |user@..|
//        |        |       | course1      | selection        | fall...  | $ 123.00
//        |        |       | course2      | selection        | spring...| $ 123.00
//...

//Table Structure sample2 with error
// Search:________
// Currency Type: MLZ
//
// "Unsupported currency type"
