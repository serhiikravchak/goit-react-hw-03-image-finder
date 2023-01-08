import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Icon
} from './SearchBar.styled';


export class Searchbar extends Component{
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  }

  reset = () => {
    this.setState({query:''})
  }

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Icon />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }

}


// export const Searchbar = ({ onSubmit }) => {
  
//   const handleSubmit = (values, { resetForm }) => {
//     onSubmit(values);
//     resetForm();
//   };

//   return (
// //     <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
//       <Header>
//         <SearchForm>
//           <SearchFormButton type="submit">
//             <Icon />
//           </SearchFormButton>
//           <SearchFormInput
//             type="text"
//             name="searchQuery"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </Header>
//     </Formik>
//   );
// };