import { Card, Col, Row } from "antd";
import { Component } from "react";
import './Employees.css';

class Employees extends Component {
    state = {
        employees: [],
    };

    fetchEmployees() {
        this.setState(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(result => this.setState({employees: result}));
        });
    }

    componentDidMount() {
        setTimeout(() => this.fetchEmployees(), 3000);
        
    }

    render() {
        const { employees } = this.state;

        if (employees.length === 0) {
            return (
                <div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            );
        }
        return(
            <div className="container">
            {employees.map((employee) => (
              <div className="ec-card">
                  <div className="col-auto">
                    <img
                      src={`https://avatars.dicebear.com/v2/avataaars/${employee.username}.svg?options[mood][]=happy`}
                      alt="Avatar"
                      style={{ width: 200, height: 200 }}
                    />
                  </div>
                  <div className="col">
                    <h2>{employee.name}</h2>
                    <p>
                      <strong>Email: </strong>
                      {employee.email}
                    </p>
                    <p>
                      <strong>Address: </strong>
                      {employee.address.city}, {employee.address.street}, {employee.address.suite}, 
                      {employee.address.zipcode},
                    </p>
                    <p>
                      <strong>Phone: </strong>
                      {employee.phone}
                    </p>
                    <p>
                      <strong>Website: </strong>
                      {employee.website}
                    </p>
                    <p>
                      <strong>Company: </strong>
                      {employee.company.name}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        );
    };
}

// <Row>
//             {employees.map((employee) => (
//                 <Col  key={employee.username}>
//                     <Card style={{ padding: 10, margin: '20px 0'}} cover={
//                         <div className="cardHeadImage">
//                         <img
//                           src={`https://avatars.dicebear.com/v2/avataaars/${employee.username}.svg?options[mood][]=happy`}
//                           alt="Avatar"
//                           style={{ width: 200, height: 200 }}
//                         />
//                       </div>
//                     }>
//                         <h2>{employee.name}</h2>
//                         <p>
//                             <strong>Email: </strong>
//                             {employee.email}
//                         </p>
//                         <p>
//                             <strong>Address: </strong>
//                             {employee.address.city}, {employee.address.street}, {employee.address.suite}, 
//                             {employee.address.zipcode}, {employee.address.geo.lat}, {employee.address.lng}
//                         </p>
//                         <p>
//                             <strong>Phone: </strong>
//                             {employee.phone}
//                         </p>

//                     </Card>
//                 </Col>
//             ))}
//         </Row>

export default Employees;