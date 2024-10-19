import { Children } from "react";

import React, { useState, useEffect  } from 'react';
export default function Header({ children,onClick,value}) {
    const [id, setId] = useState(value);
    return (
        
          <button data-value = {value} onClick={onClick}  >{children}</button>
        
      );    
}