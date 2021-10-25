import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
}

export default TextButtons;