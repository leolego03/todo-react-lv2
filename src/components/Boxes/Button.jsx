import styled from "styled-components";

const Buttonediv = styled.div`
  display: flex;
  gap: 15px;
`;

const Donebutton = styled.button`
  border: 2px solid #8ac6d1; /* Clean and tidy color for "Done" button border */
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  background: none;
  color: #8ac6d1;
  font-weight: bold;
`;

const Cancelbutton = styled.button`
  border: 2px solid #b5a8a6; /* Clean and tidy color for "Cancel" button border */
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  background: none;
  color: #b5a8a6;
  font-weight: bold;
`;

const Deletebutton = styled.button`
  border: 2px solid #a05961; /* Clean and tidy color for "Delete" button border */
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  background: none;
  color: #a05961;
  font-weight: bold;
`;

export { Donebutton, Cancelbutton, Deletebutton, Buttonediv };
