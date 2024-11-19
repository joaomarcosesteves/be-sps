let users = [
    { name: "admin", email: "admin@spsgroup.com.br", type: "admin", password: "1234" },
  ];
  
  const getUsers = () => users;
  
  const addUser = (user) => {
    if (users.find((u) => u.email === user.email)) {
      throw new Error("Email already exists");
    }
    users.push(user);
  };
  
  const removeUser = (email) => {
    users = users.filter((user) => user.email !== email);
  };
  
  const updateUsers = (email, updatedData) => {
    const index = users.findIndex((user) => user.email === email);
    if (index === -1) throw new Error("User not found");
    users[index] = { ...users[index], ...updatedData };
  };
  
  const getUserByEmail = (email) => users.find((user) => user.email === email);
  
  module.exports = { getUsers, addUser, removeUser, updateUsers, getUserByEmail };
  