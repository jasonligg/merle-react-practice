## Setup

Spin up the api backend in dev mode. Defaults to localhost:3001.

```
$ cd backend
$ npm install
$ npm run dev
```

Deploy the react app dev server. Defaults to localhost:3000.

```
$ cd frontend
$ npm install
$ npm start
```

## API Reference

| URL           | VERB | DESCRIPTION                                          |
| ------------- | ---- | ---------------------------------------------------- |
| /             | GET  | hello world check                                    |
| /api/messages | GET  | show all messages                                    |
| /api/messages | POST | create a message, body should include alias and text |

## Target Features

We'll use one frontend view for all this widgets. The goal is to get through as many features. Any
css styling can be kept minimal, focus on the react.

### MessageList LVL_0

Create a basic `MessageList` component that renders all messages. It should display each message's
`alias`, `text`, and `postedAt` fields.

### MessageCreateForm LVL_0

Create a form that will create a new message. Give it a submit button.

### MessageCreateForm LVL_1

The form should not allow a user to submit an empty `alias` or empty `text`. Implement a frontend
validation to prevent this. Display some visual cue when they attempt this.

### MessageList LVL_1

Implement a refresh button for the `MessageList`.

### MessageCreateForm LVL_2

Successfully submitting the `MessageCreateForm` should refresh the `MessageList`.

### MessageCreateForm LVL_3

Prevent the user from submitting multiple messages at once. The submit button for
`MessageCreateForm` should disappear while waiting for a response from the backend.

### MessageList LVL3

Add pagination to the `MessageList`. Each page should be 10 messages long.

### MessageList LVL4 UP TO THIS

Make the page size dynamic. Use a dropdown with options for 10, 45, and 100.

### MessageList LVL5

Add a sort button for each of the `alias`, `text`, and `postedAt` columns. Clicking a sort button
should toggle the sort of that column between ascending and descending.

### MessageList LVL6

Add a text form above the message list. Submitting this form should filter `MessageList` and only
display messages where the text containts the submitted text.

### MessageList LVL7

When the user does a filter as in `MessageList LVL6`, bold the text they are matching within the
filtered messages.
