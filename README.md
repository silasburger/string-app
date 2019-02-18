# string-app
______
The purpose of the project was to demonstrate my ability to learn new technologies quickly. I took a stab at learning react boilerplate in a week. 

The app saves strings in a database and then displays those strings. I added a date and time component to the app as a personal challenge.

## Requirements Met (and where)
- The StringPage container is fully tested
- The inputs in the TimeFilterForm are styled components that use conditional rendering (based on props) to show which filter is selected. Also, I changed the background of the PostList container when post were loading and when no posts are shown (due to the filter).
- The App uses a decent layout, strings can be stored and viewed, and you can navigate between two pages.

##Getting Started

**Step 1:** Clone this repo
   
```bash
$ git clone git@github.com:silasburger/string-app.git

```

**Step 2:** Install dependencies

```bash
$ cd backend
$ npm i
$ cd ../frontend
$ npm i

```
**Step 3:** Startup backend

```bash
$ cd backend
$ psql < seed.sql
$ node server.js

```
**Step 4:** Startup frontend

```bash
$ cd frontend
$ npm run start

```
**Step 5: Go to http://localhost:3000 in browser**

##Frontend Component Heirarchy
```
App
└── component/Header
├─┬ containers/Homepage
│ └─── containers/StringFormContainer
└─┬ containers/StringPage
  └─── components/StringPageView
  		├─┬─ component/PostList
  		  └──── component/TimeFilterForm
  	      └──── component/PostListItem
```

##Redux State Structure
```
state: {
	global: {
		loading: false,
		errors: false,
		posts: [{},{},{}]
	},
	stringForm: {
		stringFormInput: ""
	},
	postFilters: {
		dateTimeFilter: ""
	},
	router: {
		location: {...},
		action: ""
	},
	language: {
		locale: ""
	}
}
```

##Improvement Considerations
- I think that the component heirarchy of the StringPage could be improved. Connecting the postlist itself instead of the StringPage would reduce some prop drilling, though I don't see this as a high priority.
- I mostly stuck with regular react components so using pure or stateless functional components give me room for some optimization.
- I could do a better job of commenting throughout the application.