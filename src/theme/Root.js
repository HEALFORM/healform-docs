import React from 'react';
import {ThemeProvider} from "@healform/liquid";

// Default implementation, that you can customize
export default function Root({children}) {
  return <>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </>;
}
