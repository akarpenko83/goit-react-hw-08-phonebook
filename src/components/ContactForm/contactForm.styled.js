import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem 4rem;
  margin: 0 auto 2rem;
  /* margin-bottom: 2rem; */
  border-radius: 0.25rem;
  background-color: rgba(9, 158, 226, 255);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 3px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const FormGroup = styled.label`
  display: flex;
  padding-bottom: 2rem;
  flex-direction: column;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 18px;
`;
export const Button = styled.button`
  cursor: pointer;
  margin: 0 auto;
  width: 150px;
  padding: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 3px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
