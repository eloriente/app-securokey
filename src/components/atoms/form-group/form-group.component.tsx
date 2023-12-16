import { FormGroupStyledComponent } from "./form-group.styled.component";

export const FormGroupComponent = ({children} : { children: React.ReactNode }): React.ReactElement => {
  return (
    <FormGroupStyledComponent>
      {children}
    </FormGroupStyledComponent>
  );
};