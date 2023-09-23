import ToDo from './Components/ToDo/To-do.jsx';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
export default class App extends React.Component {
  render() {
    return (
      // <SettingsProvider>
<>
        <Header />
       
      <ToDo />
      <Footer/>

      </>

    );
  }
}
