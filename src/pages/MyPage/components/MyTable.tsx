   import React, { useEffect, useState } from 'react';
   import axios from 'axios';
   import Spinner from '../../../components/common/Spinner';

   const MyTable = () => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       axios.get('/user/tableData')
         .then(response => {
           setData(response.data);
           setIsLoading(false);
         })
         .catch(error => {
           setError(error.message);
           setIsLoading(false);
         });
     }, []);

     if (isLoading) {
       return <Spinner />;
     }

     if (error) {
       return <div>Error: {error}</div>;
     }

     return (
       <table>
         <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Role</th>
           </tr>
         </thead>
         <tbody>
           {data.map(item => (
             <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.role}</td>
             </tr>
           ))}
         </tbody>
       </table>
     );
   };

   export default MyTable;