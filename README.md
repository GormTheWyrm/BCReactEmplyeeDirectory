# BCReactEmplyeeDirectory
An application that allows an employer to view non-sensitive information about their employees and filter their employees by name. Bootcamp Project.

https://github.com/GormTheWyrm/BCReactEmplyeeDirectory
https://gormthewyrm.github.io/BCReactEmplyeeDirectory/
  currently broken link


# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.


  ## Working

Do I need a database for this? yes, mongo db

compenent list:  
- header with info on sorting
- employee div that olds invididual info
- parent that directs and controls the state - will tell eployee div waht to display
 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


**I need to be able to:**
* sort by name
* filter users by... 
* needs to have a table
* default sorted by... id?

...id, role, salary, department, firstname, lastname


1. directory: Diretory.js should hold all of the components of the directory. Parent.
2. Header: Header.js will display optons for the directory. Child of Directory.js
- ...

... .... ...
check to make sure my directory page is still in the right area... and imports are still good. (once I have internet gain)


*this does nto appear to need a create or delete function*


**I need to watch video again to understand props. Dmitri explained it to me on that video**
use map to get the full array of itms to return an element...