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

* Global Add button to add Parent Field
    * Inside Parent and Children Field, we need,
        * Input text to save/edit name of a field
        * Select Element to select options from ["OBJECT", "STRING", "NUMBER", "BOOLEAN"].
        * A required Switch, which makes user mandatory to fill the input field, if kept empty shows invalid message
        * If the Option selected is "OBJECT", then a local add button is present which adds children to the parent.
        * Then finally there is a delete button which deletes that specific item.
* Also need to add few CSS rules like border and a hover function when user hovers the component, require switch, local add button and delete button is visible.
* Finally we need to add button which on clicked, console the object.

### Plan the Implementation

In order to implement the given challenge, I will be using,

* React
* Typescript
* Raw Styling CSS

We will be using two component, 

* Main Component
* Nested Component

### Break it Down

In our Main component, we will be creating a Card UI, and in Card's header, have Feature's name and a global add button.

#### Step 1


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