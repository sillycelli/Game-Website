import React, {useState, useEffect} from 'react';

const [accounts, setAccounts] = useState(false);
  useEffect(() => {
    getAccount();
  }, []);

function getAccount() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setAccounts(data);
      });
  }