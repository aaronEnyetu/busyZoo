import MaterialTable from 'material-table';
import React from 'react';
import { customers } from './data.js';

export default function MaterialTablePage() {
  return (
    <div>
      <MaterialTable columns={
        [
          { title: 'id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Location', field: 'location' }
        ]
      } data={customers} 
      title="Details About Customers"
      options={{  
        headerStyle: { 
          background: '#80a2e1',
          border: 'solid 3px rosybrown'
        },
        rowStyle: { 
          background: '#448984',
        }
      }
      }
      />
    </div>
  );
}