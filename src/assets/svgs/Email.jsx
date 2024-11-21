import React from 'react';

const Email = ({ width = 20, height = 20, fill = 'black' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 4.2002L9 7.00019L13 4.2002'
        stroke={fill}
        stroke-width='1.2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z'
        stroke={fill}
        stroke-width='1.2'
      />
    </svg>
  );
};

export default Email;