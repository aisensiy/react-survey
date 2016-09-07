import newId from '../util/idGenerator';

export const QuestionDescriptions = [{
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

export const QuestionTypes = {
  SINGLE_LINE_TEXT: 'SINGLE_LINE_TEXT',
  MUTLI_LINE_TEXT: 'MUTLI_LINE_TEXT',
  MULTI_CHOICE: 'MULTI_CHOICE',
  CHECKBOXES: 'CHECKBOXES',
  DROPDOWN: 'DROPDOWN'
};

export const InitQuestions = {
  'MULTI_CHOICE': () => ({
    "_id": newId(),
    "type": "MULTI_CHOICE",
    "title": "Select a choice",
    "options": [
      {
        "_id": newId(),
        "content": "First choice"
      },
      {
        "_id": newId(),
        "content": "Second choice"
      },
      {
        "_id": newId(),
        "content": "Third choice"
      }
    ]
  }),
  'CHECKBOXES': () => ({
    "_id": newId(),
    "type": "CHECKBOXES",
    "title": "Check All That Apply",
    "options": [
      {
        "_id": newId(),
        "content": "First choice"
      },
      {
        "_id": newId(),
        "content": "Second choice"
      },
      {
        "_id": newId(),
        "content": "Third choice"
      }
    ]
  }),
  'SINGLE_LINE_TEXT': () => ({
    "_id": newId(),
    type: 'SINGLE_LINE_TEXT',
    title: 'Untitled',
    placeholder: ''
  }),
  'MUTLI_LINE_TEXT': () => ({
    "_id": newId(),
    type: 'MUTLI_LINE_TEXT',
    title: 'Untitled',
    placeholder: ''
  }),
  'DROPDOWN': () => ({
    "_id": newId(),
    "type": "DROPDOWN",
    "title": "Select a choice",
    "options": [
      {
        "_id": newId(),
        "content": "First choice"
      },
      {
        "_id": newId(),
        "content": "Second choice"
      },
      {
        "_id": newId(),
        "content": "Third choice"
      }
    ]
  }),
  'abc': () => ({
    "_id": newId(),
    type: 'MULTI_CHOICE',
    title: 'Evaluate the following statements',
    questions: [
      {
        _id: newId(),
        content: 'First Question'
      },
      {
        _id: newId(),
        content: 'Second Question'
      },
      {
        _id: newId(),
        content: 'Third Question'
      }],
    options: [
      {
        "_id": newId(),
        "content": "First choice"
      },
      {
        "_id": newId(),
        "content": "Second choice"
      },
      {
        "_id": newId(),
        "content": "Third choice"
      }
    ]
  })
};

