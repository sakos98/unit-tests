module.exports = (fullName) => {
  if (!fullName || typeof fullName !== 'string') {
    return 'Error';
  }

  const parts = fullName.split(' ');
  if (parts.length !== 2) {
    return 'Error';
  }

  const [firstName, lastName] = parts;
  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
    return 'Error'; 
  }

  const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${formattedFirstName} ${formattedLastName}`;
};
