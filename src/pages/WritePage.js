import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';

const WritePage = () => {
  return (
    <div>
      <Responsive>
        <Editor />
      </Responsive>
    </div>
  );
};

export default WritePage;
