import React, { useState } from 'react';
import './CustomerList.css'; // Import CSS file
import Layout from './../components/Layout/Layout';

function CustomerList() {
    // State for managing customer data
    const [customers, setCustomers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", lastInteraction: "2024-03-15" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", lastInteraction: "2024-03-14" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "456-789-0123", lastInteraction: "2024-03-13" }
    ]);

    // State for new customer input fields
    const [newCustomer, setNewCustomer] = useState({ id: null, name: '', email: '', phone: '', lastInteraction: '' });

    // State for filter criteria
    const [filterCriteria, setFilterCriteria] = useState('');

    // State for sorting criteria
    const [sortCriteria, setSortCriteria] = useState({ key: 'name', order: 'asc' });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    };

    // Function to add new customer or edit existing customer
    const addCustomer = () => {
        if (newCustomer.name.trim() !== '' && newCustomer.email.trim() !== '' && newCustomer.phone.trim() !== '' && newCustomer.lastInteraction.trim() !== '') {
            if (newCustomer.id === null) {
                // Generate a unique id for the new customer
                const newCustomerId = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
                
                // Add new customer with the generated id
                setCustomers([...customers, { id: newCustomerId, ...newCustomer }]);
            } else {
                // Edit existing customer
                const updatedCustomers = customers.map(customer =>
                    customer.id === newCustomer.id ? { ...newCustomer } : customer
                );
                setCustomers(updatedCustomers);
            }
            // Clear input fields after adding/editing customer
            setNewCustomer({ id: null, name: '', email: '', phone: '', lastInteraction: '' });
        }
    };

    // Function to delete a specific customer
    const deleteCustomer = (id) => {
        const updatedCustomers = customers.filter(customer => customer.id !== id);
        setCustomers(updatedCustomers);
    };

    // Function to populate input fields with customer data for editing
    const editCustomer = (id) => {
        const customerToEdit = customers.find(customer => customer.id === id);
        setNewCustomer(customerToEdit);
    };

    // Function to render customer table
    const renderCustomerTable = () => {
        // Apply filtering
        let filteredCustomers = customers;
        if (filterCriteria !== '') {
            filteredCustomers = customers.filter(customer =>
                customer.name.toLowerCase().includes(filterCriteria.toLowerCase()) ||
                customer.email.toLowerCase().includes(filterCriteria.toLowerCase()) ||
                customer.phone.toLowerCase().includes(filterCriteria.toLowerCase()) ||
                customer.lastInteraction.toLowerCase().includes(filterCriteria.toLowerCase())
            );
        }

        // Apply sorting
        let sortedCustomers = filteredCustomers.sort((a, b) => {
            if (sortCriteria.order === 'asc') {
                return a[sortCriteria.key] < b[sortCriteria.key] ? -1 : 1;
            } else {
                return a[sortCriteria.key] > b[sortCriteria.key] ? -1 : 1;
            }
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th onClick={() => setSortCriteria({ key: 'name', order: sortCriteria.order === 'asc' ? 'desc' : 'asc' })}>Name</th>
                        <th onClick={() => setSortCriteria({ key: 'email', order: sortCriteria.order === 'asc' ? 'desc' : 'asc' })}>Email</th>
                        <th onClick={() => setSortCriteria({ key: 'phone', order: sortCriteria.order === 'asc' ? 'desc' : 'asc' })}>Phone</th>
                        <th onClick={() => setSortCriteria({ key: 'lastInteraction', order: sortCriteria.order === 'asc' ? 'desc' : 'asc' })}>Last Interaction</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCustomers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.lastInteraction}</td>
                            <td>
                                <button onClick={() => editCustomer(customer.id)}>Edit</button>
                                <span style={{ margin: '0 5px' }}></span>
                                <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <Layout>
          <div className="customer-list">
            <h2>Add/Edit Customer</h2>
            <div className="add-customer">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newCustomer.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={newCustomer.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={newCustomer.phone}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Last Interaction"
                    name="lastInteraction"
                    value={newCustomer.lastInteraction}
                    onChange={handleInputChange}
                />
                <button onClick={addCustomer}>{newCustomer.id === null ? 'Add Customer' : 'Edit Customer'}</button>
            </div>
            <div className="filter-section">
                <h2>Filter Customers</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterCriteria}
                    onChange={(e) => setFilterCriteria(e.target.value)}
                />
            </div>
            <h2>Customer List</h2>
            {renderCustomerTable()}
           </div>
        </Layout>
        
    );
}

export default CustomerList;
