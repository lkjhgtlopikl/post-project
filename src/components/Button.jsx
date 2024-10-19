import { Children } from "react";

import React, { useState, useEffect } from 'react';
export default function Button({ text,id,onClick }) {
    return (

        <button data-value={id} onClick={onClick}  >{text}</button>

    );
}