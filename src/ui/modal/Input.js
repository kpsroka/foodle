import React from 'react';

type InputProps = {|
  id: string,
  label: string,
  hint: string,
  defaultValue: string,
  valid: boolean,
  onValueChange: (string) => any,
|};

export default function Input(props:InputProps) {
  const color = props.valid ? "inherit" : "firebrick";
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
          style={{color, borderColor: color}}
          type="text" id={props.id} placeholder={props.hint} defaultValue={props.defaultValue}
          onChange={(event) => props.onValueChange(event.target.value)}/>
    </div>
  );
};
