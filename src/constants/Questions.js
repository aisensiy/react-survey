import { v4 } from 'node-uuid';

export const QuestionTypes = [{
  text: 'Single Line Text',
  type: 'SINGLE_LINE_TEXT'
}, {
  text: 'Multiple Line Text',
  type: 'MUTLI_LINE_TEXT'
}, {
  text: 'Multiple Choice',
  type: 'MULTI_CHOICE'
}, {
  text: 'Checkboxes',
  type: 'CHECKBOXES'
}, {
  text: 'Dropdown',
  type: 'DROPDOWN'
}];

export const InitQuestions = {
  'MULTI_CHOICE': () => ({
    "_id": v4(),
    "type": "MULTI_CHOICE",
    "title": "Select a choice",
    "options": [
      {
        "_id": v4(),
        "content": "First choice"
      },
      {
        "_id": v4(),
        "content": "Second choice"
      },
      {
        "_id": v4(),
        "content": "Third choice"
      }
    ]
  }),
  'CHECKBOXES': () => ({
    "_id": v4(),
    "type": "CHECKBOXES",
    "title": "Check All That Apply",
    "options": [
      {
        "_id": v4(),
        "content": "First choice"
      },
      {
        "_id": v4(),
        "content": "Second choice"
      },
      {
        "_id": v4(),
        "content": "Third choice"
      }
    ]
  }),
  'SINGLE_LINE_TEXT': () => ({
    "_id": v4(),
    type: 'SINGLE_LINE_TEXT',
    title: 'Untitled',
    placeholder: ''
  }),
  'MUTLI_LINE_TEXT': () => ({
    "_id": v4(),
    type: 'MUTLI_LINE_TEXT',
    title: 'Untitled',
    placeholder: ''
  }),
  'DROPDOWN': () => ({
    "_id": v4(),
    "type": "DROPDOWN",
    "title": "Select a choice",
    "options": [
      {
        "_id": v4(),
        "content": "First choice"
      },
      {
        "_id": v4(),
        "content": "Second choice"
      },
      {
        "_id": v4(),
        "content": "Third choice"
      }
    ]
  }),
  'abc': () => ({
    "_id": v4(),
    type: 'MULTI_CHOICE',
    title: 'Evaluate the following statements',
    questions: [
      {
        _id: v4(),
        content: 'First Question'
      },
      {
        _id: v4(),
        content: 'Second Question'
      },
      {
        _id: v4(),
        content: 'Third Question'
      }],
    options: [
      {
        "_id": v4(),
        "content": "First choice"
      },
      {
        "_id": v4(),
        "content": "Second choice"
      },
      {
        "_id": v4(),
        "content": "Third choice"
      }
    ]
  })
};

