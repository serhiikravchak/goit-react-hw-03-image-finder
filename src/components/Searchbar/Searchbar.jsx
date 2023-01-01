import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Icon
} from './SearchBar.styled';
import { Formik } from 'formik';


export const Searchbar = ({ onSubmit }) => {
  
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      <Header>
        <SearchForm>
          <SearchFormButton type="submit">
            <Icon />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    </Formik>
  );
};