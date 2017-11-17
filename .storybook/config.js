import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/questions');
}

configure(loadStories, module);
