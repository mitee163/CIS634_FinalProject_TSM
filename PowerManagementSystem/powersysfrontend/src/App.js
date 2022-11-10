import './App.css';
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';

function App() {
  return (
    <>
      <Navbar />
      <RegisterUser />
    </>
  );
}

export default App;




// #configuration
// spring.datasource.url=jdbc:mysql://localhost:3306/electricitymanagementsystem
// spring.datasource.username=root
// spring.datasource.password=
// spring.datasource.driver-class-name =com.mysql.cj.jdbc.Driver
// spring.jpa.hibernate.ddl-auto=update
// spring.jpa.show-sql= true
