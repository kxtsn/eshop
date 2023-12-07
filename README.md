# Shopping Cart Web
Technical Assessment part 2, an ecommerce website with data from `fakestoreapi.com`.

## Table of Contents
- [Assessment Requirements](#assessment-requirements)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technical Decisions and Assumptions](#technical-decisions-and-assumptions)

## Assessment Requirements
- A ​main page​ that show multiple products done
- When product page is clicked, it will go to a separate product ​detail page​ done
- Product ​detail page​ will have add to cart done
- When "​Add to cart button​" is clicked, it will update the cart icon to have number of the product in the cart done
- A ​cart page​ will list the products which are added to the cart done
- Cart page will calculate the total amount needed to be paid done
- Cart will allow the change of quantity and removal of products done
- Please use ReactJs for this assignment
- Please use https://fakestoreapi.com for retrieval of products

## Getting Started
In this project, the source codes can be found under `/src` with the following folders.
- components
- pages
- _ _test_ _ (fail test, yet to figure out how jest works)

### Project Set Up
Follow these steps to set up and run the project on your local machine.

1. **Clone the project**:
   `git clone https://github.com/kxtsn/eshop.git`
2. **Install Dependencies for Flutter**:
   `npm install`

## Usage
 - Run React Web:
   `npm start`

 - Run Test:
   `npm test`
     
## Technical Decisions and Assumptions

- State Management with React Context:
Decision: The application uses React Context to manage the state of the shopping cart.
Reasoning: React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is a suitable choice for managing global state like a shopping cart in this case.

- Use of useRef for Persistent Data:
Decision: useRef is used to create a reference to the cart items (itemsRef).
Reasoning: useRef is chosen to create a mutable object that persists across renders. It is particularly useful for scenarios where you need to keep track of data that should not trigger re-renders when it changes, such as with localStorage synchronization.

- LocalStorage for Cart Persistence:
Decision: The cart items are stored and retrieved from localStorage.
Reasoning: Using localStorage allows the application to persist cart data even when the page is refreshed or closed. It provides a way to store data locally on the user's device.

- Callbacks for Modifying Cart Items:
Decision: Callback functions (addItem and removeItem) are used to modify cart items.
Reasoning: Using callbacks ensures that the state modifications are memoized with useCallback, optimizing performance by avoiding unnecessary re-creations of callback functions.






  
