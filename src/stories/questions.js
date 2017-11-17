import React from 'react';

import { storiesOf } from '@storybook/react';

import { Formik } from 'formik';
import MultipleChoice from '../components/Survey/questions/Checkboxes';
import Dropdown from '../components/Survey/questions/Dropdown';
import SingleLineText from '../components/Survey/questions/SingleLineText';
import MultiLineText from '../components/Survey/questions/MultiLineText';
import MultiChoice from '../components/Survey/questions/MultiChoice';

storiesOf('Checkbox', module)
    .add('default', () => {
      return (
          <Formik>
            <MultipleChoice
                _id="abc"
                title="a multi choice question"
                options={
                  [{
                    _id: 'option1',
                    content: 'option 1'
                  }, {
                    _id: 'option2',
                    content: 'option 2'
                  }, {
                    _id: 'option3',
                    content: 'option 3'
                  }]
                }
            />
          </Formik>
      );
    });

storiesOf('Dropdown', module)
    .add('default', () => {
      return (
          <Formik>
            <Dropdown
                _id="abc"
                title="a multi choice question"
                options={
                  [{
                    _id: 'option1',
                    content: 'option 1'
                  }, {
                    _id: 'option2',
                    content: 'option 2'
                  }, {
                    _id: 'option3',
                    content: 'option 3'
                  }]
                }
            />
          </Formik>
      )
    });

storiesOf('Multi Choice', module)
    .add('default', () => {
      return (
          <Formik>
            <MultiChoice
                _id="abc"
                title="a multi choice question"
                options={
                  [{
                    _id: 'option1',
                    content: 'option 1'
                  }, {
                    _id: 'option2',
                    content: 'option 2'
                  }, {
                    _id: 'option3',
                    content: 'option 3'
                  }]
                }
            />
          </Formik>
      )
    });

storiesOf('SingleLineText', module)
    .add('default', () => {
      return (
          <Formik>
            <SingleLineText _id="abc" title="text line" placeholder="blabla" />
          </Formik>
      )
    });

storiesOf('MultiLineText', module)
    .add('default', () => {
      return (
          <Formik>
            <MultiLineText _id="abc" title="text line" placeholder="blabla" />
          </Formik>
      )
    })