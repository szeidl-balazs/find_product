# Find my products

## Story

You work at a company that builds UIs to different webpages.
Your team's project is to build a webpage for a supermarket.
The page contains different components and your job is to create the part that contains the searchbar and the results of the search.

The base concept is that you get a JSON that contains multiple product.
The searchbar must shows the products with the name containing the substring of the input value.

## What are you going to learn?

- React hooks (useState(), useEffect())
- Build reusable components

## Tasks

1. We need a component that shows the search results.
    - There is a section where the products show up

2. There must be something to write in so place an input for the users. This will be a searchbar where the users can search between the market's products.
    - There is an input field in the webpage
    - When we type in the input, with every letter typed in,  the products that contains the substring shows under the input field

3. [OPTIONAL] The optimal searchbar shows his results when the focus is on his input field. Also it doesn't show any products when the field is empty.
    - The list of products disappears if we click out the input field
    - There is no list of products when the input field is empty

4. [OPTIONAL] Add some style to your components to be a good employee.
    - The style of the components is different from the default style

## General requirements

None

## Hints

- Start the project by typing `npx create-react-app search` in the terminal.
- The `String.prototype.includes(substring)` function returns true if the string contains the substring.
- You can send function references to components with props.

## Background materials

- <i class="far fa-book-open"></i> [Introduction to React hooks](https://reactjs.org/docs/hooks-intro.html)
- <i class="far fa-exlcamation"></i> [State hook](https://reactjs.org/docs/hooks-state.html)
- <i class="far fa-exclamation"></i> [Effect hook](https://reactjs.org/docs/hooks-effect.html)
- <i class="far fa-book-open"></i> [Hook principles](https://reactjs.org/docs/hooks-rules.html)
