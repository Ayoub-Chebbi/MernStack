import React from 'react'
import { useParams } from "react-router-dom";

const Text = () => {

    const {text} = useParams();
  return (
    <div>
        the word is : {text}
    </div>
  )
}

export default Text