# CosmoCloud Frontend Assignment - Task 1

1. Create such component
2. It should be able to render this interface if given in some data form.
3. User should be able to edit name of a field
4. User should be able to add more fields
5. User should be able to delete a field
6. Users should be able to add nested fields to object type.
7. There should be a save button which console the updated data.

## Thought Process

### Understanding the Requirements

In the given task, we need to create a nested component which has,

- Global Add button to add Parent Field
  - Inside Parent and Children Field, we need,
    - Input text to save/edit name of a field
    - Select Element to select options from ["OBJECT", "STRING", "NUMBER", "BOOLEAN"].
    - A required Switch, which makes user mandatory to fill the input field, if kept empty shows invalid message
    - If the Option selected is "OBJECT", then a local add button is present which adds children to the parent.
    - Then finally there is a delete button which deletes that specific item.
- Also need to add few CSS rules like border and a hover function when user hovers the component, require switch, local add button and delete button is visible.
- Finally we need to add button which on clicked, console the object.

### Plan the Implementation

In order to implement the given challenge, I will be using,

- React
- Typescript
- Raw Styling CSS

We will be using two component,

- Main Component
- Nested Component

### Break it Down

In our Main component, we will be creating a Card UI, and in Card's header, have Feature's name and a global add button.

#### Step 1

Before we move forward and start working to implement Parent component, we create an sample nested array object and save it into `field` hook and map it with our Field component and also map its children (if present).

#### Step 2

In our field component, we will add rest of our features like, required switch, local add button and delete button and CSS rules to it.

#### Step 3

Now the final or complex part comes,

##### Function to handle Global Add Function

Inorder to add parent field we will use `handleAdd` function in which we will create a sample object and simply add to our `field` hook using `setField` function.

```typescript
// Global add function to add parent field
const handleAdd = () => {
  let obj: fieldProps = {
    id: uuid(),
    name: "AddName",
    type: "OBJECT",
    required: false,
    level: 0,
    children: [],
  };
  setField([...field, obj]);
};
```

##### Function to handle Input field

In order to save Input field name, we will use `handleInput` function and will pass Id of the current item,

```typescript
// This function helps to update Input the field
const handleInput = (e: any, id: string) => {
  function updateItem(fields: fieldProps[], id: string) {
    return fields.map((item) => {
      if (item.id === id) {
        item.name = e.target.value;
      } else if (item.children) {
        item.children = updateItem(item.children, id);
      }
      return item;
    });
  }

  const newItems = updateItem(field, id);
  setField(newItems);
  setName(e.target.value);
};
```

In the above funtion we will use recursice `updateItem` function which takes two parameter, field hook and item id, and we will traverse through the orignal array object, once we id matches, we will update the current object field, and finally returns the object. And the we will update our field hook using `setfield` function.

##### Function to handle Select field

In order to save Input field type, we will use `handleSelect` function and will pass Id of the current item,

```typescript
// This function helps to update select the field
const handleSelect = (e: any, id: string) => {
  function updateItem(fields: fieldProps[], id: string) {
    return fields.map((item) => {
      if (item.id === id) {
        item.type = e.target.value;
      } else if (item.children) {
        item.children = updateItem(item.children, id);
      }
      return item;
    });
  }

  const newItems = updateItem(field, id);
  setField(newItems);
  setType(e.target.value);
};
```

In the above funtion we will use recursice `updateItem` function which takes two parameter, field hook and item id, and we will traverse through the orignal array object, once we id matches, we will update the current object field type, and finally returns the object. And the we will update our field hook using `setfield` function.

##### Function to handle Required field

In order to save Input field type, we will use `handleRequire` function and will pass Id of the current item,

```typescript
// This function helps to update required the field
  const handleRequire = (id: string) => {
    function updateItem(fields: fieldProps[], id: string) {
      return fields.map((item) => {
        if (item.id === id) {
          item.required = !item.required;
        } else if (item.children) {
          item.children = updateItem(item.children, id);
        }
        return item;
      });
    }
    const newItems = updateItem(field, id);
    setField(newItems);
    setRequire(!inputRequire);
  };
};
```

In the above funtion we will use recursice `updateItem` function which takes two parameter, field hook and item id, and we will traverse through the orignal array object, once we id matches, we will update the current object field required, and finally returns the object. And the we will update our field hook using `setfield` function.

## Getting Started

### Step 1: Change the branch from main to task1

First task code is written in the task1 branch, to change the branch,

```
git checkout task1
```

### Step 2: Install Dependencies

Install all the dependencies

```
npm install
```

### Step 3: Start Development Server

Then start the development Server

```
npm start
```

After running the development server the site should be running on [https://localhost:3000](https://localhost:3000)

## :open_file_folder: What's inside?

A quick look at the folder structure of this project.

```
.
└── cosmoloud-hiring/
    ├── node_modules
    ├── public
    ├── src/
    │   ├── components/
    │   │   └── fields.tsx
    │   ├── app.test.tsx
    │   ├── app.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   └── setupTests.ts
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

## Tools Used

1. React.js
2. Raw CSS for styling

## Live Demo

App has been live on [https://como-hiring-task1.netlify.app](https://como-hiring-task1.netlify.app)
