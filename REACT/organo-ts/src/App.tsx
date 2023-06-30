import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { IEmployee } from './shared/interface/IEmployee';


function App() {

  const teams = [
    {
      name: 'Development',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Frontend',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Backend',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Data Science',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '3FAE9F5'
    },
    {
      name: 'DevOps',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'QA',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ];  

  const [employees, setEmployees] = useState<IEmployee[]>([])

  const onNewEmployee = (employee: IEmployee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner imageUrl="/images/banner.png" alt='Organo Logo' />
      <Form onRegisterEmployee={employee => onNewEmployee(employee)} teams={teams.map(team => team.name)} />
      {teams.map(team => (
      <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(employee => employee.team === team.name)}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
